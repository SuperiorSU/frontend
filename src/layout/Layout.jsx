import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/global/NavBar'
import Footer from '../components/global/Footer'

const Layout = () => {
  return (
    <div  className='overflow-x-hidden scroll-smooth'>
      <NavBar />
      <div className='flex justify-center '>
        <div className=''>
          <Outlet />
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Layout