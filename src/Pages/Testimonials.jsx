import React from 'react'

const Testimonials = () => {
    return (
        <div className='w-full h-full flex flex-col items-start justify-center container mx-auto gap-5'>
            <div className="heading flex flex-row items-center justify-center gap-1">
                <img className='h-5' src="/leaf.png" alt="" />
                <h1 className='text-xl font-semibold text-red-500'>Testimonials</h1>
            </div>
            <h1 className='text-black font-bold text-3xl'>The Sweet <span className='text-[#3E7F51]'>Success Of</span> <span className='text-red-500'>Fresh Mango</span></h1>
            <div className="card flex flex-row items-center justify-center rounded-md">
                <img className='h-60 bg-cover' src="/testimonials.png" alt="" />
                <div className="right w-1/2 bg-[#F5F7EB] p-5 h-60 flex flex-col items-start justify-center gap-3 rounded-r-md rounded-rb">
                    <p className='font-normal text-sm'>“Fresh Food farming practices work in harmony with nature. By avoiding synthetic chemicals, we help protect beneficial insects, birds, and other wildlife that are vital to a balanced ecosystem. Organic foods help to be fit.”</p>
                    <div className="bottom flex flex-col items-start justify-center gap-2">
                        <img className='bg-cover' src="/feedback.png" alt="" />
                        <h1 className='font-semibold'>Manish Sharma</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials