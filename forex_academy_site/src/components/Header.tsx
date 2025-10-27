import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = theme === 'dark' ? 'bg-[#0b0f19]' : 'bg-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#1a1a1a]';
  const accentClass = 'text-[#00c896]';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? `${bgClass} shadow-md` : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${accentClass} font-montserrat`}>
          RoadMoney Forex Academy
        </h1>
        {/* Hamburger Button for Mobile */}
        <button
          className={`md:hidden p-2 rounded-full ${textClass} hover:bg-[#00c896]/20`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className={`flex space-x-6 items-center ${textClass}`}>
            {['Home', 'About', 'Mentorship', 'Resources', 'Contact'].map((link) => (
              <li key={link}>
                <motion.a
                  href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="hover:text-[#00c896] transition-colors relative group"
                  whileHover={{ scale: 1.05 }} // Replace Tailwind scale-105
                  transition={{ duration: 0.2 }}
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c896] group-hover:w-full transition-all" />
                </motion.a>
              </li>
            ))}
          </ul>
          <motion.a
            href="/mentorship"
            className="px-4 py-2 bg-[#00c896] text-white rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }} // Replace Tailwind scale-105
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join Now
          </motion.a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-opacity-20 hover:bg-[#00c896]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${bgClass} overflow-hidden`}
      >
        <ul className={`flex flex-col items-center py-4 space-y-4 ${textClass}`}>
          {['Home', 'About', 'Mentorship', 'Resources', 'Contact'].map((link) => (
            <li key={link}>
              <motion.a
                href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}   
                className="hover:text-[#00c896] transition-colors"
                whileHover={{ scale: 1.05 }} // Replace Tailwind scale-105
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </motion.a>
            </li>
          ))}
          <li>
            <motion.a
              href="/mentorship"
              className="px-4 py-2 bg-[#00c896] text-white rounded-2xl"
              whileHover={{ scale: 1.05 }} // Replace Tailwind scale-105
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </motion.a>
          </li>
          <li>
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="p-2 rounded-full hover:bg-opacity-20 hover:bg-[#00c896]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;