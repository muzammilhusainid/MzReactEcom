import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import heroPic1 from '../../assets/images/heroPic1.jpg'
import heroPic2 from "../../assets/images/heroPic2.jpg"
import heroPic3 from "../../assets/images/heroPic3.jpg"

const HeroSection = () => {
  const heroPic = [heroPic1, heroPic2, heroPic3]


  const [index, setIndex] = useState(0)
  const changePic = (direction) => {
    if (direction === "right") {
      setIndex(index === heroPic.length - 1 ? 0 : index + 1)
    }

    if (direction === "left") {
      setIndex(index === 0 ? heroPic.length - 1 : index - 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changePic("right")
    }, 2500)

    return () => { clearInterval(interval) }
  }, [index])


  return (
    <div>
      <div className='flex items-center relative'>
        <button className='absolute flex justify-center items-center left-1 bg-gray-300 shadow-md shadow-black rounded-full h-10 w-10 text-xl font-bold' onClick={() => changePic("left")}><IoIosArrowBack /></button>
        <img src={heroPic[index]} alt="heroImg" className='h-40 md:h-96 w-screen' />
        <button className='absolute flex justify-center items-center right-1 bg-gray-300 shadow-md shadow-black rounded-full h-10 w-10 text-xl font-bold' onClick={() => changePic("right")}><IoIosArrowForward /></button>
      </div>
    </div>
  )
}

export default HeroSection