import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutCTA: React.FC = () => (
  <section className="relative py-28 text-center overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] font-montserrat">
    {/* Subtle background image overlay */}
    <div className="absolute inset-0">
      <img
        src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140172/photo_2025-10-07_07-13-25_ljyjpa.jpg"
        alt="trading team"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 max-w-4xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-[#00c896] mb-6"
      >
        Start Your Trading Journey with Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto"
      >
        Learn from real-world experience — not theory. Build consistency,
        discipline, and confidence with structured mentorship and live guidance
        from a self-funded trader who’s been where you are.
      </motion.p>

      {/* Social Proof Line */}
      <p className="text-sm text-white/60 mb-8">
        <span className="text-[#00c896] font-semibold">Trusted by 1000+</span>{" "}
        traders worldwide — growing every day.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="/mentorship"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#00c896] text-black font-semibold hover:shadow-[0_0_30px_rgba(0,200,150,0.6)] transition-all duration-300"
        >
          Join Mentorship <ArrowRight size={18} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="/services"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300"
        >
          View Programs
        </motion.a>
      </div>
    </motion.div>

    {/* Decorative Glow at Bottom */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-1 bg-gradient-to-r from-transparent via-[#00c896]/60 to-transparent rounded-full blur-sm" />
  </section>
);

export default AboutCTA;
