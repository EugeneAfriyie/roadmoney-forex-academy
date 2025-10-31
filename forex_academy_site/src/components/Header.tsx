// Header.tsx
import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

const navItems = ["Home", "About", "Plans", "Resources", "Contact"];

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ---- scroll handling -------------------------------------------------
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- theme classes ---------------------------------------------------
  const bg = theme === "dark" ? "bg-[#0b0f19]/80" : "bg-[#f8f9fb]/70";
  const txt = theme === "dark" ? "text-[#ffffffcc]" : "text-[#1a1a1a]";

  // ----------------------------------------------------------------------
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all ${
        scrolled ? `${bg} shadow-lg` : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#00c896] font-montserrat">
          RoadMoney Forex Academy
        </h1>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-full ${txt} hover:bg-[#00c896]/20`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center space-x-6 md:flex">
          <ul className={`flex items-center space-x-6 ${txt}`}>
            {navItems.map((label) => {
              const to = label === "Home" ? "/" : `/${label.toLowerCase()}`;
              return (
                <li key={label}>
                  <NavLink
                    to={to}
                    end={to === "/"}               {/* exact only for Home */}
                    className={({ isActive }) =>
                      `relative group transition-colors ${
                        isActive ? "text-[#00c896] font-semibold" : "hover:text-[#00c896]"
                      }`
                    }
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.18 }}
                      className="inline-block"
                    >
                      {label}
                    </motion.span>

                    {/* underline */}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#00c896] transition-all duration-300 ${
                        ({ isActive }: { isActive: boolean }) =>
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <motion.a
            href="/mentorship"
            className="rounded-2xl bg-[#00c896] px-4 py-2 text-white"
            whileHover={{ scale: 1.05 }}
          >
            Join Now
          </motion.a>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-[#00c896]/20"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-slate-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        id="mobile-menu"
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={{
          maxHeight: menuOpen ? 500 : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`md:hidden ${bg} overflow-hidden backdrop-blur-md`}
      >
        <ul className={`flex flex-col items-center space-y-4 py-4 ${txt}`}>
          {navItems.map((label) => {
            const to = label === "Home" ? "/" : `/${label.toLowerCase()}`;
            return (
              <li key={label}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `rounded px-4 py-2 transition-colors ${
                      isActive
                        ? "bg-white/10 text-[#00c896] font-semibold"
                        : "hover:text-[#00c896]"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}

          <li>
            <motion.a
              href="/mentorship"
              className="rounded-2xl bg-[#00c896] px-4 py-2 text-white"
              whileHover={{ scale: 1.05 }}
              onClick={() => setMenuOpen(false)}
            >
              Join Now
            </motion.a>
          </li>

          <li>
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="rounded-full p-2 hover:bg-[#00c896]/20"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </button>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}