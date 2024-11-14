import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { motion } from "framer-motion";

const Card = ({ name, imageSrc, designation, description, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-6">
      <img
        src={imageSrc}
        alt={name}
        className="w-40 h-40 object-cover rounded-full mx-auto cursor-pointer transition-transform duration-300 transform hover:scale-105"
        onClick={handleOpen}
      />
      <h2 className="mt-4 text-2xl font-semibold text-center">
        {name}
      </h2>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.1 }}
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-40"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -5, 0], // Bounce effect for modal
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.2,
              delay: 0.05,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="bg-white p-8 rounded-lg relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-150"
            >
              <FaTimes size={24} />
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <motion.img
                src={imageSrc}
                alt={name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -5, 0], // Bounce effect for image
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.15,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="w-48 h-48 object-cover rounded-lg"
              />
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
              >
                <h2 className="text-3xl font-bold">
                  {name}
                </h2>
                <p className="text-xl text-gray-600 mt-2">
                  {designation}
                </p>
                <p className="mt-4">
                  {description}
                </p>
                <div className="mt-6 flex gap-4">
                  {links.twitter && (
                    <a
                      href={links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaTwitter size={24} />
                    </a>
                  )}
                  {links.linkedin && (
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {links.github && (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
