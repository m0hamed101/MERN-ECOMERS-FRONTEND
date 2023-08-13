import React from 'react'
import './free_shoping.css'

import feature1 from '../../Assets/feature/feature-1.png'
import feature2 from '../../Assets/feature/feature-2.png'
import feature3 from '../../Assets/feature/feature-3.png'
import feature4 from '../../Assets/feature/feature-4.png'
import feature5 from '../../Assets/feature/feature-5.png'
import feature6 from '../../Assets/feature/feature-6.png'

export const Free_shoping = () => {
    return (

        <div className='free_Shipping_contaner'>

            <div className="free_Shipping">
                <img src={feature1} alt="" />
                <div className="free_Shipping_h1">free Shipping</div>
            </div>

            <div className="free_Shipping">
                <img src={feature2} alt="" />
                <div className="free_Shipping_h2">free Shipping</div>
            </div>

            <div className="free_Shipping">
                <img src={feature3} alt="" />
                <div className="free_Shipping_h3">free Shipping</div>
            </div>

            <div className="free_Shipping">
                <img src={feature4} alt="" />
                <div className="free_Shipping_h4">free Shipping</div>
            </div>

            <div className="free_Shipping">
                <img src={feature5} alt="" />
                <div className="free_Shipping_h5">free Shipping</div>
            </div>

            <div className="free_Shipping">
                <img src={feature6} alt="" />
                <div className="free_Shipping_h6">free Shipping</div>
            </div>



        </div>
    )
}
