"use client"
import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

// Nav component for the navigation bar
function Nav() {
  // State to control the visibility of the menu
  const [showMenu, setShowMenu] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='h-16 flex items-center p-5 border-solid border-2'>
      <div className='flex items-center'>
        {showMenu ? (
          <div>
            <h1 onClick={toggleMenu}>Menu content goes here</h1>
          </div>
        ) : (
          <div>
            <i className='ri-menu-2-line text-xl mr-2' onClick={toggleMenu}> Menu</i>
          </div>)
        }
      </div>
      <div className='flex items-center justify-center'>
        <img
          src='https://assets.inshorts.com/inshorts/images/v1/variants/jpg/m/2018/11_nov/21_wed/img_1542823931298_497.jpg'
          alt='Menu Image'
          className='w-full h-10 object-cover rounded-full logo_1'
        />
      </div>
    </div>
  );
}

export default Nav;
