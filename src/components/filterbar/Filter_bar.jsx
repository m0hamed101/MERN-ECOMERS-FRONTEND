import React, { useState } from "react";
import './filter.css'

export const FilterBar = () => {
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
    <div className="slider">
      <h4>Price Range Slider</h4>

      <div className="price-content">
        <div>
          <label>Min</label>
          <p id="min-value">${minPrice}</p>
        </div>

        <div>
          <label>Max</label>
          <p id="max-value">${maxPrice}</p>
        </div>
      </div>

      <div className="range-slider">
        <input type="range" className="min-price" value={minPrice} min="10" max="500" step="10" onChange={handleMinPriceChange} />
        <input type="range" className="max-price" value={maxPrice} min="10" max="500" step="10" onChange={handleMaxPriceChange} />
      </div>
    </div>
  );
};

