import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className='w-full h-full flex flex-col md:flex-row items-start md:justify-between justify-center container mx-auto gap-5 p-5'>
            <div className="left md:w-1/2 w-full flex flex-col items-start justify-center md:gap-5 gap-6 ">
                <div className="heading w-full flex flex-row md:items-start items-center md:justify-start justify-center gap-1">
                    <img className='h-5' src="/leaf.png" alt="" />
                    <h1 className='md:text-xl text-lg font-semibold'>About Us <span className='text-red-500'>Company</span></h1>
                </div>
                <h1 className='text-black font-bold md:text-3xl text-2xl md:text-start text-center'>Organic Integrity Durable <span className='text-[#3E7F51]'>Impact</span> <span className='text-red-500'>Frutin's Story</span></h1>
                <p>Some studies suggest that organic foods may have higher levels of certain nutrients and antioxidants compared to conventionally grown foods. However, this can vary depending on factors like soil quality and growing conditions.</p>
                <div className="bottom w-full flex flex-col md:flex-wrap font-semibold md:text-lg gap-5 md:h-40">
                    <div className="card flex flex-row items-start justify-start gap-4">
                        <img className='h-7  border-red-500 rounded-full p-1 border-2' src="/tick.png" alt="" />
                        <h1>100% Organic Product</h1>
                    </div>
                    <div className="card flex flex-row items-start justify-start gap-4">
                        <img className='h-7  border-red-500 rounded-full p-1 border-2' src="/tick.png" alt="" />
                        <h1>Always Fresh & Natural Foods</h1>
                    </div>
                    <div className="card flex flex-row items-start justify-start gap-4">
                        <img className='h-7  border-red-500 rounded-full p-1 border-2' src="/tick.png" alt="" />
                        <h1>Environmental Benefits</h1>
                    </div>
                    <div className="card flex flex-row items-start justify-start gap-4">
                        <img className='h-7  border-red-500 rounded-full p-1 border-2' src="/tick.png" alt="" />
                        <h1>No Synthetic Chemical</h1>
                    </div>
                    <div className="card flex flex-row items-start justify-start gap-4">
                        <img className='h-7  border-red-500 rounded-full p-1 border-2' src="/tick.png" alt="" />
                        <h1>Best Price</h1>
                    </div>
                </div>
                <button className='rounded-4xl bg-green-700 p-3 text-white md:text-md font-semibold flex flex-row items-center justify-center gap-2 shadow shadow-black hover:bg-green-600 cursor-pointer'>Discover More  <FaArrowRight />
                </button>
            </div>
            <div className="right md:w-1/2 flex items-center justify-center">
                <img src="/sec-second-right.png" alt="" />
            </div>
        </div>
    )
}

export default AboutUs