// Eugene Afriyie UEB3502023
import React, { useContext } from "react";
import { motion } from "framer-motion";
// import { ThemeContext } from "../../context/ThemeContext";
import { MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
import { ThemeContext } from "../../../context/ThemeContext";

const socialLinks = [
  { name: "Telegram", icon: MessageCircle, color: "#0088cc", href: "#" },
  { name: "Instagram", icon: Instagram, color: "#E1306C", href: "#" },
  { name: "Facebook", icon: Facebook, color: "#1877F2", href: "#" },
  { name: "Twitter (X)", icon: Twitter, color: "#1DA1F2", href: "#" },
];

const JoinCommunityAnimated: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const bgClass = isDark
    ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
    : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";

  const accent = isDark ? "#00ffcc" : "#00c896";

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center overflow-hidden ${bgClass}`}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#00c896]/40 dark:bg-[#00ffcc]/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: ["0%", "100%", "0%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-2xl sm:text-3xl font-bold text-center text-[${accent}] mb-3 z-10`}
      >
        Connect With Our Community
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-sm sm:text-base max-w-md mb-8 z-10 text-[#ffffffcc] dark:text-[#d1d1d1]"
      >
        Stay connected with fellow traders, get updates, and grow with us
        through our active online communities.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 z-10">
        {socialLinks.map(({ name, icon: Icon, color, href }, index) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              scale: 1.1,
              boxShadow: `0 0 20px ${color}`,
            }}
            className="flex flex-col items-center justify-center bg-white/10 dark:bg-[#0b0f19]/40 p-4 rounded-2xl backdrop-blur-md border border-white/10"
          >
            <Icon size={30} color={color} />
            <p className="mt-2 text-sm font-semibold">{name}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default JoinCommunityAnimated;
