import React, { useEffect, useState } from 'react'
import BarChartComponent from './BarChart'
import LineChartComponent from './LineChart'


const DashboardPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {

    const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/products')
    const data = await response.json()
    }

  fetchData();
    
  }, [])

  console.log(data)

  return (
    <section className='p-10 w-[90%]'>
      <article className='flex justify-evenly w-full'>
        {
          dataStats.map((card) => (
            <div className='text-center shadow-md px-4 py-5 rounded-md w-64'>
              <p className='text-xl font-semibold' title={card.title}>{card.title}</p>
              <p className='text-3xl font-extralight'>{card.price}</p>
            </div>
          ))
        }
      </article>

      <article className='w-full flex justify-around gap-4'>
        <BarChartComponent />
        <LineChartComponent />
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
