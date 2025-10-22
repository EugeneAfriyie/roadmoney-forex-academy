"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0b0f19] text-white pt-16 pb-8 px-6 sm:px-12 md:px-20 overflow-hidden border-t border-[#00ffcc22]">
      {/* background accents */}
      <div className="pointer-events-none absolute -top-24 left-16 w-64 h-64 bg-[#00ffcc15] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-16 w-64 h-64 bg-[#00ffcc15] rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10 relative">
        {/* Brand / About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-[#00ffcc] mb-3">RoadMoney</h3>
          <p className="text-[#ffffffb3] text-sm leading-relaxed">
            RoadMoney connects traders and learners with personalized mentorship programs —
            online or in-person — to help you grow faster and trade smarter.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold text-[#00ffcc] mb-3">Quick Links</h4>
          <ul className="space-y-2 text-[#ffffffcc] text-sm">
            <li>
              <a href="#smart-quiz" className="hover:text-[#00ffcc] transition">
                Smart Quiz
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#00ffcc] transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="/mentorship" className="hover:text-[#00ffcc] transition">
                Mentorship
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#00ffcc] transition">
                About Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-[#00ffcc] mb-3">Contact</h4>
          <ul className="space-y-2 text-[#ffffffcc] text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#00ffcc]" />
              <a href="mailto:groupeight00@gmail.com" className="hover:text-[#00ffcc] transition">
                groupeight00@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00ffcc]" />
              <span>+233 55 123 4567</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00ffcc]" />
              <span>Accra, Ghana</span>
            </li>
          </ul>
        </motion.div>

        {/* Social / Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-lg font-semibold text-[#00ffcc] mb-3">Stay Connected</h4>
          <p className="text-[#ffffffb3] text-sm mb-3">
            Follow RoadMoney on social media for trading tips and program updates.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#00ffcc] transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#00ffcc] transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#00ffcc] transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* divider */}
      <div className="border-t border-[#ffffff10] mt-12 pt-6 text-center text-[#ffffff99] text-sm">
        © {year} RoadMoney. All rights reserved. | Designed by <span className="text-[#00ffcc]">Eugene Afriyie</span>
      </div>
    </footer>
  );
}
