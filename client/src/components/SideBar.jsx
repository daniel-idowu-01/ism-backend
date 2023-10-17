import React from 'react'
import { Link } from 'react-router-dom'

// @ts-ignore
const SideBar = () => {
  return (
    <nav className='w-[10%] h-screen border-r border-black border-opacity-10'>
        <div className='text-center flex flex-col gap-5 pt-5'>

            {
                sideBarItems.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <article
                         className='mx-auto p-2 hover:cursor-pointer hover:text-secondary' 
                         >
                            <span className="material-symbols-outlined text-5xl">
                                {item.iconName}
                            </span>
                            <p className='text-xl'>{item.title}</p>
                        </article>

                        <hr />
                    </Link>
                ))
            }
        </div>
    </nav>
  )
}

export default SideBar

// sidebar links
const sideBarItems = [
    {
        "iconName": "monitoring",
        "link": "/dashboard",
        "title": "Dashboard"
    },
    {
        "iconName": "inventory",
        "link": "/products",
        "title": "Products"
    }
]
