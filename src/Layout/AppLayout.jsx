import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <Header/>
    <div className="main flex flex-col gap-10">
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default AppLayout