import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPriceFilter } from '../features/HostelSlice';

function PriceFilter() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPriceFilter(parseInt(minPrice), parseInt(maxPrice)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Min Price:</label>  
      <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />

      <label>Max Price:</label>  
      <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />

      <button type="submit">Filter by Price</button>
    </form>
  );
}

export default PriceFilter;
