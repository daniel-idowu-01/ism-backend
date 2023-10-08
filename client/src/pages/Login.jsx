// @ts-nocheck
import React from 'react'
import image from '../assets/image.png'

const Login = () => {

  const inputStyle = 'border block bg-transparent outline-none px-3 py-2 rounded-md w-full'

  return (
    <section className='m-0 flex justify-between h-screen'>
      <article className='w-1/3 flex flex-col gap-10 p-10'>
        <h1 className='text-3xl font-bold'>PLUS</h1>

        <div>
          <p>Sign In</p>
          <p>Please login into your account</p>
        </div>

        <form action="" className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className={inputStyle} />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className={inputStyle} />
          </div>

          <p className='text-secondary text-sm'>Forgot Password?</p>
          <button type='submit' className='bg-secondary text-white py-2 rounded-md'>Log In</button>
        </form>
      </article>

      <article className=' w-2/3 flex items-center justify-center bg-secondary'>
        <img src={image} alt="" />
      </article>
    </section>
  )
}

export default Login;

