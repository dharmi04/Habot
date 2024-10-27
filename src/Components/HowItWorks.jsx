import React from "react";
import image1 from '../assets/sym1.png';
import image2 from '../assets/sym2.png';
import image3 from '../assets/sym3.png';
import image4 from '../assets/sym4.png';
import image5 from '../assets/sym5.png';
import image6 from '../assets/sym6.png';

const HowItWorks = () => {
  const steps = [
    {
      title: "Select Your Role and Sign Up",
      icon: image1,
      description: "Buyers post their needs and review top suppliers.",
    },
    {
      title: "Buyers Post Your Requirements",
      icon: image2,
      description: "Post requirements and connect with suppliers.",
    },
    {
      title: "Review, Select, and Contact the Best Suppliers",
      icon: image3,
      description: "Review and select suitable suppliers.",
    },
    {
      title: "Suppliers Complete Your Profile",
      icon: image4,
      description: "Suppliers complete profiles for opportunities.",
    },
    {
      title: "Contact Buyers and Share Your Quote",
      icon: image5,
      description: "Share quotes and proposals with buyers.",
    },
    {
      title: "Connect and Leave Feedback",
      icon: image6,
      description: "Build relationships and leave feedback.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-8 px-4 bg-gray-100 font-Poppins">
      <h2 className="text-2xl font-bold mb-4">How it works?</h2>
      <p className="text-gray-600 mb-8 text-center pl-10 pr-10">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-6  text-center border  ${index % 2 === 0 ? 'bg-[#E8FBFF]' : 'bg-white'}`}
          >
            <img src={step.icon} alt={step.title} className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
