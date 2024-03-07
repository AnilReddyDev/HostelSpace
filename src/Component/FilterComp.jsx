import React from 'react'
import { useSearchParams } from 'react-router-dom';
import  {useNavigate} from 'react-router-dom'
function FilterComp() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className='w-full h-96  text-black flex p-5 flex-col'>
        <h1>Filter </h1>
        <h1>Price Range</h1>
        <div className="flex flex-col gap-3 ">
          <label>Min : <input type="text" name="min" id="min" value={searchParams.get('min')} onChange={(e) => setSearchParams({ min: e.target.value })} /></label>
          <label>Max : <input type="text" name="max" id="max" value={searchParams.get('max')} onChange={(e) => setSearchParams({ max: e.target.value })} /></label>
        </div>


    </div>
  )
}

export default FilterComp