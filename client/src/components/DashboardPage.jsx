import React, { useEffect, useState, useContext } from 'react'
import BarChartComponent from './BarChart'
import PieChartComponent from './PieChart'
import ProductContext from '../context/Products'


const DashboardPage = () => {

  const { totalPrice, totalQuantity, numberOfProducts } = useContext(ProductContext);

  const dataStats = [
  {
    "title": 'Total Products',
    "price": numberOfProducts,
    icon: ''
  },
  {
    "title": 'Total Price',
    "price": totalPrice,
    icon: ''
  },
  {
    "title": 'Total Quantity',
    "price": totalQuantity,
    icon: ''
  },
]
  
  return (
    <section className='p-10 w-[90%]'>
      <article className='flex flex-col sm:flex-row gap-2 justify-evenly w-full'>
        {
          dataStats.map((card) => (
            <div className='text-center shadow-md px-4 py-5 rounded-md sm:w-64'>
              <p className='text-xl font-semibold' title={card.title}>{card.title}</p>
              <p className='text-3xl font-extralight'>{card.price}</p>
            </div>
          ))
        }
      </article>

      <article className='relative top-10 w-full flex flex-col sm:flex-row justify-around gap-4'>
        <BarChartComponent />
        <PieChartComponent />
      </article>

    </section>
  )
}

export default DashboardPage


