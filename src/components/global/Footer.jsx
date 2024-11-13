import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row lg:items-center lg:justify-between">
       
        <div className="flex lg:ps-0 md:ps-1 ps-5 flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="text-xl font-primaryBold">GDG Chandigarh</div>
          <div className="lg:px-4 lg:block hidden"></div>
          <Link to="/about-gdg" className="text-gray-300 text-primaryRegular hover:text-white">
            About GDG Program
          </Link>
          <Link to="/about-wtm" className="text-gray-300 text-primaryRegular hover:text-white">
            About WTM Program
          </Link>
          <Link to="/faq" className="text-gray-300 text-primaryRegular hover:text-white">
            FAQ
          </Link>
          <Link
            to="/code-of-conduct"
            className="text-gray-300 text-primaryRegular hover:text-white"
          >
            Code of conduct
          </Link>
          <Link
            to="/community-guidelines"
            className="text-gray-300 text-primaryRegular hover:text-white"
          >
            Community Guidelines
          </Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="mailto:someone@example.com"
            className="text-gray-300 hover:text-white text-xl"
          >
            <div className="p-3 rounded-full hover:bg-gray-700 duration-100">
              <FaEnvelope />
            </div>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            <div className="p-3 rounded-full hover:bg-gray-700 duration-100">
              <FaLinkedin />
            </div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            <div className="p-3 rounded-full hover:bg-gray-700 duration-100">
              <FaInstagram />
            </div>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            <div className="p-3 rounded-full hover:bg-gray-700 duration-100">
              <FaYoutube />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
