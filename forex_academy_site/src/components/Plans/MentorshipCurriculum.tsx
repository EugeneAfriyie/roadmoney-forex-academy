import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Card {
  title: string;
  description: string;
  image: string;
}


const mentorshipData: Card[] = [
  {
    title: "Trading Psychology",
    description:
      "Master emotional control and discipline — the foundation of consistent trading.",
    image:
      "https://res.cloudinary.com/djeorsh5d/image/upload/v1761565227/78649fd4-11e4-40a7-b499-ebbe4e2c982f.png", // calm, focused
  },
  {
    title: "Risk Management",
    description:
      "Learn how to protect your capital while maximizing profits using professional-grade strategies.",
    image:
      "https://res.cloudinary.com/djeorsh5d/image/upload/v1761566155/cba2e276-4a85-4410-accd-c90556b43b0e.png", // finance + risk
  },
  {
    title: "Market Structure Mastery",
    description:
      "Understand the flow of the market like a pro and trade confidently with precision entries.",
    image:
      "https://res.cloudinary.com/djeorsh5d/image/upload/v1761566411/6753d7d7-98fd-46ce-93be-7623cfe63a6a.png", // market charts
  },
  {
    title: "Live Mentorship Sessions",
    description:
      "Join weekly group and one-on-one mentorship calls to review charts and plan setups.",
    image:
      "https://res.cloudinary.com/djeorsh5d/image/upload/v1761565072/1e3ff932-98e0-46fa-8323-96a93ae2c105.png", // teamwork
  },
  {
    title: "Community Support",
    description:
      "Access a private trading community that keeps you motivated and accountable.",
    image:
      "https://res.cloudinary.com/djeorsh5d/image/upload/v1761566320/99907f68-e6b1-4a68-a361-8aa5ed695068.png", // collaboration
  },
];

const MentorshipCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide every 5s
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === mentorshipData.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Smooth scroll to active card
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.children[activeIndex] as HTMLElement;
    if (card) {
      const left =
        card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <section className="relative py-20 font-montserrat bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#00c896]"
        >
          Mentorship Highlights
        </motion.h2>
        <p className="text-white/70 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          Explore the key areas covered in our trading mentorship program —
          crafted to build confident, consistent traders.
        </p>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex overflow-x-auto gap-6 px-6 sm:px-10 md:px-12 scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {mentorshipData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-[#121826] rounded-2xl overflow-hidden 
                        transition-all duration-700 ease-out snap-center transform ${
                          index === activeIndex
                            ? "scale-105 shadow-[0_0_30px_rgba(0,200,150,0.4)] z-10"
                            : "scale-95 opacity-70"
                        }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-[#00c896] mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {mentorshipData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? "bg-[#00c896] scale-110 shadow-[0_0_10px_rgba(0,200,150,0.6)]"
                : "bg-white/20 hover:bg-white/40"
            }`}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MentorshipCarousel;