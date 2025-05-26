import React from 'react'
import FAQAPI from '../API/FAQAPI.json';
import FAQExtender from '../Pages/FAQExtender';

const FAQ = () => {
  return (
    <div className='w-full h-full bg-[#F4F2EB] '>
        <div className="main flex flex-col gap-5 p-5 container mx-auto">
       <h1 className='text-black font-bold md:text-3xl text-2xl md:text-start text-center'>Frequently <span className='text-[#3E7F51]'>Asked</span> <span className='text-red-500'>Questions</span></h1>
       <div className="child w-full h-full flex flex-col items-center justify-center gap-5">
        {
            FAQAPI.map((item,id)=>{
                return (
                    <>
                <FAQExtender item={item} key={id}/>
                </>
                )
            })
        }
        </div>
        </div>
    </div>
  )
}

export default FAQ