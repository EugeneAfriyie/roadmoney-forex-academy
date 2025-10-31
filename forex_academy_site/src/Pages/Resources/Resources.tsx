// src/pages/Resources.tsx
import React from "react";
import { motion } from "framer-motion";
import { Download, PlayCircle, Lock, BookOpen, Video, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Resources: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fb] to-white dark:from-[#0b0f19] dark:to-[#0b0f19] text-[#1a1a1a] dark:text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="pt-24 pb-12 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#00c896] mb-4">
            Forex Learning Resources
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Master forex trading with our free guides, cheat sheets, and premium video courses.
          </p>
        </motion.div>
      </section>

      {/* ===== FREE RESOURCES ===== */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2"
          >
            <BookOpen className="text-[#00c896]" />
            Free Resources
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeResources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-[#1a1f2e] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-[#00c896]/10 rounded-xl group-hover:bg-[#00c896]/20 transition">
                    {resource.icon}
                  </div>
                  <Download className="text-gray-400 group-hover:text-[#00c896] transition" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {resource.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PREMIUM RESOURCES ===== */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#00c896]/5 dark:bg-[#00c896]/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2"
          >
            <Lock className="text-[#00c896]" />
            Premium Video Courses
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {premiumCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-[#1a1f2e] rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative">
                  <div className="bg-gray-200 border-2 border-dashed rounded-t-2xl w-full h-48 flex items-center justify-center">
                    <PlayCircle size={48} className="text-[#00c896]" />
                  </div>
                  <span className="absolute top-4 right-4 bg-[#00c896] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Premium
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {course.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#00c896]">
                      {course.price}
                    </span>
                    <Link
                      to="/mentorship"
                      className="px-4 py-2 bg-[#00c896] text-white rounded-xl hover:bg-[#00b589] transition"
                    >
                      Join to Unlock
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Trade Like a Pro?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Join our mentorship program and get lifetime access to all premium resources.
          </p>
          <Link
            to="/mentorship"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00c896] text-white text-lg font-semibold rounded-2xl hover:bg-[#00b589] transition transform hover:scale-105"
          >
            Join Mentorship Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

// === DATA ===
const freeResources = [
  {
    title: "Forex 101 Guide",
    desc: "Beginner’s guide to forex trading, terminology, and market basics.",
    icon: <FileText size={28} className="text-[#00c896]" />,
    link: "#",
  },
  {
    title: "Risk Management Cheat Sheet",
    desc: "Essential rules to protect your capital and trade safely.",
    icon: <FileText size={28} className="text-[#00c896]" />,
    link: "#",
  },
  {
    title: "Top 10 Candlestick Patterns",
    desc: "Visual PDF with the most profitable reversal patterns.",
    icon: <FileText size={28} className="text-[#00c896]" />,
    link: "#",
  },
];

const premiumCourses = [
  {
    title: "Advanced Price Action Mastery",
    desc: "8+ hours of in-depth supply/demand, order blocks, and institutional trading.",
    price: "GHS 1,200",
  },
  {
    title: "ICT Smart Money Concepts",
    desc: "Full SMC course with live trade breakdowns and strategy templates.",
    price: "GHS 1,800",
  },
];

export default Resources;