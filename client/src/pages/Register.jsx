import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// @ts-ignore
import image from '../assets/image.png'

const Register = () => {

  const navigate = useNavigate();

  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const btnStyle = 'bg-secondary text-white py-2 rounded-md hover:opacity-90'
  const inputStyle = 'border block bg-transparent outline-none px-3 py-2 rounded-md w-full'

  // to update form data when user inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

    // to submit form data
    const handleSubmit = async (e) => {
      e.preventDefault();

      setIsLoading(true)
      const response = await fetch('/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
  
    
        const data = await response.json();
        setIsLoading(false)

        if(data._id) {
          navigate('/')
        }
    }

  return (
    <section
     className='m-0 flex flex-col sm:flex-row justify-between h-screen'>
      <article className='sm:w-1/3 flex flex-col gap-10 p-10'>
        <h1 className='text-4xl font-bold'>
          PLUS
        </h1>

        <div className='flex flex-col gap-1'>
          <p className='text-2xl font-semibold'>
            Sign Up
          </p>
          <p>
            Please create an account
          </p>
        </div>

        <form
         className='flex flex-col gap-6' 
         onSubmit={handleSubmit}
         >
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="name"
              id="name"
              className={inputStyle} 
              onChange={handleChange} 
              />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input
             type="email" 
             name="email" 
             id="email" 
             className={inputStyle} 
             onChange={handleChange} 
             />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="password">Password</label>
            <input
             type="password" 
             name="password" 
             id="password" 
             className={inputStyle} 
             onChange={handleChange} 
             />
          </div>

          <button
           type='submit'
           disabled={isLoading}
           className={btnStyle}>
            {isLoading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>

        <p>
          Have an account?  
          <Link to='/' className='hover:underline ml-1'>
            Sign In
          </Link>
        </p>

        <p>{error}</p>
      </article>

      <article 
      className='hidden sm:flex sm:w-2/3 items-center justify-center bg-secondary'
      >
        <img src={image} alt="" />
      </article>
    </section>
  )
}

export default Register
