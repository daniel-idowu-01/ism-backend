// @ts-nocheck
import axios from 'axios'; 
import React, { useState } from 'react'
import image from '../assets/image.png'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // to submit form data
    const handleSubmit = async (e) => {
      e.preventDefault();

      setIsLoading(true)
      axios.delete(`/api/products/${id}`)
      .then(response => {
        console.log('successful')
      })
      .catch(error => {
        console.log(error)
      });
      setIsLoading(false)
      navigate('/products')
  }

  return (
    <section className='m-0 flex flex-col sm:flex-row justify-between h-screen'>
      <article className='sm:w-1/3 flex flex-col gap-10 p-10'>
        <p className='text-2xl text-center mb-5 font-semibold'>Delete Product</p>
        <form
          className='flex flex-col gap-5'
          onSubmit={handleSubmit}
        >
          <p className='text-center text-3xl'>Are you sure you want to delete this product</p>

          <button
            type='submit'
            disabled={isLoading}
            className='bg-secondary text-white rounded-md py-2 hover:bg-opacity-90'>
            {isLoading ? 'Loading...' : 'Delete Product'}
          </button>
        </form>
      </article>
      
      <article
       className='hidden sm:flex sm:w-2/3 items-center justify-center bg-secondary'
      >
        <img src={image} alt="" />
      </article>
      </section>
  )
}

export default DeleteProduct
