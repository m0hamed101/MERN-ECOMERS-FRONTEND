import React, { useEffect } from 'react'
import './card.css'
import { Link } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import axios from 'axios';
import { useAuthContext } from '../../page/auth/form/formhook/useAuthContext'

// alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchcart } from '../../Redux/Cart_Slice';


export const Card = ({ product }) => {

  const { user } = useAuthContext()
  const userid = user.user._id
  const token = user.token
  const item = product._id;

  const dispatchcart = useDispatch();
  const carrt = useSelector((state) => state.cart);

  const cartreload = () => {
    dispatchcart(fetchcart(token))
  }
  useEffect(() => {
    cartreload()
  }, [carrt, user?.token])


  const notify = () => {
    toast('🦄 AddToCart Done', {
      position: "bottom-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }





  const config = {
    headers: { authorization: `Bearer ${token}` }
  };

  const bodyParameters = {
    itemId: `${item}`,
    quantity: 1
  };






  const cartIcon = () => {
    handleCart(token, item, userid);
    notify();
  }
  const handleCart = async () => {

    axios.post(
      'https://ecomersbackendapi.onrender.com/cart/addtocart',
      bodyParameters,
      config
    ).then()

  }

  return (
    <div className="card">
      <small className='small'>man</small>
      <Link className='cardimg' to={'/' + product.id}>
        <img src={product.image} className="card_img" alt="Card image cap" />
      </Link>

      <div className='card_title'>
        <div>{product.category}</div>
        <small >{product.title}</small>

        <div className='card_detels'>

          <div>
            <h9>{product.rating.rate}⭐</h9>
            <h5>{product.price}$</h5>
          </div>

          <div onClick={() => cartIcon()}><ShoppingBagOutlinedIcon /></div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />


        </div>
      </div>

    </div>
  )
}