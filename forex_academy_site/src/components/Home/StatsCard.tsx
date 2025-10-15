// src/components/StatsCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  value: string;
  label: string;
  index: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1, rotate: 2 }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    viewport={{ once: true }}
    className="border border-[#00c896]/40 rounded-xl p-4 text-center hover:scale-105 hover:border-[#00c896] hover:shadow-[0_0_10px_rgba(0,200,150,0.3)] transition-all duration-300"
  >
    <h3 className="text-xl sm:text-2xl font-bold text-[#00c896]">{value}</h3>
    <p className="text-sm opacity-80">{label}</p>
  </motion.div>
);

export default StatsCard;