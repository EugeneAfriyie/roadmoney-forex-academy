import React, { useContext, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, AlertTriangle, Star } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
// import { ThemeContext } from '../context/ThemeProvider';
import AnimatedBackground from './AnimatedBackground';
import { ThemeContext } from '../../context/ThemeContext';

interface ForexCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ForexCard: React.FC<ForexCardProps> = ({ title, description, icon, index }) => {
  const { theme } = useContext(ThemeContext);
  const cardBgClass = theme === 'dark' ? 'bg-[#121826]/50' : 'bg-white/80';

  return (
    <a
      href="/mentorship"
      aria-label={`Learn more about ${title} mentorship`}
      className="block focus:outline-none focus:ring-2 focus:ring-[#00c896]"
      tabIndex={0}
    >
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2, boxShadow: '0 0 20px rgba(0,200,150,0.2)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
          className={`card border border-[#00c896]/40 dark:border-[#00ffcc]/30 rounded-2xl p-6 text-center hover:border-[#00c896] dark:hover:border-[#00ffcc] hover:bg-[#00c896]/10 dark:hover:bg-[#00ffcc]/10 hover:shadow-[0_0_10px_rgba(0,200,150,0.3)] transition-all duration-300 ${cardBgClass} bg-[url('/assets/noise-pattern.png')] bg-opacity-5`}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.1, type: 'spring', stiffness: 100 }}
            whileHover={{ animate: { boxShadow: '0 0 20px rgba(0,200,150,0.2)' } }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#00c896] dark:text-[#00ffcc] mb-4">
            {title}
          </h3>
          <p className="text-sm sm:text-base">{description}</p>
        </motion.div>
      </Tilt>
    </a>
  );
};

const SectionHeader: React.FC<{ title: string; id?: string }> = ({ title, id }) => (
  <motion.h2
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold text-[#00c896] dark:text-[#00ffcc] text-center mb-12 tracking-tight"
  >
    {title}
  </motion.h2>
);

const WhatIsForex: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const bgClass =
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]'
      : 'bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#000000]';

  const cards = useMemo(
    () => [
      {
        title: 'What is Forex?',
        description:
          'Forex, or foreign exchange, is the global market for trading currencies. It’s the largest financial market, operating 24/5, where traders profit by predicting currency pair movements.',
        icon: <Globe size={26} className="text-[#00c896] dark:text-[#00ffcc] mx-auto mb-2 drop-shadow-[0_0_5px_rgba(0,200,150,0.5)]" />,
      },
      {
        title: 'Why Most Traders Fail?',
        description:
          'Lack of discipline, poor risk management, and emotional trading lead to losses. Without a solid strategy and mindset, most traders struggle to achieve consistency.',
        icon: <AlertTriangle size={26} className="text-[#00c896] dark:text-[#00ffcc] mx-auto mb-2 drop-shadow-[0_0_5px_rgba(0,200,150,0.5)]" />,
      },
      {
        title: 'How This Mentorship Helps',
        description:
          'Our mentorship provides structured learning, expert guidance, and proven strategies. We focus on risk management, trading psychology, and market structure to ensure your success.',
        icon: <Star size={26} className="text-[#00c896] dark:text-[#00ffcc] mx-auto mb-2 drop-shadow-[0_0_5px_rgba(0,200,150,0.5)]" />,
      },
    ],
    []
  );

  return (
    <section
      id="what-is-forex"
      aria-labelledby="forex-heading"
      className={`relative py-20 overflow-hidden ${bgClass} ${textClass} font-montserrat transition-colors duration-500`}
    >
      <AnimatedBackground />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#00ffcc] to-[#00c896] blur-[180px] opacity-20"
        style={{ y }}
        animate={{
          x: ['0%', '-20%', '10%', '0%'],
          y: ['0%', '-10%', '15%', '0%'],
          scale: [1, 1.1, 1.05, 1],
          rotate: [0, -40, 30, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 z-10">
        <SectionHeader title="Understand Forex Trading" id="forex-heading" />
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
          {cards.map((card, index) => (
            <div key={index} role="article" aria-label={card.title}>
              <ForexCard {...card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsForex;