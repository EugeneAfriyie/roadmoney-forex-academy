import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EXnessPromo: React.FC = () => {
  const featured = {
    title: "🔥 RoadMoney $200K Giveaway + $1,000 Chill Bonus",
    description:
      "Register, verify, and trade with Exness — and stand a chance to win a $200K funded prop account and a $1,000 chill bonus. Let’s make more traders funded!",
    image:
      "https://images.unsplash.com/photo-1620304357840-84cf98b438d5?w=1200&h=600&fit=crop",
    link: "https://one.exnesslink.com/a/ttgurtgu",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,200,150,0.15)] mb-16"
    >
      {/* Background image */}
      <div className="relative">
        <img
          src={featured.image}
          alt={featured.title}
          className="w-full h-72 sm:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/95 via-[#0b0f19]/80 to-transparent" />
      </div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-16">
        <div className="max-w-2xl">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00c896]"
          >
            {featured.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/80 mt-4 text-sm sm:text-base leading-relaxed"
          >
            {featured.description}
          </motion.p>

          <motion.a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#00c896] text-black font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(0,200,150,0.5)] transition-all duration-300"
          >
            Register & Win Now <ArrowRight size={18} />
          </motion.a>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,rgba(0,200,150,0.08),transparent_70%)]" />
    </motion.div>
  );
};

export default EXnessPromo;
