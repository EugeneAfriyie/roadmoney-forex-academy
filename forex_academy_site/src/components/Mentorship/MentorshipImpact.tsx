import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Mic, Share2, Target } from "lucide-react";

const MentorshipImpact: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-[#00c896]" />,
      value: 1200,
      label: "Traders Trained",
      subtext: "Across 15+ countries",
    },
    {
      icon: <Mic className="w-8 h-8 text-[#00c896]" />,
      value: 80,
      label: "Webinars Hosted",
      subtext: "Interactive & insightful",
    },
    {
      icon: <Target className="w-8 h-8 text-[#00c896]" />,
      value: 95,
      label: "Success Rate",
      subtext: "Among consistent students",
    },
    {
      icon: <Share2 className="w-8 h-8 text-[#00c896]" />,
      value: 15000,
      label: "Social Reach",
      subtext: "Inspiring daily traders",
    },
  ];

  return (
    <section className="relative py-24 px-6 sm:px-10 font-montserrat overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,200,150,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,200,150,0.05),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#00c896]"
        >
          Mentorship Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base"
        >
          Through consistent mentorship and structured learning, our academy continues to shape disciplined traders who
          approach the markets with clarity, confidence, and purpose.
        </motion.p>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { ref, inView } = useInView({ triggerOnce: true });
            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-[#121826]/60 backdrop-blur-sm 
                           hover:bg-[#1a2233]/80 shadow-[0_0_20px_rgba(0,200,150,0.1)] 
                           hover:shadow-[0_0_30px_rgba(0,200,150,0.25)] transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {stat.icon}
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#00e6a8]">
                    {inView ? (
                      <CountUp start={0} end={stat.value} duration={2.5} separator="," suffix="+" />
                    ) : (
                      "0+"
                    )}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold">{stat.label}</p>
                  <p className="text-xs sm:text-sm text-white/60">{stat.subtext}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <a
            href="/mentorship"
            className="inline-block px-8 py-3 bg-[#00c896] text-black font-semibold rounded-2xl 
                       hover:scale-105 hover:shadow-[0_0_25px_rgba(0,200,150,0.5)] transition-all duration-300"
          >
            Join the Mentorship
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorshipImpact;
