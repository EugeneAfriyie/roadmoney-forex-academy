import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Globe from 'react-globe.gl';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

const slideVariants: Variants = {
  enter: { x: '100%', opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

const Hero: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const bgClass =
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]'
      : 'bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#1a1a1a]';
  const overlayClass = theme === 'dark' ? 'bg-black/80' : 'bg-gray-800/70';

  const globeImage = theme === 'dark' ? '//unpkg.com/three-globe/example/img/earth-dark.jpg' : '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg';

  const slides = [
    // Slide 1: Initial content with background image
    <motion.div
      key="slide1"
      className="relative flex flex-col items-center justify-center h-full w-full px-4"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 z-0 w-full h-full bg-[url('https://res.cloudinary.com/djeorsh5d/image/upload/v1760410146/104108b7-dd55-4172-b3f5-079da4bb7ea6.png')] bg-cover bg-center"
      />
      <div className={`absolute inset-0 z-10 w-full h-full ${overlayClass}`} />
      <div className="relative z-20 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-[#00c896]"
        >
          Learn to Trade Smart, Confident & Profitable.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mt-4 max-w-2xl mx-auto"
        >
          Join RoadMoney Forex Academy — where real traders are made.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 space-x-4"
        >
          <a
            href="/mentorship"
            className="inline-block px-6 py-3 bg-[#00c896] text-white rounded-2xl hover:scale-105 transition-transform"
          >
            Join Mentorship
          </a>
          <a
            href="/demo"
            className="inline-block px-6 py-3 border border-[#00c896] text-[#00c896] rounded-2xl hover:scale-105 transition-transform"
          >
            Watch Live Trading Demo
          </a>
        </motion.div>
      </div>
    </motion.div>,

    // Slide 2: 3D Globe with Text (unchanged)
    <motion.div
      key="slide2"
      className="relative flex items-center justify-center h-full w-full"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <Globe
        globeImageUrl={globeImage}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#00c896"
        width={window.innerWidth}
        height={window.innerHeight}
        onGlobeReady={(globe: any) => {
          const controls = globe.controls();
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.5;
        }}
      />
      <div className="absolute flex flex-col items-center justify-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-[#00c896]"
        >
          Master the Global Markets
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mt-4 max-w-2xl mx-auto"
        >
          Trade with confidence using proven strategies taught by experts.
        </motion.p>
      </div>
    </motion.div>,

    // Slide 3: Motivational CTA with background image
    <motion.div
      key="slide3"
      className="relative flex flex-col items-center justify-center h-full w-full px-4"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 z-0 w-full h-full bg-[url('https://res.cloudinary.com/djeorsh5d/image/upload/v1760408679/IMG_20251014_022039_477_ri1daj.jpg')] bg-cover bg-center"
      />
      <div className={`absolute inset-0 z-10 w-full h-full ${overlayClass}`} />
      <div className="relative z-20 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-[#00c896]"
        >
          Transform Your Trading Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mt-4 max-w-2xl mx-auto"
        >
          Start today with RoadMoney Forex Academy and unlock your potential.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="/mentorship"
            className="inline-block px-6 py-3 bg-[#00c896] text-white rounded-2xl hover:scale-105 transition-transform"
          >
            Enroll Today
          </a>
        </motion.div>
      </div>
    </motion.div>,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className={`relative flex flex-col items-center justify-center h-screen text-center overflow-hidden ${bgClass} ${textClass} font-montserrat transition-colors duration-500`}
    >
      <AnimatePresence mode="wait">
        {slides[currentIndex]}
      </AnimatePresence>
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-[#00c896]' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      {/* Navigation Buttons */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition-colors"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className={textClass} />
      </motion.button>
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition-colors"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <ChevronRight size={24} className={textClass} />
      </motion.button>
    </section>
  );
};

export default Hero;