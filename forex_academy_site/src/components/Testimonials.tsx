import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { ThemeContext } from '../context/ThemeContext';
import AnimatedBackground from './Home/WhatIsForex/AnimatedBackground';
import SectionHeader from './Home/QuoteCard/SectionHeader';
// import { ThemeContext } from '../context/ThemeProvider';
// import AnimatedBackground from './AnimatedBackground';
// import SectionHeader from './SectionHeader';

interface TestimonialCardProps {
  quote: string;
  author: string;
  index: number;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, index, isActive }) => {
  const { theme } = useContext(ThemeContext);
  const cardBgClass = theme === 'dark' ? 'bg-[#121826]/50' : 'bg-white/80';

  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
      <motion.div
        initial={{ opacity: 0, x: index * 100, scale: 0.95 }}
        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : index * 100, scale: isActive ? 1 : 0.95 }}
        exit={{ opacity: 0, x: index * -100, scale: 0.95 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`card border border-[#00c896]/40 dark:border-[#00ffcc]/30 rounded-2xl p-6 text-center hover:border-[#00c896] dark:hover:border-[#00ffcc] hover:bg-[#00c896]/10 dark:hover:bg-[#00ffcc]/10 hover:shadow-[0_0_10px_rgba(0,200,150,0.3)] transition-all duration-300 ${cardBgClass} bg-[url('/assets/noise-pattern.png')] bg-opacity-5 max-w-lg mx-2`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 100 }}
        >
          <Quote size={26} className="text-[#00c896] dark:text-[#00ffcc] mx-auto mb-2 drop-shadow-[0_0_5px_rgba(0,200,150,0.5)]" />
        </motion.div>
        <p className="text-sm sm:text-base italic">"{quote}"</p>
        <p className="mt-4 text-sm font-semibold text-[#00c896] dark:text-[#00ffcc]">{author}</p>
      </motion.div>
    </Tilt>
  );
};

const Testimonials: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [current, setCurrent] = useState(0);

  const bgClass =
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]'
      : 'bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#000000]';

  const testimonials = [
    {
      quote: 'RoadMoney’s mentorship transformed my trading skills, helping me achieve consistent profits in just months!',
      author: 'Sarah K., Beginner Trader',
    },
    {
      quote: 'The strategies I learned from RoadMoney gave me the confidence to trade Forex full-time.',
      author: 'James L., Professional Trader',
    },
    {
      quote: 'Thanks to RoadMoney, I turned my side hustle into a thriving career with financial freedom.',
      author: 'Emma R., Part-Time Trader',
    },
  ];

  const handlePrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={`relative py-20 overflow-hidden ${bgClass} ${textClass} font-montserrat transition-colors duration-500`}
    >
      <AnimatedBackground />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#00ffcc] to-[#00c896] blur-[180px] opacity-20"
        animate={{
          x: ['0%', '-20%', '10%', '0%'],
          y: ['0%', '-10%', '15%', '0%'],
          scale: [1, 1.1, 1.05, 1],
          rotate: [0, -40, 30, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 z-10">
        <SectionHeader title="What Our Traders Say" id="testimonials-heading" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className={`text-base sm:text-lg text-center max-w-3xl mx-auto mb-12 ${textClass}`}
        >
          Hear from traders who transformed their lives with RoadMoney’s expert mentorship and proven strategies.
        </motion.p>
        <div className="relative">
          <AnimatePresence mode="wait">
            <div key={current} className="flex justify-center">
              <TestimonialCard
                quote={testimonials[current].quote}
                author={testimonials[current].author}
                index={0}
                isActive={true}
              />
            </div>
          </AnimatePresence>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition-colors"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className={textClass} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition-colors"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className={textClass} />
          </motion.button>
          <div className="absolute bottom-[-2rem] flex gap-2 justify-center w-full">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-[#00c896] w-6' : 'bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;