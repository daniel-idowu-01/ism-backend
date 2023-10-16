import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'

const ProductsPage = () => {

  
  const [products, setProducts] = useState([])

  // to fetch the products of the user from the database
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
          className='text-xl mb-2 border-4 px-2 float-right hover:bg-slate-50'
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
            <th className='font-bold border-4 p-2'></th>
        </tr>
  
          {products.map(product => (
            <tr>
              <td className='border p-2'>{product.name}</td>
              <td className='border p-2'>{product.sku}</td>
              <td className='border p-2'>{product.category}</td>
              <td className='border p-2'>{product.quantity}</td>
              <td className='border p-2'>{product.price}</td>
              <td className='border p-2'>{product.description}</td>
              <td
                className='flex justify-center items-center hover:cursor-pointer hover:bg-slate-50 border p-2'
              >
                <Link to={`/update/${product._id}`}>
                  <AiOutlineEdit />
                </Link>
              </td>
            </tr>
          ))}
      </table>
    </section>
  )
}

export default ProductsPage
