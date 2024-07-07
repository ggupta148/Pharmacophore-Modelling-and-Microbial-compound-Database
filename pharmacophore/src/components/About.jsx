import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white p-8 min-h-screen pt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl font-serif text-blue-600 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Pharmacore, we are dedicated to advancing bioactivity and pharmacological research. Our mission is to provide top-notch resources and solutions for researchers and professionals in the field.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With a team of experienced scientists and cutting-edge technology, we strive to deliver accurate and reliable data, fostering innovation and discovery in the pharmaceutical industry.
          </p>
          <p className="text-lg text-gray-700">
            Join us in our journey to explore new frontiers in pharmacology and make a significant impact on global health.
          </p>
        </div>
        <div className="flex-1">
          <img src="/About.png" alt="About Us" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
