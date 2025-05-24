import React from 'react'

const Types = () => {
    return (
        <div className='w-full bg-[#F5F7EB] p-5 '>
            <div className='w-full h-full flex flex-row items-start justify-between container mx-auto'>
                <div className="left flex flex-col items-start justify-start gap-5">
                    <div className="heading flex flex-row items-center justify-center gap-1">
                        <img className='h-5' src="/leaf.png" alt="" />
                        <h1 className='text-xl font-semibold'>Types of <span className='text-red-500'>Mangoes</span></h1>
                    </div>
                    <h1 className='text-black font-bold text-3xl'>Exploring The <span className='text-[#3E7F51]'>World Of</span> <span className='text-red-500'>Mangoes Varietes!</span></h1>
                    <div className="bottom w-full flex flex-row relative justify-center flex-wrap font-semibold text-lg gap-8">
                        <div className="card flex flex-col items-center justify-center gap-4 relative ">
                            <img className='h-60' src="/mango1.png" alt="" />
                            <h1 className='rounded-md bg-[#568F67] absolute top-52 p-2 text-white font-semibolf text-md'>Alphonso mangoes</h1>
                        </div>
                        <div className="card flex flex-col items-center justify-center gap-4 relative">
                            <img className='h-60' src="/mango2.png" alt="" />
                            <h1 className=' rounded-md bg-[#568F67] absolute top-52 p-2 text-white font-semibolf text-md'>Ataulfo mangoes</h1>
                        </div>
                        <div className="card flex flex-col items-center justify-center gap-4 relative">
                            <img className='h-60' src="/mango3.png" alt="" />
                            <h1 className=' rounded-md bg-[#568F67] absolute top-52 p-2 text-white font-semibolf text-md'>Keitt mangoes</h1>
                        </div>
                        <div className="card flex flex-col items-center justify-center gap-4 relative">
                            <img className='h-60' src="/mango4.png" alt="" />
                            <h1 className=' rounded-md bg-[#568F67] absolute top-52 p-2 text-white font-semibolf text-md'>Tommy Atkins mangoes</h1>
                        </div>
                        <div className="card flex flex-col items-center justifycentert gap-4 relative">
                            <img className='h-60' src="/mango5.png" alt="" />
                            <h1 className=' rounded-md bg-[#568F67] absolute top-52 p-2 text-white font-semibolf text-md'>kesar mangoes</h1>
                        </div>
                        <div className="card flex flex-col items-center justify-center gap-4 relative">
                            <img className='h-60' src="/mango6.png" alt="" />
                            <h1 className=' rounded-md bg-[#568F67] absolute top-52 p-2 text-white font-semibolf text-md'>neelum mangoes</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Types