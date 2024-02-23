import React from 'react'
import SearchComp from '../Component/SearchComp'
function Home() {
    return (
        <div className='w-full h-h93  bg-primaryWhite montserrat-custom flex justify-center items-center flex-col'>
            <h1 className='text-black text-5xl font-bold '>Find your perfect Hostel near you</h1>
            <p className='text-black text-lg font-normal py-14'>Search among different hostel,PGs and private rooms as you prefer</p>
            <SearchComp />
        </div>

    )
}

export default Home