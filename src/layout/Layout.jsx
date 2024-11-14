import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/global/NavBar'
import Footer from '../components/global/Footer'

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className='flex justify-center overflow-x-hidden'>
        <div className=''>
          <Outlet />
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default Layout