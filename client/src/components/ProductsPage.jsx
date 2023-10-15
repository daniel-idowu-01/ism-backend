import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  })

  return (
    <section className='p-10 w-[90%]'>
      <Link to='/create-product'>
        <button
          className='mb-2 border px-2  float-right'
        >
          +
        </button>
      </Link>
      <table className='w-full text-center table-auto'>
        <tr>
            <th className='font-bold border-4 p-2'>Name</th>
            <th className='font-bold border-4 p-2'>Sku</th>
            <th className='font-bold border-4 p-2'>Category</th>
            <th className='font-bold border-4 p-2'>Quantity</th>
            <th className='font-bold border-4 p-2'>Price</th>
            <th className='font-bold border-4 p-2'>Description</th>
        </tr>
  
          {products.map(product => (
            <tr>
              <td className='border p-2'>{product.name}</td>
              <td className='border p-2'>{product.sku}</td>
              <td className='border p-2'>{product.category}</td>
              <td className='border p-2'>{product.quantity}</td>
              <td className='border p-2'>{product.price}</td>
              <td className='border p-2'>{product.description}</td>
            </tr>
          ))}
      </table>
    </section>
  )
}

export default ProductsPage
