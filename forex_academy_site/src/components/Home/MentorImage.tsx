// src/components/MentorImage.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MentorImageProps {
  src: string;
  alt: string;
}

const MentorImage: React.FC<MentorImageProps> = ({ src, alt }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]); // Subtle parallax shift

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ y }}
      className="flex justify-center"
    >
      <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl hover:ring-2 hover:ring-[#00c896] transition-all duration-300">
        <img src={src} alt={alt} className="object-cover w-full h-full" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00c896]/20 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
};

export default MentorImage;