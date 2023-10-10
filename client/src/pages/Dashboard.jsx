import SideBar from '../components/SideBar'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Dashboard = () => {

  return (
    <div>
      <Navbar />
      <section className='flex'>
        <SideBar />

        {/* For the dashboard and product page */}
        {<Outlet />}
      </section>
    </div>
  )
}

export default Dashboard
