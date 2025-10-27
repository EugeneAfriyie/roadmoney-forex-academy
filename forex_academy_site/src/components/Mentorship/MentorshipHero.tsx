import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Master the Art of Consistency",
    text: "Learn the proven system that turns confusion into confidence. Build structure, discipline, and control over your trades.",
    img: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    cta: "/apply",
  },
  {
    id: 2,
    title: "Mentorship That Builds Traders, Not Followers",
    text: "This is more than signals — it’s transformation. Get guided by a self-funded mentor who’s walked the same journey.",
    img: "https://images.unsplash.com/photo-1629792080390-9a59b7ef17f9?w=1600&h=900&fit=crop",
    cta: "/about",
  },
  {
    id: 3,
    title: "Join a Global Community of Traders",
    text: "Connect with others growing their skillset through webinars, challenges, and live Q&A sessions every month.",
    img: "https://res.cloudinary.com/djeorsh5d/image/upload/v1761140158/photo_2025-05-22_19-10-54_es9xb1.jpg",
    cta: "/community",
  },
];
const MentorshipHero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) =>
      dir === 1
        ? prev === slides.length - 1
          ? 0
          : prev + 1
        : prev === 0
        ? slides.length - 1
        : prev - 1
    );
  };

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -80) nextSlide(1);
    else if (info.offset.x > 80) nextSlide(-1);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden font-montserrat">
      {/* Background Image */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={slides[current].id}
            src={slides[current].img}
            alt="Mentorship background"
            className="absolute inset-0 w-full h-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0b0f19]/95" />
        <div className="absolute inset-0 bg-[#00c896]/5 mix-blend-overlay" />
      </div>

      {/* Foreground Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slides[current].id}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-6 cursor-grab active:cursor-grabbing"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#00c896] mb-6 leading-tight">
            {slides[current].title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            {slides[current].text}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={slides[current].cta}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#00c896] text-black font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(0,200,150,0.5)] transition-all duration-300"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i ? "bg-[#00c896]" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MentorshipHero;