import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/Products';
import { DashboardPage, ProductsPage } from './components';
import
{ Login, LogOut, Register, Dashboard, CreateProduct, UpdateProduct, DeleteProduct, UpdateUser, ChangePassword }
from './pages'

function App() {

  return (
    <div className='app'>
      <ProductProvider>
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
          <Route path='/change-password' element={<ChangePassword />} />
        </Routes>
      </ProductProvider>
    </div>
  )
}

export default App
