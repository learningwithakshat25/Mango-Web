import React from 'react'

const Count = () => {
  return (
    <div className='w-full h-full bg-green-700 container mx-auto p-4 rounded-md flex flex-row items-center justify-around'>
        <div className="card flex flex-row items-center justify-center gap-2">
            <img src="/product.png" alt="" />
            <div className="right text-white font-semibold text-xl">
                <h1>15663+</h1>
            <h1>Our Total Product </h1>
            </div>
        </div>
        <div className="card flex flex-row items-center justify-center gap-2">
            <img src="/member.png" alt="" />
            <div className="right text-white font-semibold text-xl">
                <h1>15663+</h1>
            <h1>Our Total Product </h1>
            </div>
        </div>
        <div className="card flex flex-row items-center justify-center gap-2">
            <img src="/satisfied-cust.png" alt="" />
            <div className="right text-white font-semibold text-xl">
                <h1>15663+</h1>
            <h1>Our Total Product </h1>
            </div>
        </div>
    </div>
  )
}

export default Count