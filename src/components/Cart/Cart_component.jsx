import React from 'react'
import './Cart_component.css'
import { Link } from 'react-router-dom'

export const Cart_component = ({ item, deleProduct, _id }) => {
    return (
        <div className="CartItemContaner d-flex">
            <Link className='cartlinkitem d-flex' to={'/' + item.itemId.id}>
                <div className="card-body mb-5">
                    <div className="cart_img_title">
                        <div className="d-flex flex-row align-items-center">
                            <div style={{ width: '100px' }}>
                                <img src={item.itemId.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '100%' }} />
                            </div>
                            <div className="ms-3">
                                <h5>{item.itemId.title}</h5>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center">
                            <div style={{ width: '50px' }}>
                                <h5 className="fw-normal mb-0">{item.quantity}</h5>
                            </div>
                            <div style={{ width: '80px' }}>
                                <h5 className="mb-0">${item.price}</h5>
                            </div>
                            <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt"></i></a>

                        </div>
                    </div>
                </div>
            </Link >
            <button className='cartitemdlele' onClick={() => deleProduct(_id)}>delete</button>
        </div >

    )
}
