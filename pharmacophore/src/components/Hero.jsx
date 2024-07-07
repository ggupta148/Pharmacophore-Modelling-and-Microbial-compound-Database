import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-100 p-8 min-h-screen pt-16 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-6xl font-serif text-blue-600 mb-4">Welcome to Pharmacore</h1>
          <p className="text-2xl font-light text-gray-700">Your one-stop solution for all bioactivity and pharmacological research needs.</p>
        </div>
        <div className="flex-1">
          <img src="/medicines.jpg" alt="Pharmacore" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
