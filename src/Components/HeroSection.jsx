import React from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import backgroundImage from '../assets/City.jpg';

function HeroSection() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center relative font-Poppins"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Are You a Supplier?</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">Explore Matching Opportunities.</p>

        {/* Search Form */}
        <div className="flex flex-col md:flex-row items-center justify-center max-w-2xl mx-auto space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center bg-white rounded-md p-2 w-full md:w-1/2">
            <FaBriefcase className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search your required service here"
              className="w-full p-2 text-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex items-center bg-white rounded-md p-2 w-full md:w-1/2">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search your desired location here"
              className="w-full p-2 text-gray-700 focus:outline-none"
            />
          </div>

          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 w-full md:w-auto">
            Search
          </button>
        </div>

        {/* Buyer Link */}
        <p className="mt-4 text-sm md:text-base">
          <span className="font-semibold">Are you a buyer?</span> 
          <a href="#" className="underline ml-1">Click here if you are looking to post a requirement</a>
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
