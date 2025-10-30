// src/components/Contact/ContactHero.tsx
// Eugene Afriyie – UEB3502023

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Send,
  Instagram,
  MessageSquare,
  Ticket,
} from "lucide-react";
import SupportTicketModal from "../../components/Contact/SupportTicketModal";
// import SupportTicketModal from "./SupportTicketModal";

export default function ContactHero() {
  const [showContacts, setShowContacts] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const socialRef = useRef<HTMLDivElement>(null);

  // Click-outside for social dropdown
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        socialRef.current &&
        !socialRef.current.contains(e.target as Node)
      ) {
        setShowContacts(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <section
        className="relative h-[85vh] flex flex-col items-center justify-center text-center text-white px-6"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/djeorsh5d/image/upload/v1761804514/06f5adb8-b5f4-4516-ba21-82078fb4cb98.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Need Some Help?
          </h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Encountering an issue or seeking clarification about our
            services? Submit a{" "}
            <span className="text-[#00ffcc] font-semibold">
              support ticket
            </span>{" "}
            to let us know your concern, or reach out directly via our
            social platforms. We typically respond within{" "}
            <span className="font-semibold">2–4 hours</span>.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            ref={socialRef}
          >
            {/* Ticket Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-[#00ffcc] text-black px-6 py-3 rounded-full font-semibold shadow-lg"
              onClick={() => setIsModalOpen(true)}
            >
              <Ticket className="w-5 h-5" />
              Send a Ticket
            </motion.button>

            {/* Social Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowContacts(!showContacts)}
                className="flex items-center gap-2 bg-[#0077ff] text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                Reach Out to Us
              </motion.button>

              <AnimatePresence>
                {showContacts && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-[110%] left-1/2 -translate-x-1/2 bg-[#121826] border border-[#00ffcc33] rounded-xl p-4 shadow-lg flex flex-col items-center gap-3"
                  >
                    <a
                      href="tel:+2335573425449"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:scale-110 transition-transform"
                      title="Call"
                    >
                      <Phone className="w-6 h-6" />
                    </a>
                    <a
                      href="https://t.me/your_actual_telegram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:scale-110 transition-transform"
                      title="Telegram"
                    >
                      <Send className="w-6 h-6" />
                    </a>
                    <a
                      href="https://instagram.com/your_actual_handle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:scale-110 transition-transform"
                      title="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <SupportTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}