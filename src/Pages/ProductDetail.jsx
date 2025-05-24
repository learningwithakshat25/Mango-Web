import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductData from '../API/Products.json';
import { FaRupeeSign } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";



const ProductDetail = () => {
  const [Modal, setModal] = useState(false);
  const { id } = useParams();
  const ProductData1 = ProductData.find(u => u.id === parseInt(id));

  const toggle = ()=>{
    setModal(!Modal);
    console.log('click');
    
  }

  return (
    <>
      <div className='w-full container mx-auto '>
        <div className="route flex flex-row items-center gap-2 text-lg text-[#3E7F51] font-semibold" >
          <Link className='cursor-pointer' to='/'><IoIosHome /></Link>
          <Link className='cursor-pointer' to='/product'> / Product</Link>
          <h1> / About-Product</h1>
        </div>
        <div className="details flex flex-row justify-center p-5">
          <div onClick={toggle} className="left w-1/2 p-5">
            <img className='h-full w-full' src={ProductData1.img} alt="" />
          </div>
          <div className="right w-1/2 h-full p-5 flex flex-col gap-5">
            <p className='text-lg font-medium'>{ProductData1.desc}</p>
            <h2 className='text-2xl font-semibold flex flex-row gap-2 items-center text-red-500'><FaRupeeSign /> {ProductData1.price}</h2>
            <button className='rounded-2xl bg-green-700 p-3 text-white text-lg font-semibold flex flex-row items-center justify-center gap-2 shadow shadow-black hover:bg-green-600 cursor-pointer w-fit'>Buy Now <FaShoppingCart />
        </button>
          </div>
           {/* {toggle && 
          <h1>hlw</h1>
          } */}

      </div>
            </div >
  </>
  )
}

export default ProductDetail