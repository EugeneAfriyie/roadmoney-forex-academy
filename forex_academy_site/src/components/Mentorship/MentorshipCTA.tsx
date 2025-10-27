// src/components/Mentorship/MentorshipCTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MentorshipCTA: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white font-montserrat overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,200,150,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.06),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f19]/60 to-[#0b0f19]" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00c896] mb-6"
        >
          Ready to Transform Your Trading Journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Join hundreds of traders mastering consistency, risk management, and confidence through structured mentorship.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#00c896] text-black font-semibold 
                       hover:scale-105 hover:shadow-[0_0_25px_rgba(0,200,150,0.5)] transition-all duration-300"
          >
            Apply Now <ArrowRight size={18} />
          </a>

          <a
            href="/community"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#FFD70080] text-[#FFD700] font-semibold
                       hover:bg-[#FFD70020] hover:scale-105 transition-all duration-300"
          >
            Join the Community
          </a>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00c896]/20 rounded-full blur-[120px]" />
    </section>
  );
};

export default MentorshipCTA;
