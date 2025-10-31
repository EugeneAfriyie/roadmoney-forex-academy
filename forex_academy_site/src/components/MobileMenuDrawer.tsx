// Eugene Afriyie UEB3502023
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, MessageCircle, Send, Facebook, Mail } from "lucide-react";

const MobileMenuDrawer = ({
  menuOpen,
  setMenuOpen,
  navLinks,
  active,
  setActive,
  theme,
}: any) => {
  const bgClass =
    theme === "dark" ? "bg-[#0b0f19]" : "bg-[#f8f9fb]";
  const textClass = theme === "dark" ? "text-white" : "text-[#1a1a1a]";
  const accentClass = "text-[#00c896]";

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className={`relative w-full h-full overflow-y-auto ${bgClass} flex flex-col`}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 p-2 rounded-full bg-[#00c896]/10 hover:bg-[#00c896]/20"
            >
              <X size={24} className={accentClass} />
            </button>

            {/* ===== HERO SECTION ===== */}
            <div
              className="relative flex flex-col justify-center items-center text-center px-6 mt-20 mb-8 h-56 bg-cover bg-center rounded-2xl mx-4"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/djeorsh5d/image/upload/v1760408679/IMG_20251014_022039_477_ri1daj.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-black/60 rounded-2xl" />
              <div className="relative z-10">
                <h1 className={`text-3xl font-bold ${accentClass}`}>RoadMoney Forex Academy</h1>
                <p className="mt-2 text-sm text-white/90">
                  Master the Art of Trading
                </p>
              </div>
            </div>

            {/* ===== QUICK LINKS ===== */}
            <div className="px-8 flex flex-col space-y-5">
              {navLinks.map((link: any, ) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setMenuOpen(false);
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className={`flex justify-between items-center border-b pb-3 ${
                    active === link.name ? accentClass : textClass
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-semibold">{link.name}</h3>
                    <p className="text-xs opacity-70">
                      {link.name === "Home"
                        ? "Return to the homepage"
                        : link.name === "About"
                        ? "Learn more about us"
                        : link.name === "Plans"
                        ? "Explore mentorship plans"
                        : link.name === "Resources"
                        ? "View trading resources"
                        : "Get in touch with us"}
                    </p>
                  </div>
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* ===== CONTACT / SOCIALS ===== */}
            <div className="mt-10 px-8 flex flex-col items-center space-y-4">
              <p className={`text-sm ${textClass} opacity-80 mb-2`}>
                Connect with us
              </p>
              <div className="flex space-x-5">
                <a href="#" className="hover:scale-110 transition" aria-label="Instagram">
                  <Instagram className={accentClass} />
                </a>
                <a href="#" className="hover:scale-110 transition" aria-label="Telegram">
                  <Send className={accentClass} />
                </a>
                <a href="#" className="hover:scale-110 transition" aria-label="WhatsApp">
                  <MessageCircle className={accentClass} />
                </a>
                <a href="#" className="hover:scale-110 transition" aria-label="Facebook">
                  <Facebook className={accentClass} />
                </a>
                <a
                  href="mailto:groupeight00@gmail.com"
                  className="hover:scale-110 transition"
                  aria-label="Email"
                >
                  <Mail className={accentClass} />
                </a>
              </div>
            </div>

            {/* ===== JOIN BUTTON ===== */}
            <div className="mt-auto px-8 mb-10">
              <motion.a
                href="/mentorship"
                whileHover={{ scale: 1.05 }}
                className="block text-center py-3 rounded-2xl bg-[#00c896] text-white font-semibold"
              >
                Join Now
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuDrawer;
