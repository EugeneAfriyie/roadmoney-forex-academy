// src/components/Plans/SignalPlans.tsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const signalPackages = [
  {
    name: "Basic Signals",
    description: "Perfect for new traders learning to follow structured entries.",
    price: "$29 / month",
    features: [
      "3–5 signals per week",
      "Entry, Stop Loss, Take Profit levels",
      "Telegram private channel access",
    ],
  },
  {
    name: "Pro Signals",
    description: "Designed for active traders looking for high-quality setups daily.",
    price: "$59 / month",
    features: [
      "Daily signals (5–10 per week)",
      "Market breakdowns & charts",
      "VIP Telegram access",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Elite Signals",
    description: "For professionals seeking the highest accuracy and mentorship combo.",
    price: "$99 / month",
    features: [
      "All Pro features",
      "1-on-1 trade reviews monthly",
      "Exclusive live sessions",
    ],
  },
];

const SignalPlans: React.FC = () => {
  return (
    <section
      id="signals"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#121826] via-[#0b0f19] to-[#0b0f19] text-white font-montserrat"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#00c896]"
      >
        Signal Subscription Plans
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {signalPackages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative rounded-2xl p-8 shadow-lg backdrop-blur-md 
              ${
                pkg.highlight
                  ? "bg-[#00c896]/10 border border-[#00c896]/40 scale-105"
                  : "bg-[#0b0f19]/60 border border-white/10"
              } hover:scale-105 transition-all duration-300`}
          >
            <h3 className="text-2xl font-bold mb-2 text-[#FFD700]">
              {pkg.name}
            </h3>
            <p className="text-white/70 mb-4">{pkg.description}</p>
            <p className="text-3xl font-bold mb-6 text-[#00c896]">
              {pkg.price}
            </p>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-white/80">
                  <CheckCircle size={18} className="text-[#00c896]" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className="w-full py-3 rounded-full bg-[#00c896] text-black font-semibold
                         hover:scale-105 hover:shadow-[0_0_25px_rgba(0,200,150,0.5)] transition-all duration-300"
            >
              Subscribe Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SignalPlans;
