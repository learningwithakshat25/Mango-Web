import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-full bg-[url("/hero-background.png")] bg-cover bg-no-repeat '>
            <img className='absolute z-30 -top-5 w-full' src="/hero-top-img.png" alt="" />
            <div className="child flex flex-row  justify-between container mx-auto">
            <div className="left">
                <img className='h-[600px]' src="/hero-left-img.png" alt="" />
            </div>
            <div className="mid flex flex-col w-full items-center justify-center py-32 h-full gap-4">
                {/* <h2 className='text-white font-medium text-lg'>Malihabad Mangoes: Where Tradition Meets Sweetness</h2> */}
                    <h1 className='text-6xl text-white font-semibold text-center'>From Our <span className='text-[#30A330] font-bold'>Trees</span> to Your Table</h1>
                    <h1 className='text-6xl text-white font-semibold text-center' ><span className='text-[#30A330] font-bold'>Fresh</span> Mangoes <span className='text-[#30A330] font-bold'>Delivered!</span></h1>
                    <p className='text-[#443402] font-semibold text-md text-center'>Experience the taste of sunshine with our premium-quality mangoes, packed with vitamins, natural sweetness, and juicy goodness. Fast delivery, premium packaging, and unbeatable freshness guaranteed!</p>
            </div>
            <div className="right">
                <img className='h-[350px] ' src="/hero-right-img.png" alt="" />
            </div>
            </div>


        </div>
    )
}

export default Hero