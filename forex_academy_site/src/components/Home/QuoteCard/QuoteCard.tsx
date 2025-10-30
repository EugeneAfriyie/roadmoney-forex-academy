import React, { useContext, useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { ThemeContext } from "../../../context/ThemeContext";

interface QuoteItem {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

const AUTO_ROTATE_MS = 6000;

const Quotes: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { ref: containerRef, inView = true } = useInView({
    threshold: 0.2,
  });

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(!inView);
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const quotes: QuoteItem[] = [
    {
      quote:
        "The goal of a successful trader is to make the best trades — money is simply a byproduct of consistency.",
      author: "Alexander Elder",
      role: "Author, Trading for a Living",
      image: "/assets/quotes/elder.jpg",
    },
    {
      quote:
        "The stock market is a device for transferring money from the impatient to the patient.",
      author: "Warren Buffett",
      role: "Author, Trading for a Living",
      image: "/assets/quotes/elder.jpg",
    },
    {
      quote:
        "Suggests that traders would be more successful if they remained inactive 50% of the time.",
      author: "Bill Lipschutz",
      role: "Author, Trading for a Living",
      image: "/assets/quotes/elder.jpg",
    },
    {
      quote:
        "In trading, it's not about how much you make — it’s about how much you protect.",
      author: "Pro Trader",
      role: "Professional Mentor",
      image: "/assets/quotes/trader.jpg",
    },
    {
      quote:
        "Discipline is the bridge between strategy and success. The market rewards patience, not impulse.",
      author: "RoadMoney Mentor",
      role: "Founder, RoadMoney",
      image: "/assets/quotes/mentor.jpg",
    },
  ];

  // Rotation logic
  useEffect(() => {
    setIsPaused(!inView || prefersReducedMotion);
  }, [inView, prefersReducedMotion]);

  useEffect(() => {
    if (!isPaused) {
      autoRotateRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % quotes.length);
      }, AUTO_ROTATE_MS);
    }
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [isPaused, quotes.length]);

  const handlePrev = useCallback(
    () => setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length),
    [quotes.length]
  );
  const handleNext = useCallback(
    () => setCurrent((prev) => (prev + 1) % quotes.length),
    [quotes.length]
  );

  const isDark = theme === "dark";

  return (
    <section
      ref={containerRef}
      id="quotes"
      className={`relative py-24 overflow-hidden font-montserrat ${
        isDark
          ? "bg-gradient-to-br from-[#0b0f19] via-[#121826] to-[#0b0f19]"
          : "bg-gradient-to-br from-[#f9fafb] via-[#e8f6f2] to-[#f0fdfa]"
      }`}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#00c896]/10 via-[#00ffcc]/15 to-transparent blur-[150px]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <SectionHeader title="Wisdom from the Masters" id="quotes-heading" />
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`max-w-3xl mx-auto mb-16 text-base sm:text-lg ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Inspiration that shapes great traders — learn from timeless wisdom that transcends
          markets.
        </motion.p>

        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={900}>
                <div
                  className={`relative mx-auto flex flex-col md:flex-row items-center gap-8 rounded-3xl shadow-xl border overflow-hidden backdrop-blur-xl transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 border-[#00c896]/25"
                      : "bg-white/80 border-[#00c896]/30"
                  }`}
                >
                  {/* Image side */}
                  <div className="md:w-1/3 flex justify-center md:justify-end">
                    <motion.img
                      src={quotes[current].image}
                      alt={quotes[current].author}
                      className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-2 border-[#00c896]/60 shadow-md my-10 md:my-16"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Quote side */}
                  <div className="md:w-2/3 text-center md:text-left px-8 py-10">
                    <Quote
                      size={34}
                      className="text-[#00c896] mb-4 mx-auto md:mx-0"
                    />
                    <p
                      className={`text-xl md:text-2xl italic leading-relaxed mb-6 ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      “{quotes[current].quote}”
                    </p>
                    <div>
                      <h4 className="text-lg font-semibold text-[#00c896]">
                        {quotes[current].author}
                      </h4>
                      {quotes[current].role && (
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {quotes[current].role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-6 p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition"
            aria-label="Previous quote"
          >
            <ChevronLeft size={24} className="text-[#00c896]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-6 p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition"
            aria-label="Next quote"
          >
            <ChevronRight size={24} className="text-[#00c896]" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === current
                  ? "bg-[#00c896] w-6"
                  : "bg-gray-500/40 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
