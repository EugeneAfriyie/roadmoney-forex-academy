import { motion, type Variants } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Mic, Share2, Target } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  subtext: string;
}

const stats: Stat[] = [
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MentorshipImpact() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 px-6 sm:px-10 font-montserrat overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white"
    >
      {/* Background & Glow Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,200,150,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,200,150,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f19]/40 to-[#0b0f19] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Section Header */}
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
          Through structured mentorship and faith-driven discipline, our academy
          continues to shape traders who navigate the markets with clarity,
          confidence, and purpose.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ rotateY: 4, rotateX: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative p-6 rounded-2xl bg-[#121826]/60 backdrop-blur-sm 
                         hover:bg-[#1a2233]/80 shadow-[0_0_20px_rgba(0,200,150,0.1)] 
                         hover:shadow-[0_0_30px_rgba(0,200,150,0.25)] transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {/* Animated Icon Glow */}
                <motion.div
                  animate={
                    inView
                      ? {
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            "0 0 0 rgba(0,200,150,0)",
                            "0 0 15px rgba(0,200,150,0.5)",
                            "0 0 0 rgba(0,200,150,0)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  {stat.icon}
                </motion.div>

                {/* Gradient Count-Up Number */}
                <motion.div
                  animate={inView ? { scale: [1, 1.08, 1] } : {}}
                  transition={{ repeat: 1, duration: 1.5, ease: "easeInOut" }}
                >
                  <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#00e6a8] to-[#00ffcc] bg-clip-text text-transparent">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.8}
                        separator=","
                        suffix="+"
                        easingFn={(t: number, b: number, c: number, d: number) => {
                          t /= d;
                          t--;
                          return c * (t * t * t * t * t + 1) + b;
                        }}
                      />
                    ) : (
                      "0+"
                    )}
                  </h3>
                </motion.div>

                <p className="text-base sm:text-lg font-semibold">{stat.label}</p>
                <p className="text-xs sm:text-sm text-white/60">{stat.subtext}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
}