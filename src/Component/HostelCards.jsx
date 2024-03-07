import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { STATUSES } from '../features/HostelSlice';
import { Link } from 'react-router-dom';
import FilterComp from './FilterComp';
function HostelCards() {
  const { data: HostelCards, status, filter } = useSelector(state => state.hostel);
  if(status === STATUSES.LOADING){
    return <p className=' text-2xl text-primaryViolet'>Loading...</p>
  }
  if(status === STATUSES.ERROR){
    return <p className=' text-2xl text-primaryViolet'><span className=' text-red-600'>Error!</span> Something went wrong</p>
  }
  return (
    <div className='w-full grid  grid-cols-12  justify-center'>
      <div className=' col-span-3 sticky top-5 h-96 border-2 border-black'>
    <FilterComp/>
      </div>
      <div className=' col-span-9  flex flex-col items-center'>
      {HostelCards.map(hostel => (
        <Link  to={`/hostels?id=${hostel.id}`} key={hostel.id} className='border-4 border-primaryWhite hover:border-primaryViolet bg-white  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl montserrat-custom  gap-10 overflow-hidden m-2 w-4/5   grid grid-cols-12'>
          <div className=' col-span-2  h-full flex justify-center items-center'>
            <img src={hostel.image} alt="img" className=' px-4 py-4 rounded-xl' />
          </div>
          <div className='col-span-7  h-full py-4 flex flex-col justify-center gap-5  items-start'>
            <h1 className='text-2xl font-semibold'>{hostel.title}</h1>
            <p className='text-lg'>{hostel.description}</p>
            <p className='text-lg'>Rating : {hostel.rating.rate}</p>
          </div>
          <div className='col-span-3  flex gap-5 flex-col items-start justify-center'>
            <p className=' bg-lightViolet flex justify-center items-center  h-14 text-primaryViolet text-xl font-bold  min-w-mw70'>${hostel.price}<span className='font-medium'>/mo</span></p>
            <p className='text-primaryViolet text-sm font-semibold flex gap-2 justify-center items-center '>click to know more
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="font-semibold w-4 h-4">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>

            </p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default HostelCards;