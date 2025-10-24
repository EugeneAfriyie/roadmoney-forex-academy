import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const MissionVision: React.FC = () => {
  return (
    <section
      id="mission-vision"
      className="relative py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white font-montserrat"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[#00c896] mb-4"
        >
          Our Mission & Vision
        </motion.h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto mb-16">
          Guided by faith, discipline, and purpose — we empower traders to build
          not just wealth, but wisdom and freedom.
        </p>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-[#121a25] rounded-2xl shadow-[0_0_30px_rgba(0,200,150,0.15)] hover:shadow-[0_0_40px_rgba(0,200,150,0.3)] transition-all duration-300 p-8"
          >
            <div className="flex justify-center mb-6">
              <Target size={40} className="text-[#00c896]" />
            </div>
            <h3 className="text-xl font-bold text-[#00c896] mb-3">
              Our Mission
            </h3>
            <p className="text-white/75 leading-relaxed">
              To equip traders and young minds with the right knowledge,
              structure, and mindset — blending technical precision with
              emotional discipline.  
              We aim to make financial literacy accessible, sustainable, and
              faith-driven.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative bg-[#121a25] rounded-2xl shadow-[0_0_30px_rgba(0,200,150,0.15)] hover:shadow-[0_0_40px_rgba(0,200,150,0.3)] transition-all duration-300 p-8"
          >
            <div className="flex justify-center mb-6">
              <Eye size={40} className="text-[#00c896]" />
            </div>
            <h3 className="text-xl font-bold text-[#00c896] mb-3">
              Our Vision
            </h3>
            <p className="text-white/75 leading-relaxed">
              To raise a global community of disciplined, value-driven traders
              who understand that consistency is born from structure — and that
              true success comes from aligning purpose with persistence.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#121a25] rounded-2xl shadow-[0_0_30px_rgba(0,200,150,0.15)] hover:shadow-[0_0_40px_rgba(0,200,150,0.3)] transition-all duration-300 p-8"
          >
            <div className="flex justify-center mb-6">
              <Heart size={40} className="text-[#00c896]" />
            </div>
            <h3 className="text-xl font-bold text-[#00c896] mb-3">
              Our Core Values
            </h3>
            <p className="text-white/75 leading-relaxed">
              <span className="font-semibold">Integrity</span> in every action,{" "}
              <span className="font-semibold">Patience</span> in every trade, and{" "}
              <span className="font-semibold">Faith</span> through every season.  
              These values define how we lead, teach, and serve our community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
