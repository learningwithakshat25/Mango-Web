import React from 'react'

const Count = () => {
    return (
        <div className='w-full h-full bg-green-700 container mx-auto md:p-4 rounded-md flex md:flex-row flex-col items-center md:justify-around justify-center gap-5 p-5'>
            <div className="card flex md:flex-row flex-col items-center justify-center gap-2">
                <img src="/product.png" alt="" />
                <div className="right text-white font-semibold md:text-xl flex flex-col items-center justify-center">
                    <h1>15663+</h1>
                    <h1>Our Total Product </h1>
                </div>
            </div>
            <div className="card flex md:flex-row flex-col items-center justify-center gap-2">
                <img src="/member.png" alt="" />
                <div className="right text-white font-semibold md:text-xl flex flex-col items-center justify-center">
                    <h1>15663+</h1>
                    <h1>Our Total Product </h1>
                </div>
            </div>
            <div className="card flex md:flex-row flex-col items-center justify-center gap-2">
                <img src="/satisfied-cust.png" alt="" />
                <div className="right text-white font-semibold md:text-xl flex flex-col items-center justify-center">
                    <h1>15663+</h1>
                    <h1>Our Total Product </h1>
                </div>
            </div>
        </div>
    )
}

export default Count