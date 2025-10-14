import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Mentor', path: '/about' },
    { name: 'What is Forex', path: '/forex' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  // GSAP Animations
  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    gsap.to(ctaRef.current, {
      scale: 1.03,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-nav-gradient dark:bg-nav-gradient text-white dark:text-white shadow-neon-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1
              ref={logoRef}
              className="font-montserrat font-extrabold text-3xl text-gold dark:text-gold tracking-wide flex items-center"
            >
              RoadMoney
              <span className="ml-2 text-neonGreen animate-pulse">₵</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-montserrat font-medium text-lg tracking-wide transition-all duration-300 hover:text-neonGreen hover:scale-105 ${
                    isActive
                      ? 'text-neonGreen dark:text-neonGreen border-b-2 border-neonGreen'
                      : 'text-white dark:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              ref={ctaRef}
              to="/mentorship"
              className="bg-neonGreen text-navy dark:bg-neonGreen dark:text-navy font-montserrat font-bold py-2 px-6 rounded-full shadow-neon-glow hover:bg-gold hover:text-navy hover:shadow-gold-glow transition-all duration-300"
            >
              Join Now
            </NavLink>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-navy dark:bg-lightBg text-gold dark:text-navy hover:bg-neonGreen hover:text-navy transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold dark:text-gold hover:text-neonGreen focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-navy/90 dark:bg-navy/90 backdrop-blur-md py-6 w-full absolute top-20 left-0 shadow-neon-glow"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block py-3 px-6 font-montserrat font-medium text-lg tracking-wide transition-all duration-300 hover:text-neonGreen hover:pl-8 ${
                  isActive ? 'text-neonGreen dark:text-neonGreen' : 'text-white dark:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/mentorship"
            className="block py-3 px-6 mx-6 mt-4 bg-neonGreen text-navy dark:bg-neonGreen dark:text-navy font-montserrat font-bold rounded-full shadow-neon-glow hover:bg-gold hover:text-navy hover:shadow-gold-glow transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </NavLink>
          <button
            onClick={toggleTheme}
            className="block py-3 px-6 mx-6 mt-4 text-gold dark:text-gold hover:text-neonGreen transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Switch to Light Mode ☀️' : 'Switch to Dark Mode 🌙'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;