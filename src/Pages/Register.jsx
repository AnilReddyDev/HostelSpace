import React,{useState} from 'react'
import homelogo from '../assets/HostelSpace-logo.svg'
import { Link } from 'react-router-dom'
function Register() {
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleInput = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetail);
  }
  return (
    <div className='w-full h-h93 bg-primaryWhite montserrat-custom flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='bg-white w-auto px-10 flex py-8 gap-6 flex-col items-center rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <img src={homelogo} alt="HostelSpace" className='w-10 h-14 -mb-2'/>
            <h1 className='text-2xl font-semibold '>Sign Up</h1>
            <input type="name" onChange={handleInput} name="name" className=' w-72 h-10 px-4 rounded-md outline outline-mildViolet  focus:outline-primaryViolet outline-1' placeholder='Name'/>
            <input type="email" onChange={handleInput}  name="email" className=' w-72 h-10 px-4 rounded-md outline outline-mildViolet  focus:outline-primaryViolet outline-1' placeholder='email'/>
            <input type="password" onChange={handleInput}  name="password" className=' w-72 h-10 px-4 rounded-md outline outline-mildViolet  focus:outline-primaryViolet outline-1' placeholder='password'/>
            <button type="submit" className='w-72 flex h-10 rounded-full justify-center items-center text-white bg-primaryViolet font-medium'>Sign Up</button>
            <p className='text-sm'>Already an user? <Link className=' text-primaryViolet font-semibold cursor-pointer' to="/signin">Sign In here</Link></p>
        </form>
    </div>
  )
}

export default Register