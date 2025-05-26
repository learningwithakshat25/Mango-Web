import React from 'react'
import { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const FAQExtender = (props) => {
    const [toggle, settoggle] = useState(false);
    const handleToggle = () => {
        settoggle(!toggle);
    }

    return (
        <>
            <div onClick={handleToggle} className='md:w-[700px] w-full p-5 h-fit rounded-xl bg-white flex  cursor-pointer flex-col items-start justify-start gap-3 hover:bg-gray-50'>
                <div className="heading flex flex-row items-center justify-between w-full h-full">
                    <h1 className='text-black md:text-xl text-md font-medium' key={props.id}>{props.item.heading}</h1>
                    {toggle ? <IoIosArrowDown className='text-xl font-semibold' /> : <IoIosArrowUp className='text-xl font-semibold' />}
                </div>
                {toggle ? <div className='w-full h-fit pt-5 text-gray-700 font-medium border-t border-green-700'>
                    <h2>{props.item.answer}</h2> </div> : ''
                }
            </div>
        </>
    )
}

export default FAQExtender