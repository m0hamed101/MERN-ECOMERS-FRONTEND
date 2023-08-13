import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Popular_Categories.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Pop_categ_card } from './pop_categ_card/pop_categ_card';

// image
import popcardimg1 from  '../../Assets/thumbnail/thumbnail-3.jpg'
import popcardimg2 from  '../../Assets/thumbnail/thumbnail-4.jpg'
import popcardimg3 from  '../../Assets/thumbnail/thumbnail-5.jpg'
import popcardimg4 from  '../../Assets/thumbnail/thumbnail-6.jpg'
import popcardimg5 from  '../../Assets/thumbnail/thumbnail-7.jpg'
import popcardimg6 from  '../../Assets/thumbnail/thumbnail-8.jpg'
import popcardimg7 from  '../../Assets/thumbnail/thumbnail-9.jpg'
import popcardimg8 from  '../../Assets/thumbnail/product-16-6.jpg'

export const Popular_Categories = () => {
    return (
        <div className='mySwiper'>
            <h3>Popular Categories</h3>
            <Swiper
                breakpoints={{

                    320: {
                        width: 320,
                        slidesPerView: 1,
                    },

                    481: {
                        width: 481,
                        slidesPerView: 2,
                    },

                    769: {
                        width: 769,
                        slidesPerView: 3,
                    },

                    1025: {
                        width: 1025,
                        slidesPerView: 4,
                    },

                    1201: {
                        width: 1201,
                        slidesPerView: 6,
                    },

                }}

                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='SWI'><Pop_categ_card catimg={popcardimg1} title={'Bage'} /></SwiperSlide>
                <SwiperSlide className='SWI'><Pop_categ_card catimg={popcardimg2} title={'Hats'} /></SwiperSlide>
                <SwiperSlide className='SWI'><Pop_categ_card catimg={popcardimg3} title={'T-Shirt'} /></SwiperSlide>
                <SwiperSlide className='SWI'><Pop_categ_card catimg={popcardimg4} title={'sandn'} /></SwiperSlide>
                <SwiperSlide className='SWI'><Pop_categ_card catimg={popcardimg5} title={'scarf Cap'} /></SwiperSlide>
                <SwiperSlide className='SWI'><Pop_categ_card catimg={popcardimg6} title={'Jumpsuits'} /></SwiperSlide>
                <SwiperSlide className='SWI'><Pop_categ_card catimg={popcardimg7} title={'Shoes'} /></SwiperSlide>
                <SwiperSlide className='SWI'><Pop_categ_card catimg={popcardimg8} title={'Pillowcase'} /></SwiperSlide>
            </Swiper>
        </div>
    );
}
