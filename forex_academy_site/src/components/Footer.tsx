// src/components/Footer.tsx
import React, { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../Context/ThemeContext';

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const bgClass = theme === 'dark' ? 'bg-[#0b0f19]' : 'bg-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#1a1a1a]';

  return (
    <footer className={`${bgClass} py-8`}>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[#00c896] font-montserrat">
            RoadMoney Forex Academy
          </h2>
          <p className={`${textClass} mt-2`}>Empowering traders with knowledge and skills for success in Forex.</p>
          <p className={`${textClass} mt-2`}>Contact: info@roadmoney.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-[#00c896]" aria-label="Facebook">FB</a>
            <a href="#" className="text-[#00c896]" aria-label="Instagram">IG</a>
            <a href="#" className="text-[#00c896]" aria-label="Telegram">TG</a>
          </div>
        </div>
        <div>
          <h3 className={`text-lg font-semibold ${textClass}`}>Quick Links</h3>
          <ul className={`${textClass} mt-2 space-y-2`}>
            {['Home', 'About', 'Mentorship', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="mt-4 p-2 rounded-full hover:bg-opacity-20 hover:bg-[#00c896]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;