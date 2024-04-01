import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function FilterComp() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [min, setMin] = useState(searchParams.get('min') );
  const [max, setMax] = useState(searchParams.get('max') );
  const [IndianToilet, setIndianToilet] = useState(searchParams.get('IndianToliet') === 'true');

  useEffect(() => {
    if (min !== searchParams.get('min')) {
      setSearchParams((params) => {
        params.set('min', min);
        return params;
      });
    }
    if (max !== searchParams.get('max')) {
      setSearchParams((params) => {
        params.set('max', max);
        return params;
      });
    }
    if (IndianToilet !== (searchParams.get('IndianToliet') === 'true')) {
      setSearchParams((params) => {
        params.set('IndianToliet', IndianToilet.toString());
        return params;
      });
    }
  }, [min, max, IndianToilet, searchParams, setSearchParams]);

 
  return (
    <div className='w-full h-96 text-black flex p-5 flex-col'>
      <h1>Filter</h1>
      <h1>Price Range</h1>
      <div className="flex flex-col gap-3 ">
        <label>Min : <input type="text" name="min" id="min" value={min}
          onChange={(e) => setMin(e.target.value)} /></label>
        <label>Max : <input type="text" name="max" id="max" value={max}
          onChange={(e) => setMax(e.target.value)} /></label>
        <label>IndianToilet : <input type="checkbox" name="IT" id="IT" checked={IndianToilet}
          onChange={(e) => setIndianToilet(e.target.checked)} /></label>
      </div>
    </div>
  );
}

export default FilterComp;
