// Eugene Afriyie UEB3502023
import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Laptop, Users } from 'lucide-react';
import { ThemeContext } from '../../../context/ThemeContext';
import SectionHeader from '../QuoteCard/SectionHeader';
// import { ThemeContext } from '../../../context/ThemeContext';
// import SectionHeader from '../QuoteCard/SectionHeader';

const WhatYouGet: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [mode, setMode] = useState<'online' | 'inperson'>('online');

  const bgClass =
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]'
      : 'bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]';

  const textClass = theme === 'dark' ? 'text-white/90' : 'text-black/80';

  const content = {
    online: {
      icon: <Laptop className="text-[#00ffcc] w-6 h-6" />,
      title: 'Online Mentorship',
      description:
        'Join from anywhere with live Zoom sessions, community access, and recorded replays for flexible learning.',
      features: [
        'Live online classes (Zoom)',
        'Exclusive Discord group',
        'Session replays access',
        '1-on-1 Q&A support',
        'Interactive assignments',
      ],
      cta: 'Join Online Mentorship',
    },
    inperson: {
      icon: <Users className="text-[#00ffcc] w-6 h-6" />,
      title: 'In-Person Mentorship',
      description:
        'Experience immersive hands-on sessions at our training centers with direct interaction and live trading practice.',
      features: [
        'On-site intensive classes',
        'Direct live trading sessions',
        'Networking with peers',
        'Exclusive resource kit',
        'Certificate of completion',
      ],
      cta: 'Join In-Person Mentorship',
    },
  };

  return (
    <section
      id="what-you-get"
      aria-labelledby="what-you-get-heading"
      className={`relative py-20 overflow-hidden ${bgClass} transition-colors duration-500`}
    >
      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 z-10 text-center">
        <SectionHeader title="What You’ll Get" id="what-you-get-heading" />
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setMode('online')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              mode === 'online'
                ? 'bg-[#00ffcc] text-[#0b0f19]'
                : 'bg-transparent border border-[#00ffcc]/40 text-[#00ffcc]'
            }`}
          >
            Online
          </button>
          <button
            onClick={() => setMode('inperson')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              mode === 'inperson'
                ? 'bg-[#00ffcc] text-[#0b0f19]'
                : 'bg-transparent border border-[#00ffcc]/40 text-[#00ffcc]'
            }`}
          >
            In-Person
          </button>
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            {/* Left Side */}
            <motion.div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                {content[mode].icon}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00ffcc]">
                  {content[mode].title}
                </h3>
              </div>
              <p className={`text-base sm:text-lg ${textClass}`}>
                {content[mode].description}
              </p>
              <ul className="space-y-3 mt-6">
                {content[mode].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-[#00ffcc] w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/mentorship"
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-8 px-6 py-3 bg-[#00ffcc] text-[#0b0f19] font-semibold rounded-full hover:bg-[#00e6b3] transition-colors"
              >
                {content[mode].cta}
              </motion.a>
            </motion.div>

            {/* Right Side */}
            <motion.div
              className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={
                  mode === 'online'
                    ? '/assets/mentorship-online.jpg'
                    : '/assets/mentorship-inperson.jpg'
                }
                alt={content[mode].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/70 to-transparent" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhatYouGet;
