// Eugene Afriyie UEB3502023
import React, { useContext, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'Learn to Trade Smart, Confident & Profitable.',
    description: 'Join RoadMoney Forex Academy — where real traders are made.',
    btn1: 'Join Mentorship',
    btn2: 'Watch Live Trading Demo',
    link1: '/mentorship',
    link2: '/demo',
    bg: 'from-[#0b0f19] via-[#121826] to-[#0b0f19]',
  },
  {
    title: 'Master the Market with Proven Strategies.',
    description: 'From prop firm secrets to live trading — gain the edge you need.',
    btn1: 'Start Learning',
    btn2: 'View Course Outline',
    link1: '/mentorship',
    link2: '/courses',
    bg: 'from-[#101820] via-[#17212f] to-[#101820]',
  },
  {
    title: 'Build Confidence. Trade Consistently. Win Big.',
    description: 'Turn your passion into profit with real-world trading mentorship.',
    btn1: 'Get Started',
    btn2: 'Contact Admin',
    link1: '/apply',
    link2: '/contact',
    bg: 'from-[#091218] via-[#14202d] to-[#091218]',
  },
];

const Hero: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  const current = slides[index];

  // Typing effect
  useEffect(() => {
    if (isPaused) return;

    const text = current.title;
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < text.length) {
      timer = setTimeout(() => {
        setTypedText(text.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setTypedText(text.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      setTimeout(() => setIsDeleting(!isDeleting), 1500);
      if (isDeleting) {
        setIndex((prev) => (prev + 1) % slides.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, isPaused, index]);

  // Swipe for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStart.current = null;
  };

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const bgClass =
    theme === 'dark'
      ? `bg-gradient-to-b ${current.bg}`
      : 'bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#1a1a1a]';

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`relative flex flex-col items-center justify-center h-screen text-center overflow-hidden ${bgClass} ${textClass} font-montserrat transition-colors duration-500`}
    >
      {/* Moving Background Wave */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage:
            theme === 'dark'
              ? 'url("/assets/forex-wave-dark.svg")'
              : 'url("/assets/forex-wave-light.svg")',
          backgroundSize: 'cover',
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="px-6 z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#00c896] mb-4">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            {current.description}
          </p>

          <div className="mt-8 space-x-4">
            <a
              href={current.link1}
              className="inline-block px-6 py-3 bg-[#00c896] text-white rounded-2xl hover:scale-105 transition-transform"
            >
              {current.btn1}
            </a>
            <a
              href={current.link2}
              className="inline-block px-6 py-3 border border-[#00c896] text-[#00c896] rounded-2xl hover:scale-105 transition-transform"
            >
              {current.btn2}
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow Controls */}
      <div className="absolute inset-x-0 flex justify-between items-center px-6 md:px-10 text-[#00c896]">
        <button
          onClick={handlePrev}
          className="p-2 hover:scale-110 transition-transform"
        >
          <ArrowLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 hover:scale-110 transition-transform"
        >
          <ArrowRight size={28} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#00c896]' : 'bg-gray-500/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
