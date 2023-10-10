import React from 'react'
import Navbar from './components/Navbar'
import { Home, Login, Register, Dashboard } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='font-mono'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
