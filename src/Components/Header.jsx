import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = ()=>{
    setToggle(!toggle);
  }

  return (
    <div className='w-full h-fit sticky top-0 backdrop-blur-xl z-40 bg-transparent p-4  '>
      <div className="child flex flex-row items-center justify-between container mx-auto text-sm font-medium" >

        <div className="left flex flex-row items-center justify-center">
          {/* <img src="/brand.png" alt="" /> */}
          <Link to='/'><h1 className='text-xl font-semibold cursor-pointer'>Aam'e Lucknow</h1>
          </Link>
        </div>
        <div className="mid">
          <ul className=' hidden md:flex flex-row items-center justify-center gap-14 font-semibold text-black text-md'>
            <li className='hover:text-green-700 cursor-pointer'>Shop</li>
            <Link to='/product'><li className='hover:text-green-700 cursor-pointer'>Product</li></Link>
            <li className='hover:text-green-700 cursor-pointer'>About Us</li>
            <li className='hover:text-green-700 cursor-pointer'>Contact Us</li>
          </ul>
        </div>
        {toggle ?  <div className="mid">
          <ul className='flex flex-col items-center justify-center gap-14 font-semibold text-black text-md'>
            <li className='hover:text-green-700 cursor-pointer'>Shop</li>
            <Link to='/product'><li className='hover:text-green-700 cursor-pointer'>Product</li></Link>
            <li className='hover:text-green-700 cursor-pointer'>About Us</li>
            <li className='hover:text-green-700 cursor-pointer'>Contact Us</li>
          </ul>
        </div> : '' }
        <div className="right flex flex-row items-center justify-center gap-10">
          <button className='bg-green-700 text-white rounded-md p-2 font-semibold hover:bg-green-600 cursor-pointer shadow shadow-black '>Purchase Now</button>
          <AiOutlineBars onClick={handleToggle} className='md:hidden text-2xl font-bold' />

        </div>
      </div>
    </div>
  )
}

export default Header

// bg-linear-to-r from-[#F37731] to-[#FDCC26]