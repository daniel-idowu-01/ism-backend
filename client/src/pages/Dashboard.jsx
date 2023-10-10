import SideBar from './SideBar'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductsPage from './ProductsPage'
import DashboardPage from './DashboardPage'

const Dashboard = () => {

  const [link, setLink] = useState('/')

  return (
    <div>
      <Navbar />
      <section className='flex'>
        <SideBar 
        // @ts-ignore
        setLink={setLink} 
        />

        {
          link === '/'
          ?
          <DashboardPage />
          :
          <ProductsPage />
        }
      </section>
    </div>
  )
}

export default Dashboard
