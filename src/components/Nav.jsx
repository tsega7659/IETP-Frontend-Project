import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Info, Mail, Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" }
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#FFA500" }
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-evenly  items-center">
        <motion.h1 
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          IETP Route
        </motion.h1>
        
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Contact'].map((item, index) => (
            <motion.div key={item} whileHover="hover">
              <motion.div variants={linkVariants}>
                <Link to={index === 0 ? '/' : `/${item.toLowerCase()}`} className="flex items-center space-x-2">
                  {index === 0 ? <Home size={18} /> : index === 1 ? <Info size={18} /> : <Mail size={18} />}
                  <span>{item}</span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div 
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        {isOpen && (
          <div className="flex flex-col space-y-4 mt-4">
            {['Home', 'About', 'Contact'].map((item, index) => (
              <motion.div key={item} whileHover="hover">
                <motion.div variants={linkVariants}>
                  <Link 
                    to={index === 0 ? '/' : `/${item.toLowerCase()}`} 
                    className="flex items-center space-x-2"
                    onClick={toggleMenu}
                  >
                    {index === 0 ? <Home size={18} /> : index === 1 ? <Info size={18} /> : <Mail size={18} />}
                    <span>{item}</span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Nav;

