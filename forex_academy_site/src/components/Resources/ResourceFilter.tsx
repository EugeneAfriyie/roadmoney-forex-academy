import React from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";

interface ResourceFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  "All",
  "Trading Psychology",
  "Market Structure",
  "Risk Management",
  "Guides",
];

const ResourceFilter: React.FC<ResourceFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4 mb-12 px-4"
    >
      <div className="flex items-center gap-2 text-white/60 text-sm sm:text-base">
        <Filter size={18} className="text-[#00c896]" />
        <span>Filter by Category</span>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#00c896] text-black shadow-[0_0_20px_rgba(0,200,150,0.5)]"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ResourceFilter;
