import React, { useState, useEffect } from 'react'
import { Card } from '../../components/card/Card'
import './shop.css'
import { Checkbox } from '@mui/material'
import { Header } from '../../components/headers/Header'
import { Footer } from '../../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproducts } from '../../Redux/Slice'
export const Shop = () => {




  const product = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchproducts())
  }, [])






  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(250);
  const validateRange = (minPrice, maxPrice) => {
    if (minPrice > maxPrice) {
      // Swap the values
      [minPrice, maxPrice] = [maxPrice, minPrice];
    }

    return { minPrice, maxPrice };
  };
  const handleMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    const { minPrice: validatedMinPrice, maxPrice: validatedMaxPrice } = validateRange(newMinPrice, maxPrice);
    setMinPrice(validatedMinPrice);
    setMaxPrice(validatedMaxPrice);
  };
  const handleMaxPriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    const { minPrice: validatedMinPrice, maxPrice: validatedMaxPrice } = validateRange(minPrice, newMaxPrice);
    setMinPrice(validatedMinPrice);
    setMaxPrice(validatedMaxPrice);
  };

  return (
    <div className='shop_page_contander'>
      <Header />
      <div className='shop_contaner'>

        <div className="shopcards">

          {product.map(item => (
            <Card key={item.id} product={item} />
          ))}
        </div>

        <div className="filter">
          <div className="shopcat">
            <ul>
              <h1 className='cat'>category</h1>
              <li>shoes & Bags</li>
              <li>Blouses & Shirts</li>
              <li>Dresses</li>
              <li>Swimwear</li>
              <li>Beauty</li>
              <li>Jewelry & Watch</li>
              <li>Accessories</li>
            </ul>

          </div>
          <div className="filter_price">
            <h2 className='filter_price_head'>Filter BY Price</h2>
            <div className="slidefilter">
              <div className="price-content">
              </div>

              <div className="range-slider">
                <input type="range" className="min-price" value={minPrice} min="10" max="500" step="10" onChange={handleMinPriceChange} />
                <input type="range" className="max-price" value={maxPrice} min="10" max="500" step="10" onChange={handleMaxPriceChange} />
              </div>

            </div>

            <div>Range:</div>
            <h9>${minPrice}-${maxPrice}</h9>
            <h5>Color</h5>
            <div><Checkbox />Red(56)</div>
            <div><Checkbox />Green(56)</div>
            <div><Checkbox />Blue(56)</div>
            <h9>Item Condition</h9>
            <div><Checkbox />New(56)</div>
            <div><Checkbox />Refurbished(56)</div>
            <div><Checkbox />Used(56)</div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}




