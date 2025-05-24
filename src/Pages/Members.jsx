import React from 'react'

const Members = () => {
    return (
        <div className='w-full h-full flex flex-col items-start justify-center container mx-auto gap-5'>
                <div className="heading flex flex-row items-center justify-center gap-1">
                    <img className='h-5' src="/leaf.png" alt="" />
                    <h1 className='text-xl font-semibold'>Team <span className='text-red-500'>Members</span></h1>
                </div>
                <h1 className='text-black font-bold text-3xl'>We have <span className='text-[#3E7F51]'>Awesome Team</span> <span className='text-red-500'>Here To Help You!</span></h1>
                <div className="cards flex flex-row items-center justify-center gap-5 flex-wrap w-full">

                <div className="card flex flex-col items-center justify-center">
                    <img src="/member1.png" alt="" />
                    <div className="bottom flex flex-col items-center justify-center">
                        <h2 className='text-sm font-medium'>Senior Farmers</h2>
                        <h1 className='text-md font-semibold'>Manish Sharma</h1>
                    </div>
                </div>
                <div className="card flex flex-col items-center justify-center">
                    <img src="/member1.png" alt="" />
                    <div className="bottom flex flex-col items-center justify-center">
                        <h2 className='text-sm font-medium'>Senior Farmers</h2>
                        <h1 className='text-md font-semibold'>Manish Sharma</h1>
                    </div>
                </div>
                <div className="card flex flex-col items-center justify-center">
                    <img src="/member1.png" alt="" />
                    <div className="bottom flex flex-col items-center justify-center">
                        <h2 className='text-sm font-medium'>Senior Farmers</h2>
                        <h1 className='text-md font-semibold'>Manish Sharma</h1>
                    </div>
                </div>
                <div className="card flex flex-col items-center justify-center">
                    <img src="/member1.png" alt="" />
                    <div className="bottom flex flex-col items-center justify-center">
                        <h2 className='text-sm font-medium'>Senior Farmers</h2>
                        <h1 className='text-md font-semibold'>Manish Sharma</h1>
                    </div>
                </div>
                </div>
</div>
    )
}

export default Members