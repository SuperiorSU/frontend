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
          <Link to="https://developers.google.com/community/gdg" className="text-gray-300 text-primaryRegular hover:text-white">
            About GDG Program
          </Link>
          <Link to="https://developers.google.com/womentechmakers" className="text-gray-300 text-primaryRegular hover:text-white">
            About WTM Program
          </Link>
          <Link to="/faq" className="text-gray-300 text-primaryRegular hover:text-white">
            FAQ
          </Link>
          
          <Link
            to="https://developers.google.com/community-guidelines"
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
            href="https://www.linkedin.com/company/gdg-chandigarh/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            <div className="p-3 rounded-full hover:bg-gray-700 duration-100">
              <FaLinkedin />
            </div>
          </a>
          <a
            href="https://www.instagram.com/gdgchandigarh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            <div className="p-3 rounded-full hover:bg-gray-700 duration-100">
              <FaInstagram />
            </div>
          </a>
          <a
            href="https://www.youtube.com/@gdgchandigarh1203"
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
