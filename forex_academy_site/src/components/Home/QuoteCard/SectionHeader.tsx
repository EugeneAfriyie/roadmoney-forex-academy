import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  id?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, id }) => (
  <motion.h2
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold text-[#00c896] dark:text-[#00ffcc] text-center mb-12 tracking-tight"
  >
    {title}
  </motion.h2>
);

export default SectionHeader;