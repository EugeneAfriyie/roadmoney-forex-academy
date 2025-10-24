import React from "react";
import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/djeorsh5d/image/upload/v1760408679/IMG_20251014_022039_477_ri1daj.jpg"
          alt="Trading desk background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0b0f19]/90" />
        <div className="absolute inset-0 bg-[#00c896]/5 mix-blend-overlay" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl px-6"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-[#00c896] mb-4">
          About RoadMoney Forex
        </h1>
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
          Empowering traders to master structure, discipline, and psychology —
          the pillars of true consistency.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
