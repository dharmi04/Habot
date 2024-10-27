import React, { useState } from 'react';

const ToggleContent = () => {
  const [activeTab, setActiveTab] = useState('buyer');

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-white p-6">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-blue-800 rounded-lg shadow-lg p-10">
        
        {/* Left Side - YouTube Video */}
        <div className="w-full md:w-1/2 p-6">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=nk6MCVCQ8KQXVQ6R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        {/* Right Side - Toggle Tabs and Content */}
        <div className="w-full md:w-1/2 p-6">
          <div className="flex space-x-6 mb-6 text-lg font-semibold">
            <button
              className={`tab ${activeTab === 'buyer' ? 'text-orange-400 border-b-4 border-orange-400' : 'text-gray-400'}`}
              onClick={() => setActiveTab('buyer')}
            >
              Buyer
            </button>
            <button
              className={`tab ${activeTab === 'supplier' ? 'text-orange-400 border-b-4 border-orange-400' : 'text-gray-400'}`}
              onClick={() => setActiveTab('supplier')}
            >
              Supplier
            </button>
          </div>

          {/* Buyer Content */}
          {activeTab === 'buyer' && (
            <div className="content-section space-y-3 text-gray-300">
              <p className="flex items-center"><span className="text-green-400 mr-2">✔</span> Post your requirements.</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✔</span> Sit back for multiple suppliers to contact you.</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✔</span> Choose among the suppliers based on ratings and reviews.</p>
            </div>
          )}

          {/* Supplier Content */}
          {activeTab === 'supplier' && (
            <div className="content-section space-y-3 text-gray-300">
              <p className="flex items-center"><span className="text-green-400 mr-2">✔</span> Check the posted requirements from buyers.</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✔</span> Contact potential clients directly.</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✔</span> Build reputation through ratings and reviews.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleContent;
