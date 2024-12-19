import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Home from './pages/homePage/Home'
import NoPage from './pages/noPage/NoPage'
import AllProducts from "./pages/allProducts/AllProducts"
import ProductDetail from "./pages/productDetail/ProductDetail"
import Cart from "./pages/cart/Cart"
import Checkout from "./pages/checkout/Checkout"
import ContactUs from "./pages/contactUs/ContactUs"



function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/product-detail/:productId" element={<ProductDetail/>}/>
        <Route path="/cart-detail" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/*" element={<NoPage/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
