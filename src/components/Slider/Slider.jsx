import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import s1 from '../../Assets/slider-1.png'
import s2 from '../../Assets/slider-2.png'
import s3 from '../../Assets/slider-3.png'

import btnbruch1 from '../../Assets/btn-brush/btn-brush-bg-1.png'
import btnbruch2 from '../../Assets/btn-brush/btn-brush-bg-2.png'
import btnbruch3 from '../../Assets/btn-brush/btn-brush-bg-3.png'

export default function Slider() {
    return (
    
        <div className='sliders'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="sliderdet">
                        <h3>Trade-in offer</h3>
                        <h2>Supper Value deals</h2>
                        <h1>on all products</h1>
                        <h4>Save more with coupons &  up to 70% off</h4>
                        <Link className='btnbruch'  style={{ backgroundImage: `url(${btnbruch1})` }}>shop now</Link>
                    </div>
                    <img src={s1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sliderdet">
                        <h3>Trade-in offer</h3>
                        <h2>Supper Value deals</h2>
                        <h1>on all products</h1>
                        <h4>Save more with coupons &  up to 70% off</h4>
                        <Link className='btnbruch'  style={{ backgroundImage: `url(${btnbruch2})` }}>shop now</Link>
                    </div>
                    <img src={s2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sliderdet">
                        <h3>Trade-in offer</h3>
                        <h2>Supper Value deals</h2>
                        <h1>on all products</h1>
                        <h4>Save more with coupons &  up to 70% off</h4>
                        <Link className='btnbruch'  style={{ backgroundImage: `url(${btnbruch3})` }}>shop now</Link>
                    </div>
                    <img src={s3} alt="" />
                    </SwiperSlide>
                

            </Swiper>
        </div>
    );
}
