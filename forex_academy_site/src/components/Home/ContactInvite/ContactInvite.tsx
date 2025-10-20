// Eugene Afriyie UEB3502023
import { motion } from "framer-motion";
import { Phone, Send, Instagram } from "lucide-react";

export default function ContactInvite() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white py-16 px-6 md:px-20 text-center overflow-hidden">
      {/* Floating glow accents */}
      <div className="absolute -top-24 left-10 w-64 h-64 bg-[#00ffcc25] rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 right-10 w-64 h-64 bg-[#00ffcc25] rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00ffcc]">
          Have Any Questions? 💬
        </h2>
        <p className="text-[#ffffffcc] text-lg mb-10 leading-relaxed">
          Our team is always ready to assist you. Whether you need guidance,
          mentorship, or more info about our academy — we’re just a message
          away.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="tel:+2335573425449"
            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            rel="noopener noreferrer"
          >
            <Phone className="w-5 h-5" /> Call Us
          </a>

          <a
            href="https://t.me/roadmoneyacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0088cc] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            <Send className="w-5 h-5" /> Telegram
          </a>

          <a
            href="https://instagram.com/roadmoneyacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            <Instagram className="w-5 h-5" /> Instagram
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
