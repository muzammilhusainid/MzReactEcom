import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";

const Track = () => {
  return (
    <div className='trackSection py-5 mt-5'>
        <div className="trackArea flex justify-center flex-wrap lg:gap-8 text-sm lg:text-base">
            <div className="trackCard1 h-auto w-1/2 lg:w-1/5 py-3 lg:py-5 rounded-lg flex justify-center hover:bg-none hover:text-[#ff4b2b] hover:border-2 hover:border-[#ff4b2b] items-center gap-2 border-2 bg-gradient-to-r from-[#ff416c] to-[#bb0584] text-white border-white">
                <div className="trackImg">
                   <LiaShippingFastSolid className='text-5xl'/>
                </div>
                <div className="trackTitle ms-3">
                    <h1 className='text-lg'>Fast & Free</h1>
                    <p>Home Delivery</p>
                </div>
            </div>
            <div className="trackCard1 h-auto w-1/2 py-3 lg:w-1/5 lg:py-5 rounded-lg flex justify-center hover:bg-none hover:text-[#ff4b2b] hover:border-2 hover:border-[#ff4b2b] items-center gap-2 border-2 bg-gradient-to-r from-[#41c3ff] to-[#2677f1] text-white border-white">
                <div className="trackImg">
                   <GiReturnArrow className='text-4xl'/>
                </div>
                <div className="trackTitle ms-3">
                    <h1 className='text-lg'>Our Easy To</h1>
                    <p>Return Policy</p>
                </div>
            </div>
            <div className="trackCard1 h-auto w-1/2 py-3 lg:w-1/5 lg:py-5 rounded-lg flex justify-center hover:bg-none hover:text-[#ff4b2b] hover:border-2 hover:border-[#ff4b2b] items-center gap-2 border-2  bg-gradient-to-r from-[#ff4b2b] to-[#f8920bf3] text-white border-white">
                <div className="trackImg">
                   <BiSupport className='text-5xl'/>
                </div>
                <div className="trackTitle ms-3">
                    <h1 className='text-lg'>Help & Support</h1>
                    <p>Available 24x7</p>
                </div>
            </div>
            <div className="trackCard1 h-auto w-1/2 py-3 lg:w-1/5 lg:py-5 rounded-lg flex justify-center hover:bg-none hover:text-[#ff4b2b] hover:border-2 hover:border-[#ff4b2b] items-center gap-2 border-2  bg-gradient-to-r from-[#0debc6] to-[#16af96] text-white border-white">
                <div className="trackImg">
                   <GiTakeMyMoney className='text-5xl'/>
                </div>
                <div className="trackTitle ms-3">
                    <h1 className='text-lg'>CoD Mode</h1>
                    <p>Cash on Delivery</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Track