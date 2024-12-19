import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import SearchBar from '../search/SearchBar'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { LuShoppingBasket } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";



const Navbar = () => {
    const [burgerMenu, setBurgerMenu] = useState(false)

    const burgerMenuToggle = () => {
        burgerMenu === false ? setBurgerMenu(true) : setBurgerMenu(false)
    }

    const [searchBar, setSearchBar] = useState(false)

    const searchToggle = () => {
        searchBar === false ? setSearchBar(true) : setSearchBar(false)
    }

    const selector = useSelector((state) => {
        return (
            state.cart
        )
    })

const activeMenu=({isActive})=>{
return{
    borderBottom:isActive?'1px solid':'',
    paddingBottom:isActive?'1px':''
}
}

const activeMenuBorder=useLocation().pathname;

    const navList = (
        <ul className='flex flex-col lg:flex lg:flex-row space-x-3 text-white'>
            <li className={activeMenuBorder==="/"?"border-b":""}>
                <NavLink to={'/'} >Home</NavLink>
            </li>
            <li className={activeMenuBorder==="/allproducts"?"border-b":""}>
                <NavLink to={'/allproducts'}>All Product</NavLink>
            </li>
            <li className={activeMenuBorder==="/category"?"border-b":""}>
                <NavLink>Category</NavLink>
            </li>
            <li className={activeMenuBorder==="/contact-us"?"border-b":""}>
                <NavLink to={'/contact-us'} >Contact-Us</NavLink>
            </li>
        </ul>
    )
    return (
        <div className="sticky top-0 z-10 min-w-[350px]">
            <nav className='bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]'>
                <div className='flex justify-center'>
                    <div className="flex justify-between items-center lg:p-3 py-2 w-[1920px]">
                        <div className="icon lg:hidden flex justify-between px-3 text-white">
                            {
                                searchBar ? <div className="burgericon" onClick={searchToggle}><CloseIcon /></div>
                                    : <div className="searchicon" onClick={searchToggle}><SearchOutlinedIcon /></div>
                            }

                        </div>
                        <div className="logo flex justify-center items-center gap-2 text-white font-bold text-2xl">
                            <LuShoppingBasket className='' />
                            <h1 className=''>Mz E-com</h1>
                        </div>
                        <div className="menuBar hidden lg:block">
                            <div className='flex gap-3 justify-center'>
                                <div className="navList">
                                    {navList}
                                </div>
                                <div className='cartItem text-center flex justify-center items-center text-white relative'>
                                    <Link to={'/cart-detail'}>
                                        {
                                            selector.length > 0 ? <span className='text-xs absolute bottom-4'> {selector.length} </span>
                                                : ""
                                        }
                                        <FaShoppingCart />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="search hidden lg:block">
                            <SearchBar />
                        </div>

                        <div className="icon lg:hidden flex justify-center items-center gap-2 px-3 text-white">

                            <div className='cartItem text-center flex  text-white relative'>
                                <Link to={'/cart-detail'}>
                                    {
                                        selector.length > 0 ? <span className='text-xs absolute bottom-3'> {selector.length} </span>
                                            : ""
                                    }
                                    <FaShoppingCart />
                                </Link>
                            </div>


                            {
                                burgerMenu ? <div className="burgericon" onClick={burgerMenuToggle}><CloseIcon /></div>
                                    : <div className="burgericon" onClick={burgerMenuToggle}><MenuOutlinedIcon /></div>
                            }
                        </div>
                    </div>
                </div>

            </nav>
            {
                searchBar ? <div className="search lg:hidden w-full h-12 absolute flex justify-center items-center bg-gray-50">
                    <SearchBar />
                </div>
                    : ""
            }
            {
                burgerMenu ? <div className=' lg:hidden absolute w-full'>
                    <ul className='burgerMenu flex flex-col justify-center text-center text-white bg-black'>
                        <div className='items-center'>
                            <li className='h-10 flex justify-center items-center border-b border-white'>
                                <Link to={'/'} className='block'>Home</Link>
                            </li>
                            <li className='h-10 flex justify-center items-center border-b border-white'>
                                <Link to={'/allproducts'}>All Product</Link>
                            </li>
                            <li className='h-10 flex justify-center items-center border-b border-white'>
                                <Link>Category</Link>
                            </li>
                            <li className='h-10 flex justify-center items-center border-b border-white'>
                                <Link to={'/contact-us'}>Contact-Us</Link>
                            </li>
                        </div>
                    </ul>
                </div>
                    : ""
            }
        </div>
    )
}

export default Navbar