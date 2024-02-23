import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeNext from './Pages/HomeNext'
import Login from './Pages/Login'
import Register from './Pages/Register'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<HomeNext/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
