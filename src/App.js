import React from 'react';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import ComparePro from './pages/CompareProducts';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPass from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp"
import ResetPass from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermOfServise from './pages/TermOfService';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
  return(

    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:id" element={<SingleBlog />} />
            <Route path="compare" element={<ComparePro />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot" element={<ForgotPass />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="resetpass" element={<ResetPass />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="refundpolicy" element={<RefundPolicy />} />
            <Route path="shippingpolicy" element={<ShippingPolicy />} />
            <Route path="terms" element={<TermOfServise />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />








        </Route>

      </Routes>
    </BrowserRouter>

    </>

  )



}

export default App;
