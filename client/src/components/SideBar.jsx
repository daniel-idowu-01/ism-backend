import React from 'react'
import { Link } from 'react-router-dom'

// @ts-ignore
const SideBar = () => {

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
    
  return (
    <nav className='sm:w-[10%] h-screen border-r border-black border-opacity-10'>
        <div className='text-center flex flex-col gap-5 pt-5'>

            {
                sideBarItems.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <article
                         className='flex items-center gap-1 mx-auto p-4 hover:cursor-pointer hover:text-secondary' 
                         >
                            <span className="material-symbols-outlined text-4xl sm:text-2xl">
                                {item.iconName}
                            </span>
                            <p className='hidden sm:block '>{item.title}</p>
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

