// FullScreenWhyMentorship.tsx
// Eugene Afriyie UEB3502023
import React, { useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import AnimatedChartCanvas from '../Home/WhyForex/AnimatedChartCanvas';
import SectionHeader from '../Home/QuoteCard/SectionHeader';

const panels = [
  {
    id: 'pain',
    eyebrow: 'The Struggle',
    title: 'Feeling lost in the Forex market?',
    text:
      'You studied indicators, watched videos, and kept losing. Market noise, poor risk control and emotional decisions turn promise into frustration.',
    tone: 'dark',
  },
  {
    id: 'turn',
    eyebrow: 'The Turning Point',
    title: 'What if clarity was a choice?',
    text:
      'A single system, weekly live review, and constant feedback can move you from random trades to repeatable edge.',
    tone: 'mix',
  },
  {
    id: 'promise',
    eyebrow: 'The Promise',
    title: 'From confusion to consistent results',
    text:
      'With mentorship you get structure, accountability, and a proven process — not guessing. Learn position sizing, entries, psychology, and how to pass prop firms.',
    tone: 'light',
  },
];

const FullScreenWhyMentorship: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  // remap progress to a 0..1 range for subtle background effect
  const bgMix = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1]);

  return (
    <section id="why-mentorship-full" className="relative w-full">
      {/* Background canvas - animated trading grid */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <AnimatedChartCanvas theme={theme as 'dark' | 'light'} />
        {/* overlay that reacts to scroll */}
        <motion.div
          style={{ opacity: bgMix }}
          className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/10' : 'bg-white/6'}`}
          aria-hidden
        />
      </div>

      {/* panels */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {panels.map((p, id) => (
          <section
            key={p.id}
            className={`snap-start h-screen flex items-center justify-center px-6 sm:px-12`}
            aria-labelledby={`${p.id}-title`}
          >
            <div className="max-w-4xl text-center">
              <p className="text-sm uppercase tracking-wide text-[#00c896] mb-4">{p.eyebrow}</p>
              <motion.h2
                id={`${p.id}-title`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className={`text-3xl sm:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#071023]'}`}
              >
                {p.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                className={`text-base sm:text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}
              >
                {p.text}
              </motion.p>

              {/* CTA only on final panel */}
              {p.id === 'promise' && (
               <>
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <a
                    href="/mentorship"
                    className="mt-8 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#00c896] to-[#00ffcc] text-black font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00c896]"
                    aria-label="Apply for mentorship"
                  >
                    Get Mentored — Transform Your Journey
                  </a>
                </motion.div>

                    {/* Micro community preview */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/6">
                                <h5 className="font-semibold text-[#00c896] mb-2">Live Reviews</h5>
                                <p className={`${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Watch live trades and learn the rationale behind entries.</p>
                              </div>
                              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/6">
                                <h5 className="font-semibold text-[#00c896] mb-2">Structured Curriculum</h5>
                                <p className={`${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Weekly lessons, exercises, and risk templates built for progress.</p>
                              </div>
                              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/6">
                                <h5 className="font-semibold text-[#00c896] mb-2">Accountability</h5>
                                <p className={`${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Private community and mentor check-ins keep you on track.</p>
                              </div>
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
