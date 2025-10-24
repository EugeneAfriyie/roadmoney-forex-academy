import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
// import { ThemeContext } from "../../../context/ThemeContext";

const MentorJourney: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const bgClass = isDark
    ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
    : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";
  const textClass = isDark ? "text-white/90" : "text-gray-900";

  return (
    <section
      id="journey-article"
      className={`relative py-20 px-4 sm:px-6 lg:px-12 font-montserrat transition-colors duration-500 ${bgClass} ${textClass}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-[#00c896] mb-10 text-center"
        >
          My Journey — From Struggle to Purpose
        </motion.h2>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="prose prose-base sm:prose-lg max-w-none leading-relaxed text-justify"
        >
          {/* 🌱 The Spark */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            The Spark — Rising Through Hardship
          </h3>
          <p className={`${isDark ? "text-white/80" : "text-gray-700"} mb-6`}>
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140164/photo_2025-08-20_09-20-25_pych9m.jpg"
              alt="Young man reflecting on challenges"
              className="float-left w-44 h-44 object-cover rounded-xl mr-5 mb-4 shadow-md"
            />
            My story began during one of the hardest times of my life — a period
            marked by <span className="text-[#00c896] font-semibold">unemployment,
            frustration, and uncertainty</span>. Opportunities were scarce in my
            country, and each day felt like a battle to stay hopeful.  
            But even in those moments of struggle, I believed God had placed a
            seed of purpose within me. I didn’t know what it was yet, but I knew
            that if I stayed faithful, something would change. That’s when I
            stumbled upon the world of trading — not as an expert, but as a
            curious learner searching for a way to rewrite my story.
          </p>

          {/* 💡 Early Struggles */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            6 Years Ago — Nights of Learning and Prayer
          </h3>
          <p className={`${isDark ? "text-white/80" : "text-gray-700"} mb-6`}>
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140163/photo_2025-08-04_08-20-22_hmjomv.jpg"
              alt="Trader studying charts"
              className="float-right w-44 h-44 object-cover rounded-xl ml-5 mb-4 shadow-md"
            />
            I had no mentor then — just determination, free YouTube videos, and
            prayer. I remember staying up till 3 a.m., analyzing charts on a small
            phone screen, trying to make sense of price movement and candlesticks.
            I lost money, time, and even confidence.  
            But every time I wanted to quit, I would pray for strength and
            guidance. My faith became my anchor. I wasn’t just learning to trade;
            I was learning <span className="text-[#00c896] font-semibold">
            discipline, patience, and trust</span> — values that shaped both my
            character and my craft.
          </p>

          {/* 🔁 Turning Point */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            3 Years Ago — Turning Pain into Purpose
          </h3>
          <p className={`${isDark ? "text-white/75" : "text-gray-700"} mb-6`}>
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140152/photo_2024-09-22_22-20-55_uevwfm.jpg"
              alt="Mentor teaching session"
              className="float-left w-48 h-44 object-cover rounded-xl mr-5 mb-4 shadow-md"
            />
            My turning point came when I realized that trading wasn’t just about
            making money — it was about mastering myself.  
            I stopped chasing profit and started chasing growth. I learned that
            success in the market mirrors success in life — both demand
            consistency, humility, and belief in God’s timing.  
            When I embraced that mindset, everything changed. I started helping
            others who were also struggling. That’s how
            <span className="text-[#00c896] font-semibold"> RoadMoney Forex </span>
            was born — from a place of pain transformed into purpose.
          </p>

          {/* 🌍 Today */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            Today — Faith, Mentorship & Impact
          </h3>
          <p className={`${isDark ? "text-white/75" : "text-gray-700"} mb-6`}>
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140148/photo_2023-12-12_17-33-45_m1idsn.jpg"
              alt="Mentor speaking to youth"
              className="float-right w-48 h-44 object-cover rounded-xl ml-5 mb-4 shadow-md"
            />
            Today, I mentor traders from around the world, teach structure-based
            trading, and host webinars focused on psychology and risk
            management. But through it all, I remain a
            <span className="text-[#00c896] font-semibold"> God-fearing man</span>.
            Every session begins with gratitude, because I know none of this would
            be possible without His grace.  
            My journey is a living testimony that even in the darkest seasons,
            faith and persistence can turn struggle into strength.
          </p>

          <p
            className={`${isDark ? "text-white/85" : "text-gray-800"} font-semibold mt-8 text-center italic`}
          >
            “Faith without work is dead — but work without faith is empty.”
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default MentorJourney;
