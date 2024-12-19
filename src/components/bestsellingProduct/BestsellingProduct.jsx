import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/CartSlice';
import { toast } from 'react-toastify';
import ProductsCard from '../productCard/ProductsCard';

const BestsellingProduct = () => {

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const getProductsRes = await axios("https://dummyjson.com/products");
        setAllProducts(getProductsRes.data.products)
      }
      catch (error) {

      }
    };

    getProducts();
  }, []);


  const [highRatingProduct, setHighRatingProduct] = useState([]);
  useEffect(() => {
    if (allProducts) {
      const highRatingProductRes = allProducts.filter((filterItem) => filterItem.rating > 4.0);
      setHighRatingProduct(highRatingProductRes)
    }
  }, [allProducts])



  const dispatch = useDispatch();
  const addCart = (item) => {
    return (
      dispatch(addToCart(item)),
      toast.success("Item Added Successfully")
    )
  }

  return (
    <div className='bestsellingProductSection lg:mx-24'>
      <div className="bestsellingProductTitle">
        <div className="allProducts mx-7 lg:mx-0">
          <h1 className=' font-bold text-2xl lg:text-3xl'>Bestselling Products</h1>
          <div className='border-b-2 border-black py-1 w-full'></div>
        </div>
      </div>
      <div className="ProductCardArea">
        <ProductsCard products={highRatingProduct.slice(0,10)} addCart={addCart} />
      </div>
    </div>
  )
}

export default BestsellingProduct
