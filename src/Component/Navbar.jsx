import React from 'react'
import hsicon from '../assets/HostelSpace-logo.svg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='w-full text-black h-h7 justify-between px-10 box-border montserrat-custom flex items-center'>
      <Link className='flex items-center gap-2 ' to="/">
        <img src={hsicon} alt="." className='w-8 h-8' />
        <p className='text-lg font-semibold'>Hostel<span className='font-normal text-base'>Space</span></p>
      </Link>
      <div className='flex gap-14 '>
        <Link to="/signin" className='font-medium text-base'>Sign In</Link>
        <Link to="/registerHostel" className='font-medium text-base'>Add your hostel</Link>
      </div>
    </div>
  )
}

export default Navbar