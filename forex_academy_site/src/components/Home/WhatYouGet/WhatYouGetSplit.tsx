import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Video, Clock, Award } from "lucide-react";

const FeatureCard: React.FC<{
  title: string;
  desc: string;
  Icon: React.FC<any>;
  index: number;
}> = ({ title, desc, Icon, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="bg-gradient-to-b from-white/5 to-white/2 dark:from-black/30 dark:to-black/20 border border-white/6 dark:border-white/6 rounded-2xl p-5 shadow-sm backdrop-blur-md hover:translate-y-[-6px] hover:shadow-[0_10px_30px_rgba(0,200,150,0.08)] transition-transform"
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(0,200,150,0.12), rgba(0,255,204,0.08))",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
          }}
          aria-hidden
        >
          <Icon size={20} className="text-[#00c896]" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-[#00c896] mb-1">{title}</h4>
          <p className="text-sm opacity-90">{desc}</p>
        </div>
      </div>
    </motion.li>
  );
};

const WhatYouGetSplit: React.FC = () => {
  const [mentorshipType, setMentorshipType] = useState<"online" | "in-person">("online");

  const mentorshipDetails = useMemo(
    () => ({
      online: {
        title: "Online Mentorship",
        tagline: "Master trading from anywhere",
        highlight: "4+ Live Sessions",
        mode: "Virtual",
        image: "https://res.cloudinary.com/djeorsh5d/image/upload/v1751247112/PREG1_pqz5ik.jpg",
        badge: "Exclusive Program",
        features: [
          { title: "1-on-1 Video Calls", desc: "Personalized coaching via Zoom to refine your trading edge.", Icon: Users },
          { title: "Live Market Streams", desc: "Join live trading sessions and learn in real-time.", Icon: Video },
          { title: "Risk & Psychology Training", desc: "Master risk management and trading psychology online.", Icon: Clock },
          { title: "Online Community Access", desc: "Lifetime access to our virtual trading community.", Icon: Award },
        ],
      },
      "in-person": {
        title: "In-Person Mentorship",
        tagline: "Immersive trading experience",
        highlight: "2-Day Workshop",
        mode: "In-Person",
        image: "https://res.cloudinary.com/djeorsh5d/image/upload/v1751247112/PREG1_pqz5ik.jpg",
        badge: "Elite Training",
        features: [
          { title: "In-Person Coaching", desc: "Face-to-face mentorship to build your trading skills.", Icon: Users },
          { title: "Live Trading Floor", desc: "Experience real-time trading in a professional setting.", Icon: Video },
          { title: "Advanced Risk Workshops", desc: "Hands-on training for risk and psychology mastery.", Icon: Clock },
          { title: "Exclusive Community Events", desc: "Join in-person events and network with traders.", Icon: Award },
        ],
      },
    }),
    []
  );

  const currentDetails = mentorshipDetails[mentorshipType];

  return (
    <section
      id="what-you-get"
      aria-labelledby="what-you-get-heading"
      className="relative py-20 px-4 sm:px-6 lg:px-12 font-montserrat transition-colors duration-500 mt-20"
    >
      {/* Intro */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          id="what-you-get-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-white"
        >
          Explore Our Mentorship Programs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto"
        >
          Unlock your trading potential with our expertly designed mentorship programs, tailored for both virtual and in-person learning.
        </motion.p>
      </div>

      {/* Toggle */}
      <div className="max-w-7xl mx-auto mb-8 flex justify-center gap-4">
        <button
          onClick={() => setMentorshipType("online")}
          className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors ${
            mentorshipType === "online"
              ? "bg-[#00c896] text-black"
              : "bg-white/5 text-white/70 hover:bg-white/10"
          }`}
        >
          Online Mentorship
        </button>
        <button
          onClick={() => setMentorshipType("in-person")}
          className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors ${
            mentorshipType === "in-person"
              ? "bg-[#00c896] text-black"
              : "bg-white/5 text-white/70 hover:bg-white/10"
          }`}
        >
          In-Person Mentorship
        </button>
      </div>

      {/* Split Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" aria-live="polite">
        
        {/* --- Left: Crossfade + Blur Image --- */}
        <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/6">
  <AnimatePresence mode="wait">
    <motion.img
      key={mentorshipType}
      src={currentDetails.image}
      alt={`${currentDetails.title} preview`}
      initial={{ opacity: 0, filter: "blur(10px)", transform: "scale(1.05)" }}
      animate={{ opacity: 1, filter: "blur(0px)", transform: "scale(1)" }}
      exit={{ opacity: 0, filter: "blur(10px)", transform: "scale(1.05)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full object-cover"
    />
  </AnimatePresence>

          {/* Overlay UI */}
          <div className="absolute inset-6 rounded-xl p-4 z-10 flex flex-col justify-between pointer-events-none bg-black/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/80">{currentDetails.tagline}</p>
                <h3 className="text-lg font-bold text-white">{currentDetails.title}</h3>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#00c896]">{currentDetails.highlight}</p>
                <p className="text-xs text-white/70">Per Month</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs text-white/70">Delivery: {currentDetails.mode}</div>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-full bg-[#00c896] text-black font-semibold text-xs pointer-events-auto">
                  Join Now
                </button>
                <button className="px-3 py-1 rounded-full bg-white/5 text-white text-xs pointer-events-auto">
                  View Curriculum
                </button>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 z-20">
            <div className="px-3 py-1 rounded-full bg-black/40 text-white text-xs">
              {currentDetails.badge}
            </div>
          </div>
        </div>

        {/* --- Right: Text + Features --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mentorshipType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold mb-4"
            >
              What You’ll Get
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-sm text-slate-400 mb-6"
            >
              {mentorshipType === "online"
                ? "A comprehensive online mentorship program to build your trading edge through virtual coaching and community."
                : "An immersive in-person mentorship experience with hands-on trading and exclusive networking opportunities."}
            </motion.p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentDetails.features.map((f, idx) => (
                <FeatureCard key={f.title} index={idx} title={f.title} desc={f.desc} Icon={f.Icon} />
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <a
                href="/mentorship"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#00c896] to-[#00ffcc] text-black font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#00c896]"
              >
                Join {currentDetails.title}
                <span className="text-sm">→</span>
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhatYouGetSplit;
