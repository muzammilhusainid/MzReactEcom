import React from 'react'
import Layout from '../../components/layout/Layout'
import ProductDetailData from '../../components/productDetailData/ProductDetailData'
import Track from '../../components/track/Track'
import NewsLetter from '../../components/newsLetter/NewsLetter'

const ProductDetail = () => {

  return (
    <div>
        <Layout>
            <ProductDetailData/>
            <Track/>
            <NewsLetter/>
        </Layout>
    </div>
  )
}

export default ProductDetail