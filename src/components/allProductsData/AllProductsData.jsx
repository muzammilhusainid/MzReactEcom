import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { addToCart } from '../../store/slices/CartSlice';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ProductsCard from '../productCard/ProductsCard';
import Track from '../track/Track';


const AllProductsData = () => {

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
    const allCategory = [...new Set(allProducts.map((getCategory) => { return (getCategory.category) })), 'all items'];


    //To show All Products and To filter by Category wise///
    //To show all products and filtered product i used 2 'useState' (showProduct & filterProductState) and Turnery Operator
    const [showProduct, setShowProduct] = useState(true)

    const [filterProducts, setFilterProducts] = useState([]);

    const filterProduct = (category) => {
        setShowProduct(false)
        if (category === "all items") {
            return setFilterProducts(allProducts)
        }
        const filterdItems = allProducts.filter((item) => {
            return (
                item.category === category
            )
        })
        setFilterProducts(filterdItems)
    };

    //To Dispatch Item to Cart through Redux Toolkit//////////
    const dispatch = useDispatch();
    const addCart = (item) => {
        return (
            dispatch(addToCart(item)),
            toast.success("Item Added Successfully")
        )
    }

    //To Search Items by On Change////////
    const [searchProduct, setSearchProduct] = useState("");
    const searchItem = (event) => {
        setSearchProduct(event.target.value)
    }

    useEffect(() => {
        if (searchProduct) {
            const getSearchProduct = allProducts.filter((filterItem) => filterItem.title.toLowerCase().includes(searchProduct.toLowerCase()))
            setFilterProducts(getSearchProduct)
            setShowProduct(false)
        }
        else {
            setShowProduct(true)
        }
        console.log(searchProduct)
    }, [searchProduct])



    return (
        <>
        <div className='allProductsSection my-5 lg:mx-24'>
            <div className="allProductsTitle ">
                <div className="allProducts mx-7 lg:mx-0">
                    <h1 className=' font-bold text-2xl lg:text-3xl'>All Products</h1>
                    <div className='border-b-2 border-black py-1 w-full'></div>
                </div>
            </div>
            <div className="categoryButtonSearchArea mt-5 mx-7 lg:mx-0 flex justify-center lg:justify-between flex-wrap gap-1 gap-y-2">
                <div className="category flex justify-center flex-wrap gap-1 ">
                    {allCategory.map((category, index) => {
                        return (
                            <button key={index} className="category px-2.5 py-1.5 text-sm flex justify-center items-center text-[#ff4b2b] border border-[#ff4b2b] cursor-pointer first-letter:uppercase" onClick={() => filterProduct(category)}>{category.toUpperCase()}</button>
                        )
                    })}
                </div>

                <div className="searchBar border px-1 border-[#ff4b2b] flex justify-center items-center gap-1">
                    <input type="text" className='focus:outline-none' onChange={searchItem} />
                    <SearchOutlinedIcon className='text-[#ff4b2b]' />
                </div>
            </div>
            <div className="allProductsCardArea">
                {
                    showProduct ?
                        <ProductsCard products={allProducts} addCart={addCart} />
                        :
                        <ProductsCard products={filterProducts} addCart={addCart} />
                }
            </div>
        </div>
        <Track/>
        </>
    )
}

export default AllProductsData