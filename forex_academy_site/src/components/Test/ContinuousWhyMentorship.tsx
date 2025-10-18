// // ContinuousWhyMentorship.tsx
// // Eugene Afriyie UEB3502023
// import React, { useContext } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { ThemeContext } from '../../context/ThemeContext';
// import AnimatedChartCanvas from '../Home/WhyForex/AnimatedChartCanvas';
// import SectionHeader from '../Home/QuoteCard/SectionHeader';
// // import { ThemeContext } from '../../../context/ThemeContext';
// // import AnimatedChartCanvas from '../Animations/AnimatedChartCanvas'; // adjust path
// // import SectionHeader from '../QuoteCard/SectionHeader';

// const ContinuousWhyMentorship: React.FC = () => {
//   const { theme } = useContext(ThemeContext);

//   // scroll progress for the whole section
//   const { scrollYProgress } = useScroll({ target: typeof window !== 'undefined' ? document.getElementById('why-mentorship-cont') : undefined });
//   // fallback: we can also create local transforms in-motion below if you prefer

//   return (
//     <section
//       id="why-mentorship-cont"
//       // aria-labelledby="why-mentorship-cont-heading"
//       className="relative py-28 overflow-hidden"
//     >
//       {/* animated canvas background */}
//       <div className="absolute inset-0 -z-10 pointer-events-none">
//         <AnimatedChartCanvas theme={theme as 'dark' | 'light'} />
//         <div className={`${theme === 'dark' ? 'bg-black/10' : 'bg-white/6'} absolute inset-0 mix-blend-overlay`} />
//       </div>

//       <div className="relative max-w-6xl mx-auto px-6">
//         <SectionHeader title="Why Mentorship Matters" id="why-mentorship-cont-heading" />

//         {/* Pain (stacked) */}
//         <motion.article
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-12"
//         >
//           <h3 className="text-2xl font-bold text-[#ff6b6b] mb-3">The Pain — Trading Alone</h3>
//           <p className={`${theme === 'dark' ? 'text-white/80' : 'text-slate-700'} text-lg`}>
//             You follow signals, test strategies, and still lose. Without mentoring, mistakes compound — bad habits become permanent and progress stalls.
//           </p>
//         </motion.article>

//         {/* Transition */}
//         <motion.div
//           className="relative my-12 py-12 flex items-center justify-center"
//           initial={{ opacity: 0.6 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9 }}
//         >
//           <div className="w-full max-w-3xl text-center">
//             <motion.div
//               initial={{ scale: 0.98 }}
//               whileInView={{ scale: 1.02 }}
//               transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
//               className="mx-auto mb-6"
//             >
//               <div className="w-40 h-40 rounded-full blur-[80px] bg-gradient-to-tr from-[#00ffcc] to-[#00c896] opacity-30 mx-auto" />
//             </motion.div>
//             <h4 className="text-xl font-semibold text-[#00c896] mb-2">Then a Light Appears</h4>
//             <p className={`${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}>
//               A mentor gives feedback, structure and a proven process — transforming random trades into a disciplined approach.
//             </p>
//           </div>
//         </motion.div>

//         {/* Promise */}
//         <motion.article
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-6"
//         >
//           <h3 className="text-2xl font-bold text-[#00c896] mb-3">The Promise — Guided Growth</h3>
//           <p className={`${theme === 'dark' ? 'text-white/80' : 'text-slate-700'} text-lg mb-6`}>
//             Our mentorship replaces guesswork with repeatable systems: trade plans, risk templates, live reviews, psychology work — and a community that keeps you accountable.
//           </p>

//           <div className="mt-6">
//             <a
//               href="/mentorship"
//               className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#00c896] to-[#00ffcc] text-black font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#00c896]"
//             >
//               Join Mentorship — Start Today
//             </a>
//           </div>
//         </motion.article>

//         {/* Micro community preview */}
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/6">
//             <h5 className="font-semibold text-[#00c896] mb-2">Live Reviews</h5>
//             <p className={`${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Watch live trades and learn the rationale behind entries.</p>
//           </div>
//           <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/6">
//             <h5 className="font-semibold text-[#00c896] mb-2">Structured Curriculum</h5>
//             <p className={`${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Weekly lessons, exercises, and risk templates built for progress.</p>
//           </div>
//           <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/6">
//             <h5 className="font-semibold text-[#00c896] mb-2">Accountability</h5>
//             <p className={`${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Private community and mentor check-ins keep you on track.</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };






// export default ContinuousWhyMentorship;
