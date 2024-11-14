import React, { useState, useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ name, imageSrc, designation, description, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className="p-6">
      <img
        src={imageSrc}
        alt={name}
        className="w-40 h-40 object-cover rounded-full mx-auto cursor-pointer transition-transform duration-200 transform hover:scale-105"
        onClick={handleOpen}
      />
      <h2 className="mt-4 text-2xl font-semibold text-center transition-transform duration-200">
        {name}
      </h2>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-40"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -5, 0],
              }}
              exit={{ 
                opacity: 0,
                scale: 0.9,
                y: 10
              }}
              transition={{
                duration: 0.3,
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
                    y: [0, -5, 0],
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.3,
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
                  transition={{ delay: 0.05, duration: 0.3, ease: "easeInOut" }}
                >
                  <h2 className="text-3xl font-bold transition-transform duration-200">
                    {name}
                  </h2>
                  <p className="text-xl text-gray-600 mt-2 transition-transform duration-200">
                    {designation}
                  </p>
                  <p className="mt-4 transition-transform duration-200">
                    {description}
                  </p>
                  <div className="mt-6 flex gap-4">
                    {links.twitter && (
                      <a
                        href={links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-sky-500 transition-colors duration-200"
                      >
                        <FaTwitter size={24} />
                      </a>
                    )}
                    {links.linkedin && (
                      <a
                        href={links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-sky-500 transition-colors duration-200"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    )}
                    {links.github && (
                      <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-sky-500 transition-colors duration-200"
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
      </AnimatePresence>
    </div>
  );
};

export default Card;
