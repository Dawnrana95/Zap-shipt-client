import { useQuery } from '@tanstack/react-query'
import React, { use } from 'react'
import { Autchontex } from '../Home/LoginAndRegister/Context/AuthContext'

const PaymentHistory = () => {
    const {user} = use(Autchontex)

    // Fetch to Tenstack Quary // 
    const {data: Parcel=[]} = useQuery({
        queryKey: ['parcelHostore', user?.email],
        queryFn: async () => {
            const result = await fetch(`http://localhost:5000/paymentstatas?email=${user.email}`)
            const data = await result.json()
            return data
        }
    })
    console.log(Parcel)
    
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Payment History</h1>
 
            <div className="overflow-x-auto bg-white rounded-xl shadow">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction ID</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Parcel.map((payment, idx) => (
                            <tr key={payment._id}>
                                <td>{idx + 1}</td>
                                <td className="font-mono text-xs">
                                    {payment.transactionId?.slice(0, 20)}...
                                </td>
                                <td>{payment.email}</td>
                                <td className="font-semibold">৳{payment.amount}</td>
                                <td className="capitalize">
                                    {payment.paymentMethod?.[0] || 'Card'}
                                </td>
                                <td>
                                    {new Date(payment.paidAt_string).toLocaleString()}
                                </td>
                                <td>
                                    <span className="badge badge-success text-white">
                                        Paid
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
 
                {/* Total */}
                <div className="flex justify-between items-center px-4 py-3 border-t">
                    <span className="text-gray-500 text-sm">
                        {Parcel.length} transactions
                    </span>
                    
                </div>
            </div>
        </div>
    )
}

export default PaymentHistory