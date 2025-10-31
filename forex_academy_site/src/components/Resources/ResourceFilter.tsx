import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Articles", "Videos", "E-books", "Tools"];

interface ResourceFilterProps {
  onFilterChange: (category: string) => void;
}

const ResourceFilter: React.FC<ResourceFilterProps> = ({ onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <section className="py-10 bg-transparent font-montserrat">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-4 sm:gap-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`relative px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#00c896] text-black"
                : "bg-white/10 text-white/80 hover:bg-white/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
            {activeCategory === category && (
              <motion.div
                layoutId="active-category"
                className="absolute inset-0 border border-[#00c896] rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default ResourceFilter;
