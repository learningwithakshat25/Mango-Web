import React from 'react'

const Why = () => {
  return (
    <div className='w-full bg-[#F5F7EB]'>
        <div className='w-full h-full flex flex-row items-center justify-between container mx-auto p-5'>
                    <div className="left w-1/2 flex flex-col items-start justify-center gap-5">
                        <div className="heading flex flex-row items-center justify-center gap-1">
                            <img className='h-5' src="/leaf.png" alt="" />
                            <h1 className='text-xl font-semibold'>Why <span className='text-red-500'>Choose Us</span></h1>
                        </div>
                        <div className="sec-heading">
                        <h1 className='text-black font-bold text-3xl'>Nourish Your Body With</h1>
                        <h1 className='text-black font-bold text-3xl'>Pure <span className='text-[#3E7F51]'>Organic</span> <span className='text-red-500'>Goodness!</span></h1>
                        </div>
                        <p>Some studies suggest that organic foods may have higher levels of certain nutrients and antioxidants compared to conventionally grown foods. However, this can vary depending on factors like soil quality and growing conditions.</p>
                        <div className="bottom w-full flex flex-col flex-wrap text-lg gap-5 h-60">
                            <div className="card flex flex-col items-start justify-start gap-4 bg-white p-3 rounded-md">
                                <h1 className='font-semibold'>100% Organic</h1>
                                <p className='text-sm'>Our products are reputable organic.</p>
                            </div>
                            <div className="card flex flex-col items-start justify-start gap-4 bg-white p-3 rounded-md">
                                <h1 className='font-semibold'>Fresh Products</h1>
                                <p className='text-sm'>Our products are reputable organic.</p>
                            </div>
                            <div className="card flex flex-col items-start justify-start gap-4 bg-white p-3 rounded-md" bg-white p-2 rounded-md>
                                <h1 className='font-semibold'>BioDynamic Food</h1>
                                <p className='text-sm'>Our products are reputable organic.</p>
                            </div>
                            <div className="card flex flex-col items-start justify-start gap-4 bg-white p-3 rounded-md">
                                <h1 className='font-semibold'>Secured Payment</h1>
                                <p className='text-sm'>Our products are reputable organic.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right w-1/2 flex items-center justify-center">
                        <img src="/why-right.png" alt="" />
                    </div>
                </div>
    </div>
  )
}

export default Why