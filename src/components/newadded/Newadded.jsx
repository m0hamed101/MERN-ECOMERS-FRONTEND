import React from 'react'
import './newadded.css'

import { Link } from 'react-router-dom'
import { Card } from '../../components/card/Card'

export const Newadded = ({ product }) => {
    return (
        <div className="newadded">
            <div className="newadded_head">
                <div className='Headpart '>
                    <div className="m-3 Featured">Featured</div>
                    <div className="m-3 Popular">Popular</div>
                    <div className="m-3 New_andded">New andded</div>
                </div>
                <Link className='View_More'>View More</Link>

            </div>
            <div className="newadded_contaner">
                {product.slice(0, 8).map(item => (
                    <Card key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}
