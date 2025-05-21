import React from 'react'

const Header = () => {
  return ( 
    <div className='w-full h-fit sticky top-0 backdrop-blur-xl z-40 bg-transparent p-4  '>
        <div className="child flex flex-row items-center justify-between container mx-auto text-sm font-medium" >

      <div className="left">
        <h1>Aam'e Lucknow</h1>
    
      </div>
      <div className="mid">
        <ul className='flex flex-row items-center justify-center gap-14'>
            <li>Shop</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className="right">
        <button className='bg-[#30A330] text-white rounded-md py-1 px-2 '>Purchase Now</button>
      </div>
        </div>
    </div>
  )
}

export default Header

// bg-linear-to-r from-[#F37731] to-[#FDCC26]