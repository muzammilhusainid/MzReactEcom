import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
        <div className="main-content min-h-screen w-full flex justify-center">
          <div className='w-[1920px] relative'>
            {children}
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Layout