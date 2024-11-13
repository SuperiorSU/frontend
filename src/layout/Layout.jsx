import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/global/NavBar'
import Footer from '../components/global/Footer'

const Layout = () => {
  return (
    <>
        <NavBar/>
        <div className='container'>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout