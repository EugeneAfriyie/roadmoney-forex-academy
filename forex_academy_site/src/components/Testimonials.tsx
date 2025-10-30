// src/components/Testimonials.tsx
import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Tilt from "react-parallax-tilt";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Beginner Trader",
    quote:
      "RoadMoney’s mentorship reshaped how I see the markets. Within months, I finally achieved consistency and confidence in every trade.",
    image: "/assets/testimonials/sarah.jpg",
  },
  {
    name: "James L.",
    role: "Full-Time Forex Trader",
    quote:
      "The advanced risk management lessons gave me total control of my capital. It’s the best investment I’ve made in my trading career.",
    image: "/assets/testimonials/james.jpg",
  },
  {
    name: "Emma R.",
    role: "Part-Time Trader",
    quote:
      "I joined RoadMoney’s mentorship while working full-time — now my trading income exceeds my salary. Truly life-changing.",
    image: "/assets/testimonials/emma.jpg",
  },
  {
    name: "Michael T.",
    role: "Professional Analyst",
    quote:
      "RoadMoney combines technical mastery with emotional discipline. I recommend it to anyone who takes trading seriously.",
    image: "/assets/testimonials/michael.jpg",
  },
  {
    name: "Ava D.",
    role: "Crypto & Forex Enthusiast",
    quote:
      "The mentorship made complex strategies simple. I’ve doubled my accuracy and learned how to protect my wins.",
    image: "/assets/testimonials/ava.jpg",
  },
];

const Testimonials: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className={`relative py-24 overflow-hidden font-montserrat ${
        isDark
          ? "bg-gradient-to-br from-[#0b0f19] via-[#121826] to-[#0b0f19]"
          : "bg-gradient-to-br from-[#f9fafb] via-[#e6f7f4] to-[#f0fdfa]"
      }`}
    >
      {/* Animated Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#00c896]/10 via-[#00ffcc]/10 to-transparent blur-[150px]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#00c896]"
        >
          What Traders Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Real stories from traders who turned knowledge into profit with
          <span className="text-[#00c896] font-semibold"> RoadMoney.</span>
        </motion.p>
      </div>

      {/* Testimonial Slider */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <AnimatePresence mode="wait">
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={900} key={current}>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className={`p-10 rounded-2xl backdrop-blur-xl border ${
                isDark
                  ? "bg-white/5 border-[#00c896]/20"
                  : "bg-white/80 border-[#00c896]/30"
              } shadow-xl`}
            >
              <Quote className="mx-auto mb-4 text-[#00c896]" size={36} />
              <p
                className={`italic text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                “{t.quote}”
              </p>

              <div className="mt-8 flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-2 border-[#00c896]/70 shadow-md mb-3"
                />
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {t.role}
                </p>
              </div>
            </motion.div>
          </Tilt>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition"
          >
            <ChevronLeft size={22} className="text-[#00c896]" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-[#00c896] w-6" : "bg-gray-500/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition"
          >
            <ChevronRight size={22} className="text-[#00c896]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
