import React, { useEffect, useState } from 'react';
import '../cart/cart.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { Cart_component } from '../../components/Cart/Cart_component';
import { Payway } from '../../components/Cart/Payway';
import { Header } from "../../components/headers/Header"
import { Footer } from "../../components/Footer/Footer"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../page/auth/form/formhook/useAuthContext'
import { useDispatch, useSelector } from 'react-redux';
import { fetchcart } from '../../Redux/Cart_Slice';
import { loding } from '../../Redux/Cart_Slice';


export const Cart = () => {
  // const [loding, setloding] = useState(false);

  const { user } = useAuthContext();
  const dispatchcart = useDispatch();
  const carrt = useSelector((state) => state.cart);
  const LODING = useSelector((state) => state.cart.load);

  const cartreload = () => {
    dispatchcart(fetchcart(user?.token))
    dispatchcart(loding(true))
  }
  
  useEffect(() => {
    cartreload()
  }, [carrt])

  const [product, setProduct] = useState([0]);


  const deleProduct = async (_id) => {
    try {
      const config = {
        headers: { authorization: `Bearer ${user.token}` }, // Make sure the 'A' in 'Authorization' is capitalized
      };
      const response = await axios.delete('https://ecomersbackendapi.onrender.com/cart?itemId=' + _id, config);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReload = (_id) => {
    deleProduct(_id);
    cartreload();
    // window.location.reload(true);

  };



  // console.log(carrt);
  return (
    <div>
      <Header />
      <div className="card-body p-4 ">
        <div className="row">
          <div className="col-lg-7">
            <Link to={'/shop'}>Continue shopping</Link>
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>

                <p className="mb-1">Shopping cart</p>
                <p className="mb-0">You have {carrt.items ? carrt.items.length : 0} items in your cart</p>
              </div>
              <div>
                <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
              </div>
            </div>

            {
              LODING ?
                carrt.items?.map((item, index) => (
                  <div className='d-flex' key={index}>
                    <Cart_component item={item} deleProduct={deleteReload} _id={item.itemId._id} />
                  </div>
                )) :
                <div class="d-flex justify-content-center m-5">
                  <div class="spinner-border m-3" role="status">
                    <span class="sr-only"></span>
                  </div>
                </div>
            }


          </div>
          <div className="col-lg-5">
            <Payway carrt={carrt} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}