import React from "react";
import { motion } from "framer-motion";

const AboutMission: React.FC = () => (
  <section className="relative py-20 px-4 sm:px-6 lg:px-12 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-[#00c896] mb-6">
        Our Mission & Vision
      </h2>
      <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-4">
        At <span className="text-[#00c896] font-semibold">RoadMoney Forex</span>,
        we believe success in trading isn’t about luck — it’s about clarity,
        process, and mindset. Our mentorship focuses on structure-based trading,
        risk discipline, and emotional mastery.
      </p>
      <p className="text-base sm:text-lg text-white/70 leading-relaxed">
        Our vision is to build a global network of traders who think
        independently, trade confidently, and stay consistent through any market
        condition — all while learning from a self-funded mentor who’s been through
        the same journey.
      </p>
    </motion.div>
  </section>
);

export default AboutMission;
