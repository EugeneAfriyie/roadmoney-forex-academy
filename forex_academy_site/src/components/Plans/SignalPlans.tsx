// src/components/Plans/SignalPlans.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SignalPackage {
  name: string;
  description: string;
  priceUsd: number;
  features: string[];
  highlight?: boolean;
}

const signalPackages: SignalPackage[] = [
  {
    name: "Basic Signals",
    description: "Perfect for new traders learning to follow structured entries.",
    priceUsd: 29,
    features: [
      "3–5 signals per week",
      "Entry, Stop Loss, Take Profit levels",
      "Telegram private channel access",
    ],
  },
  {
    name: "Pro Signals",
    description: "Designed for active traders looking for high-quality setups daily.",
    priceUsd: 59,
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
    priceUsd: 99,
    features: [
      "All Pro features",
      "1-on-1 trade reviews monthly",
      "Exclusive live sessions",
    ],
  },
];

const SignalPlans: React.FC = () => {
  const [usdToGhs, setUsdToGhs] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();

        if (data?.rates?.GHS) {
          setUsdToGhs(data.rates.GHS + 2); // add retail adjustment
          setLastUpdated(new Date(data.time_last_update_utc).toLocaleDateString());
        } else {
          console.warn("⚠️ Fallback USD→GHS rate used");
          setUsdToGhs(10.83 + 2);
          setLastUpdated(new Date().toLocaleDateString());
        }
      } catch (err) {
        console.warn("⚠️ Using fallback USD→GHS rate");
        setUsdToGhs(10.83 + 2);
        setLastUpdated(new Date().toLocaleDateString());
      }
    };
    fetchRate();
  }, []);

  return (
    <section
      id="signals"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#121826] via-[#0b0f19] to-[#0b0f19] text-white font-montserrat"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#00c896]"
      >
        Signal Subscription Plans
      </motion.h2>

      <p className="text-center text-white/60 mb-12 text-sm">
        {usdToGhs
          ? `Exchange Rate: $1 ≈ ₵${usdToGhs.toFixed(2)} (Updated ${lastUpdated})`
          : "Fetching latest exchange rate..."}
      </p>

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

            {/* ✅ USD + GHS price display */}
            <div className="mb-6">
              <p className="text-3xl font-bold text-[#00c896]">
                ${pkg.priceUsd.toFixed(2)} / month
              </p>
              {usdToGhs && (
                <p className="text-sm text-[#FFD700]">
                  ≈ ₵{(pkg.priceUsd * usdToGhs).toFixed(2)} / month
                </p>
              )}
            </div>

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
