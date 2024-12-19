import React from 'react'
import Layout from '../../components/layout/Layout'
import AllProductsData from '../../components/allProductsData/AllProductsData'
import NewsLetter from '../../components/newsLetter/NewsLetter'

const AllProducts = () => {
  return (
    <div>
        <Layout>
            <AllProductsData/>
            <NewsLetter/>
        </Layout>
    </div>
  )
}

export default AllProducts