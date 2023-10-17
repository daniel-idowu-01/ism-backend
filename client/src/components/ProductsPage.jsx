import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const ProductsPage = () => {
  
  const [products, setProducts] = useState([])

  const tableHead = 'text-center bg-gray-300 p-3 font-semibold text-left'

  // to fetch the products of the user from the database
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='p-10 w-[90%]'>
      <Link to='/create-product'>
        <button
          className='text-xl mb-2 border-4 px-2 float-right hover:bg-slate-50'
        >
          +
        </button>
      </Link>
      <table className='text-center w-full border-collapse table-auto'>
        <thead>
          <tr>
              <th className={tableHead}>Name</th>
              <th className={tableHead}>Sku</th>
              <th className={tableHead}>Category</th>
              <th className={tableHead}>Quantity</th>
              <th className={tableHead}>Price</th>
              <th className={tableHead}>Description</th>
              <th className={tableHead}></th>
          </tr>
        </thead>
  
        <tbody>
          {products.map(product => (
            <tr key={product._id} className='tr'>
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
              <td
                className='flex justify-center items-center hover:cursor-pointer hover:bg-slate-50 border p-2'
              >
                <Link to={`/delete/${product._id}`}>
                  <AiOutlineDelete />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default ProductsPage
