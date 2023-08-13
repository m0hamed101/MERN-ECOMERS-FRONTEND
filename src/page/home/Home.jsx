import React from 'react'
import './Home.css'
import { Header } from '../../components/headers/Header'
import Slider from '../../components/Slider/Slider'
import { Free_shoping } from '../../components/free_shoping/Free_shoping'
import { Newadded } from '../../components/newadded/Newadded'
import { Popular_Categories } from '../../components/Popular_Categories/Popular_Categories'
import { New_arrivals } from '../../components/New_Arrivals/New_arrivals'
import { Offer } from '../../components/offers/Offer'
import { Footer } from '../../components/Footer/Footer'

export const Home = ({ product }) => {
  return (
    <div>
      <Header />
      <Slider />
      <div className='home_contaner'>
        <Free_shoping />
        <Newadded product={product} />
        <Popular_Categories />
        <Offer />
        <New_arrivals />
      </div>
      <Footer />

    </div>

  )
}
