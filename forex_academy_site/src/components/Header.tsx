// src/components/Header.tsx
import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../Context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <ul className={`flex space-x-6 items-center ${textClass}`}>
          {['Home', 'About', 'Mentorship', 'Resources', 'Contact'].map((link) => (
            <li key={link}>
              <a
                href={`/${link.toLowerCase()}`}
                className="hover:text-[#00c896] transition-colors relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c896] group-hover:w-full transition-all" />
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-opacity-20 hover:bg-[#00c896]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;