// import React, { useContext } from 'react';
// import { motion } from 'framer-motion';
// import { AlertTriangle, BookOpen, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import AnimatedBackground from './Home/WhatIsForex/AnimatedBackground';
import SectionHeader from './Home/QuoteCard/SectionHeader';
// Eugene Afriyie UEB3502023
import React, { useContext, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import { TrendingDown, TrendingUp, Users } from "lucide-react";

// 🎧 Optional: lightweight heartbeat-to-calm sound files
const tensionSound = " ";
const calmSound = " ";

const WhyMentorshipMatters: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const textClass = theme === "dark" ? "text-[#ffffffcc]" : "text-[#000000]";

  // 🔊 Audio Transition (plays once when section enters view)
  useEffect(() => {
    if (isInView) {
      const tension = new Audio(tensionSound);
      const calm = new Audio(calmSound);
      tension.volume = 0.3;
      calm.volume = 0.3;
      tension.play();
      setTimeout(() => {
        tension.pause();
        calm.play();
      }, 2500);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="why-mentorship"
      aria-labelledby="mentorship-heading"
      className={`relative py-24 font-montserrat overflow-hidden transition-colors duration-500`}
    >
      {/* 🔳 Floating Digital Grid Animation */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-full bg-[#00ffcc]"
            style={{ left: `${i * 6}%` }}
            animate={{ opacity: [0.05, 0.15, 0.05], y: ["0%", "-5%", "0%"] }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-[1px] w-full bg-[#00c896]"
            style={{ top: `${i * 10}%` }}
            animate={{ opacity: [0.03, 0.1, 0.03], x: ["0%", "2%", "0%"] }}
            transition={{
              duration: 5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ✨ Rising Particle Glow */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-[#00ffcc] rounded-full blur-[2px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "-200%"],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* 🌗 Background transition (pain → promise) */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          theme === "dark"
            ? "from-[#0b0f19] via-[#121826] to-[#f8f9fb]"
            : "from-[#f8f9fb] via-[#e0e2e7] to-[#0b0f19]"
        }`}
      />

      {/* Glowing Divider */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#00ffcc] to-[#00c896] opacity-40"
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scaleX: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        <SectionHeader
          title="Why Mentorship Matters"
          id="mentorship-heading"
        />

        {/* Pain Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <TrendingDown
            size={40}
            className="mx-auto mb-4 text-[#ff4d4d] drop-shadow-[0_0_10px_rgba(255,77,77,0.4)]"
          />
          <h3 className="text-xl sm:text-2xl font-bold text-[#ff4d4d] mb-3">
            The Pain: Trading Alone
          </h3>
          <p className={`text-sm sm:text-base max-w-2xl mx-auto ${textClass}`}>
            Many traders begin full of hope but quickly face emotional burnout,
            losses, and misinformation. Without mentorship, trading feels like
            walking through a storm without a compass.
          </p>
        </motion.div>

        {/* Glow Transition */}
        <motion.div
          className="w-full h-24 flex items-center justify-center relative mb-20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-64 h-64 bg-gradient-to-tr from-[#00ffcc] to-[#00c896] rounded-full blur-[120px] opacity-40"></div>
        </motion.div>

        {/* Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <TrendingUp
            size={40}
            className="mx-auto mb-4 text-[#00c896] dark:text-[#00ffcc] drop-shadow-[0_0_10px_rgba(0,200,150,0.5)]"
          />
          <h3 className="text-xl sm:text-2xl font-bold text-[#00c896] dark:text-[#00ffcc] mb-3">
            The Promise: Guided Growth
          </h3>
          <p className={`text-sm sm:text-base max-w-2xl mx-auto mb-8 ${textClass}`}>
            With mentorship, you gain structure, confidence, and insight from
            traders who’ve already succeeded. You stop guessing and start
            growing — every lesson brings you closer to mastery.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4"
          >
            <Users size={30} className="text-[#00c896] dark:text-[#00ffcc]" />
            <p className={`text-sm sm:text-base ${textClass}`}>
              Learn with mentors who guide, challenge, and celebrate your wins.
            </p>
          </motion.div>

          <motion.a
            href="/mentorship"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block mt-8 px-6 py-3 bg-[#00c896] dark:bg-[#00ffcc] text-white dark:text-[#121826] font-semibold rounded-full hover:bg-[#00a77d] dark:hover:bg-[#00e6b3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00c896]"
          >
            Get Mentored — Transform Your Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMentorshipMatters;
