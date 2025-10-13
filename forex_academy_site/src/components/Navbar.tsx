import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
    // Logo animation: fade in and slight scale
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
    );

    // CTA button pulse
    gsap.to(ctaRef.current, {
      scale: 1.05,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Mobile menu slide-in
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  return (
    <nav className="bg-nav-gradient text-white sticky top-0 z-50 shadow-neon-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Animated Currency Symbol */}
          <div className="flex-shrink-0 flex items-center">
            <h1
              ref={logoRef}
              className="font-montserrat font-extrabold text-3xl text-gold tracking-wide"
            >
              RoadMoney{' '}
              <span className="text-neonGreen animate-pulse">₵</span> Forex
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-montserrat font-semibold text-lg tracking-wide hover:text-neonGreen hover:shadow-neon-glow transition-all duration-300 ${
                    isActive ? 'text-neonGreen border-b-2 border-neonGreen' : ''
                  }`
                }
                onMouseEnter={(e) =>
                  gsap.to(e.currentTarget, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <NavLink
              ref={ctaRef}
              to="/mentorship"
              className="bg-neonGreen text-navy font-montserrat font-bold py-3 px-6 rounded-full shadow-gold-glow hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Join Now
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold focus:outline-none hover:text-neonGreen transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
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

        {/* Mobile Menu with Glassmorphism */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden bg-navy/80 backdrop-blur py-6 absolute top-20 left-0 w-full shadow-neon-glow"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block py-3 px-6 font-montserrat font-semibold text-lg tracking-wide hover:text-neonGreen transition-all duration-300 ${
                    isActive ? 'text-neonGreen' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) =>
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/mentorship"
              className="block py-3 px-6 mx-6 mt-4 bg-neonGreen text-navy font-montserrat font-bold rounded-full shadow-gold-glow hover:bg-gold hover:text-navy transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;