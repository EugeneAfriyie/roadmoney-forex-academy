import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Layers,
  BookOpen,
  MessageCircle,
  Menu,
  Sun,
  Moon,
} from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const bgClass = theme === "dark" ? "bg-[#0b0f19]" : "bg-[#f8f9fb]";
  const textClass = theme === "dark" ? "text-[#ffffffcc]" : "text-[#1a1a1a]";
  const accentClass = "text-[#00c896]";

  const navItems = [
    { name: "Home", icon: <Home size={22} />, link: "/" },
    { name: "Plans", icon: <Layers size={22} />, link: "/plans" },
    { name: "Resources", icon: <BookOpen size={22} />, link: "/resources" },
    { name: "Contact", icon: <MessageCircle size={22} />, link: "/contact" },
  ];

  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed bottom-0 left-0 w-full z-50 shadow-lg ${bgClass}`}
    >
      <nav className="flex justify-around items-center py-3">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.link}
            className={`flex flex-col items-center text-xs ${textClass} hover:${accentClass} transition-all`}
            whileHover={{ scale: 1.1 }}
          >
            {item.icon}
            <span className="mt-1">{item.name}</span>
          </motion.a>
        ))}

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="flex flex-col items-center text-xs hover:text-[#00c896] transition-all"
          whileHover={{ scale: 1.1 }}
        >
          {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          <span className="mt-1">Theme</span>
        </motion.button>

        {/* Menu Placeholder */}
        <motion.a
          href="#"
          className={`flex flex-col items-center text-xs ${textClass} hover:${accentClass} transition-all`}
          whileHover={{ scale: 1.1 }}
        >
          <Menu size={22} />
          <span className="mt-1">Menu</span>
        </motion.a>
      </nav>
    </motion.footer>
  );
};

export default Header;
