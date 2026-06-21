import { useQuery } from '@tanstack/react-query'
import React, { use } from 'react'
import { Autchontex } from '../Home/LoginAndRegister/Context/AuthContext'
import axios from 'axios'


const MyParcel = () => {
  const { user } = use(Autchontex)

  // TenStak Quary
  const { data: Parcel = [],refetch } = useQuery({
    queryKey: ['myParcel', user?.email],
    queryFn: async () => {
      const result = await fetch(`http://localhost:5000/applications?email=${user.email}`)
      const data = await result.json()
      return data
    }
  })

  const handalOnDeelet = (id) => {
    axios.delete(`http://localhost:5000/applications/${id}`)
      .then(result => {
        if (result.status) {
          console.log(result)
          refetch()
        }
      })

      .catch(err => { console.log(err) });
  }


  return (
    <div className="p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">My Parcel</h1>

      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Parcel Type</th>
            <th>User</th>
            <th>Date</th>
            <th>Price (BDT)</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody>
          {Parcel.map((p, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{p.parcelType}</td>
              <td>{p.email}</td>
              <td>{new Date(p.createdAt || Date.now()).toLocaleString()}</td>
              <td>{p.price || 180}</td>

              <td>
                <button className="btn btn-xs btn-info mr-1">
                  View
                </button>
                <button onClick={() => handalOnDeelet(p._id)} className="btn btn-xs btn-error">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default MyParcel