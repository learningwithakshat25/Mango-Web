import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-full bg-green-700 text-white p-5'>
      <div className="container mx-auto flex flex-col items-center justify-around w-full h-full gap-5">
        <div className="flex flex-row items-center justify-around w-full h-full">

        <div className="brand flex flex-row items-center justify-center font-semibold">
          <img className='h-16' src="/brand-logo.png" alt="" />
          <h1>Aam'e Malihabad</h1>
        </div>
        <ul className=" flex flex-row gap-10">
          <h1>About Us</h1>
          <h1>Product</h1>
          <h1>Gallery</h1>
          <h1>Contact Us</h1>
        </ul>
        </div>
      <div className="middle w-full h-full flex flex-col items-center justify-center">
        <div className="info flex flex-row items-start justify-start gap-5">
          <div className="location flex flex-row items-center justify-start gap-4 p-2 w-62 rounded-2xl">
            <FaLocationDot className='text-red-800 text-3xl bg-white p-1 rounded-md' />
            <div className="right flex flex-col items-start justify-start gap-1 ">
              <p>Location,Location,India</p>
            </div>
          </div>
          <div className="contact flex flex-row items-center justify-start gap-4 p-2 w-62 rounded-2xl">
            <FaPhoneAlt className='text-3xl text-blue-900 bg-white p-1 rounded-md' />
            <div className="right flex flex-col items-start justify-start gap-1 ">
              <p>91+ 1234567890</p>
            </div>
          </div>
          <div className="timming flex flex-row items-center justify-start gap-4 p-2 w-62 rounded-2xl">
            <IoMdTime className='text-3xl text-blue-700 bg-white p-1 rounded-md' />
            <div className="right flex flex-col items-start justify-start gap-1 ">
              <h1 className='font-semibold'>Opening - Closing</h1>
              <p>8am - 10pm</p>
            </div>
          </div>
        </div>
        <div className="cards items-start justify-start flex flex-row gap-5">
          <div className="whatsapp flex flex-row items-center justifystart gap-4 p-2 w-62 rounded-2xl">
            <FaWhatsapp className='text-3xl text-green-600 bg-white p-1 rounded-md' />
            <div className="right flex flex-col items-start justify-start gap-1 ">
              <h1 className='font-semibold'>Whatsapp</h1>
            </div>
          </div>
          <div className="email flex flex-row items-center justify-start gap-2 p-2 w-62 rounded-2xl">
            <MdEmail className='text-3xl text-yellow-600 bg-white p-1 rounded-md' />
            <div className="right flex flex-col items-start justify-start gap-1 md:text-md ">
              <h1 className='font-semibold'>Email</h1>
            </div>

          </div>
          <div className="insta flex flex-row items-center justify-start gap-2 p-2  w-62 rounded-2xl ">
            <FaInstagram className='text-3xl text-pink-800 bg-white p-1 rounded-md' />
            <div className="right flex flex-col items-start justify-start gap-1">
              <h1 className='font-semibold'>Instagram</h1>
            </div>
          </div>

        </div>
      </div>
      <div className="bottom font-medium flex flex-row items-center justify-center gap-2">
        <FaRegCopyright />
        <h1>2025 Aam'e Malihabad</h1>
      </div>

    </div>
      </div>

  )
}

export default Footer