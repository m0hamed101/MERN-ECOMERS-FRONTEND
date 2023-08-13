import React, { useEffect, useState,useContext } from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Search_header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

import img from '../../../Assets/logo.png'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';



export const Search_header = () => {
    
const carrt =useSelector((state)=>state.cart.items);



    return (
        <div className="search_header_contaner">
            <Link to={'/'} className="logo"><img className='logoimg' src={img} alt="" /></Link>
            <div className="searchbar" >

                <NavDropdown title="Browse Categories" id="basic-nav-dropdown">
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
                </NavDropdown>
                

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                </div>

            </div>
            <div className="headcart m-3">

                <Link to={'/cart'}>
                    <Badge badgeContent={carrt?.length} color="primary">
                        <ShoppingBagOutlinedIcon />
                    </Badge>
                </Link>

                <Link to={'./favorets'} className='m-4'><FavoriteBorderOutlinedIcon /></Link>
            </div>


        </div>
    )
}

        // <Link to={'./cart'}><ShoppingBagOutlinedIcon className='m-4' /></Link>