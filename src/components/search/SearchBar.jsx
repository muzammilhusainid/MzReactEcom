import React, { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios, { all } from 'axios';
import { Link } from 'react-router-dom';


const SearchBar = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [orignalProducts, setOrignalProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const getProductsRes = await axios("https://dummyjson.com/products");
        setOrignalProducts(getProductsRes.data.products)
      }
      catch (error) {

      }
    };

    getProducts();
  }, []);

  const [searchProduct, setSearchProduct] = useState("");
  const searchItem = (event) => {
    setSearchProduct(event.target.value)
  }

  useEffect(() => {
    if (searchProduct) {
      setShowProduct(true)
      const getSearchProduct = orignalProducts.filter((filterItem) => filterItem.title.toLowerCase().includes(searchProduct.toLowerCase()))
      setAllProducts(getSearchProduct)
    }
    else {
      setAllProducts(orignalProducts)
      setShowProduct(false)
    }

  }, [searchProduct])

  return (
    <div className='border border-[#ff4b2b]  lg:border-none lg:w-full relative'>
      <div className="searchBar p-1 bg-white flex justify-center items-center gap-1">
        <input type="text" className='focus:outline-none w-full' onChange={searchItem} />
        <SearchOutlinedIcon className='text-[#ff4b2b]' />
      </div>
      {
        showProduct ?
          <div className="searchItemArea absolute w-full border-[#ff4b2b] bg-gray-50 max-h-80 overflow-y-auto">
            {
              allProducts.map((item) => {
                return (
                  <Link to={`/product-detail/${item.id}`} className='productTitle'>
                    <div className="searchItemBox flex items-center border-b border-[#ff4b2b]">
                      <div className="searchPic">
                        <img src={item.thumbnail} alt="itemPic" className='w-14 h-14' />
                      </div>
                      <div className="searchTitle">
                        <h1>{item.title.substring(0, 15)}</h1>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          : ""
      }
    </div>
  )
}

export default SearchBar