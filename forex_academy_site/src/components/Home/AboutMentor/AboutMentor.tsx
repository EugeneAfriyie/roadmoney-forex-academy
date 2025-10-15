// src/components/AboutMentor.tsx
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import MentorImage from './MentorImage';
import StatsCard from './StatsCard';
import { ThemeContext } from '../../../context/ThemeContext';

const AboutMentor: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const bgClass =
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]'
      : 'bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#1a1a1a]';

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Students Mentored', value: '100+' },
    { label: 'Prop Firm Success Rate', value: '90%' },
    { label: 'Focus Areas', value: 'Risk • Psychology • Consistency' },
  ];

  return (
    <section
      id="about"
      className={`relative py-20 overflow-hidden ${bgClass} ${textClass} font-montserrat transition-colors duration-500 bg-[url('/assets/wave-pattern.svg')] bg-cover bg-center`}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-center">
        <MentorImage
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop"
          alt="Mentor"
        />
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          aria-label="Mentor information"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-[#00c896]"
          >
            Meet Your Mentor
          </motion.h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed">
            After years of blowing accounts, I found what truly works. Now I teach others the same.{' '}
            <span className="font-semibold text-[#00c896]">
              RoadMoney Forex
            </span>{' '}
            focuses on market structure mastery, risk management, and trading psychology — the true pillars of consistency.
          </p>

          <p className="mt-4 text-sm sm:text-base opacity-80">
            The RoadMoney Forex Academy is not just a program; it’s a movement where traders are shaped, guided, and empowered to become confident and profitable market participants.
          </p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <a
              href="/mentorship"
              className="inline-block px-8 py-3 bg-[#00c896] text-white font-semibold rounded-2xl hover:scale-105 hover:shadow-[0_0_15px_rgba(0,200,150,0.5)] transition-all duration-300"
            >
              Learn My Story
            </a>
          </motion.div>

          {/* Stats / Badges */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((item, index) => (
              <StatsCard key={index} value={item.value} label={item.label} index={index} />
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default AboutMentor;