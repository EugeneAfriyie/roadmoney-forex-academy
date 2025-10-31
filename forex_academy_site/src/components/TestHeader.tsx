// Eugene Afriyie UEB3502023
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Layers,
  BookOpen,
  Phone,
  Menu,
  Sun,
  Moon,
} from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import MobileMenuDrawer from "./MobileMenuDrawer";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const bgClass =
    theme === "dark"
      ? "bg-[#0b0f19]/80 backdrop-blur-md"
      : "bg-[#f8f9fb]/80 backdrop-blur-md";
  const textClass = theme === "dark" ? "text-white" : "text-[#1a1a1a]";
  const accentClass = "text-[#00c896]";

  const navLinks = [
    { name: "Home", icon: <Home size={22} />, href: "/" },
    { name: "About", icon: <Info size={22} />, href: "/about" },
    { name: "Plans", icon: <Layers size={22} />, href: "/plans" },
    { name: "Resources", icon: <BookOpen size={22} />, href: "/resources" },
    { name: "Contact", icon: <Phone size={22} />, href: "/contact" },
  ];

  return (
    <>
      {/* ===== Desktop Header ===== */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden md:flex justify-between items-center fixed top-0 left-0 w-full z-50 px-6 py-4 ${bgClass} shadow-md`}
      >
        <h1 className={`text-2xl font-bold ${accentClass} font-montserrat`}>
          RoadMoney Forex Academy
        </h1>

        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`relative ${
                active === link.name ? accentClass : textClass
              } hover:text-[#00c896] transition`}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
              {active === link.name && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00c896] rounded-full"
                />
              )}
            </motion.a>
          ))}

          {/* Join Now Button (desktop only) */}
          <motion.a
            href="/mentorship"
            className="px-4 py-2 bg-[#00c896] text-white rounded-2xl hover:bg-[#00b589] transition"
            whileHover={{ scale: 1.05 }}
          >
            Join Now
          </motion.a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[#00c896]/20"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </motion.header>

      {/* ===== Mobile Bottom Navbar ===== */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{
          y: isVisible ? 0 : 100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed bottom-0 left-0 w-full md:hidden flex justify-between items-center py-3 px-6 ${bgClass} shadow-t z-50`}
      >
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name)}
            className={`flex flex-col items-center ${
              active === link.name ? "text-[#00c896]" : textClass
            } transition-all`}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={`p-2 rounded-full ${
                active === link.name ? "bg-[#00c896]/10" : ""
              }`}
            >
              {link.icon}
            </div>
            <span className="text-xs mt-1">{link.name}</span>
          </motion.a>
        ))}

        {/* Menu button (moved to far right) */}
        <button
          onClick={() => setMenuOpen(true)}
          className={`flex flex-col items-center ${textClass}`}
        >
          <Menu size={22} />
          <span className="text-xs mt-1">Menu</span>
        </button>
      </motion.nav>

      {/* Mobile Drawer Component */}
      <MobileMenuDrawer
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
        active={active}
        setActive={setActive}
        theme={theme}
      />
    </>
  );
};

export default Header;
