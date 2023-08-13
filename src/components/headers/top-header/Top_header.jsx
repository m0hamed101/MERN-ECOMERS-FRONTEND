import React from 'react'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import './top_header.css'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../page/auth/form/formhook/useAuthContext'
import { useLogout } from '../../../page/auth/form/formhook/useLogout'

export const Top_header = () => {

    const handleClick = () => {
        logout()
    }

    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <div className="main_header_contaner">

            <div className='Main_header'>

                <right>
                    <HeadphonesOutlinedIcon />
                    <Link style={{ textDecoration: 'none', width: "125px" }} to={'/contact'}>(+01)-2345-6789</Link>
                </right>

                <center className='cnterhead'>
                    <Link style={{ textDecoration: 'none' }} to={'/contact'} className='location'>
                        <LocationOnOutlinedIcon />
                        <h9>Our location</h9>
                    </Link>
                    <div className='center'>text is hear </div>

                    <div className="language">
                        <PublicOutlinedIcon />
                        <h9>Englihs</h9>
                    </div>
                </center>


                <nav>
                    {user && (
                        <div id='btnheader' style={{ width: "130%" }}  >
                            <span style={{ margin: "15px" }}>{user.user.email}</span>
                            <Link style={{ textDecoration: "none", border: "1px solid", padding: "3px", borderRadius: "5px" }} id='btnheader' to="/login" onClick={handleClick}>LOG OUT</Link>

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
    )
}