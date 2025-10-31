import React, { useState } from "react";
import { motion } from "framer-motion";
import ResourceGrid from "../../components/Resources/ResourceGrid";
import ResourceFilter from "../../components/Resources/ResourceFilter";
import FeaturedResource from "../../components/Resources/FeaturedResource";

const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const resources = [
    {
      id: 1,
      title: "Mastering Market Structure",
      category: "Articles",
      description:
        "Understand how to read the market like a pro with practical examples and chart breakdowns.",
      fullText: `
### Understanding Market Structure
Market structure is the foundation of all trading decisions. It represents the way price moves between highs and lows, forming trends and ranges.

Professional traders identify *higher highs* and *higher lows* to determine bullish momentum — and the opposite for bearish setups.

#### Key Concepts:
- Break of structure (BOS)
- Change of character (CHOCH)
- Liquidity grabs
- Institutional order flow

By mastering market structure, you gain clarity on what the market is doing — instead of guessing.`,
      image: "https://images.unsplash.com/photo-1581093588401-22a3f8f2435c?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Risk Management Webinar",
      category: "Videos",
      description:
        "Watch a complete breakdown of professional risk management strategies for consistent profits.",
      link: "https://youtube.com", // external link
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Trading Psychology E-Book",
      category: "Guides",
      description:
        "Build mental discipline, stay focused, and overcome emotional trading with this free e-book.",
      fullText: `
### Mastering Trading Psychology
Emotions are a trader’s greatest enemy. Fear, greed, and impatience destroy consistency.

This guide teaches:
- How to build emotional resilience
- Practical journaling methods
- How to detach your identity from results
- The role of faith and routine in discipline`,
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=500&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white font-montserrat">
      {/* Hero */}
      <section className="relative py-24 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#00c896] mb-4">
            Resources & Learning Hub
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Explore in-depth articles, trading guides, and webinar replays crafted to elevate your trading journey.
          </p>
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(0,200,150,0.05),transparent_70%)] -z-10" />
      </section>

      <FeaturedResource />

      <ResourceFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ResourceGrid
        resources={resources}
        selectedCategory={selectedCategory}
      />
    </main>
  );
};

export default ResourcesPage;
