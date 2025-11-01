import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FeaturedResource: React.FC = () => {
  const featured = {
    title: "Accra In-Person Trading Academy Launch",
    description:
      "We’ve officially opened our first in-person trading academy in Accra! Experience live mentorship, structured forex education, and community-driven growth directly with our lead mentors.",
    image:
      "https://res.cloudinary.com/djeorsh5d/image/upload/v1760408679/IMG_20251014_022039_477_ri1daj.jpg",
    link: "/mentorship#in-person", // placeholder — update with your actual route later
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/90 via-[#0b0f19]/70 to-transparent" />
      </div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-16">
        <div className="max-w-xl">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-[#00c896]"
          >
            {featured.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/80 mt-3 text-sm sm:text-base leading-relaxed"
          >
            {featured.description}
          </motion.p>

          <motion.a
            href={featured.link}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 bg-[#00c896] text-black font-semibold rounded-full 
                       hover:scale-105 hover:shadow-[0_0_25px_rgba(0,200,150,0.5)] transition-all duration-300"
          >
            Explore the Academy <ArrowRight size={18} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedResource;
