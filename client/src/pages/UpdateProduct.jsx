// @ts-nocheck
import React, { useState } from 'react'
import image from '../assets/image.png'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const inputStyle = 'w-full border outline-none px-4 py-2 rounded-md'

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
      const response = await fetch(`/api/products/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
  
    
        const data = await response.json();
      setIsLoading(false)
      navigate('/products')
  }

  return (
    <section className='m-0 flex flex-col sm:flex-row justify-between h-screen'>
      <article className='sm:w-1/3 flex flex-col gap-10 p-10'>
        <p className='text-2xl text-center mb-5 font-semibold'>Update Product</p>
        <form
          className='flex flex-col gap-5'
          onSubmit={handleSubmit}>
        
          <input 
            className={inputStyle} 
            type="text"
            name="name"
            id="name"
            placeholder='Product Name'
            onChange={handleChange}
          />
          <input 
          className={inputStyle} 
            type="text"
            name="sku"
            id="Sku"
            placeholder='Sku'
            onChange={handleChange}
          />
    
          <input 
            className={inputStyle} 
            type="text"
            name="category"
            id="category"
            placeholder='Category'
            onChange={handleChange}
          />
          <input 
          className={inputStyle} 
            type="number"
            name="quantity"
            id="quantity"
            placeholder='Quantity' 
            onChange={handleChange}
          />
            
          <input 
            className={inputStyle} 
            type="number"
            name="price"
            id="price"
            placeholder='Product Price'
            onChange={handleChange}
          />
      
          <input 
            className={inputStyle} 
            type="text"
            name="description"
            id="description"
            placeholder='Description'
            onChange={handleChange}
          />

          <button
            disabled={isLoading}
            className='bg-secondary text-white rounded-md py-2 hover:bg-opacity-90'>
            {isLoading ? 'Loading...' : 'Update Product'}
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

export default UpdateProduct
