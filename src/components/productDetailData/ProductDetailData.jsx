import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import StarIcon from '@mui/icons-material/Star';
import { FaShoppingCart } from "react-icons/fa";
import ProductsCard from '../productCard/ProductsCard';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/CartSlice';
import { toast } from 'react-toastify';


const ProductDetailData = () => {
  const { productId } = useParams();

  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const getProductRes = await axios("https://dummyjson.com/products");
        setAllProduct(getProductRes.data.products);
      }
      catch (error) {

      }
    }
    getProduct()
  }, [productId]);
  ////////////End useEffect/////////////////////////

  const [singleProduct, setSingleProduct] = useState({});
  const [singleProductPic, setSingleProductPic] = useState([]);

  const [viewPic, setViewPic] = useState()

  const [relatedProduct, setRelatedProduct] = useState([]);


  useEffect(() => {
    const detail = allProduct.filter((item) => {
      return (
        item.id == productId
      )
    })
    if (detail[0]) {
      setSingleProduct(detail[0]);
      setSingleProductPic(detail[0].images)
      setViewPic(singleProductPic[0])
    }
    ///////////////////////////////////

    const getRelatedProduct = allProduct.filter((item) => {
      return (
        item.category === singleProduct.category
      )
    })
    setRelatedProduct(getRelatedProduct.slice(0, 10))
  }, [allProduct]);
  ///////////End useEffect////////////////////////

  const changePic = (index) => {
    return (
      setViewPic(singleProductPic[index])
    )
  }
  ////////////////////////////////////////////

  const dispatch = useDispatch()
  const addCart = (item) => {
    return (
      dispatch(addToCart(item)),
      toast.success("Item Added Successfully")
    )
  }


  return (
    <>
      <div className='productDetailSection my-10 lg:mx-24'>
        <div className="allProductsTitle">
          <div className="productDetail mx-7 lg:mx-0">
            <h1 className=' font-bold text-2xl lg:text-3xl'>Product Detail</h1>
            <div className='border-b-2 border-black py-1 w-full'></div>
          </div>
        </div>
        <div className="aproductDetailArea my-10 flex justify-center items-center flex-wrap gap-5">
          <div className="productImageArea lg:flex items-center border">
            <div className="productPicView1 p-2 flex lg:flex-col justify-center items-center flex-wrap gap-1 ">
              {singleProductPic.map((item, index) => {
                return (
                  <div className="productPics p-1 shadow-xl bg-gray-100 border cursor-pointer" key={index} onClick={() => changePic(index)}>
                    <img src={item} alt="productPic1" className='w-24 h-24' />
                  </div>
                )
              })}
            </div>
            <div className="productPicView2 shadow-lg lg:w-96 lg:h-96 ">
              <img src={viewPic} alt="productPic2" className='' />
            </div>
          </div>
          <div className="productDetailArea shadow-lg w-auto lg:w-96 h-auto min-h-96 p-5 flex flex-col justify-start flex-wrap gap-5">
            <div className="title">
              <span className='text-xs'>{singleProduct.brand}</span>
              <h1 className='text-2xl font-bold'>{singleProduct.title}</h1>
            </div>
            <div className="rating">
              <span className='text-sm bg-green-500 text-white py-0.5 px-2.5 rounded-lg '>{singleProduct.rating}
                <StarIcon fontSize='' />
              </span>
            </div>
            <div className="desc">
              <p>{singleProduct.description}</p>
            </div>
            <div className="warranty text-sm">
              <p>{singleProduct.warrantyInformation}</p>
            </div>
            <div className="price">
              <h1>₹ {Math.round(singleProduct.price)} /-</h1>
            </div>
            <div className="addCartButtom flex justify-center items-center gap-3 w-auto text-center rounded-xl py-1 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white cursor-pointer" onClick={() => addCart(singleProduct)}>
              <FaShoppingCart/><h1>Add to Cart</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='relatedProductSections pt-10 lg:mx-24'>
        <div className="relatedProductTitle">
          <div className="productDetail mx-7 lg:mx-0">
            <h1 className=' font-bold text-2xl lg:text-3xl'>Suggested Product</h1>
            <div className='border-b-2 border-black py-1 w-full'></div>
          </div>
        </div>
        <div className="relatedProductArea">
          <ProductsCard products={relatedProduct} addCart={addCart}/>
        </div>
      </div>
    </>


  )
}
//{productDetail.title} {productDetail.images} {productDetail.price }
export default ProductDetailData