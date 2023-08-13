import React from 'react'
import { Header } from '../../components/headers/Header'
import { Footer } from '../../components/Footer/Footer'
import './aboutus.css'
// img
import aboutus from '../../Assets/aboutus/about-1.png'
import avatar1 from '../../Assets/aboutus/avatar-1.jpg'
// icon

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
export const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className="aboutuscontaner mb-5">
                <div className="aboutus_contaner_firest">
                    <div className="ourcompany">
                        <h3 className='m-4'>OUR COMPANY</h3>
                        <h1>We are Building The Destination for Gatting Things Done</h1>
                        <div>Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices purus dolor erat bibendum sapien metus.</div>
                        <div>Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices purus dolor erat bibendum sapien metus.</div>
                    </div>
                    <div className="ourcompany_img"><img src={aboutus} alt="" /></div>



                </div>
                <hr />
                <div className="aboutus_contaner_secend">
                    <h3>OUR TEAM</h3>
                    <h1>Top team of experts</h1>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloribus inventore eum, iure ipsum repudiandae natus. Nobis quia veritatis, ullam fugit voluptatum accusantium voluptas soluta? Dolor ab non pariatur saepe?</div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="aboutuscard">
                        <img src={avatar1} alt="" />
                        <div className="datacardus">
                            <h5>pratic Adams</h5>
                            <h7>CEO 7 Co-founder</h7>
                            <div>
                                <FacebookIcon />
                                <TwitterIcon />
                                <InstagramIcon />
                                <PinterestIcon />
                            </div>

                        </div>
                    </div>
                    <div className="aboutuscard">
                        <img src={avatar1} alt="" />
                        <div className="datacardus">
                            <h5>pratic Adams</h5>
                            <h7>CEO 7 Co-founder</h7>
                            <div>
                                <FacebookIcon />
                                <TwitterIcon />
                                <InstagramIcon />
                                <PinterestIcon />
                            </div>

                        </div>
                    </div>
                    <div className="aboutuscard">
                        <img src={avatar1} alt="" />
                        <div className="datacardus">
                            <h5>pratic Adams</h5>
                            <h7>CEO 7 Co-founder</h7>
                            <div>
                                <FacebookIcon />
                                <TwitterIcon />
                                <InstagramIcon />
                                <PinterestIcon />
                            </div>

                        </div>
                    </div>
                    <div className="aboutuscard">
                        <img src={avatar1} alt="" />
                        <div className="datacardus">
                            <h5>pratic Adams</h5>
                            <h7>CEO 7 Co-founder</h7>
                            <div>
                                <FacebookIcon />
                                <TwitterIcon />
                                <InstagramIcon />
                                <PinterestIcon />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
