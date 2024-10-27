import React from 'react';

const SupplierSection = () => {
  return (
    <div className="flex items-center justify-between bg-blue-100 p-6 rounded-lg shadow-md font-Poppins">
      {/* Left Text */}
      <div className="text-lg font-semibold text-gray-800 pl-20 pt-5 pb-5">
        <span className="border-b-2 border-orange-400">Let Suppliers Find You</span>
      </div>
      
      {/* Right Button */}
      <div className='pr-20 pt-5 pb-5'>

      <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
        Get Verified
      </button>
      </div>
    </div>
  );
};

export default SupplierSection;
