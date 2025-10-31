// Eugene Afriyie UEB3502023
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuDrawerProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navLinks: { name: string; icon: JSX.Element; href: string }[];
  active: string;
  setActive: (name: string) => void;
  theme: string;
}

const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  menuOpen,
  setMenuOpen,
  navLinks,
  active,
  setActive,
  theme,
}) => {
  const bgClass =
    theme === "dark"
      ? "bg-[#0b0f19]/95 text-white"
      : "bg-[#f8f9fb]/95 text-[#1a1a1a]";
  const accentClass = "text-[#00c896]";

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 flex flex-col justify-between ${bgClass}`}
        >
          {/* ===== Scrollable Content ===== */}
          <div className="overflow-y-auto pb-28">
            {/* Close Button */}
            <div className="flex justify-end p-5">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full hover:bg-[#00c896]/10 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Hero Section */}
            <section className="flex flex-col items-center text-center px-6">
              <h2 className={`text-2xl font-bold mb-2 ${accentClass}`}>
                RoadMoney Forex Academy
              </h2>
              <p className="text-sm text-muted-foreground max-w-xs">
                Learn professional forex trading with mentorship and practical guidance.
              </p>
            </section>

            {/* Quick Links */}
            <section className="mt-10 flex flex-col items-center gap-5 px-6">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setMenuOpen(false);
                  }}
                  className={`w-full max-w-xs text-left p-4 rounded-2xl border ${
                    active === link.name
                      ? "border-[#00c896] bg-[#00c896]/10"
                      : "border-transparent hover:bg-[#00c896]/10"
                  } transition`}
                >
                  <p
                    className={`font-medium ${
                      active === link.name ? accentClass : ""
                    }`}
                  >
                    {link.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {link.name === "Home"
                      ? "Back to the main page"
                      : link.name === "About"
                      ? "Learn more about us"
                      : link.name === "Plans"
                      ? "Explore our mentorship plans"
                      : link.name === "Resources"
                      ? "Educational materials"
                      : "Get in touch"}
                  </p>
                </Link>
              ))}
            </section>

            {/* Social Media Section */}
            <section className="mt-10 flex flex-col items-center gap-3 pb-8">
              <h3 className="text-lg font-semibold">Connect with us</h3>
              <div className="flex gap-5">
                <a href="#" className="p-2 rounded-full hover:bg-[#00c896]/10">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-[#00c896]/10">
                  <Send className="w-5 h-5" /> {/* Telegram */}
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-[#00c896]/10">
                  <MessageCircle className="w-5 h-5" /> {/* WhatsApp */}
                </a>
              </div>
            </section>
          </div>

          {/* ===== Fixed Join Button ===== */}
          <div className="fixed bottom-0 left-0 w-full bg-[#00c896] py-4 flex justify-center shadow-lg">
            <Link
              to="/mentorship"
              onClick={() => setMenuOpen(false)}
              className="px-8 py-3 bg-white text-[#00c896] rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Join Now
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuDrawer;
