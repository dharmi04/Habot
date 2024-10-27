// import React from 'react';
// import image from '../assets/habot-logo.png';

// function NavBar() {
//   return (
//     <nav className="flex items-center justify-between p-4 bg-white shadow-md">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-1">
//         <img src={image} alt="logo" className="h-[50px] w-[50px]" />
//       </div>
      
//       {/* Right Section (Links + Button) */}
//       <div className="flex items-center space-x-6">
//         <a href="#" className="text-gray-500 hover:text-indigo-700">Find Suppliers</a>
//         <div className="relative group">
//           <a href="#" className="text-gray-500 hover:text-indigo-700">Find Service Tags</a>
//           <span className="inline-block ml-1">&#9662;</span> {/* Dropdown icon */}
//         </div>
//         <button className="border border-green-500 text-green-500 py-1 px-4 rounded hover:bg-green-500 hover:text-white">
//           Login / Sign Up
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;


import React, { useState } from 'react';
import image from '../assets/nav-logo.png';
import { HiMenu, HiX } from 'react-icons/hi'; // Use Heroicons or any other icon library

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md font-Poppins">
      {/* Logo Section */}
      <div className="flex items-center space-x-1">
        <img src={image} alt="logo" className="h-[50px] w-[175px]" />
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Right Section (Links + Button) */}
      <div className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:p-0 p-4 shadow-md md:shadow-none ${isOpen ? 'flex' : 'hidden'}`}>
        <a href="#" className="text-gray-500 hover:text-indigo-700">Find Suppliers</a>
        <div className="relative group">
          <a href="#" className="text-gray-500 hover:text-indigo-700">Find Service Tags</a>
          <span className="inline-block ml-1">&#9662;</span> {/* Dropdown icon */}
        </div>
        <button className="border border-green-500 text-green-500 py-1 px-4 rounded hover:bg-green-500 hover:text-white">
          Login / Sign Up
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
