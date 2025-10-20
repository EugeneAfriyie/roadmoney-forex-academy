// Eugene Afriyie UEB3502023
import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ThemeContext } from "../../context/ThemeContext";
import JoinCommunityAnimated from "./JoinCommunityAnimated";
import JoinCommunity3D from "./JoinCommunity3D";
import { ThemeContext } from "../../../context/ThemeContext";

const JoinCommunitySwitcher: React.FC = () => {
  const [mode, setMode] = useState<"animated" | "3d">("animated");
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const bgClass = isDark
    ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
    : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";

  const textClass = isDark ? "text-[#ffffffcc]" : "text-[#1a1a1a]";
  const accent = isDark ? "#00ffcc" : "#00c896";

  return (
    <section
      id="join-community"
      aria-labelledby="join-community-heading"
      className={`relative py-20 overflow-hidden font-montserrat transition-colors duration-500 ${bgClass} ${textClass}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.h2
          id="join-community-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-3xl sm:text-4xl font-bold text-center sm:text-left text-[${accent}]`}
        >
          Join Our Global Community
        </motion.h2>

        {/* Toggle Buttons */}
        <motion.div
          className={`flex items-center gap-3 rounded-full p-1 backdrop-blur-sm 
                     border border-[${accent}]/40`}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {["animated", "3d"].map((opt) => (
            <button
              key={opt}
              onClick={() => setMode(opt as "animated" | "3d")}
              className={`px-5 py-2 text-sm sm:text-base font-semibold rounded-full transition-all 
                ${
                  mode === opt
                    ? `bg-[${accent}] text-[#0b0f19] shadow-[0_0_10px_${accent}]`
                    : `text-[${accent}] hover:text-white hover:bg-[${accent}] hover:bg-opacity-20`
                }`}
            >
              {opt === "animated" ? "Animated View" : "3D Globe"}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Crossfade transition between components */}
      <div className="relative h-[500px] sm:h-[550px] overflow-hidden">
        <AnimatePresence mode="wait">
          {mode === "animated" ? (
            <motion.div
              key="animated"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <JoinCommunityAnimated />
            </motion.div>
          ) : (
            <motion.div
              key="3d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <JoinCommunity3D />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default JoinCommunitySwitcher;
