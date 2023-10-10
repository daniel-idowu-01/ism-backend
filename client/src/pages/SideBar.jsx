import React from 'react'

// @ts-ignore
const SideBar = ({ setLink }) => {
  return (
    <nav className='w-[10%] h-screen border-r border-black border-opacity-10'>
        <div className='text-center flex flex-col gap-5 pt-5'>
            <article className='mx-auto p-2 hover:cursor-pointer hover:text-secondary' onClick={() => setLink('/')}>
                <span className="material-symbols-outlined text-5xl">
                    monitoring
                </span>
                <p className='text-xl'>Dashboard</p>
            </article>

            <hr />
            
            <article className='mx-auto p-2 hover:cursor-pointer hover:text-secondary' onClick={() => setLink('/products')}>
                <span className="material-symbols-outlined text-5xl">
                    inventory
                </span>
                <p className='text-xl'>Products</p>
            </article>
            
        </div>
    </nav>
  )
}

export default SideBar
