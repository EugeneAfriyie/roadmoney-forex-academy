// Eugene Afriyie UEB3502023
import React, { useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Globe from "react-globe.gl";
import { ArrowRight, BarChart3, Target } from "lucide-react";
import { ThemeContext } from "../../../context/ThemeContext";

// ------------------------------------------------------
// Slide Data
// ------------------------------------------------------
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

// ------------------------------------------------------
// HeroCarousel Component
// ------------------------------------------------------
const  HeroCarousel: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [current, setCurrent] = useState(0);
  const globeRef = useRef<any>(null);
  const touchStartX = useRef<number | null>(null);

  const bgClass =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
      : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";
  const textClass = theme === "dark" ? "text-[#ffffffcc]" : "text-[#1a1a1a]";
  const overlayClass = theme === "dark" ? "bg-black/60" : "bg-white/60";
  const globeImage =
    theme === "dark" ? "/assets/globe/dark.png" : "/assets/globe/light.png";

  // Auto-slide every 7s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Handle swipe (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.touches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 80) {
      if (diff > 0) handlePrev();
      else handleNext();
      touchStartX.current = null;
    }
  };

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  // Globe performance optimization
// Globe performance optimization + cleanup
useEffect(() => {
  const globe = globeRef.current;
  if (!globe) return;
  const controls = globe.controls();

  if (slides[current].background === "globe" && controls) {
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
  } else if (controls) {
    controls.autoRotate = false;
  }

  // 🧹 Cleanup old WebGL context to prevent "Too many active WebGL contexts"
  return () => {
    try {
      if (globe.renderer && typeof globe.renderer === "function") {
        const renderer = globe.renderer();
        if (renderer && renderer.dispose) renderer.dispose();
      }
    } catch (err) {
      console.warn("Globe cleanup skipped:", err);
    }
  };
}, [current]);


  // Pause rendering when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        const globe = globeRef.current;
        if (!globe) return;
        const controls = globe.controls();
        if (controls)
          controls.autoRotate = isVisible && slides[current].background === "globe";
        const renderer = globe.renderer();
        if (renderer && renderer.setAnimationLoop) {
          renderer.setAnimationLoop(isVisible ? undefined : null);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("hero");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [current]);

  // ------------------------------------------------------
  // JSX
  // ------------------------------------------------------
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={`relative flex items-center justify-center h-screen overflow-hidden ${bgClass} transition-colors duration-700 font-montserrat`}
    >
      {/* Backgrounds */}
      <AnimatePresence mode="wait">
        {slides[current].background === "gradient" && (
          <motion.div
            key="gradient-bg"
            className="absolute inset-0 bg-gradient-to-r from-[#00c896]/25 via-transparent to-[#00c896]/25 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}

        {slides[current].background === "image" && (
          <motion.div
            key="image-bg"
            className={`absolute inset-0 bg-cover bg-center ${overlayClass}`}
            style={{ backgroundImage: `url(${slides[current].imageUrl})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}

        {slides[current].background === "globe" && (
          <motion.div
            key="globe-bg"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ pointerEvents: "none" }}
          >
            <Globe
              ref={globeRef}
              globeImageUrl={globeImage}
              backgroundColor="rgba(0,0,0,0)"
              showAtmosphere
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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
                  href={`/${slides[current].button1
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="bg-[#00c896] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#00a87a] hover:shadow-[0_0_15px_rgba(0,200,150,0.5)] transition-all duration-300"
                >
                  {slides[current].button1}
                </a>
                <a
                  href={`/${slides[current].button2
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
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
      <div className="absolute bottom-8 flex gap-2 justify-center w-full">
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
