// @ts-nocheck
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../assets/image.png'

const Login = () => {

  const navigate = useNavigate();
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const btnStyle = 'bg-secondary text-white py-2 rounded-md hover:opacity-90 disabled:cursor-default w-[80%]'
  const forgotPasswordStyle = 'text-secondary text-sm hover:underline hover:cursor-pointer'
  const inputStyle = 'border block bg-transparent outline-none px-3 py-2 rounded-md w-[80%]'
  
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
      const response = await fetch('https://plus-inventory.onrender.com/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
      });
      
      if (response.status === 200) {
        const data = await response.json();
        setIsLoading(false)
        localStorage.setItem('accessToken', JSON.stringify(data.token))
        // To fetch login status from backend for auth
        const authorizationResponse = await fetch("/api/users/loggedin", {
          method: "GET"
        });

        // Check if the authorization request was successful.
        if (authorizationResponse.status === 200) {
          const responseData = await authorizationResponse.json();
          // The user is now logged in and authorized.
          console.log(responseData)
        } else {
          // Handle the authorization failure.
          console.log(authorizationResponse.status)
        }
        navigate('/dashboard')
      }
  
        /* rnd_u48JT9mGjXD9moTCwMbwp05R2CIH */
    }

  return (
    <section
     className='m-0 flex flex-col sm:flex-row justify-between h-screen'
     >
      <article className='sm:w-1/3 flex flex-col gap-10 p-10'>
        <h1 className='text-4xl font-bold'>
          PLUS
        </h1>

        <div className='flex flex-col gap-1'>
          <p className='text-2xl font-semibold'>
            Sign In
          </p>
          <p>
            Please login into your account
          </p>
        </div>

        <form
         className='flex flex-col gap-6'
         onSubmit={handleSubmit}
         >
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

          <p className={forgotPasswordStyle}>
            Forgot Password?
          </p>
          <button
            type='submit' 
            disbled={isLoading}
           className={btnStyle}>
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </form>

        <p>
          Don't have an account? 
          <Link to='/sign-up' className='hover:underline ml-1'>
            Sign Up
          </Link>
        </p>

        <p className='text-red-500 text-sm'>
          {error == null ? '' : `${error} !!`}
        </p>
      </article>

      <article
       className='hidden sm:flex sm:w-2/3 items-center justify-center bg-secondary'
      >
        <img src={image} alt="" />
      </article>
    </section>
  )
}

export default Login;

