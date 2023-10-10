import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section>
      <div className='relative flex items-center justify-between px-20 py-3 shadow-sm'>
        <h1 className='text-4xl font-bold'>
          PLUS
        </h1>

        <div className='flex gap-10'>
            
        </div>

        <div className=''>
          <img src="https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?w=223&h=194&c=7&r=0&o=5&pid=1.7" className='rounded-full w-10 h-10' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Navbar
