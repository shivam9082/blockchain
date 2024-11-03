import React from 'react';
import { FaUser,FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';


const Header = () => {

    const navigationItems = [
        { label: 'Dashboard', href: '/' },
        { label: 'Land Registry', href: '/landregistry' },
        { label: 'Settings', href: '/settings' },
        { label: 'About Us', href: '/aboutus' },
        { label: 'Contact Us', href: '/contactus' }
      ];

      const dispatch = useDispatch();
  

      const toggleMenuHandler = () => {
        dispatch(toggleMenu());
      }

  return (
    <header className="flex justify-between items-center shadow-md p-4 bg-gray-800 text-white">
      
      <FaBars className="text-gray-500 cursor-pointer" onClick={() => toggleMenuHandler()}/>
      <div className="text-2xl font-bold">Land Registration</div>

      <nav className="hidden md:flex space-x-6">
        {navigationItems.map((item, index) => (
          <Link key={index} to={item.href}>
            <span   className=" hover:text-blue-600 transition duration-300 text-white">{item.label}</span>
          </Link>
        ))}
      </nav>
      
      <div className="flex items-center">
       <FaUser className="mr-2 text-gray-500" />
        <div className="flex items-center">
          <span className=" mr-2 text-white">userName</span>
        </div>
      </div>
    </header>
  )
}

export default Header