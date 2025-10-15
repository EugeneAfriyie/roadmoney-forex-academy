import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Globe from 'react-globe.gl';
import { ArrowRight, BarChart3, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { ThemeContext } from '../../../context/ThemeContext';
// import { ThemeContext } from '../context/ThemeProvider';

const slides = [
  {
    id: 1,
    title: 'Learn to Trade Smart, Confident & Profitable.',
    subtitle: 'Join RoadMoney Forex Academy — where real traders are made.',
    button1: 'Join Mentorship',
    button2: 'Watch Live Trading Demo',
    icon: <BarChart3 size={26} className="text-[#00c896]" />,
    background: 'image', // Static image
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236aa?w=1920&h=1080&fit=crop',
  },
  {
    id: 2,
    title: 'Master the Art of Consistency in Trading.',
    subtitle: 'We help you build strategy, psychology, and discipline for lasting success.',
    button1: 'View Course Outline',
    button2: 'Meet the Mentor',
    icon: <Target size={26} className="text-[#00c896]" />,
    background: 'globe', // 3D globe
  },
  {
    id: 3,
    title: 'Turn Your Knowledge into Profitable Trades.',
    subtitle: 'Learn advanced techniques, prop firm strategies, and live trading experience.',
    button1: 'Enroll Today',
    button2: 'Explore Benefits',
    icon: <ArrowRight size={26} className="text-[#00c896]" />,
    background: 'gradient', // Gradient with motion glow
  },
];

const HeroCarousel: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [current, setCurrent] = useState(0);

  const bgClass =
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]'
      : 'bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#1a1a1a]';
  const overlayClass = theme === 'dark' ? 'bg-black/50' : 'bg-white/50';
  const globeImage = theme === 'dark' ? '//unpkg.com/three-globe/example/img/earth-dark.jpg' : '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg';

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className={`relative flex items-center justify-center h-screen overflow-hidden ${bgClass} transition-colors duration-700 font-montserrat`}
    >
      {/* Backgrounds */}
      <AnimatePresence mode="wait">
        {slides[current].background === 'gradient' && (
          <motion.div
            key="gradient-bg"
            className="absolute inset-0 bg-gradient-to-r from-[#00c896]/20 via-transparent to-[#00c896]/20 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
        {slides[current].background === 'image' && (
          <motion.div
            key="image-bg"
            className={`absolute inset-0 bg-[url('${slides[current].imageUrl}')] bg-cover bg-center ${overlayClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
        {slides[current].background === 'globe' && (
          <motion.div
            key="globe-bg"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
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
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center justify-center gap-3 text-[#00c896]">
                {slides[current].icon}
                <span className="font-semibold tracking-wide uppercase text-sm md:text-base">
                  RoadMoney Forex Academy
                </span>
              </div>
              <h1 className={`text-3xl sm:text-5xl md:text-6xl font-bold ${textClass} max-w-3xl mx-auto`}>
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`/${slides[current].button1.toLowerCase().replace(' ', '-')}`}
                  className="bg-[#00c896] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#00a87a] hover:shadow-[0_0_15px_rgba(0,200,150,0.5)] transition-all duration-300"
                >
                  {slides[current].button1}
                </a>
                <a
                  href={`/${slides[current].button2.toLowerCase().replace(' ', '-')}`}
                  className="border border-[#00c896] text-[#00c896] px-8 py-3 rounded-xl font-semibold hover:bg-[#00c896]/10 hover:shadow-[0_0_15px_rgba(0,200,150,0.5)] transition-all duration-300"
                >
                  {slides[current].button2}
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
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

      {/* Pagination Dots */}
      <div className="absolute bottom-8 flex gap-2 justify-center w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-[#00c896] w-6' : 'bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;