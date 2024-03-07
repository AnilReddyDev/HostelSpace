import React from 'react'
import SearchComp from '../Component/SearchComp'
import HostelCards from '../Component/HostelCards'

function HomeNext() {
  return (
    <div className='w-full  bg-primaryWhite flex flex-col items-center'> 
        <SearchComp/>
        <HostelCards/>
    </div>
  )
}

export default HomeNext