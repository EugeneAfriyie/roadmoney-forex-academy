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
          The RoadMoney Journey — Guided by Faith & Resilience
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
              alt="Our mentor early life"
              className="float-left w-44 h-44 object-cover rounded-xl mr-5 mb-4 shadow-md"
            />
            His journey began in a time of economic struggle — when 
            <span className="text-[#00c896] font-semibold"> unemployment and uncertainty</span> 
            made survival a daily challenge. Opportunities were few, and 
            frustration was common. But through hardship, he discovered a new 
            purpose: to take control of his future through learning.  
            What started as a desperate search for stability slowly became 
            a calling. With faith in God and the belief that nothing is 
            impossible through Him, he found strength to take the first step into trading.
          </p>

          {/* 💡 Early Struggles */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            6 Years Ago — Nights of Learning and Prayer
          </h3>
          <p className={`${isDark ? "text-white/80" : "text-gray-700"} mb-6`}>
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140163/photo_2025-08-04_08-20-22_hmjomv.jpg"
              alt="Our Mentor struggles"
              className="float-right w-44 h-44 object-cover rounded-xl ml-5 mb-4 shadow-md"
            />
            The early days were far from easy. He spent countless nights 
            studying charts on a small phone screen, learning from free resources, 
            and struggling to understand market behavior.  
            There were times he wanted to give up — but faith kept him grounded.  
            He often prayed for wisdom and direction, trusting that 
            <span className="text-[#00c896] font-semibold">
              God’s timing would reveal his purpose
            </span>.  
            Slowly, that prayerful persistence began to bear fruit.
          </p>

          {/* 🔁 Turning Point */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            3 Years Ago — Finding Purpose in the Process
          </h3>
          <p className={`${isDark ? "text-white/75" : "text-gray-700"} mb-6`}>
            <img
             src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140151/photo_2024-06-14_08-07-32_snyqag.jpg"

              alt="Mentor teaching session"
              className="float-left w-48 h-44 object-cover rounded-xl mr-5 mb-4 shadow-md"
            />
            The turning point came when he realized that trading was not just a 
            career — it was a spiritual test of patience, discipline, and faith.  
            Instead of chasing profits, he focused on building consistency, 
            managing emotions, and trusting the process.  
            His results began to change, not because the market changed, 
            but because <span className="text-[#00c896] font-semibold">his mindset and his faith deepened</span>.  
            It was here that the idea for RoadMoney Forex was born — to teach 
            others that success begins within.
          </p>

          {/* 🌍 Today */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            Today — Faith, Mentorship & Impact
          </h3>
          <p className={`${isDark ? "text-white/75" : "text-gray-700"} mb-6`}>
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140147/photo_2023-12-09_19-59-31_cneaoz.jpg"

              alt="Mentor speaking to youth"
              className="float-right w-48 h-44 object-cover rounded-xl ml-5 mb-4 shadow-md"
            />
            Today, he stands not just as a trader, but as a mentor guided by 
            faith and purpose. Every session, webinar, and mentorship begins 
            with gratitude to God — for the opportunity to help others grow.  
            His story reflects that with faith, perseverance, and wisdom,  
            <span className="text-[#00c896] font-semibold">
              no hardship can stop what’s meant for you
            </span>.  
            Through RoadMoney Forex, he continues to empower others to rise 
            from struggle to stability — both financially and spiritually.
          </p>

          <p
            className={`${isDark ? "text-white/85" : "text-gray-800"} font-semibold mt-8`}
          >
            His journey is a testimony:  
            <span className="text-[#00c896]"> “Faith without work is dead — but work without faith is empty.”</span>  
            Every chart, every trade, every lesson is rooted in that belief.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default MentorJourney;
