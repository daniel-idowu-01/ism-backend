import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Navbar = () => {

  const [username, setUsername] = useState('')
  const IMAGE_URL = "https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?w=223&h=194&c=7&r=0&o=5&pid=1.7"

  // to get user's username from the database
  useEffect(() => {
    axios.get(`/api/users/getuser`)
    .then((response) => {
        setUsername(response.data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  return (
    <section>
      <div className='relative flex items-center justify-between px-20 py-3 shadow-sm'>
        <h1 className='text-4xl font-bold'>
          PLUS
        </h1>

        {/* <div className='flex gap-10'>
            
        </div> */}

        <div className='flex items-center gap-1'>
          <img
            src={IMAGE_URL}
            className='rounded-full w-10 h-10'
            alt=""
          />
          <p className='text-sm'>{username}</p>
        </div>
      </div>
    </section>
  )
}

export default Navbar
