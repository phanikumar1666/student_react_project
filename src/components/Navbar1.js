// src/Navbar.js
import React from 'react';
// import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-bg-clr flex p-4 text-white justify-between items-center h-1/7 w-auto border-1 border-secondary-clr shadow-xl">
      <div className='justify-between items-center space-x-3 w-2/3'>
      
        <h1 className="text-4xl font-semibold text-primary-clr">India Post Visibility System</h1>
      </div>
      <div className='justify-end text-end font-bold'>
      Welcome Phani Kumar
      </div>
      <div className="space-x-4">
      <Link to="/login" className="text-secondary hover:text-secondary text-primary-clr text-lg underline">
      Logout
    </Link>
      </div>
    </nav>
  );
}

export default Navbar;
