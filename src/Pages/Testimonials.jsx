import React from 'react'
import TestimonialsAPI from '../API/Testimonials.json';

const Testimonials = () => {
    return (

        <div className='w-full h-full'>
            <div className="main flex flex-col md:items-start items-center justify-center gap-5 p-5 container mx-auto">
                <div className="heading flex flex-row items-center justify-center gap-1">
                    <img className='h-5' src="/leaf.png" alt="" />
                    <h1 className='text-xl font-semibold text-red-500'>Testimonials</h1>
                </div>
                <h1 className='text-black font-bold md:text-3xl text-2xl text-center'>The Sweet <span className='text-[#3E7F51]'>Success Of</span> <span className='text-red-500'>Fresh Mango</span></h1>
                <div className="card w-full h-full grid md:grid-cols-4 grid-cols-1 gap-4">
                    {TestimonialsAPI.map((item, id) => {
                        return (
                            <>
                                <div key={id} className='md:w-72 md:h-72 p-3 rounded-2xl flex flex-col gap-1 items-center justify-start bg-amber-100'>
                                    <img className='object-contain h-24 w-24' src={item.img} alt="" />
                                    <h2 className='text-sm'>{item.description}</h2>
                                    <h3 className='font-semibold'>{item.name}</h3>
                                    <img className='w-full object-contain h-4 ' src={item.rating} alt="" />
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonials