// src/components/Services/ServicesPlans.tsx
import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import MentorshipPlans from "./MentorshipPlans";

// 🧩 import your mentorship data (the same as before)
// import { inPersonPackages, onlinePackages, PlanTypes } from "./MentorshipData"; 

// You can later move your mentorship data into a separate file for cleanliness
// e.g. src/data/mentorshipPackages.ts

export default function ServicesPlans() {
//   const [activePlan, setActivePlan] = useState<"inPerson" | "online" | null>("inPerson");
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="plans"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white font-montserrat"
    >
      {/* 🔹 Mentorship Section */}
      <div className="max-w-6xl mx-auto text-center mb-28">
        <MentorshipPlans />
        {/* ⬇ Keep your full mentorship code block here (unchanged) */}
      </div>

      {/* ⚡ Signal Plans Section */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-[#00ffcc]"
        >
          Signal Subscription Plans
        </motion.h2>
        <p className="text-[#ffffffcc] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Get access to accurate, high-probability trading signals tailored for all levels of traders.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Basic Signals",
              price: "₵200 / month",
              features: ["3–5 trades weekly", "Telegram access", "Entry, SL, TP provided"],
            },
            {
              name: "Pro Signals",
              price: "₵350 / month",
              features: [
                "Daily setups",
                "Detailed trade breakdowns",
                "Priority Telegram support",
              ],
            },
            {
              name: "VIP Signals",
              price: "₵600 / month",
              features: [
                "All Pro benefits",
                "1-on-1 market reviews",
                "Weekly strategy calls",
              ],
            },
          ].map((signal) => (
            <motion.div
              key={signal.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#121826]/80 border border-[#00ffcc40] rounded-2xl p-6 shadow-[0_0_25px_#00ffcc20]
                        hover:scale-[1.03] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#FFD700]">
                {signal.name}
              </h3>
              <p className="text-3xl font-bold mb-4 text-[#00ffcc]">{signal.price}</p>
              <ul className="text-left text-[#ffffffcc] text-sm leading-relaxed mb-4 space-y-2">
                {signal.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00ffcc] mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowModal(true)}
                className="w-full mt-4 py-3 rounded-xl font-semibold bg-[#00ffcc] text-[#0b0f19]
                           hover:bg-[#00e6b3] transition-all"
              >
                Subscribe Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔹 You can reuse your modal for both sections */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#121826] border border-[#00ffcc40] rounded-2xl p-8 w-[90%] max-w-md text-center"
            >
              <h4 className="text-2xl font-bold mb-4 text-[#00ffcc]">Coming Soon</h4>
              <p className="text-[#ffffffb3] mb-6">
                Signal plan registration will be available soon. Stay tuned!
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 bg-[#00ffcc] text-[#0b0f19] font-semibold rounded-full hover:bg-[#00e6b3] transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
