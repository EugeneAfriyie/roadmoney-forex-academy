// Eugene Afriyie UEB3502023
import React, { useContext } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Clock, DollarSign, Globe } from 'lucide-react';
import SectionHeader from '../QuoteCard/SectionHeader';
import { ThemeContext } from '../../../context/ThemeContext';
import AnimatedChartCanvas from './AnimatedChartCanvas';
// import AnimatedChartCanvas from './Animations/AnimatedChartCanvas';

const WhyForex: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const bgClass =
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#0b0f19] via-[#0f1520] to-[#0b0f19]'
      : 'bg-gradient-to-b from-[#f8f9fb] via-[#eef1f6] to-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#0b0f0f]';

  const reasons = [
    {
      title: 'Flexible Work Schedule',
      description:
        'Trade anytime with the 24/5 Forex market, giving you control over your time unlike traditional 9-to-5 jobs.',
      icon: <Clock size={20} className="text-[#00c896] dark:text-[#00ffcc] mr-3 flex-shrink-0" />,
    },
    {
      title: 'Unlimited Earning Potential',
      description:
        'Forex offers significant returns through leveraged positions and skillful trading, offering growth beyond fixed salaries.',
      icon: (
        <DollarSign size={20} className="text-[#00c896] dark:text-[#00ffcc] mr-3 flex-shrink-0" />
      ),
    },
    {
      title: 'Global Accessibility',
      description:
        'Access the global market from anywhere with an internet connection — trade on your schedule from any location.',
      icon: <Globe size={20} className="text-[#00c896] dark:text-[#00ffcc] mr-3 flex-shrink-0" />,
    },
  ];

  return (
    <section
      id="why-forex"
      aria-labelledby="why-forex-heading"
      className={`relative py-20 overflow-hidden ${bgClass} ${textClass} font-montserrat transition-colors duration-500`}
    >
      {/* Animated canvas background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatedChartCanvas theme={theme as 'dark' | 'light'} />
        <motion.div
          style={{ translateY }}
          className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/10' : 'bg-white/6'} mix-blend-overlay`}
          aria-hidden
        />
      </div>

      {/* Floating accent blob */}
      <motion.div
        aria-hidden
        className="absolute bottom-[-18%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-18"
        animate={{
          x: ['0%', '-18%', '10%', '0%'],
          y: ['0%', '-8%', '12%', '0%'],
          scale: [1, 1.06, 1.02, 1],
          rotate: [0, -30, 24, 0],
        }}
        transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(135deg, rgba(0,255,204,0.16), rgba(0,200,150,0.10))'
              : 'linear-gradient(135deg, rgba(0,200,150,0.12), rgba(60,150,255,0.08))',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 z-10">
        <SectionHeader title="Why Forex? Why Now?" id="why-forex-heading" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className={`text-base sm:text-lg text-center max-w-3xl mx-auto mb-10 ${textClass}`}
        >
          Forex trading is more than price charts — it’s a global system of opportunity. Here are three
          reasons traders choose forex as their path to financial independence.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Animated visual (canvas already covers background — show floating card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-transparent"
          >
            <div className="absolute inset-6 rounded-xl bg-gradient-to-b from-black/25 to-transparent backdrop-blur-md border border-white/6 z-20 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/80">Live Market Snapshot</p>
                  <h4 className="text-lg font-bold text-white">EUR / USD</h4>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#00c896]">+0.34%</p>
                  <p className="text-xs text-white/70">1.0895</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-white/70">Session: London</div>
                <button
                  className="px-3 py-1 rounded-full bg-[#00c896] text-black font-semibold text-sm hover:brightness-95 transition"
                  aria-label="View live trades"
                >
                  View Trades
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#00c896] dark:text-[#00ffcc] mb-4">
              Forex: A Career Like No Other
            </h3>
            <p className="text-sm sm:text-base mb-6">
              Forex lets you trade global currencies, scale risk, and build a repeatable edge. It’s not
              about luck — it’s about systems, discipline, and consistency.
            </p>

            <ul className="space-y-6 mb-6">
              {reasons.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg"
                    aria-hidden
                    style={{
                      background: theme === 'dark' ? 'rgba(0,255,204,0.06)' : 'rgba(0,200,150,0.06)',
                    }}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-[#00c896] dark:text-[#00ffcc]">
                      {r.title}
                    </h4>
                    <p className="text-sm">{r.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* ---- Mentorship Teaser (animated) ---- */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.9 }}
                className="text-sm italic text-gray-200 dark:text-gray-300 max-w-xl"
                aria-hidden={prefersReducedMotion}
              >
                <span className="text-[#00c896] font-semibold">At RoadMoney,</span> we don’t just teach Forex — we mentor you to master it.
              </motion.p>
              {/* subtle type/wave underline that animates */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="h-[2px] bg-gradient-to-r from-[#00c896] to-[#00ffcc] rounded mt-3 max-w-sm"
                aria-hidden
              />
            </motion.div>

            {/* ---- Primary CTA: Join the Movement ---- */}
            <motion.a
              href="/mentorship"
              role="button"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(0,200,150,0.18)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#00c896] to-[#00ffcc] text-black font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#00c896]"
              aria-label="Join the Movement and start mentorship"
            >
              <span>Join the Movement</span>
              <motion.span
                className="inline-block text-sm"
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.35 }}
                aria-hidden
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyForex;
