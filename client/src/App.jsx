import React from 'react'
import { Login, Register, Dashboard, CreateProduct, UpdateProduct } from './pages'
import { DashboardPage, ProductsPage } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='font-mono'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
          <Route element={<Dashboard />}>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/products' element={<ProductsPage />} />
          </Route>
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/update/:id' element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
