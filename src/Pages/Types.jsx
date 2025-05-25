import React from 'react'

const Types = () => {
    return (
        <div className='w-full bg-[#F5F7EB] p-5 '>
            <div className='w-full h-full flex flex-col items-start justify-between container mx-auto gap-10'>
                <div className="left flex flex-col items-start justify-start gap-5">
                    <div className="heading w-full flex flex-row items-center md:items-start justify-center md:justify-start gap-1">
                        <img className='h-5' src="/leaf.png" alt="" />
                        <h1 className='text-xl font-semibold'>Types of <span className='text-red-500'>Mangoes</span></h1>
                    </div>
                    <h1 className='text-black font-bold md:text-3xl text-2xl text-center'>Exploring The <span className='text-[#3E7F51]'>World Of</span> <span className='text-red-500'>Mangoes Varietes!</span></h1>
                </div>
                    <div className="bottom w-full md:flex md:flex-row relative justify-center md:flex-wrap font-semibold text-lg  gap-14  grid grid-cols-2">
                        <div className="card flex flex-col items-center justify-center gap-4 relative ">
                            <img className='md:h-60' src="/mango1.png" alt="" />
                            <h1 className='rounded-md bg-[#568F67] absolute md:top-52 p-2 text-white font-semibolf md:text-md text-sm top-22 '>Alphonso mangoes</h1>
                        </div>
                        <div className="card flex flex-col items-center justify-center gap-4 relative">
                            <img className='md:h-60' src="/mango2.png" alt="" />
                            <h1 className=' rounded-md bg-[#568F67] absolute md:top-52 top-22 p-2 text-white font-semibolf md:text-md text-sm'>Ataulfo mangoes</h1>
                        </div>
                        <div className="card flex flex-col items-center justify-center gap-4 relative">
                            <img className='md:h-60' src="/mango3.png" alt="" />
                            <h1 className=' rounded-md bg-[#568F67] absolute md:top-52 top-22 p-2 text-white font-semibolf md:text-md text-sm'>Keitt mangoes</h1>
                        </div>
                        <div className="card flex flex-col items-center justify-center gap-4 relative">
                            <img className='md:h-60' src="/mango4.png" alt="" />
                            <h1 className=' rounded-md bg-[#568F67] absolute md:top-52 top-22 p-2 text-white font-semibolf md:text-md text-sm'>Tommy Atkins mangoes</h1>
                        </div>
                        <div className="card flex flex-col items-center justifycentert gap-4 relative">
                            <img className='md:h-60' src="/mango5.png" alt="" />
                            <h1 className=' rounded-md bg-[#568F67] absolute md:top-52 top-22 p-2 text-white font-semibolf md:text-md text-sm'>kesar angoes</h1>
                        </div>
                        <div className="card flex flex-col items-center justify-center gap-4 relative">
                            <img className='md:h-60' src="/mango6.png" alt="" />
                            <h1 className=' rounded-md bg-[#568F67] absolute md:top-52 top-22 p-2 text-white font-semibolf md:text-md text-sm'>neelum mangoes</h1>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Types