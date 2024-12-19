import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import OrderThanxModal from '../orderThanxModal/OrderThanxModal';
import { useNavigate } from 'react-router-dom';

const CheckoutData = () => {

    const selector = useSelector((state) => {
        return (
            state.cart
        )
    })

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

    //To Get SubTotal and Discount from store//////
    const priceSelector = useSelector((state) => {
        return (
            state.price
        )
    })
    const [discount, setDiscount] = useState();
    const [subTotal, setSubTotal] = useState();

    useEffect(() => {
        if (priceSelector) {
            setDiscount(priceSelector.discount)
            setSubTotal(priceSelector.subTotal)
        }
    }, [priceSelector])

    //To Validation Bill Details///////////////////
    const billDetailValidate = yup.object({
        firstName: yup.string().required("First Name is Must"),
        email: yup.string().email().required("Email is Must"),
        mobile: yup.number().min(1000000000).max(9999999999).required("Mobile Number is Must"),
        pinCode: yup.number().required("PinCode is Must"),
        city: yup.string().required("City is Must"),
        district: yup.string().required("District is Must"),
    })


    //To Show Thanx Modal and passing Bill Details to the Modal/////////
    const [orderModal, setOrderModal] = useState(false);
    const [billDetail, setBillDetail] = useState();

    useEffect(() => {
        if (billDetail) {
            setOrderModal(true)
        }
    }, [billDetail])

    //To Navigate to Home Page if Cart or CheckOut Page is Empty///////
    const navigate = useNavigate();



    return (
        <>
            {
                selector.length > 0 ?
                    <div className="checkoutSection px-2 p-8">
                        <Formik
                            validationSchema={billDetailValidate}
                            initialValues={{ firstName: "", lastName: "", email: "", mobile: "", pinCode: "", city: "", district: "" }}
                            onSubmit={(values) => { setBillDetail(values) }}
                        >
                            <Form>
                                <div className="cartDetailArea flex justify-center flex-wrap gap-3">
                                    <div className="billDetailArea bg-gray-100 w-fit md:w-1/2 lg:w-1/3 h-fit p-3">
                                        <div className="billDetail py-2 text-xl font-semibold">Bill Details</div>
                                        <div className='mb-2 w-[35%] border-b-2 border-[#ff4b2b]'></div>
                                        <div className='flex flex-wrap gap-1 text-xs md:text-sm'>
                                            <div className='flex gap-2 w-full'>
                                                <Field type="text" placeholder='First Name' name='firstName' className='p-1 md:p-2 w-1/2  rounded-lg border border-[#ff4b2b]' />
                                                <Field type="text" placeholder='Last Name' name='lastName' className='p-1 md:p-2 w-1/2 rounded-lg border border-[#ff4b2b]' />
                                            </div>
                                            <div className='text-red-400 w-full py-0'>
                                                <div><ErrorMessage name='firstName' /></div>
                                                <div><ErrorMessage name='lastName' /></div>
                                            </div>
                                            <Field type="text" placeholder='Email' name='email' className='p-1 md:p-2 rounded-lg border border-[#ff4b2b] w-full' />
                                            <div className='text-red-400 w-full'>
                                                <div><ErrorMessage name='email' /></div>
                                            </div>
                                            <Field type="text" placeholder='Mobile' name='mobile' className='p-1 md:p-2 rounded-lg border border-[#ff4b2b] w-full' />
                                            <div className='text-red-400 w-full'>
                                                <div><ErrorMessage name='mobile' /></div>
                                            </div>
                                            <div className='flex gap-2 w-full'>
                                                <Field type="text" placeholder='Pin Code' name='pinCode' className='p-1 md:p-2 w-1/2 rounded-lg border border-[#ff4b2b]' />
                                                <Field type="text" placeholder='City' name='city' className='p-1 md:p-2 w-1/2 rounded-lg border border-[#ff4b2b]' />
                                            </div>
                                            <div className='text-red-400 w-full flex'>
                                                <div className='w-1/2'><ErrorMessage name='pinCode' /></div>
                                                <div className='w-1/2'><ErrorMessage name='city' /></div>
                                            </div>
                                            <Field type="text" placeholder='District' name='district' className='p-1 md:p-2 rounded-lg border border-[#ff4b2b] w-full' />
                                            <div className='text-red-400 w-full'>
                                                <div><ErrorMessage name='district' /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='overflow-x-auto'>
                                        <table className="text-left text-xs lg:text-sm">
                                            <caption className="caption-top">
                                                <div className='flex justify-between items-center p-2 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-t-lg'>
                                                    <div className='text-lg font-bold text-white'>Order Summary - Items : {selector.length}</div>
                                                </div>
                                            </caption>

                                            <thead>
                                                <tr className='border'>
                                                    <th className='px-3 py-2 '>Product</th>
                                                    <th className='px-3 py-2 text-center'>Qty</th>
                                                    <th className='px-3 py-2 text-right'>Price</th>
                                                    <th className='px-3 py-2 text-right'>Ammount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    selector.map((item) => {
                                                        return (
                                                            <tr className='border' key={item.id}>
                                                                <td className='px-3 py-2'>{item.title.substring(0, 20)}</td>
                                                                <td className='px-3 py-2'>
                                                                    <div className='flex justify-center items-center'>
                                                                        <div className='w-7 h-6 flex justify-center items-center text-sm'>{item.quantity}</div>
                                                                    </div>
                                                                </td>
                                                                <td className='px-3 py-2 text-right'>{item.price}</td>
                                                                <td className='px-3 py-2 text-right '>{item.price * item.quantity}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr className='bg-gray-100'>
                                                    <td className='px-3 text-right font-semibold'>Total Items:</td>
                                                    <td className='px-3 text-center font-semibold'>{totalItems}</td>
                                                    <td className='px-3 text-center lg:text-right font-semibold'>Sub Total:</td>
                                                    <td className='px-3 text-right font-semibold'>{subTotal}</td>
                                                </tr>
                                                <tr className='bg-gray-100'>
                                                    <td colSpan={3} className='px-3 font-bold text-right lg:text-right'>Discount:</td>
                                                    <td className='px-3 text-right font-semibold'>{discount ? discount : "00"}</td>
                                                </tr>
                                                <tr className='bg-gray-100'>
                                                    <td colSpan={3} className='px-3 font-bold text-right lg:text-right'>Total Price:</td>
                                                    <td className='px-3 text-right font-semibold'>{discount ? subTotal - discount : subTotal}</td>
                                                </tr>
                                                <tr className='bg-gray-100'>
                                                    <td colSpan={4} className='p-3 font-bold text-center lg:text-right'>
                                                        <button type='submit' className='bg-black text-white w-full p-1 rounded-full'>Order Now</button>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                        {orderModal ? <OrderThanxModal billDetail={billDetail} /> : ""}
                    </div>
                    :
                    useEffect(() => {
                            navigate("/")
                    }, [])
            }
        </>

    )
}

export default CheckoutData