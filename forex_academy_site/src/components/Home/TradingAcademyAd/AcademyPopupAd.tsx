// Eugene Afriyie UEB3502023
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Instagram, Send } from "lucide-react";

export default function AcademyPopupAd() {
  const [show, setShow] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    const shownBefore = sessionStorage.getItem("academyAdShown");
    if (!shownBefore) {
      const timer = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem("academyAdShown", "true");
      }, 60000); // 1 minute
      return () => clearTimeout(timer);
    }
  }, []);

  const iconVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 300 },
    }),
    exit: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/70 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] border border-[#00ffcc40] shadow-[0_0_40px_#00ffcc40] rounded-3xl max-w-md w-full p-6 text-center text-white"
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-0 right-0 text-[#00ffcc] hover:text-white transition p-2"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.img
              src="/images/trading-office.jpg"
              alt="RoadMoney Forex Academy Ghana"
              className="w-full h-44 sm:h-52 object-cover rounded-2xl mb-4 border border-[#00ffcc33]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />

            {/* Text */}
            <h2 className="text-2xl font-bold text-[#00ffcc] mb-2 leading-snug">
              🚨 GRAND OPENING IN ACCRA! 🚨
            </h2>
            <p className="text-[#ffffffcc] text-sm mb-5 leading-relaxed">
              The <strong>RoadMoney Forex Academy</strong> has officially opened
              its physical trading hub in <strong>McCarthy, Accra</strong>!  
              Visit us and experience a world of financial empowerment.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 relative items-center">
              {/* Visit Us */}
              <a
                href="https://maps.google.com?q=Accra+McCarthy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#00ffcc] text-[#0b0f19] font-semibold px-6 py-3 rounded-full hover:bg-[#00e6b3] active:scale-95 transition-all w-full sm:w-auto"
              >
                <MapPin className="w-5 h-5" /> Visit Us in Accra
              </a>

              {/* Contact Us */}
              <div className="relative w-full sm:w-auto flex justify-center">
                <button
                  onClick={() => setShowContacts((prev) => !prev)}
                  className="inline-flex items-center justify-center gap-2 border border-[#00ffcc80] text-[#00ffcc] font-semibold px-6 py-3 rounded-full hover:bg-[#00ffcc20] active:scale-95 transition-all w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" /> Contact Us
                </button>

                {/* Contact Icons */}
                <AnimatePresence>
                  {showContacts && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute right-0 bottom-full mb-3 flex flex-col items-center gap-3"
                    >
                      {[
                        {
                          href: "tel:+2335573425449",
                          icon: <Phone className="text-[#34A853]" />,
                          color: "#34A853",
                          title: "Call Us",
                        },
                        {
                          href: "https://t.me/roadmoneyacademy",
                          icon: <Send className="text-[#229ED9]" />,
                          color: "#229ED9",
                          title: "Telegram",
                        },
                        {
                          href: "https://instagram.com/roadmoneyacademy",
                          icon: <Instagram className="text-[#E1306C]" />,
                          color: "#E1306C",
                          title: "Instagram",
                        },
                      ].map((item, i) => (
                        <motion.a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={item.title}
                          variants={iconVariants}
                          custom={i}
                          className="bg-white/5 p-3 rounded-full backdrop-blur-md hover:scale-110 active:scale-95 transition shadow-[0_0_12px_rgba(0,0,0,0.4)]"
                          style={{
                            boxShadow: `0 0 10px ${item.color}55`,
                            backgroundColor: `${item.color}22`,
                          }}
                        >
                          {item.icon}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-[#00ffcc20] blur-2xl -z-10"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
