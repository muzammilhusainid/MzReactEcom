import React from 'react'
import { LuShoppingBasket } from "react-icons/lu";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='bg-black text-white flex justify-center'>
        <div className='flex flex-wrap justify-around gap-y-7 p-10 text-sm w-[1920px]'>
          <div className="logo w-full lg:w-1/4">
            <div className='flex flex-col gap-y-3'>
              <div className='text-[#ff4b2b] font-bold text-3xl flex items-center gap-3'>
                <LuShoppingBasket />
                <h1>Mz E-Com</h1>
              </div>
              <p className='text-justify'>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
              <div className="social text-white flex text-xl gap-7 mt-5">
                <div className="fb bg-gradient-to-l from-[#ff416c] to-[#ff4b2b] p-2 rounded-full">
                  <FaFacebookF />
                </div>
                <div className="insta bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] p-2 rounded-full">
                  <GrInstagram />
                </div>
                <div className="yt bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] p-2 rounded-full">
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
          <div className="quickLinks w-full lg:w-fit">
            <h1 className='font-semibold text-base'>QUICK LINKS</h1>
            <div className='flex flex-col gap-y-3 mt-5'>
              <h2>Privacy Policy</h2>
              <h2>Return Policy</h2>
              <h2>Term & Conditions</h2>
              <h2>Service & Warrenty</h2>
            </div>
          </div>
          <div className="important w-full lg:w-fit">
            <h1 className='font-bold text-base'>IMPORTANT</h1>
            <div className='flex flex-col gap-y-3 mt-5'>
              <h2>Home</h2>
              <h2>About Us</h2>
              <h2>Feedback</h2>
              <h2>Career</h2>
            </div>
          </div>
          <div className="contact w-full lg:w-fit">
            <h1 className='font-bold text-base'>CONTACT</h1>
            <div className='flex flex-col gap-y-3 mt-5'>
              <h2 className='flex items-center gap-x-2'><FaWhatsapp />+91-8896638315</h2>
              <h2 className='flex items-center gap-x-2'><IoCallOutline />+91-8115067010</h2>
              <h2 className='flex items-center gap-x-2'><FiMail />muzammilhusainid@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright text-xs text-center bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white py-3">
        &copy; Mz E-Com 2024-25 All rights reserved, Developed by Muzammil Husain
      </div>
    </>
  )
}

export default Footer