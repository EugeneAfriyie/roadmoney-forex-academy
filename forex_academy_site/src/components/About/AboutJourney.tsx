import React from "react";
import { motion } from "framer-motion";

const AboutJourney: React.FC = () => (
  <section className="relative py-20 px-4 sm:px-6 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-[#00c896] mb-6">
        The RoadMoney Journey
      </h2>
      <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
        Started in 2019, RoadMoney Forex began as a one-man mentorship focused
        on helping traders rebuild after account losses. Today, it’s evolved
        into a full academy — hosting webinars, portfolio reviews, and trading
        signals — impacting traders around the world.
      </p>
    </motion.div>
  </section>
);

export default AboutJourney;
