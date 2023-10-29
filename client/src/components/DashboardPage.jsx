import React, { useEffect, useState, useContext } from 'react'
import BarChartComponent from './BarChart'
import PieChartComponent from './PieChart'
import LineChartComponent from './LineChart'
import ProductContext from '../context/Products'
import { MdOutlineInventory2, MdOutlineAttachMoney } from 'react-icons/md'
import { IoMdCart } from 'react-icons/io'


const DashboardPage = () => {

  const { showSideBar, maxPrice, setProducts, totalPrice, totalQuantity, numberOfProducts } = useContext(ProductContext);

  // to fetch the products of the user from the database
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [])

  const dataStats = [
  {
    "title": 'Total Products',
    "info": numberOfProducts,
    icon: <MdOutlineInventory2 />
  },
  {
    "title": 'Total Price',
    "info": `$${totalPrice}`,
    icon: <MdOutlineAttachMoney />
  },
  {
    "title": 'Total Quantity',
    "info": totalQuantity,
    icon: <IoMdCart />
    },
  {
    "title": 'Most Expensive Product',
    "info": `$${maxPrice}`,
    icon: <IoMdCart />
  }
]
  
  return (
    <section
      className={`${showSideBar ? 'w-[90%]' : 'w-full'} flex flex-col gap-3  p-5 sm:p-10 bg-slate-50`}
    >
      <article className='flex flex-col sm:flex-row gap-3 justify-between w-full'>
        {/* dashboard info stats */}
        {
          dataStats.map((card, index) => (
            <section key={index} className='bg-white flex items-start justify-between shadow-sm px-4 py-5 rounded-md sm:w-64'>
              <div className='flex flex-col gap-1'>
                <p className='opacity-80 text-sm font-semibold' title={card.title}>{card.title}</p>
                <p className='text-3xl font-extralight'>{card.info}</p>
              </div>
              <div className='text-xl bg-slate-100 p-2 rounded-md'>
                {card.icon}
              </div>
            </section>
          ))
        }
      </article>

      <LineChartComponent />
      <article className='w-full flex flex-col sm:flex-row justify-around gap-4'>
        <BarChartComponent /> 

        <div>
          <PieChartComponent />
        </div>
      </article>


    </section>
  )
}

export default DashboardPage


