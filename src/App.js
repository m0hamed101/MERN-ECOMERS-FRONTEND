import './App.css'
import { Home } from './page/home/Home';
import { Product } from './page/product/product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from './page/shop/Shop';
import axios from 'axios'
import { useState, useEffect,createContext } from 'react';
import { Login } from './page/auth/login/Login';
import { Register } from './page/auth/register/Register'
import { Cart } from './page/cart/cart'
import { AboutUs } from './page/about/AboutUs';
import { Contact } from './page/contact/Contact';

import { useAuthContext } from './page/auth/form/formhook/useAuthContext'


function App() {
  const { user } = useAuthContext()


  const api = 'https://ecomersbackendapi.onrender.com/products'
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);


  const getProduct = () => {
    axios.get(api)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={!user ? <Login /> : <Home product={product} />} />
          <Route path='/shop' element={<Shop product={product} />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route exact path='/:id' element={<Product />} />
          <Route path='*' element={<Home />} />

          <Route path="/login" element={!user ? <Login /> : <Home product={product} />} />
          <Route path="/Register" element={!user ? <Register /> : <Home product={product} />} />


          <Route path='/cart' element={<Cart />} />
          <Route path='/shop/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}


export default App;