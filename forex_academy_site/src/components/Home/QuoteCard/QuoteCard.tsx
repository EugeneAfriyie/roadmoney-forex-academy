// QuoteCard.tsx
// Eugene Afriyie UEB3502023
import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { ThemeContext } from '../../../context/ThemeContext';
// import ThreeDBackground from '../../3DBackground';

interface QuoteItem {
  quote: string;
  author: string;
}

interface QuotesProps {
  /** Optional callback when active quote index changes (e.g., to sync background intensity) */
  onActiveChange?: (index: number) => void;
}

const AUTO_ROTATE_MS = 6000;

const Quotes: React.FC<QuotesProps> = ({ onActiveChange }) => {
  const { theme } = useContext(ThemeContext);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { ref: containerRef, inView = true } = useInView({
    threshold: 0,
    rootMargin: '-20% 0px -20% 0px', // Fixed: Changed 'margin' to 'rootMargin'
  });

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(!inView);
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const quotes: QuoteItem[] = [
    {
      quote: 'The goal of a successful trader is to make the best trades. Money is secondary.',
      author: 'Alexander Elder',
    },
    {
      quote: "In trading, it's not about how much you make, but how much you don't lose.",
      author: 'Pro Trader',
    },
    {
      quote: 'Success in trading comes from discipline, patience, and a solid strategy.',
      author: 'RoadMoney Mentor',
    },
  ];

  // Notify parent (background) about active index changes
  useEffect(() => {
    if (typeof onActiveChange === 'function') onActiveChange(current);
  }, [current, onActiveChange]);

  // Auto-rotate logic (pauses when not in view or when reduced motion)
  useEffect(() => {
    setIsPaused(!inView || prefersReducedMotion);
  }, [inView, prefersReducedMotion]);

  useEffect(() => {
    if (isPaused) {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }
      return;
    }

    if (!autoRotateRef.current) {
      autoRotateRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % quotes.length);
      }, AUTO_ROTATE_MS);
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }
    };
  }, [isPaused, quotes.length]);

  // Keyboard navigation
  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);
  }, [quotes.length]);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % quotes.length);
  }, [quotes.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleNext, handlePrev]);

  // Small accessibility text for current item
  const ariaCurrentText = `Quote ${current + 1} of ${quotes.length}: ${quotes[current].quote} by ${quotes[current].author}`;

  // Theme-based classes
  const bgClass =
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]'
      : 'bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#000000]';
  const dotActive = 'bg-[#00c896] w-6';
  const dotInactive = 'bg-gray-500 w-3';

  return (
    <section
      id="quotes"
      aria-labelledby="quotes-heading"
      ref={containerRef}
      className={`relative py-20 overflow-hidden ${bgClass} ${textClass} font-montserrat transition-colors duration-500`}
      role="region"
      aria-roledescription="carousel"
    >
      {/* Decorative interactive 3D background component */}
      {/* <ThreeDBackground activeIndex={current} /> */}

      {/* Floating accent blob (theme-aware) */}
      <motion.div
        aria-hidden="true"
        className={`absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[180px] opacity-20`}
        animate={{
          x: ['0%', '-20%', '10%', '0%'],
          y: ['0%', '-10%', '15%', '0%'],
          scale: [1, 1.06, 1.02, 1],
          rotate: [0, -40, 30, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(135deg, rgba(0,255,204,0.18), rgba(0,200,150,0.12))'
              : 'linear-gradient(135deg, rgba(0,200,150,0.14), rgba(70,150,255,0.12))',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 z-10">
        <SectionHeader title="Inspirational Quotes" id="quotes-heading" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className={`text-base sm:text-lg text-center max-w-3xl mx-auto mb-12 ${textClass}`}
        >
          Discover timeless wisdom from trading experts to fuel your motivation and sharpen your
          mindset for success in the Forex market.
        </motion.p>

        <div className="relative">
          {/* Quote display area */}
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-full max-w-2xl"
                aria-live="polite"
              >
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} glareEnable={false}>
                  <motion.article
                    role="group"
                    aria-label={ariaCurrentText}
                    className={`card relative border border-[#00c896]/30 dark:border-[#00ffcc]/25 rounded-2xl p-6 text-center transition-all duration-300 backdrop-blur-sm ${theme === 'dark' ? 'bg-[#121826]/60' : 'bg-white/80'}`}
                    initial={{ translateY: 0 }}
                    animate={{ translateY: [0, -6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
                      className="mx-auto mb-2 w-10 h-10 flex items-center justify-center rounded-full"
                    >
                      <Quote
                        size={26}
                        className="text-[#00c896] dark:text-[#00ffcc] drop-shadow-[0_0_6px_rgba(0,200,150,0.35)]"
                      />
                    </motion.div>

                    <p className="text-sm sm:text-base italic leading-relaxed">
                      "{quotes[current].quote}"
                    </p>

                    <p className="mt-4 text-sm font-semibold text-[#00c896] dark:text-[#00ffcc]">
                      {quotes[current].author}
                    </p>
                  </motion.article>
                </Tilt>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous quote"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 focus:outline-none focus:ring-2 focus:ring-[#00c896]/50"
          >
            <ChevronLeft size={22} className={theme === 'dark' ? 'text-white' : 'text-black'} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next quote"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 focus:outline-none focus:ring-2 focus:ring-[#00c896]/50"
          >
            <ChevronRight size={22} className={theme === 'dark' ? 'text-white' : 'text-black'} />
          </button>

          {/* Pagination dots */}
          <div
            className="mt-8 flex gap-2 justify-center"
            role="tablist"
            aria-label="Quote pagination"
          >
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to quote ${idx + 1}`}
                aria-selected={idx === current}
                role="tab"
                className={`h-3 rounded-full transition-all duration-300 ${idx === current ? dotActive : dotInactive}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;