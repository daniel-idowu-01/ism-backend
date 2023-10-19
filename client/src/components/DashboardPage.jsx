import React, { useEffect, useState, useContext } from 'react'
import BarChartComponent from './BarChart'
import PieChartComponent from './PieChart'
import ProductContext from '../context/Products'
import { MdOutlineInventory2, MdOutlineAttachMoney } from 'react-icons/md'
import { IoMdCart } from 'react-icons/io'


const DashboardPage = () => {

  const { totalPrice, totalQuantity, numberOfProducts } = useContext(ProductContext);

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
]
  
  return (
    <section className='p-10 sm:p-20 w-[90%]'>
      <article className='flex flex-col sm:flex-row gap-2 justify-between w-full'>
        {/* dashboard info stats */}
        {
          dataStats.map((card) => (
            <section className='flex items-start justify-between shadow-md px-4 py-5 rounded-md sm:w-64'>
              <div className=''>
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

      <article className='relative top-10 w-full flex flex-col sm:flex-row justify-around gap-4'>
        <BarChartComponent />
        <PieChartComponent />
      </article>

    </section>
  )
}

export default DashboardPage


