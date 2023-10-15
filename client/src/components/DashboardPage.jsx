import React, { useEffect, useState } from 'react'
import BarChartComponent from './BarChart'
import PieChartComponent from './PieChart'


const DashboardPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {

    const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/products')
    const data = await response.json()
    }

  fetchData();
    
  }, [])

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

const dataStats = [
  {
    "title": 'Total Products',
    "price": "20",
    icon: ''
  },
  {
    "title": 'Total Price',
    "price": "120",
    icon: ''
  },
  {
    "title": 'Total Quantity',
    "price": "20",
    icon: ''
  },
]
