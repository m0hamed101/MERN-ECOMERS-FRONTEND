import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import { Home } from './page/home/Home';
import { Product } from './page/product/product';
import { Shop } from './page/shop/Shop';
import { Login } from './page/auth/login/Login';
import { Register } from './page/auth/register/Register';
import { Cart } from './page/cart/cart';
import { AboutUs } from './page/about/AboutUs';
import { Contact } from './page/contact/Contact';
import { useAuthContext } from './page/auth/form/formhook/useAuthContext';

function App() {
  const { user } = useAuthContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const api = 'https://ecomersbackendapi.onrender.com/products';
    axios.get(api)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={!user ? <Login /> : <Home product={products} />} />
          <Route path='/shop' element={<Shop product={products} />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:id' element={<Product />} />
          <Route path='/login' element={!user ? <Login /> : <Home product={products} />} />
          <Route path='/register' element={!user ? <Register /> : <Home product={products} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop/cart' element={<Cart />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
