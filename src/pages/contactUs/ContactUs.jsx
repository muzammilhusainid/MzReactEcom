import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

import banner107 from '../../assets/images/banner107.jpg'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as yup from 'yup'
import ContactModal from '../../components/contactModal/ContactModal';
import NewsLetter from '../../components/newsLetter/NewsLetter';

const ContactUs = () => {

    const [contactUsDetails, setContactUsDetails] = useState();

    const contactUsDetailsValidate = yup.object({
        firstName: yup.string().required("First Name is must"),
        email: yup.string().email().required("Valid Email is Must"),
        message: yup.string().required("Write Short Message")
    })
    return (
        <>
            <Layout>
                <img src={banner107} alt="" className=' w-full h-screen' />
                <div className="getInToch w-full h-32 md:h-36 bg-black opacity-50 absolute top-0">
                </div>
                <div className="touchDetail w-full h-28 flex justify-between items-center absolute top-0 px-3">
                    <div className="touch text-white">
                        <h1 className='text-xl md:text-2xl font-bold'>GET IN TOUCH</h1>
                        <p className='text-sm md:xl' >With our support channels</p>
                    </div>
                    <div className="forPcContact hidden md:block">
                        <div className="contact flex gap-x-24">
                            <div className="whatsApp flex gap-x-2 items-center">
                                <div className="wt bg-white text-3xl p-3 rounded-full">
                                    <FaWhatsapp />
                                </div>
                                <div className="wtNum text-sm text-white hidden md:block">
                                    <p>WHATSAPP</p>
                                    <p>+91 8896638315</p>
                                </div>
                            </div>
                            <div className="telephone flex gap-x-2 items-center">
                                <div className="yt bg-white text-3xl p-3 rounded-full">
                                    <IoCallOutline />
                                </div>
                                <div className="teleNum text-sm text-white hidden md:block">
                                    <p>TELEPHONE</p>
                                    <p>+91 8115067010</p>
                                </div>
                            </div>
                            <div className="email flex gap-x-2 items-center">
                                <div className="yt bg-white text-3xl p-3 rounded-full">
                                    <FiMail />
                                </div>
                                <div className="emailAdd text-sm text-white hidden md:block">
                                    <p>E-MAIL</p>
                                    <p>Muzammilhusainid@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="forMobileContact md:hidden text-white text-sm">
                        <div className="contact flex">
                            <div className="onlyWtTele">
                                <div className="whatsApp flex gap-x-2 items-center">
                                    <FaWhatsapp />
                                    <p>+91 8896638315</p>
                                </div>
                                <div className="telephone flex gap-x-2 items-center">
                                    <IoCallOutline />
                                    <p>+91 8115067010</p>
                                </div>
                                <div className="email flex gap-x-2 items-center">
                                    <FiMail />
                                    <p>Muzammilhusainid@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="contactMainArea w-full absolute top-28 flex justify-center">
                    <div className="contactForm w-fit bg-gray-300 p-3 rounded-t-xl">
                        <div className="contactHead flex justify-center">
                            <div className="contactHeading w-fit text-3xl font-bold">
                                <h1>Contact-Us</h1>
                                <div className="w-full border-2 border-[#ff4b2b]"></div>
                            </div>
                        </div>
                        <Formik
                            validationSchema={contactUsDetailsValidate}
                            initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
                            onSubmit={(values) => { setContactUsDetails(values) }}
                        >
                            <Form>
                                <div className="contactArea md:flex items-center px-2 gap-2 py-5 mt-5 bg-white">
                                    <div className="formArea">
                                        <div className="name flex gap-x-1.5">
                                            <div className="firstName">
                                                <p>First Name</p>
                                                <Field type="text" name="firstName" className="p-1 md:p-1.5 rounded-lg border border-[#ff4b2b] w-full text-sm md:text-base"></Field>
                                                <div className="firstNameError text-red-500 text-sm">
                                                    <ErrorMessage name="firstName" />
                                                </div>
                                            </div>
                                            <div className="lastName">
                                                <p>Last Name</p>
                                                <Field type="text" name="lastName" className="p-1 md:p-1.5 rounded-lg border border-[#ff4b2b] w-full text-sm md:text-base"></Field>
                                            </div>
                                        </div>
                                        <div className="email mt-2">
                                            <p>Your Email</p>
                                            <Field type="text" name="email" className="p-1 md:p-1.5 rounded-lg border border-[#ff4b2b] w-full text-sm md:text-base"></Field>
                                            <div className="emailEroor text-red-500 text-sm">
                                                <ErrorMessage name="email" />
                                            </div>
                                        </div>
                                        <div className="message mt-2">
                                            <p>Your Message</p>
                                            <Field as="textarea" name="message" maxLength="150" className="p-1 md:p-1.5 rounded-lg border border-[#ff4b2b] w-full max-h-20 text-sm md:text-base"></Field>
                                            <div className="messageError text-red-500 text-sm">
                                                <ErrorMessage name="message" />
                                            </div>
                                        </div>
                                        <div className="submitButton flex justify-center mt-3">
                                            <button type='submit' className='bg-black text-white w-2/3 p-1 rounded-full'>Submit Your Message</button>
                                        </div>
                                    </div>
                                    <div className="formPic">
                                        <img src={banner107} alt="" className='w-96 h-80 rounded-xl hidden md:block' />
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                {contactUsDetails ? <ContactModal contactUsDetails={contactUsDetails} /> : ""}
                <NewsLetter/>
            </Layout>
        </>
    )
}

export default ContactUs