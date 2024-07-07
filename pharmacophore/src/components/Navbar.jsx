import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-white text-2xl font-bold">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Pharmacore
        </div>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/Bioactivity" className="text-white hover:text-gray-300">Bioactivity</a>
          <a href="/Download" className="text-white hover:text-gray-300">Download</a>
        </div>
        <div className="space-x-4">
          <a href="#Search" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="/help" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </a>
          <a href="mailto:abhishek21121@iiitd.ac.in" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
