import React from 'react'
import './pop_categ_card.css'
export const Pop_categ_card = ({title,catimg}) => {
  return (
    <div className='popcard'>
      <img src={catimg} alt="" />
      <small>{title}</small>

    </div>
  )
}
