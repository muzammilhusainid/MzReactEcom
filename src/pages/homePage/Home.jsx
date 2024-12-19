import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import BestsellingProduct from '../../components/bestsellingProduct/BestsellingProduct'
import Track from '../../components/track/Track'
import bottomPic1 from '../../assets/images/bottomPic1.avif'
import NewsLetter from '../../components/newsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Track />
        <Category />
        <BestsellingProduct />
        <img src={bottomPic1} className='h-32 md:h-52  w-full my-5' />
        <NewsLetter />
      </Layout>
    </div>
  )
}

export default Home