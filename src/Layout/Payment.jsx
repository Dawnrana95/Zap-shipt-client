import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import PaymentForm from './PaymentForm'



const stripePromise = loadStripe('pk_test_51TkGhM2cECT7uyj9Ao82DetNDHiu3ChNe2PNensW7ifY36lsCx7zb0ymLd4rIFaf2iG49vyWoolhC2VCg43SlKeC00U407ClCv')

const Payment = () => {
    return (

        <Elements stripe={stripePromise}>
            <PaymentForm>
            </PaymentForm>
        </Elements>

    )
}

export default Payment