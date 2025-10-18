import React, { useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import AnimatedBackground from './Home/WhatIsForex/AnimatedBackground';
import SectionHeader from './Home/QuoteCard/SectionHeader';

const panels = [
  {
    id: 'pain',
    eyebrow: 'The Struggle',
    title: 'Feeling lost in the Forex market?',
    text: 'You studied indicators, watched videos, and kept losing. Market noise, poor risk control, and emotional decisions turn promise into frustration.',
    tone: 'dark',
  },
  {
    id: 'turn',
    eyebrow: 'The Turning Point',
    title: 'What if clarity was a choice?',
    text: 'A single system, weekly live review, and constant feedback can move you from random trades to a repeatable edge.',
    tone: 'mix',
  },
  {
    id: 'promise',
    eyebrow: 'The Promise',
    title: 'From confusion to consistent results',
    text: 'With mentorship, you get structure, accountability, and a proven process — not guessing. Learn position sizing, entries, psychology, and how to pass prop firms.',
    tone: 'light',
  },
];

const FullScreenWhyMentorship: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const bgMix = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1]);

  return (
    <section id="why-mentorship" aria-labelledby="why-mentorship-heading" className="relative w-full">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <AnimatedBackground />
        <motion.div
          style={{ opacity: bgMix }}
          className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/10' : 'bg-white/20'}`}
          aria-hidden="true"
        />
      </div>

      {/* Panels */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {panels.map((p, _) => (
          <section
            key={p.id}
            className={`snap-start h-screen flex items-center justify-center px-4 xs:px-6 sm:px-8 lg:px-12`}
            aria-labelledby={`${p.id}-title`}
          >
            <div className="max-w-4xl text-center">
              <SectionHeader title={p.eyebrow} id={`${p.id}-title`} />
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121826]'} drop-shadow-sm`}
              >
                {p.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
                viewport={{ once: true }}
                className={`text-sm xs:text-base sm:text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-[#1e293b]'} drop-shadow-sm`}
              >
                {p.text}
              </motion.p>

              {/* CTA and Micro-Community Preview on Promise Panel */}
              {p.id === 'promise' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="/mentorship"
                      className="mt-8 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#00c896] to-[#00ffcc] text-black font-semibold shadow-lg hover:bg-[#00a77d] dark:hover:bg-[#00e6b3] focus:outline-none focus:ring-2 focus:ring-[#00c896]"
                      aria-label="Apply for Forex mentorship"
                    >
                      Get Mentored — Transform Your Journey
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6"
                  >
                    {[
                      {
                        title: 'Live Reviews',
                        text: 'Watch live trades and learn the rationale behind entries.',
                      },
                      {
                        title: 'Structured Curriculum',
                        text: 'Weekly lessons, exercises, and risk templates built for progress.',
                      },
                      {
                        title: 'Accountability',
                        text: 'Private community and mentor check-ins keep you on track.',
                      },
                    ].map((card, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/6"
                        role="article"
                        aria-label={card.title}
                      >
                        <h5 className="font-semibold text-[#00c896] dark:text-[#00ffcc] mb-2">
                          {card.title}
                        </h5>
                        <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-white/70' : 'text-[#1e293b]'}`}>
                          {card.text}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </>
              )}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default FullScreenWhyMentorship;