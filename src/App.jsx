import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeNext from './Pages/HomeNext'
import Login from './Pages/Login'
import Register from './Pages/Register'
import RegisterHostel from './Pages/RegisterHostel'
import Profile from './Pages/Profile'
import ExactHostel from './Pages/ExactHostel'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<HomeNext/>} />
          <Route path='/signin' element={<Login/>} />
          <Route path='/signup' element={<Register/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/registerHostel' element={<RegisterHostel/>} />
          <Route path='/hostels' element={<ExactHostel/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
