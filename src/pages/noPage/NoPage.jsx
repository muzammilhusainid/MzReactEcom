import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=''>
        <h1 className='text-2xl md:text-5xl'>Sorry.....This page is not exist !</h1>
        <Link to={"/"} className='flex justify-center mt-5 text-[#ff4b2b]'>Click here & Go to Home</Link>
      </div>
    </div>

  )
}

export default NoPage