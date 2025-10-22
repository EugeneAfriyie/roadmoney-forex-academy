"use client";

import React, { useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Globe from "react-globe.gl";
import { useSwipeable } from "react-swipeable";
import { ThemeContext } from "../../../context/ThemeContext";
import { BarChart3, Target, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Learn to Trade Smart, Confident & Profitable.",
    subtitle: "Join RoadMoney Forex Academy — where real traders are made.",
    button1: "Join Mentorship",
    button2: "Watch Live Trading Demo",
    icon: <BarChart3 size={26} className="text-[#00c896]" />,
    background: "image",
    imageUrl:
      "https://res.cloudinary.com/djeorsh5d/image/upload/v1760408575/IMG_20251014_022049_539_dsxt4k.jpg",
  },
  {
    id: 2,
    title: "Master the Art of Consistency in Trading.",
    subtitle:
      "We help you build strategy, psychology, and discipline for lasting success.",
    button1: "View Course Outline",
    button2: "Meet the Mentor",
    icon: <Target size={26} className="text-[#00c896]" />,
    background: "globe",
  },
  {
    id: 3,
    title: "Turn Your Knowledge into Profitable Trades.",
    subtitle:
      "Learn advanced techniques, prop firm strategies, and live trading experience.",
    button1: "Enroll Today",
    button2: "Explore Benefits",
    icon: <ArrowRight size={26} className="text-[#00c896]" />,
    background: "gradient",
  },
];

const HeroCarousel: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [current, setCurrent] = useState(0);
  const globeRef = useRef<any>(null);

  const bgClass =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
      : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";
  const textClass = theme === "dark" ? "text-white" : "text-[#1a1a1a]";
  const overlayColor = theme === "dark" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)";
  const globeImage = theme === "dark" ? "/assets/globe/dark.png" : "/assets/globe/light.png";

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Configure globe controls
  useEffect(() => {
    if (slides[current].background === "globe" && globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
    }
  }, [current]);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section
      id="hero"
      {...swipeHandlers}
      className={`relative flex items-center justify-center h-screen overflow-hidden ${bgClass} font-montserrat select-none`}
    >
      {/* Backgrounds */}
      <AnimatePresence mode="wait">
        {slides[current].background === "gradient" && (
          <motion.div
            key="gradient-bg"
            className="absolute inset-0 bg-gradient-to-r from-[#00c896]/20 via-transparent to-[#00c896]/20 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}

        {slides[current].background === "image" && (
          <motion.div
            key="image-bg"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                backgroundImage: `url(${slides[current].imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="absolute inset-0"
            />
            {/* overlay for contrast */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: overlayColor }}
            />
          </motion.div>
        )}

        {slides[current].background === "globe" && (
          <motion.div
            key="globe-bg"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Globe
              ref={globeRef}
              globeImageUrl={globeImage}
              backgroundColor="rgba(0,0,0,0)"
              showAtmosphere={true}
              atmosphereColor="#00c896"
              width={typeof window !== "undefined" ? window.innerWidth : 800}
              height={typeof window !== "undefined" ? window.innerHeight : 600}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{
              opacity: 0,
              y: slides[current].id === 1 ? 0 : 30,
              x: slides[current].id === 1 ? -60 : 0,
            }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center justify-center gap-3 text-[#00c896]">
                {slides[current].icon}
                <span className="font-semibold tracking-wide uppercase text-sm md:text-base">
                  RoadMoney Forex Academy
                </span>
              </div>
              <h1
                className={`text-3xl sm:text-5xl md:text-6xl font-bold ${textClass} max-w-3xl mx-auto`}
              >
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`/${slides[current].button1.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-[#00c896] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#00a87a] hover:shadow-[0_0_15px_rgba(0,200,150,0.5)] transition-all duration-300"
                >
                  {slides[current].button1}
                </a>
                <a
                  href={`/${slides[current].button2.toLowerCase().replace(/\s+/g, "-")}`}
                  className="border border-[#00c896] text-[#00c896] px-8 py-3 rounded-xl font-semibold hover:bg-[#00c896]/10 hover:shadow-[0_0_15px_rgba(0,200,150,0.5)] transition-all duration-300"
                >
                  {slides[current].button2}
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 flex gap-2 justify-center w-full z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#00c896] w-6" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
