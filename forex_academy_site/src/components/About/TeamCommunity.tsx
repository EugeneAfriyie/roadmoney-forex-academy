import React from "react";
import { motion } from "framer-motion";
import { Users, Globe2, Star } from "lucide-react";

const TeamCommunity: React.FC = () => {
  const teamMembers = [
    {
      name: "Emmanuel — Founder & Mentor",
      role: "Forex Coach & Trading Psychologist",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&h=500&fit=crop",
      desc: "A self-funded trader driven by faith and discipline. Emmanuel founded RoadMoney Forex to guide others through the same path he once walked — turning struggle into structure, and losses into lessons.",
    },
    {
      name: "Sarah — Market Analyst",
      role: "Technical Analyst & Risk Manager",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=500&fit=crop",
      desc: "Sarah brings clarity to complex charts, helping traders see opportunities others miss. With her calm, risk-focused approach, she ensures that every trade is guided by logic, not emotion.",
    },
    {
      name: "Michael — Community Lead",
      role: "Events & Webinars Coordinator",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop",
      desc: "Michael builds bridges between traders worldwide — managing webinars, community sessions, and outreach programs that connect traders through learning and shared experiences.",
    },
  ];

  return (
    <section
      id="community"
      className="relative py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white font-montserrat"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[#00c896] mb-4"
        >
          Our Team & Community
        </motion.h2>

        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Behind RoadMoney Forex is a passionate team of traders, analysts, and
          mentors — united by one purpose:{" "}
          <span className="text-[#00c896] font-semibold">
            empowering others through knowledge, faith, and discipline.
          </span>
        </p>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#121a25] rounded-2xl p-6 text-center shadow-[0_0_25px_rgba(0,200,150,0.1)] hover:shadow-[0_0_35px_rgba(0,200,150,0.3)] transition-all duration-300"
          >
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#00c896]/60">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#00c896]">
              {member.name}
            </h3>
            <p className="text-white/70 text-sm mb-3">{member.role}</p>
            <p className="text-white/60 text-sm leading-relaxed">{member.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Community Impact Stats */}
      <div className="max-w-6xl mx-auto text-center mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="flex flex-col items-center">
            <Users size={36} className="text-[#00c896] mb-3" />
            <p className="text-3xl font-bold text-white">2,000+</p>
            <p className="text-white/70 text-sm">Active Community Members</p>
          </div>
          <div className="flex flex-col items-center">
            <Globe2 size={36} className="text-[#00c896] mb-3" />
            <p className="text-3xl font-bold text-white">15+</p>
            <p className="text-white/70 text-sm">Countries Reached</p>
          </div>
          <div className="flex flex-col items-center">
            <Star size={36} className="text-[#00c896] mb-3" />
            <p className="text-3xl font-bold text-white">95%</p>
            <p className="text-white/70 text-sm">Mentorship Satisfaction</p>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href="/community"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#00c896] text-black font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(0,200,150,0.5)] transition-all duration-300"
        >
          Join Our Global Community
        </a>
      </motion.div>
    </section>
  );
};

export default TeamCommunity;
