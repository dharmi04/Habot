import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function SignUpSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white space-y-8 md:space-y-0 md:space-x-12 font-Poppins">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to dive into <span className="text-indigo-700">HABOT</span>?
        </h2>
        <p className="text-gray-600 mb-6">
          Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="flex items-center justify-center bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Sign up Today!
          <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Location Cards Section */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 md:w-1/2">
        {["Abu Dhabi", "Dubai", "Sharjah & Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"].map((location) => (
          <div
            key={location}
            className="border border-orange-400 text-center py-3 px-4 rounded-md text-gray-800 hover:bg-orange-100 transition duration-300"
          >
            {location}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SignUpSection;
