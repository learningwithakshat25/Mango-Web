import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import FAQ from '../Components/FAQ';
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <>
      <div className='w-full h-full grid md:grid-cols-2 grid-cols-1 container mx-auto p-5 gap-5 mt-16'>
        <div className="left flex flex-col gap-5 md:order-1 order-2 ">
        <div className="route flex flex-row items-center gap-2 md:text-lg text-md text-[#3E7F51] font-semibold" >
          <Link className='cursor-pointer' to='/'><IoIosHome /></Link>
          <h1> / Contact Us</h1>
        </div>
          <div className="heading flex flex-row items-center justify-start gap-1">
            <img className='h-5' src="/leaf.png" alt="" />
            <h1 className='text-3xl font-semibold text-red-500'>Contact Us</h1>
          </div>
          <h2 className='text-lg font-semibold'>Have Questions about are mangoes or want to place a bulk order? Drop us a message-we'd love to chat with you!</h2>
          <p className='text-lg font-semibold'><span className='text-red-500'>Note:</span> We are currenty offering only in Lucknow both online Payment and Cash on Delivery is available. </p>
          <div className="main-card flex md:flex-row flex-col gap-5">

            <div className="info flex flex-col items-start justify-start gap-5">
              <div className="location flex flex-row items-center justify-start gap-4 p-2 shadow shadow-black w-62 rounded-2xl">
                <FaLocationDot className='text-red-800 text-3xl' />
                <div className="right flex flex-col items-start justify-start gap-1 ">
                  <h1 className='font-semibold'>Location</h1>
                  <p>Location,Location,India</p>
                </div>
              </div>
              <div className="contact flex flex-row items-center justify-start gap-4 p-2 shadow shadow-black w-62 rounded-2xl">
                <FaPhoneAlt className='text-3xl text-blue-900' />
                <div className="right flex flex-col items-start justify-start gap-1 ">
                  <h1 className='font-semibold'>Call Us</h1>
                  <p>91+ 1234567890</p>
                </div>
              </div>
              <div className="timming flex flex-row items-center justify-start gap-4 p-2 shadow shadow-black w-62 rounded-2xl">
                <IoMdTime className='text-3xl text-blue-700' />
                <div className="right flex flex-col items-start justify-start gap-1 ">
                  <h1 className='font-semibold'>Opening - Closing</h1>
                  <p>8am - 10pm</p>
                </div>
              </div>
            </div>
            <div className="cards items-start justify-start flex flex-col gap-5">
              <div className="whatsapp flex flex-row items-center justifystart gap-4 p-2 shadow shadow-black w-62 rounded-2xl">
                <FaWhatsapp className='text-3xl text-green-600' />
                <div className="right flex flex-col items-start justify-start gap-1 ">
                  <h1 className='font-semibold'>Whatsapp Us</h1>
                  <p>Quick help on whatsapp</p>
                </div>
              </div>
              <div className="email flex flex-row items-center justify-start gap-2 p-2 shadow shadow-black w-62 rounded-2xl">
                <MdEmail className='text-3xl text-yellow-600' />
                <div className="right flex flex-col items-start justify-start gap-1 md:text-md ">
                  <h1 className='font-semibold'>Email Us</h1>
                  <p>Quick help on Email</p>
                </div>

              </div>
              <div className="insta flex flex-row items-center justify-start gap-2 p-2 shadow shadow-black  w-62 rounded-2xl ">
                <FaInstagram className='text-3xl text-pink-800' />
                <div className="right flex flex-col items-start justify-start gap-1">
                  <h1 className='font-semibold'>Instagram</h1>
                  <p>Quick help on Instagram</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="right order-1 md:order-2 flex items-center justify-center w-full h-full">
          <img className='rounded-2xl w-96 h-96' src="/contact-right.jpg" alt="" />
        </div>
      </div>
      <FAQ />
    </>
  )
}

export default Contact