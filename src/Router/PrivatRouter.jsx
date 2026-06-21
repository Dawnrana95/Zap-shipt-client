import React, { use } from 'react'
import { Autchontex } from '../Home/LoginAndRegister/Context/AuthContext'
import { Navigate } from 'react-router'

const PrivatRouter = ({ children }) => {

  const { loding, user } = use(Autchontex)

  if (loding) {
    return <span className="loading loading-spinner loading-xs"></span>
  }

  if (!user) {
    return <Navigate to="/login"> </Navigate> 
    }

  return children;
}

export default PrivatRouter