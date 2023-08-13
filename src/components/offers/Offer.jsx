import React from 'react'
import offerimg1 from '../../Assets/offers/banner-1.png'
import offerimg2 from '../../Assets/offers/banner-2.png'
import offerimg3 from '../../Assets/offers/banner-3.png'
import { Link } from 'react-router-dom'
import './Offer.css'

export const Offer = () => {
    return (

        <div className='offer'>

            <div className="offerimg1" style={{ backgroundImage: `url(${offerimg1})` }}>
            <small>smart offer</small>
            <h4>save 20% on woman bag </h4>
            <Link to={'./shop'}>shop Now</Link>
            </div>

            <div className="offerimg2" style={{ backgroundImage: `url(${offerimg2})` }}>
            <small>smart offer</small>
            <h4>save 20% on woman bag </h4>
            <Link to={'./shop'}>shop Now</Link>
            </div>

            <div className="offerimg3" style={{ backgroundImage: `url(${offerimg3})` }}>
            <small>smart offer</small>
            <h4>save 20% on woman bag </h4>
            <Link to={'./shop'}>shop Now</Link>
            </div>



        </div>
    )
}
