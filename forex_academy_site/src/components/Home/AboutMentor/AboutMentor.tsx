// src/components/AboutMentor.tsx
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../../context/ThemeContext";
import MentorImage from "./MentorImage";
import StatsCard from "./StatsCard";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const AboutMentor: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const bgClass =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
      : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";
  const textClass = theme === "dark" ? "text-[#ffffffcc]" : "text-[#1a1a1a]";

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Students Mentored", value: "100+" },
    { label: "Prop Firm Success Rate", value: "90%" },
    { label: "Focus Areas", value: "Risk • Psychology • Consistency" },
  ];

  const socials = [
    { name: "Twitter", icon: Twitter, link: "https://twitter.com/" },
    { name: "Instagram", icon: Instagram, link: "https://instagram.com/" },
    { name: "YouTube", icon: Youtube, link: "https://youtube.com/" },
    { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com/" },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`relative py-20 overflow-hidden ${bgClass} ${textClass} font-montserrat transition-colors duration-500 bg-[url('/assets/wave-pattern.svg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/20 before:pointer-events-none`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Mentor Image */}
        <motion.div
          whileHover={{ scale: 1.03, rotate: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,200,150,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00c896]/10 via-transparent to-transparent" />
          <MentorImage
            src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140155/photo_2025-04-14_18-06-19_h2jdxx.jpg"
            alt="Mentor"
          />
        </motion.div>

        {/* Mentor Details */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative text-3xl md:text-4xl font-bold text-[#00c896] font-['Playfair_Display'] tracking-tight"
          >
            <span className="absolute -inset-3 bg-[#00c896]/10 blur-xl rounded-full -z-10" />
            Meet Your Mentor
          </motion.h2>

          {/* Mentor Badges */}
          <div className="flex flex-wrap gap-2 mt-4 text-xs text-white/80">
            <span className="px-3 py-1 bg-white/5 rounded-full">Self-Funded Trader</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">Webinar Host</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">5+ Years Trading</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">100+ Students</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">Prop Firm Funded</span>
          </div>

          <p className="mt-5 text-base sm:text-lg leading-relaxed opacity-90">
            After years of blowing accounts, I discovered what truly works. Now, I mentor others to do the same.{" "}
            <span className="font-semibold text-[#00c896]">RoadMoney Forex</span>{" "}
            is built around structure mastery, risk control, and trading psychology — the real pillars of consistency.
          </p>

          <p className="mt-4 text-sm sm:text-base opacity-80">
            As a self-funded trader and active webinar host, I regularly organize live sessions where I teach strategy,
            discipline, and mindset — helping traders transform confusion into clarity and confidence.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <a
              href="/mentorship"
              className="inline-block px-8 py-3 bg-[#00c896] text-black font-semibold rounded-2xl hover:scale-105 hover:shadow-[0_0_25px_rgba(0,200,150,0.5)] transition-all duration-300"
            >
              Learn My Story
            </a>
          </motion.div>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4">
            {socials.map(({ name, icon: Icon, link }) => (
              <motion.a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-white/70 hover:text-[#00c896] transition-colors duration-300"
                aria-label={name}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <StatsCard value={item.value} label={item.label} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
};

export default AboutMentor;
