import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section>
      <div className='flex items-center justify-between px-20 py-8 shadow-sm'>
        <h1 className='text-2xl font-bold'>
            subyMS
        </h1>

        <div className='flex gap-10 text-xl'>
            <Link to='/'>Pricing</Link>
            <Link to='/'>About Us</Link>
            <Link to='/'>Contact Us</Link>
        </div>

        <div className=''>
          <Link to='/login'>
            <button className='bg-secondary text-white px-6 py-2'>Log In</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar
