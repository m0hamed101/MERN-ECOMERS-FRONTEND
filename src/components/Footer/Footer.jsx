import React from 'react'
import { Link } from 'react-router-dom';
export const Footer = () => {
    return (
        <div className="container" style={{ marginBottom: '70px' }}>
            {/* Footer */}
            <footer className="text-center text-lg-start ">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Links */}
                    <section>
                        {/* Grid row */}
                        <div className="row">
                            {/* Grid column */}
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <div>
                                    <h7><h5>Address:</h5> 562 Wellington Road, Street 32, San Francisco</h7>
                                    <h7><h5>Phone:</h5> +01 2222 365 /(+91) 01 2345 6789</h7>
                                    <h7><h5>Hours:</h5> 10:00 - 18:00, Mon - Sat</h7>
                                </div>
                            </div>
                            
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">

                                <h5 className=''>About Us</h5>
                                <div><Link to={'/about'}>About Us</Link></div>
                                <div><Link to={'/cart'}>Delivery Information</Link></div>
                                
                                <div><Link to={'/Contact'}>Contact Us</Link></div>
                                <div><Link to={'/Contact'}>Support Center</Link></div>
                            </div>
                            
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">


                                <h5>Cart List</h5>
                                <div><Link to={'/cart'}>View Cart</Link></div>
                                <div><Link to={'/cart'}>My Wishilst</Link></div>
                                <div>Track My Order</div>
                                <div>Order</div>
                                <div>Help</div>

                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    );
};