import React from 'react';

const SupplierSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-100 p-4 md:p-6 rounded-lg shadow-md font-Poppins">
      {/* Left Text */}
      <div className="text-center md:text-left text-lg font-semibold text-gray-800 md:pl-20 md:pt-5 md:pb-5">
        <span className="border-b-2 border-orange-400">Let Suppliers Find You</span>
      </div>
      
      {/* Right Button */}
      <div className="mt-4 md:mt-0 md:pr-20 md:pt-5 md:pb-5">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default SupplierSection;
