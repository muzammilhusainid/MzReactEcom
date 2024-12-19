import React from 'react'

const NewsLetter = () => {
  return (
    <div>
         <div className="newslatter w-full h-32 lg:h-40 bg-gradient-to-r from-[#2677f1] to-[#d66ce4] border-white flex items-center">
          <div className="w-full">
            <h2 className='flex justify-center text-white text-xl lg:text-2xl mb-3'>Subscribe for our Newsletter</h2>
            <div className="w-full flex justify-center text-sm lg:text-base">
              <input type="text" className='w-2/3 lg:w-1/3 py-2 px-3 rounded-l-full focus:outline-none' placeholder='you@example.com' maxLength="40" />
              <button className='py-2 px-4 bg-black text-white rounded-r-full'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewsLetter