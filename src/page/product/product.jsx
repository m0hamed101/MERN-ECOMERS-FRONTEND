import React from 'react'
import './product.css'
import { Header } from '../../components/headers/Header'
import { Footer } from '../../components/Footer/Footer'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


export const Product = () => {
    const location = useLocation();
    const id = location.pathname;

    const api = 'https://ecomersbackendapi.onrender.com/products' + id
    const [item, setProduct] = useState([""]);

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
        <div className='product_contaner'>
            <Header />
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link style={{ textDecoration: 'none' }} to={'./home'}>home</Link></li>
                    <li className="breadcrumb-item " aria-current="page"><Link to={'/shop'}><h8 className='intopage'>shop</h8></Link></li>
                    <li className="breadcrumb-item " aria-current="page">{item[0].title}</li>
                </ol>
            </nav>



            <div className="home-section">


                <section className="padding-y">
                    <div className="container">

                        <div className="row">
                            <aside className="col-lg-6">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap img-thumbnail">
                                        <a style={{ width: '200px' }} data-fslightbox="mygalley" data-type="image" >
                                            <img width="100%" src={item[0].image} />
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <a data-fslightbox="mygalley" data-type="image" className="item-thumb">
                                            <img width="106" height="100" src={item[0].image} />
                                        </a>
                                        <a data-fslightbox="mygalley" data-type="image" className="item-thumb">
                                            <img width="106" height="100" src={item[0].image} />
                                        </a>
                                        <a data-fslightbox="mygalley" data-type="image" className="item-thumb">
                                            <img width="106" height="100" src={item[0].image} />
                                        </a>
                                        <a data-fslightbox="mygalley" data-type="image" className="item-thumb">
                                            <img width="106" height="100" src={item[0].image} />
                                        </a>
                                        <a data-fslightbox="mygalley" data-type="image" className="item-thumb">
                                            <img width="106" height="100" src={item[0].image} />
                                        </a>
                                    </div>
                                </article>
                            </aside>
                            <main className="col-lg-6">
                                <article className="ps-lg-3">
                                    <h4 className="title text-dark">{item[0].title}<br />{item[0].category}</h4>
                                    <div className="rating-wrap my-3">
                                        <ul className="rating-stars">
                                            <li style={{ width: "80%" }} className="stars-active"> <img src="assets/images/misc/stars-active.svg" alt="" /> </li>
                                            <li> <img src="assets/images/misc/starts-disable.svg" alt="" /> </li>
                                        </ul>
                                        <b className="label-rating text-warning">{item[0]?.rating?.rate}<i className="dot">⭐</i></b>

                                        <span className="label-rating text-muted"> <i className="fa fa-shopping-basket"></i> 154 orders </span>
                                        <i className="dot"></i>
                                        <span className="label-rating text-success">In stock</span>
                                    </div>

                                    <div className="mb-3">
                                        <var className="price h5">{item[0].price}</var>
                                        <span className="text-muted">/per box</span>
                                    </div>

                                    <p>Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.</p>

                                    <dl className="row">
                                        <dt className="col-3">Type:</dt>
                                        <dd className="col-9">Regular</dd>

                                        <dt className="col-3">Color</dt>
                                        <dd className="col-9">Brown</dd>

                                        <dt className="col-3">Material</dt>
                                        <dd className="col-9">Cotton, Jeans </dd>

                                        <dt className="col-3">Brand</dt>
                                        <dd className="col-9">Reebook </dd>
                                    </dl>



                                    <div className="row mb-4">
                                        <div className="col-md-4 col-6 mb-2">
                                            <label className="form-label">Size</label>
                                            <select className="form-select">
                                                <option>Medium</option>
                                                {
                                                    // <option>Small</option>
                                                    // <option>Large</option>
                                                }
                                            </select>
                                        </div>
                                        {
                                            //<div className="col-md-4 col-6 mb-3">
                                            //<label className="form-label d-block">Quantity</label>
                                            //<div className="input-group input-spinner">
                                            //                                                 <button className="btn btn-icon btn-light" type="button">
                                            //                                                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                                            //                                                         <path d="M19 13H5v-2h14v2z"></path>
                                            //                                                     </svg>
                                            //                                                 </button>
                                            //                                                 <input className="form-control text-center" placeholder="" value="14" />
                                            //                                                 <button className="btn btn-icon btn-light" type="button">
                                            //                                                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                                            //                                                         <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                            //                                                     </svg>
                                            //                                                 </button>
                                            //</div>
                                            //</div>
                                        }
                                    </div>

                                    <a href="#" className="m-2 btn  btn-warning"> Buy now </a>

                                    <div>
                                        <a href="#" className="m-2 btn  btn-primary">
                                            <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                                        <a href="#" className="m-2 btn  btn-light"> <i className="me-1 fa fa-heart"></i> Save </a>
                                    </div>

                                </article>
                                <br />
                            </main>
                        </div>

                    </div>
                </section>

            </div>






            <Footer />
        </div>
    )
}
