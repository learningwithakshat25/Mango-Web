import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <Header/>
    <div className="main max-w-screen max-h-screen flex flex-col gap-15">
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default AppLayout