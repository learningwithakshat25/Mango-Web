import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <div className='w-full fixed z-50 top-0 backdrop-blur-xl bg-transparent  '>
        <div className="child flex flex-row items-center justify-between container mx-auto text-sm font-medium px-5" >

          <div className="left brand flex flex-row items-center justify-center">
            <img className='h-20 object-contain' src="/brand-logo.png" alt="" />
            <Link to='/'><h1 className='brand text-lg  md:text-xl font-medium cursor-pointer'>Aam'e Malihabad</h1>
            </Link>
          </div>
          <div className="mid">
            <ul className=' hidden md:flex flex-row items-center justify-center gap-14 font-semibold text-black text-md'>
              <Link to='/shop'><li className='hover:text-green-700 cursor-pointer'>Shop</li>
              </Link>
              <Link to='/product'><li className='hover:text-green-700 cursor-pointer'>Product</li></Link>
              <li className='hover:text-green-700 cursor-pointer'>About Us</li>
             <Link to='/contact'> <li className='hover:text-green-700 cursor-pointer'>Contact Us</li></Link>
            </ul>
          </div>

          <div className=" right md:flex flex-row items-center justify-center gap-10">
            <button className='hidden md:flex bg-green-700 text-white rounded-md p-2 font-semibold hover:bg-green-600 cursor-pointer shadow shadow-black '>Purchase Now</button>
            <AiOutlineBars onClick={handleToggle} className='md:hidden text-2xl font-bold' />

          </div>
        </div>
      </div>
      {toggle ? <div className="mid">
        <ul className='fixed inset-0 z-50 bg-transparent backdrop-blur-2xl top-14 flex flex-col items-center justify-center md:gap-14 gap-8 rounded-bl-4xl shadow rounded-br-4xl font-semibold text-amber-950 text-md w-full h-fit p-5'>
          <li onClick={handleToggle} className='hover:text-green-700 cursor-pointer'>Shop</li>
          <Link to='/product'><li onClick={handleToggle} className='hover:text-green-700 cursor-pointer'>Product</li></Link>
          <li onClick={handleToggle} className='hover:text-green-700 cursor-pointer'>About Us</li>
          <li onClick={handleToggle} className='hover:text-green-700 cursor-pointer'>Contact Us</li>
        </ul>
      </div> : ''}
    </>
  )
}

export default Header

