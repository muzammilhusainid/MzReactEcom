import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCartItem, decreaseCartItem, deleteCartItem, clearCartItem } from '../../store/slices/CartSlice';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import { getSubTotalAndDiscount } from '../../store/slices/TotalPriceSlice';
import { toast } from 'react-toastify';
import { BsCartX } from "react-icons/bs";



const CartDetail = () => {

    //Fetch Cart Item from Store by Cart Satate//////
    const selector = useSelector((state) => {
        return (
            state.cart
        )
    })

    //Dispatch for Incrrease Item////////
    const dispatch = useDispatch();

    const increaseItem = (item) => {
        return (
            dispatch(increaseCartItem(item))
        )
    }

    //Dispatch for Decrease Item/////////
    const decreaseItem = (item) => {
        return (
            dispatch(decreaseCartItem(item))
        )
    }

    //Dispatch for Delete Single Item////////
    const deleteItem = (item) => {
        return (
            dispatch(deleteCartItem(item)),
            toast.success("Item Deleted Successfully")
        )
    }

    //Dispatch for Clear Cart///////////
    const clearCart = () => {
        dispatch(clearCartItem())
    }


    //To Show Total Items ////////
    const [totalItems, setTotalItems] = useState()
    useEffect(() => {
        const totalItemsRes = selector.reduce((total, item) => {
            return (
                total + item.quantity
            )
        }, 0);
        setTotalItems(totalItemsRes);
    }, [selector]);

    //To Show Total Price//////
    const [subTotal, setSubTotal] = useState()
    useEffect(() => {
        const subTotalRes = selector.reduce((total, item) => {
            return (
                total + item.quantity * item.price
            )
        }, 0);
        setSubTotal(subTotalRes)
    }, [selector]);

    //Coupon Code Area/////////
    const [coupon, setCoupon] = useState();
    const enterCoupon = (event) => {
        setCoupon(event.target.value)
    }

    const [discount, setDiscount] = useState();
    const [discountNotification, setDiscountNotifiation] = useState()
    const couponCalculate = (getCoupon) => {
        if (getCoupon === "Husain10") {
            setDiscount(subTotal * 10 / 100);
            setDiscountNotifiation("Discount Applied")
        }
        else {
            setDiscountNotifiation("***Wrong Coupon***")
        }
    }

    const passPrice = () => {
        return (
            dispatch(getSubTotalAndDiscount({ subTotal, discount }))
        )
    }

    //Main Jsx Code/////////
    return (
        <div className="cartSection px-2 py-8">
            {
                selector.length > 0 ?
                    <div className='flex justify-center flex-wrap gap-4'>
                        <div className="cartDetailArea overflow-x-auto w-[350px] md:w-auto">
                            <table className="text-left text-xs lg:text-base">
                                <caption className="caption-top">
                                    <div className='flex justify-between items-center p-2 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-t-lg'>
                                        <div className='text-xl font-bold text-white'>Cart Details - Items : {selector.length}</div>
                                        <div className='bg-white px-2 rounded-full cursor-pointer hover:bg-[#ff416c] hover:text-white hover:border-2 hover:border-white' onClick={() => clearCart()}>Clear Cart</div>
                                    </div>
                                </caption>

                                <thead>
                                    <tr className='border'>
                                        <th className='px-3 py-2 lg:px-5'>Action</th>
                                        <th className='px-3 py-2 lg:px-5'>Product</th>
                                        <th className='px-3 py-2 lg:px-5'>Name</th>
                                        <th className='px-3 py-2 lg:px-5 text-center'>Qty</th>
                                        <th className='px-3 py-2 lg:px-5'>Price</th>
                                        <th className='px-3 py-2 lg:px-5'>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        selector.map((item) => {
                                            return (
                                                <tr className='border' key={item.id}>
                                                    <td className='px-3 lg:px-5'><DeleteOutlineOutlinedIcon className='text-[#ff4b2b] cursor-pointer' onClick={() => deleteItem(item)} /></td>
                                                    <td className='px-3 lg:px-5'><img src={item.thumbnail} alt="itemPic" className='lg:w-16 lg:h-16 w-12 h-12' /></td>
                                                    <td className='px-3 lg:px-5'>{item.title.substring(0, 20)}</td>
                                                    <td className='px-3 lg:px-5'>
                                                        <div className='flex justify-center items-center'>
                                                            <button className='w-6 h-6 flex justify-center items-center border-2 border-[#ff4b2b] rounded-l-full' onClick={() => decreaseItem(item)}>-</button>
                                                            <div className='w-7 h-6 flex justify-center items-center border-y-2 border-[#ff4b2b] text-sm'>{item.quantity}</div>
                                                            <button className='w-6 h-6 flex justify-center items-center border-2 border-[#ff4b2b] rounded-r-full' onClick={() => increaseItem(item)}>+</button>
                                                        </div>
                                                    </td>
                                                    <td className='px-3 lg:px-5 text-center'>{item.price}</td>
                                                    <td className='px-3 lg:px-5 text-center'>{item.price * item.quantity}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr className='bg-gradient-to-r from-[#ff4b2b] to-[#ff416c]'>
                                        <td colSpan={2} className='py-1 text-white text-center'>
                                            <Link to="/allproducts" className='hover:underline'>Continue Shoping</Link>
                                        </td>
                                        <td className='py-1 font-bold text-white text-right'>Total Items:</td>
                                        <td className='py-1 font-bold text-white text-center'>{totalItems}</td>
                                        <td className='py-1 font-bold text-white text-center lg:text-right'>Total Price:</td>
                                        <td className='py-1 font-bold text-white text-center'>{subTotal}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="couponArea bg-gray-100 rounded-lg w-fit md:w-1/2 lg:w-1/5 h-fit">
                            <div className="couponCode">
                                <h1 className='text-lg p-1 text-white bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-t-lg font-semibold'>Apply Coupon Code</h1>
                                <p className='text-[10px] text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tenetur. Harum necessitatibus dicta quibusdam doloremque eum iusto unde quod pariatur? Magnam laborum minus praesentium autem explicabo soluta quo, error id!</p>
                                <h1 className='text-[#ff4b2b] font-semibold p-2'>Husain10</h1>
                                <div className="p-1" >
                                    <input type="text"
                                        placeholder="Enter Coopon 'Husain10'"
                                        className='w-full p-1 pl-2 rounded-full border border-[#ff4b2b] text-base'
                                        onChange={enterCoupon} />
                                    <button className='bg-black text-white w-full p-1 mt-2 rounded-full' onClick={() => couponCalculate(coupon)}>Apply Coupon</button>
                                </div>
                                {
                                    discountNotification ?
                                        <h1 className='text-[#ff4b2b] font-semibold p-2 pb-0 text-center'>{discountNotification}</h1>
                                        : ""
                                }
                            </div>
                            <div className="cartTotal bg-white m-2 mt-5 rounded-lg">
                                <div className='border-b-2 border-[#ff4b2b] p-1 w-1/2 font-semibold text-lg'>Cart Total</div>
                                <div className='p-2'>
                                    <table className='w-full text-sm'>
                                        <tbody>
                                            <tr>
                                                <td className=''>Sub Total</td>
                                                <td className='text-right'>{subTotal}</td>
                                            </tr>
                                            <tr>
                                                <td>Discount</td>
                                                <td className='text-right'>{discount ? discount : "00"}</td>
                                            </tr>
                                            <tr className='font-semibold'>
                                                <td>Total Price</td>
                                                <td className='text-right'>{discount ? subTotal - discount : subTotal}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='p-2'>
                                    <Link to='/checkout'>
                                        <button className='bg-black text-white w-full p-1 rounded-full' onClick={() => passPrice()}>Checkout</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="emptyCartArea flex justify-center items-center mt-8">
                        <div className="emptyCart w-full md:w-2/5">
                            <div className="emptyCartHead p-3 flex justify-between items-center bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-t-lg">
                                <div className="emptyCartTitle text-xl font-bold text-white">Cart is Empty</div>
                                <Link to='/allproducts'>
                                    <div className="continueShoping bg-white px-2 text-sm lg:text-base rounded-full cursor-pointer hover:bg-[#ff416c] hover:text-white hover:border-2 hover:border-white">Continue Shoping</div>
                                </Link>
                            </div>
                            <div className="emptyCartBody border border-[#ff4b2b] flex justify-center items-center py-14 text-gray-300 text-9xl">
                                <BsCartX/>
                            </div>
                        </div>
                    </div>
            }







        </div>
    )
}

export default CartDetail