import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCartItem } from '../../store/slices/CartSlice';

const OrderThanxModal = ({billDetail}) => {

    //To Clear Cart Items after Showing Thankx Modal//////
    const dispatch = useDispatch();
    const clearCart=()=>{
        dispatch(clearCartItem());
    }
    return (
        <div>
            <div className="wrap fixed bg-black top-0 bottom-0 left-0 right-0 opacity-80"></div>
            <div className="main w-2/3 px-5 py-5 bg-white text-center rounded-lg fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                <h1 className='text-3xl lg:text-7xl font-bold'>!..Thank You...!</h1>
                <h1 className='text-xl lg:text-4xl'>{billDetail.firstName} for Shoping</h1>
                <Link to={"/"}>
                    <button className='mt-14 px-2 py-1 text-white bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-full' onClick={clearCart}>Go to Home Page</button>
                </Link>
            </div>
        </div>
    )
}

export default OrderThanxModal  