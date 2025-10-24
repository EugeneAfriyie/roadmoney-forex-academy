import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutCTA: React.FC = () => (
  <section className="relative py-24 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Start Your Trading Journey with Us
      </h2>
      <p className="text-base sm:text-lg text-white/70 mb-8">
        Join hundreds of traders mastering structure, discipline, and mindset
        under personalized mentorship and live webinars.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/mentorship"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#00c896] text-black font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(0,200,150,0.5)] transition-all duration-300"
        >
          Join Mentorship <ArrowRight size={18} />
        </a>
        <a
          href="/services"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300"
        >
          View Programs
        </a>
      </div>
    </motion.div>
  </section>
);

export default AboutCTA;
