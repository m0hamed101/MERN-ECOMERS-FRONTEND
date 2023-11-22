import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Main_header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

import Badge from '@mui/material/Badge';
import { useAuthContext } from '../../../page/auth/form/formhook/useAuthContext';
import { useLogout } from '../../../page/auth/form/formhook/useLogout';
// import { Cartcontext } from '../../../App';
import { useSelector } from 'react-redux';

export const Main_header = () => {
   const carrt = useSelector((state) => state.cart.items);
   const [scroll, setScroll] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScroll(window.scrollY > 50);
      });
   }, []);

   // login proccess
   const handleClick = () => {
      logout()
   }
   const { logout } = useLogout()
   const { user } = useAuthContext()
   return (
      <Navbar expand="lg" className={scroll ? " bg-body-tertiary w-100% fixed-top" : " bg-body-tertiary w-100%"}>

         <Container className='w-100%'>
            <div className="head_phone_icon">
               <Link to={'/cart'}>
                  <Badge badgeContent={carrt?.length} color="primary">
                     <ShoppingBagOutlinedIcon />
                  </Badge>
               </Link>
               <Link style={{ textDecoration: 'none', margin: '4px' }} to={'/favorite'}><FavoriteBorderOutlinedIcon /></Link>
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto w-100">
                  <div id='inputfullview' className=" input-group m-3">
                     <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button">Button</button>
                     </div>
                     <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                  </div>

                  <div className='GridViewRoundedIcon '>
                     <GridViewRoundedIcon />
                     <Navbar.Brand>
                        <NavDropdown title="Browse Categories" id="nav-dropdown">
                           <NavDropdown.Item href="#action/3.1">Man</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.1">Cellphones</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.1">Computer&Office</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.1">consumer Electronics</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.1">Jewelry & Accessories</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.1">Home & Garden</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.1">Kid</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.1">Outdoor fun</NavDropdown.Item>
                           <NavDropdown.Divider />

                        </NavDropdown></Navbar.Brand>
                  </div>
                  <div className="head_ul_contaner">
                     <Nav.Link><Link style={{ textDecoration: 'none' }} to={'/'}>Home</Link></Nav.Link>
                     <Nav.Link><Link style={{ textDecoration: 'none' }} to={'/shop'}>shop</Link></Nav.Link>
                     <Nav.Link><Link style={{ textDecoration: 'none' }} to={'/blog'}>blog</Link></Nav.Link>
                     <Nav.Link><Link style={{ textDecoration: 'none' }} to={'/about'}>about</Link></Nav.Link>
                     <Nav.Link><Link style={{ textDecoration: 'none' }} to={'/contact'}>contact</Link></Nav.Link>
                     <Nav.Link><Link style={{ textDecoration: 'none' }} to={'/contact'}>Hotline <span className="hotline">1900-888</span></Link></Nav.Link>
                     <div className="fullveiwlogin">
                        {// <Nav.Link>
                        //    <Link style={{ textDecoration: 'none' }} to={'/login'}>Login</Link>
                        //    <hr />
                        //    <Link style={{ textDecoration: 'none' }} to={'/register'}>SignUp</Link>
                        // </Nav.Link>
                     }
                        
                        <Nav.Link><Link style={{ textDecoration: 'none' }} to={'/contact'}>(+01)-2345-6789</Link></Nav.Link>
                        <h3 className='socal'>Follow Us</h3>
                        <div className="socal w-100 mb-3">
                           <Nav.Link><FacebookIcon /></Nav.Link>
                           <Nav.Link><TwitterIcon /></Nav.Link>
                           <Nav.Link><InstagramIcon /></Nav.Link>
                           <Nav.Link><PinterestIcon /></Nav.Link>
                           <Nav.Link><YouTubeIcon /></Nav.Link>
                        </div>
                        <nav>
                           {user && (
                              <div id='btnheader' style={{ width: "130%" }}  >
                              <Link style={{ textDecoration: "none", border: "1px solid", padding: "3px", borderRadius: "5px" }} id='btnheader' to="/login" onClick={handleClick}>LOG OUT</Link>
                              <span style={{ margin: "15px" }}>{user.user.email}</span>

                              </div>
                           )}
                           {!user && (
                              <div id='btnheader' >
                                 <Link id='btnheader' to="/login">Login</Link>
                                 <Link id='btnheader' to="/register">Signup</Link>

                              </div>
                           )}
                        </nav>
                     </div>
                     
                  </div>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

