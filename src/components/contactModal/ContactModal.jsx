import React from 'react'

const OrderThanxModal = ({ contactUsDetails }) => {

   
    return (
        <div>
            <div className="wrap fixed bg-black top-0 bottom-0 left-0 right-0 opacity-80"></div>
            <div className="main w-2/3 px-5 py-5 bg-white text-center rounded-lg fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                <h1 className='text-xl lg:text-4xl'>{contactUsDetails.firstName}, your Message has been sent Successfully....!</h1>
                <button className='mt-14 px-5 py-1 text-white bg-black rounded-full' onClick={() => (window.location.reload())}>Close</button>

            </div>
        </div>
    )
}

export default OrderThanxModal  