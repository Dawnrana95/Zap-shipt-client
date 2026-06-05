import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

const Root = () => {
  return (
    <div>
        <div className='my-3.5 bg-[#FFFFFF]'><Navbar></Navbar></div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root