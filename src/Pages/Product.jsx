import React from 'react'
import ProductData from '../API/Products.json';
import { Link, NavLink } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";


const Product = () => {
  return (
    <div className='w-full container mx-auto'>
       <div className="route flex flex-row items-center gap-2 text-lg text-[#3E7F51] font-semibold" >
                <Link className='cursor-pointer' to='/'><IoIosHome /></Link>
                <h1> / Product</h1>
              </div>
        <div className="cards flex flex-col items-center gap-10">
        <h1 className='text-black font-bold text-3xl'>Mangoes <span className='text-red-500'>Categories</span></h1>

        <div className='w-full h-full flex flex-row items-start justify-center flex-wrap gap-10'>
        {
          ProductData.map((item, index)=>{
            return <>
                <NavLink to={`/product/${item.id}`}>
                <div key={index} className='flex items-start justify-center gap-2 flex-col cursor-pointer hover:scale-105'>
                    <img src={item.img} alt="" />
                    <h1>{item.name}</h1>
                    <h1>{item.price}</h1>
                </div>
                </NavLink>
                </>
            })
          }
          </div>
        </div>
    </div>
  )
}

export default Product