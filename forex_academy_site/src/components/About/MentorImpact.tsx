import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Users, Mic, Share2, Instagram, Youtube, Send } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const MentorImpact: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const bgClass = isDark
    ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
    : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";
  const textClass = isDark ? "text-white/90" : "text-gray-900";

  const socials = [
    { icon: <Instagram size={22} />, href: "https://instagram.com/", label: "Instagram" },
    { icon: <Youtube size={22} />, href: "https://youtube.com/", label: "YouTube" },
    { icon: <Send size={22} />, href: "https://t.me/", label: "Telegram" },
  ];

  return (
    <section
      id="impact"
      className={`relative py-24 px-4 sm:px-6 lg:px-12 overflow-hidden font-montserrat transition-colors duration-500 ${bgClass} ${textClass}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,200,150,0.15)]"
        >
          <img
            src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140158/photo_2025-05-22_19-10-54_es9xb1.jpg"
            alt="Mentor helping youth and traders"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00c896]/15 via-transparent to-transparent" />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00c896] mb-4">
            Empowering the Next Generation
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-4 ${
              isDark ? "text-white/80" : "text-gray-700"
            }`}
          >
            Beyond trading mentorship, our founder is passionate about impacting
            young people and aspiring traders through{" "}
            <span className="text-[#00c896] font-semibold">
              educational webinars, seminars, and outreach programs
            </span>
            . These sessions focus on financial literacy, trading psychology,
            and building a disciplined mindset for success — in trading and in
            life.
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
          >
            He also shares insights daily across social media, helping thousands
            of traders stay informed, motivated, and aligned with their goals.
            Every post, every talk, and every webinar is designed to{" "}
            <span className="text-[#00c896] font-semibold">
              inspire growth and confidence
            </span>
            .
          </p>

          {/* Impact Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <Users size={26} className="text-[#00c896] mb-2" />
              <p className="text-xl font-semibold">1K+</p>
              <p className="text-xs opacity-70">Youth Reached</p>
            </div>
            <div className="flex flex-col items-center">
              <Mic size={26} className="text-[#00c896] mb-2" />
              <p className="text-xl font-semibold">50+</p>
              <p className="text-xs opacity-70">Webinars Hosted</p>
            </div>
            <div className="flex flex-col items-center">
              <Share2 size={26} className="text-[#00c896] mb-2" />
              <p className="text-xl font-semibold">10K+</p>
              <p className="text-xs opacity-70">Social Followers</p>
            </div>
          </div>

          {/* CTA + Socials */}
          <div className="mt-10 flex flex-col items-center md:items-start">
            <a
              href="/webinars"
              className="inline-block px-8 py-3 bg-[#00c896] text-black font-semibold rounded-2xl hover:scale-105 hover:shadow-[0_0_20px_rgba(0,200,150,0.5)] transition-all duration-300"
            >
              Join a Live Webinar
            </a>

            {/* Animated Social Links */}
            <div className="flex items-center gap-5 mt-8">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 20px rgba(0,200,150,0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-full border border-[#00c896]/30 hover:border-[#00c896] bg-transparent hover:bg-[#00c896]/10 text-[#00c896] transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default MentorImpact;
