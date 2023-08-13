import React from 'react'
import { Link } from 'react-router-dom';
// // img
import applestoreimg from '../../Assets/New folder/app-store.jpg'
import googleplayimg from '../../Assets/New folder/google-play.jpg'
import paymentmethodimg from '../../Assets/New folder/payment-method.png'

// // icons
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Instagram';



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
                                    {/*<div>Follow Us</div>*/}
                                </div>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">

                                <h5 className=''>About Us</h5>
                                <div><Link to={'/about'}>About Us</Link></div>
                                <div><Link to={'/cart'}>Delivery Information</Link></div>
                                {/*<div>Privacy Policy</div>
                                <div>Terms & Conditions</div>*/}
                                <div><Link to={'/Contact'}>Contact Us</Link></div>
                                <div><Link to={'/Contact'}>Support Center</Link></div>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">


                                <h5>Cart List</h5>
                                <div><Link to={'/cart'}>View Cart</Link></div>
                                <div><Link to={'/cart'}>My Wishilst</Link></div>
                                <div>Track My Order</div>
                                <div>Order</div>
                                <div>Help</div>

                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-lg-2" style={{ textAlign: 'center' }}>
                                <h5>App</h5>
                                <div className="">
                                    <img src={applestoreimg} alt="" />
                                    <img src={googleplayimg} alt="" />
                                </div>
                                <img src={paymentmethodimg} alt="" />
                            </div>
                        </div>
                        {/* Grid row */}
                    </section>
                    {/* Section: Links */}

                </div>
            </footer>
            {/* Footer */}
        </div>
        /* End of .container */
    );
};
    // <div className='Footer'>
    //     <div className="contactfooter m-3">
    //         <div>Contact</div>
    //         <h7><h5>Address:</h5> 562 Wellington Road, Street 32, San Francisco</h7>
    //         <h7><h5>Phone:</h5> +01 2222 365 /(+91) 01 2345 6789</h7>
    //         <h7><h5>Hours:</h5> 10:00 - 18:00, Mon - Sat</h7>
    //         <div>Follow Us</div>
    //         <div className="socal w-100">
    //             <Link className='pr-3'><FacebookIcon /></Link>
    //             <Link className='pr-3'><TwitterIcon /></Link>
    //             <Link className='pr-3'><InstagramIcon /></Link>
    //             <Link className='pr-3'><PinterestIcon /></Link>
    //             <Link className='pr-3'><YouTubeIcon /></Link>
    //         </div>

    //     </div>
    //     <div className="Aboutfooter">
    //         <h4>About Us</h4>
    //         <div>About Us</div>
    //         <div>Delivery Information</div>
    //         <div>Privacy Policy</div>
    //         <div>Terms & Conditions</div>
    //         <div>Contact Us</div>
    //         <div>Support Center</div>

    //     </div>
    //     <div className="MayAccountfooter">

    //         <h4>sign in</h4>
    //         <div>View Cart</div>
    //         <div>My Wishilst</div>
    //         <div>Track My Order</div>
    //         <div>Help</div>
    //         <div>Order</div>




    //     </div>
    //     <div className="appfooter">
    //         <h3>App</h3>
    //         <div> From App Store or Google Play</div>
    //         <div className="footerappimg">
    //             <img src={applestoreimg} alt="" />
    //             <img src={googleplayimg} alt="" />
    //         </div>
    //         <small>Secured Payment Gateways</small>
    //         <img src={paymentmethodimg} alt="" />

    //     </div>









    // </div>
