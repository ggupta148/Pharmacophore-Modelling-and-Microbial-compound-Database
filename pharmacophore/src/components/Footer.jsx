import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">PharmaCore</h2>
            <p className="mt-2">Leading the way in compound and bioactivity research.</p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Navigation</h3>
            <ul>
              <li className="mb-1"><a href="#home" className="hover:underline">Home</a></li>
              <li className="mb-1"><a href="#bioactivity" className="hover:underline">Bioactivity</a></li>
              <li className="mb-1"><a href="#download" className="hover:underline">Download</a></li>
              <li className="mb-1"><a href="#tanimoto" className="hover:underline">Tanimoto</a></li>
              <li className="mb-1"><a href="#help" className="hover:underline">Help</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>Email: info@pharmacore.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 PharmaCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
