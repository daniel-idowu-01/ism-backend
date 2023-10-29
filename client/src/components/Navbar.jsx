import axios from 'axios'
import { Link } from 'react-router-dom'
import ProductContext from '../context/Products'
import React, { useEffect, useState, useContext } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Navbar = () => {

  const [photo, setPhoto] = useState('')
  const [username, setUsername] = useState('')
  const [dropDown, setDropDown] = useState(false)
  const DROPDOWN_STYLE = "z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"

  const { showSideBar, setShowSideBar } = useContext(ProductContext);
  
  // dropdown menu items
  const items = [
    {
      "link": "update-profile",
      "text": "Update Profile"
    },
    {
      "link": "change-password",
      "text": "Change Password"
    },
    {
      "link": "user-logout",
      "text": "Logout"
    },
  ]

  // function to toggle dropdown menu
  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  // to get user's username from the database
  useEffect(() => {
    axios.get(`/api/users/getuser`)
    .then((response) => {
      setUsername(response.data.name);
      setPhoto(response.data.photo)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  
  return (
    <section>
      <div className='relative flex items-center justify-between px-10 sm:px-20 py-3 shadow-sm'>
        <span
          onClick={() => setShowSideBar(!showSideBar)}
          className="sm:hidden material-symbols-outlined">
          menu
        </span>
        
        <h1 className='text-4xl font-bold'>
          PLUS<sup>+</sup>
        </h1>

        <div className='relative group hover:cursor-pointer'>
          <div
            onClick={toggleDropdown}
            className='flex items-center gap-2 '
          >
            <img
              src={photo}
              className='rounded-full w-10 h-10'
              alt=""
            />
            <p className='flex items-center'>
              {username} <RiArrowDropDownLine className='text-xl' />
            </p>
          </div>

          {/* dropdown menu */}
          {dropDown && (
            <div
              className={DROPDOWN_STYLE}>
              <div className="py-2">
                {items.map((item, index) => (
                  <Link
                    to={`/${item.link}`}
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={toggleDropdown}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    </section>
  )
}

export default Navbar
