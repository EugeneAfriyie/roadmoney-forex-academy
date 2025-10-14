// src/pages/Home.tsx
import React, { useContext } from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { ThemeContext } from '../../Context/ThemeContext';

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const bgClass = theme === 'dark' ? 'bg-[#0b0f19]' : 'bg-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#1a1a1a]';
  const cardBg = theme === 'dark' ? 'bg-[#1a1e2e]' : 'bg-white';
  const sectionPadding = 'py-16';

  const staggerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardHover = {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(0, 200, 150, 0.2)',
  };

  const quotes = [
    { text: "The stock market is filled with individuals who know the price of everything, but the value of nothing.", author: "Philip Fisher" },
    { text: "In investing, what is comfortable is rarely profitable.", author: "Robert Arnott" },
    { text: "After years of blowing accounts, I found what truly works. Now I teach others the same.", author: "Mentor" },
  ];

  return (
    <div className={`${bgClass} ${textClass} font-montserrat min-h-screen`}>
      {/* Hero Section */}
      <section className={`h-screen flex items-center justify-center text-center ${sectionPadding}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-[#00c896]">Learn to Trade Smart, Confident & Profitable.</h1>
          <p className="text-xl mt-4">Join RoadMoney Forex Academy — where real traders are made.</p>
          <div className="mt-8 space-x-4">
            <button className="px-6 py-3 bg-[#00c896] text-white rounded-2xl hover:scale-105 transition-transform">
              Join Mentorship
            </button>
            <button className="px-6 py-3 border border-[#00c896] text-[#00c896] rounded-2xl hover:scale-105 transition-transform">
              Watch Live Trading Demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* About the Mentor */}
      <section className={`container mx-auto px-4 ${sectionPadding}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-gray-500 h-64 rounded-2xl" /> {/* Placeholder image */}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-[#00c896]">About the Mentor</h2>
            <p className="mt-4">After years of blowing accounts, I found what truly works. Now I teach others the same.</p>
            <button className="mt-4 px-4 py-2 bg-[#00c896] text-white rounded-2xl hover:scale-105 transition-transform">
              Learn My Story
            </button>
          </motion.div>
        </div>
      </section>

      {/* What is Forex Trading */}
      <section className={`container mx-auto px-4 ${sectionPadding} ${bgClass}`}>
        <h2 className="text-3xl font-bold text-center text-[#00c896] mb-8">What is Forex Trading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['What is Forex', 'Why Most Traders Fail', 'How This Mentorship Helps'].map((title, i) => (
            <motion.div
              key={i}
              className={`${cardBg} p-6 rounded-2xl shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={cardHover}
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quotes Section */}
      <section className={`container mx-auto px-4 ${sectionPadding} text-center`}>
        <h2 className="text-3xl font-bold text-[#00c896] mb-8">Inspiring Quotes</h2>
        <motion.div
          className="max-w-2xl mx-auto"
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          {quotes.map((quote, i) => (
            <motion.p
              key={i}
              className="text-lg italic mb-4"
              variants={staggerVariants}
              transition={{ delay: i * 0.3 }}
            >
              "{quote.text}" - {quote.author}
            </motion.p>
          ))}
        </motion.div>
      </section>

      {/* Mentorship Program Details */}
      <section className={`container mx-auto px-4 ${sectionPadding} ${bgClass}`}>
        <h2 className="text-3xl font-bold text-center text-[#00c896] mb-8">What You’ll Get Inside Mentorship</h2>
        <motion.ul
          className="max-w-2xl mx-auto space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            '1 Month Intensive Training',
            'Lifetime Coaching',
            'Live Trading Sessions',
            'Prop Firm Techniques',
            'Certificate of Participation',
          ].map((item, i) => (
            <motion.li key={i} className="flex items-center" variants={staggerVariants}>
              <CheckCircle className="text-[#00c896] mr-2" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-[#00c896] text-white rounded-2xl hover:scale-105 transition-transform">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`container mx-auto px-4 ${sectionPadding}`}>
        <h2 className="text-3xl font-bold text-center text-[#00c896] mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`${cardBg} p-6 rounded-2xl shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="bg-gray-500 w-16 h-16 rounded-full mx-auto mb-4" /> {/* Placeholder photo */}
              <p className="italic">"Great mentorship!"</p>
              <p className="mt-2 font-semibold">Name {i}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-[#00c896] text-white rounded-2xl hover:scale-105 transition-transform">
            Join Our Telegram
          </button>
        </div>
      </section>

      {/* Live Market Dashboard */}
      <section className={`container mx-auto px-4 ${sectionPadding} ${bgClass}`}>
        <h2 className="text-3xl font-bold text-center text-[#00c896] mb-8">Live Market Dashboard</h2>
        <div className="bg-gray-800 h-64 rounded-2xl flex items-center justify-center">
          <p>TradingView Widget Placeholder</p>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className={`container mx-auto px-4 ${sectionPadding}`}>
        <h2 className="text-3xl font-bold text-center text-[#00c896] mb-8">Free Resources</h2>
        <div className="max-w-md mx-auto text-center">
          <p>Download Free Forex Guide (PDF)</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 px-4 py-2 w-full rounded-2xl border border-[#00c896] bg-transparent"
          />
          <button className="mt-4 px-6 py-3 bg-[#00c896] text-white rounded-2xl hover:scale-105 transition-transform">
            Download
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`text-center ${sectionPadding} ${bgClass}`}>
        <h2 className="text-3xl font-bold text-[#00c896]">Take your first step to becoming a consistent trader.</h2>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-[#00c896] text-white rounded-2xl hover:scale-105 transition-transform">
            Apply for Mentorship
          </button>
          <button className="px-6 py-3 border border-[#00c896] text-[#00c896] rounded-2xl hover:scale-105 transition-transform">
            Chat with Admin
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;