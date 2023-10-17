import React from 'react'
import { DashboardPage, ProductsPage } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, LogOut, Register, Dashboard, CreateProduct, UpdateProduct, DeleteProduct, UpdateUser } from './pages'

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
          <Route path='/delete/:id' element={<DeleteProduct />} />
          <Route path='/update-profile' element={<UpdateUser />} />
          <Route path='/user-logout' element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
