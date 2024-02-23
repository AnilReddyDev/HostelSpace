import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchHostels } from './features/HostelSlice';
import { STATUSES } from './features/HostelSlice';
import PriceFilter from './Component/PriceFilter';
function App() {
  // const hostels = useSelector((state) => state.hostel.data);
  // const status = useSelector((state) => state.hostel.status);
  const { data: hostels, status, filters } = useSelector((state) => state.hostel)
  const dispatch = useDispatch();

  async function getData(){
      // const res = await fetch(`https://fakestoreapi.com/products`);
      // const data = await res.json();
    
      // setproducts(data)
      dispatch(fetchHostels())
  }

  const filteredHostels = hostels.filter(product => {
    if (filters.priceRange.min && product.price < filters.priceRange.min) return false;
    if (filters.priceRange.max && product.price > filters.priceRange.max) return false;
    if (filters.category && product.category !== filters.category) return false;

    return true;
  });
  

  if(status === STATUSES.LOADING){ return <p>Loading..</p>}
  if(status === STATUSES.ERROR){ return <p>Error Something went wrong</p>}



  return (
    <div className=' text-3xl text-black'>
      <PriceFilter />
      <button onClick={()=> getData()} className='bg-black p-2 text-white'>Show Data</button>
      {filteredHostels.map(product => (
        <div key={product.id} className='border-2 border-black m-2 '>
          <h1>{product.category}</h1>
          <p>{product.price}</p>
        </div>
      ))}


      
    </div>
  )
}

export default App