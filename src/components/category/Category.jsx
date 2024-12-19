import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Category = () => {
    const category = [
        {
            image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
            name: 'fashion'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
            name: 'shirt'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
            name: 'jacket'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
            name: 'mobile'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
            name: 'laptop'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
            name: 'shoes'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
            name: 'home'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
            name: 'books'
        }
    ]

        //Get All Prododucts from API by Axios
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
    
    
        //Get Products Category////
        const allCategory = [...new Set(allProducts.map((getCategory) => { return (getCategory.category) }))];
      
           
  return (
    <div className='categorySection  py-5'>
      <div className="bestsellingProductTitle lg:mx-24">
        <div className="allProducts mx-7 lg:mx-0">
          <h1 className=' font-bold text-2xl lg:text-3xl'>Our Category</h1>
          <div className='border-b-2 border-black py-1 w-full'></div>
        </div>
      </div>
        <div className="categoryCardArea mt-5 py-5 lg:px-8 flex justify-center flex-wrap gap-8 bg-gray-100">
            {category.map((item,index) => {
                return(
                    <div key={index} className="categoryCard w-1/4 lg:w-1/5 border-2 text-center hover:border-b-2 hover:translate-y-1 hover:scale-110 duration-500">
                        <div className="cardImg lg:h-48 bg-gradient-to-b from-[#2bf1ff] to-white border-x-2 border-[#ff4b2b] flex justify-center items-center" >
                            <img src={item.image} alt="cardImg" className='lg:w-44'/>
                        </div>
                        <div className="cardTitle py-1 md:py-2 bg-white border-y-2 border-y-gray-300 border-x-2 border-[#ff4b2b]">
                            <h1 className=' text-xs lg:text-lg first-letter:uppercase'>{item.name}</h1>
                        </div>
                    </div>
                )
            })}
           
        </div>
    </div>
  )
}

export default Category