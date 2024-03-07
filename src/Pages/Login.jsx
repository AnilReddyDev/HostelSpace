import React from 'react'
import homelogo from '../assets/HostelSpace-logo.svg'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='w-full h-h93 bg-primaryWhite montserrat-custom flex justify-center items-center'>
        <form className='bg-white w-auto px-10 flex py-8 gap-6 flex-col items-center rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <img src={homelogo} alt="HostelSpace" className='w-10 h-14 -mb-2'/>
            <h1 className='text-2xl font-semibold '>Sign In</h1>
            <input type="email" name="email" className=' w-72 h-10 px-4 rounded-md outline outline-mildViolet  focus:outline-primaryViolet outline-1' placeholder='email'/>
            <input type="password" name="password" className=' w-72 h-10 px-4 rounded-md outline outline-mildViolet  focus:outline-primaryViolet outline-1' placeholder='password'/>
            <div className='w-72 -my-1 flex justify-end'>
                <Link className='text-primaryViolet text-sm cursor-pointer'>forgot password</Link>
            </div>
            <button type="button" className='w-72 flex h-10 rounded-full justify-center items-center text-white bg-primaryViolet font-medium'>Sign In</button>
            <p className='text-sm'>New user? <Link className=' text-primaryViolet font-semibold cursor-pointer' to="/signup">Create an account</Link></p>
        </form>
    </div>
  )
}

export default Login