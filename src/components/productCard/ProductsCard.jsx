import React from 'react'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import { FaShoppingCart } from "react-icons/fa";


const ProductsCard = ({ products, addCart }) => {
    return (
        <div>
            <div className="allProductsCardArea flex justify-center py-5 flex-wrap gap-7">
                {
                    products.map((item, index) => {
                        return (
                            <div className="productCard w-52 h-auto rounded-lg overflow-hidden border-2 border-b-[#ff4b2b] hover:border-[#ff4b2b]" key={index}>
                                <div className="cardImg bg-gray-100">
                                    <Link to={`/product-detail/${item.id}`}>
                                        <img className='w-52 h-48' src={item.thumbnail} alt="productImg" />
                                    </Link>
                                </div>
                                <div className="shortDetail text-center p-3 flex flex-col flex-wrap gap-3">
                                    <Link to={`/product-detail/${item.id}`} className='productTitle'>
                                        <h1 className='text-base'>{item.title.substring(0, 20)}</h1>
                                    </Link>
                                    <div className='productPriceRating flex justify-between items-center'>
                                        <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 flex items-center">{item.rating}
                                            <StarIcon fontSize='' />
                                        </span>
                                        <h1 className='text-base font-semibold'>₹ {Math.round(item.price)}</h1>
                                    </div>
                                    <button className="addCartButton w-full p-0.5 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white rounded-lg text-sm font-bold flex justify-center items-center gap-2" onClick={() => addCart(item)}><FaShoppingCart />Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductsCard