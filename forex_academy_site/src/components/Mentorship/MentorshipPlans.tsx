// Eugene Afriyie UEB3502023
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MentorshipPlans = () => {
  const [activePlan, setActivePlan] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const togglePlan = (plan) => {
    setActivePlan(activePlan === plan ? null : plan);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">
          Choose Your Mentorship Path
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          Select between our <span className="text-yellow-400">In-Person</span> or{" "}
          <span className="text-yellow-400">Online</span> mentorship programs,
          designed to help you master trading at your own pace.
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => togglePlan("inPerson")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activePlan === "inPerson"
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            In-Person Mentorship
          </button>

          <button
            onClick={() => togglePlan("online")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activePlan === "online"
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Online Mentorship
          </button>
        </div>

        {/* In-Person Packages */}
        <AnimatePresence>
          {activePlan === "inPerson" && (
            <motion.div
              key="inPerson"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Standard Mentorship",
                  price: "₵1,200",
                  desc: "Perfect for beginners. Learn step-by-step with live sessions and guided practice.",
                  features: [
                    "4-week in-person training",
                    "Weekly strategy sessions",
                    "Basic technical analysis",
                    "Certificate of Completion",
                  ],
                },
                {
                  title: "Advanced Mentorship",
                  price: "₵2,500",
                  desc: "For traders who already understand the basics and want to refine their edge.",
                  features: [
                    "6-week intensive training",
                    "Personal strategy building",
                    "Market psychology mastery",
                    "Lifetime community access",
                  ],
                },
                {
                  title: "Premium Mentorship",
                  price: "₵4,000",
                  desc: "Full VIP experience — one-on-one coaching, premium tools & exclusive insights.",
                  features: [
                    "8-week mentorship program",
                    "1-on-1 personalized coaching",
                    "Private trading group access",
                    "Exclusive premium signals",
                  ],
                },
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-yellow-500 transition-all flex flex-col justify-between"
                  whileHover={{ scale: 1.03 }}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{pkg.desc}</p>
                    <ul className="text-sm text-gray-400 mb-6 space-y-2 text-left">
                      {pkg.features.map((f, idx) => (
                        <li key={idx}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400 mb-4">
                      {pkg.price}
                    </p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                    >
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Online Packages */}
        <AnimatePresence>
          {activePlan === "online" && (
            <motion.div
              key="online"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Standard Mentorship",
                  price: "₵800",
                  desc: "A complete journey from beginner to advanced trader, all online.",
                  features: [
                    "4-week virtual training",
                    "Interactive live classes",
                    "Trading journal templates",
                    "Mentor Q&A support",
                  ],
                },
                {
                  title: "Advanced Mentorship",
                  price: "₵1,800",
                  desc: "Best for traders with experience who want to perfect their strategies.",
                  features: [
                    "6-week advanced online training",
                    "Chart mastery sessions",
                    "Risk & capital management",
                    "Access to VIP Telegram group",
                  ],
                },
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-yellow-500 transition-all flex flex-col justify-between"
                  whileHover={{ scale: 1.03 }}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{pkg.desc}</p>
                    <ul className="text-sm text-gray-400 mb-6 space-y-2 text-left">
                      {pkg.features.map((f, idx) => (
                        <li key={idx}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400 mb-4">
                      {pkg.price}
                    </p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                    >
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Registration Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white text-black rounded-2xl p-8 max-w-md w-full relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Register for Mentorship
                </h3>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border rounded-lg p-3"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border rounded-lg p-3"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border rounded-lg p-3"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                  >
                    Submit
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MentorshipPlans;
