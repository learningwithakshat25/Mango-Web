import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='w-full h-full bg-[url("/hero-background.png")] bg-cover bg-no-repeat rounded-bl-full rounded-br-full '>
            {/* <img className='sticky z-30 -top-5 w-full h-fit' src="/hero-top-img.png" alt="" /> */}
            <div className="child flex flex-row items-center  justify-between container mx-auto w-fit">
                <div className="left">
                    <img className='h-full' src="/hero-left-img.png" alt="" />
                </div>
                <div className="mid flex flex-col w-full items-center justify-center h-full gap-4">
                    {/* <h2 className='text-white font-medium text-lg'>Malihabad Mangoes: Where Tradition Meets Sweetness</h2> */}
                    <h1 className='text-6xl text-white font-semibold text-center'>From Our <span className='text-green-700 font-bold'>Trees</span> to Your Table</h1>
                    <h1 className='text-6xl text-white font-semibold text-center' ><span className='text-green-700 font-bold'>Fresh</span> Mangoes <span className='text-green-700 font-bold'>Delivered!</span></h1>
                    <p className='text-[#443402] font-semibold text-md text-center'>Experience the taste of sunshine with our premium-quality mangoes, packed with vitamins, natural sweetness, and juicy goodness. Fast delivery, premium packaging, and unbeatable freshness guaranteed!</p>
                    <Link to='/product'>
                    <button className='rounded-4xl bg-green-700 p-3 text-white text-xl font-semibold  flex flex-row items-center justify-center gap-2 shadow shadow-black hover:scale-110 cursor-pointer'>Order Now  <FaArrowRight />
                    </button>
                    </Link>
                    <div className="right-bottom flex flex-row items-center justify-around w-full mt-10">
                        <div className="left flex flex-row items-center justify-center gap-2">
                            <div className="upper">
                                <img className='h-15' src="/pickup.png" alt="" />
                            </div>
                            <div className="bottom flex flex-col items-start justify-center gap-1 text-white font-medium">
                                <h2>Pickup Stand</h2>
                                <p>Pickup to deliver within 30 min</p>
                            </div>
                        </div>
                        <div className="right flex flex-row items-center justify-center gap-2">
                            <div className="upper">
                                <img className='h-15' src="/delivery.png" alt="" />
                            </div>
                            <div className="bottom flex flex-col items-start justify-center gap-1 text-white font-medium">
                                <h2>Fast Delivery</h2>
                                <p>Promise to deliver in 30 Mins</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img className='h-full ' src="/hero-right-img.png" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Hero