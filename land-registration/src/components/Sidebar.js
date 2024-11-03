import React from 'react';
import dashboardIcon from '../assets/images/dashboard.png';
import registryIcon from '../assets/images/registry.png';
import settingsIcon from '../assets/images/settings.png';
import helpIcon from '../assets/images/help.png';
import logoutIcon from '../assets/images/logout.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Assuming you have these images in your public folder:
// dashboard.png, registry.png, settings.png, help.png, logout.png

const SidebarItem = ({ iconSrc, label }) => (
  <div className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer">
    <img src={iconSrc} alt={label} className="w-6 h-6" />
    <span>{label}</span>
  </div>
);

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  
  return (
    <nav className=" p-4 w-64 shadow-xl bg-gray-400 text-gray-800">
      <h2 className="text-xl font-semibold mb-4">Sidebar Menu</h2>
      
      <Link to={"/"}><SidebarItem 
        iconSrc={dashboardIcon} 
        label="Dashboard" 
      /></Link>

     <Link to={"/landregistry"}> <SidebarItem 
        iconSrc={registryIcon}
        label="Land Registry" 
      /></Link>


      <Link to={"/profilesettings"}> <SidebarItem 
        iconSrc={settingsIcon} 
        label="Profile Settings" 
      /></Link>

      
      <Link to ={"/helpandsupport"}><SidebarItem 
        iconSrc={helpIcon}
        label="Help & Support" 
      /></Link>
      
      <SidebarItem 
        iconSrc={logoutIcon}
        label="Logout" 
      />
    </nav>
  );
};

export default Sidebar;
