import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { use, useState } from 'react'
import { useParams } from 'react-router';
import { Autchontex } from '../Home/LoginAndRegister/Context/AuthContext';

const PaymentForm = () => {
    const [error, setError] = useState('')
    const { id } = useParams()  //Parcel Id
    const {user} = use(Autchontex)
    const email= user.email

    // Current parcel
    const { data: Crrrentparcel = {} } = useQuery({
        queryKey: ['parcel', id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/applications/${id}`)
            return res.data
        }
    })
    const amount = Crrrentparcel.price;

    // import stripr
    const stripe = useStripe();
    const elements = useElements();


    const handalOnsubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card, })
        if (error) {
            setError(error.message)
        }
        else {
            setError('')
            console.log('PaymentMethod', paymentMethod)
        }

        //Creat Payment secter //
        const res = await axios.post('http://localhost:5000/create-payment-intent', { amount, id })
        const clientSecret = res.data.clientSecret;

        // confitm Payment //
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: { name: 'Asif Rana' }
            }
        })
        
        if (result.error) {
            console.log(result.error.message)
        }
        else {
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Payment succeede')
                console.log(result)

                // Create payment hostory
                const paymentData = {
                    parcelid: id,
                    email,
                    amount,
                    paymentMethod : result.paymentIntent.payment_method_types,
                    transactionId: result.paymentIntent.id,
                }
                const paymentResponse = await axios.post('http://localhost:5000/paymentstatas',paymentData)
                if(paymentResponse.data.insertedId){
                    console.log('Payment succesfull')
                }
            }
        }
    }



    return (
        <div>
            <form onSubmit={handalOnsubmit} className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">

                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">💳 Payment</h2>

                <div className="border border-gray-300 rounded-lg p-4 mb-6 bg-gray-50 focus-within:border-blue-500 transition-all">
                    <label className="text-sm text-gray-500 mb-2 block">Card Details</label>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#374151',
                                    '::placeholder': { color: '#9CA3AF' },
                                },
                            },
                        }}
                    />
                </div>

                <button type="submit" disabled={!stripe} className="btn btn-primary w-full text-white text-lg rounded-xl">
                    Pay Now 🚀${amount}
                </button>
                {
                    error && <p className='text-red-600 text-center'>{error}</p>
                }

            </form>
        </div>
    )
}

export default PaymentForm