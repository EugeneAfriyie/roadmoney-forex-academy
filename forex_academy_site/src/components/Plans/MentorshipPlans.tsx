// Eugene Afriyie UEB3502023
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type PlanType = "inPerson" | "online";

const PlanTypes = {
  InPerson: "inPerson" as PlanType,
  Online: "online" as PlanType,
} as const;

interface Package {
  name: string;
  priceUsd: number;
  level: string;
  benefits: string[];
  premium?: boolean;
}

const inPersonPackages: Package[] = [
  {
    name: "Standard Mentorship",
    priceUsd: 120,
    level: "Beginner–Advanced",
    benefits: [
      "1 month intensive training",
      "Access to mentorship group (For life)",
      "Live trading sessions while learning",
      "Weekly psychology sessions",
      "Risk management session",
      "Prop firm passing techniques",
      "A Certificate of Participation",
    ],
  },
  {
    name: "Advanced Mentorship",
    priceUsd: 200,
    level: "Experienced Traders",
    benefits: [
      "1 month intensive training",
      "Lifetime coaching",
      "Access to mentorship group (For life)",
      "Live and recorded sessions",
      "Deep dive into my trading system",
      "Weekly psychology sessions",
      "Prop firm passing techniques",
      "Advanced entry and exit criteria",
      "Trading psychology mastery",
      "Certificate of Excellence",
    ],
  },
  {
    name: "Premium Mentorship",
    priceUsd: 300,
    level: "Elite Personalized",
    benefits: [
      "1 month intensive personalized coaching",
      "Lifetime access to 1-on-1 sessions",
      "Priority access to mentorship group (For life)",
      "Exclusive trading strategies & system deep dives",
      "Weekly psychology + market outlook sessions",
      "Private prop firm setup guide",
      "Personal trading performance tracking",
      "Certificate of Mastery",
    ],
    premium: true,
  },
];

const onlinePackages: Package[] = [
  {
    name: "Standard Mentorship",
    priceUsd: 90,
    level: "Beginner–Advanced",
    benefits: [
      "1 month intensive online training",
      "Lifetime access to private mentorship group",
      "Weekly live trading sessions",
      "Recorded classes for review",
      "Risk management training",
      "A Certificate of Participation",
    ],
  },
  {
    name: "Advanced Mentorship",
    priceUsd: 150,
    level: "Experienced Traders",
    benefits: [
      "1 month intensive advanced online mentorship",
      "Lifetime coaching access",
      "Deep dive into advanced trading systems",
      "Weekly psychology and market review sessions",
      "Prop firm strategies & risk management",
      "A Certificate of Completion",
    ],
  },
];

const planVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1 } },
};

export default function MentorshipPlans() {
  const [activePlan, setActivePlan] = useState<PlanType | null>(PlanTypes.InPerson);
  const [showModal, setShowModal] = useState(false);
  const [usdToGhs, setUsdToGhs] = useState<number | null>(null);

  // ✅ Fetch exchange rate once at mount
  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();

        if (data?.rates?.GHS) {
          setUsdToGhs(data.rates.GHS + 2); // Add retail margin
        } else {
          console.warn("⚠️ Fallback rate used");
          setUsdToGhs(10.83 + 2);
        }
      } catch (err) {
        console.warn("⚠️ Using fallback USD→GHS rate");
        setUsdToGhs(10.83 + 2);
      }
    };
    fetchRate();
  }, []);

  return (
    <section
      id="plans"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white font-montserrat"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00ffcc]">
          Choose Your Mentorship Path
        </h2>
        <p className="text-[#ffffffcc] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you prefer hands-on training or the flexibility of online mentorship, we’ve got a package tailored just for you.
        </p>

        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-12" />

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() =>
              setActivePlan(activePlan === PlanTypes.InPerson ? null : PlanTypes.InPerson)
            }
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activePlan === PlanTypes.InPerson
                ? "bg-[#00ffcc] text-[#0b0f19] shadow-[0_0_20px_#00ffcc80]"
                : "border border-[#00ffcc80] text-[#00ffcc] hover:bg-[#00ffcc20]"
            }`}
          >
            In-Person Mentorship
          </button>

          <button
            onClick={() =>
              setActivePlan(activePlan === PlanTypes.Online ? null : PlanTypes.Online)
            }
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activePlan === PlanTypes.Online
                ? "bg-[#FFD700] text-[#0b0f19] shadow-[0_0_20px_#FFD70080]"
                : "border border-[#FFD70080] text-[#FFD700] hover:bg-[#FFD70020]"
            }`}
          >
            Online Mentorship
          </button>
        </div>

        {/* Loading state */}
        {!usdToGhs && (
          <p className="text-white/70 animate-pulse">Fetching current exchange rate...</p>
        )}

        {/* Packages */}
        <AnimatePresence>
          {activePlan && usdToGhs && (
            <motion.div
              variants={planVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex md:grid md:grid-cols-3 gap-6 md:overflow-hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
            >
              {(activePlan === PlanTypes.InPerson
                ? inPersonPackages
                : onlinePackages
              ).map((pkg) => (
                <motion.article
                  key={pkg.name}
                  className={`snap-start min-w-[85%] md:min-w-0 md:w-auto bg-[#121826]/80 border border-[#00ffcc40] rounded-2xl p-6 backdrop-blur-sm
                    hover:scale-[1.03] transition-all duration-300 shadow-[0_0_25px_#00ffcc30]
                    ${pkg.premium ? "md:scale-[1.05] border-[#FFD70080] shadow-[0_0_30px_#FFD70050]" : ""}`}
                >
                  <h3
                    className={`text-2xl font-semibold mb-3 ${
                      pkg.premium ? "text-[#FFD700]" : "text-[#00ffcc]"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-[#ffffffb3] text-sm mb-2">{pkg.level}</p>

                  {/* ✅ Show both USD and converted GHS */}
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-[#FFD700]">
                      ${pkg.priceUsd.toFixed(2)} USD
                    </p>
                    <p className="text-sm text-[#00ffcc]">
                      ≈ ₵{(pkg.priceUsd * usdToGhs).toFixed(2)} GHS
                    </p>
                  </div>

                  <ul className="text-left text-[#ffffffcc] text-sm leading-relaxed mb-4 space-y-2">
                    {pkg.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            pkg.premium ? "text-[#FFD700]" : "text-[#00ffcc]"
                          }`}
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setShowModal(true)}
                    className={`w-full mt-4 py-3 rounded-xl font-semibold transition-all ${
                      pkg.premium
                        ? "bg-[#FFD700] text-[#0b0f19] hover:bg-[#e6c200]"
                        : "bg-[#00ffcc] text-[#0b0f19] hover:bg-[#00e6b3]"
                    }`}
                  >
                    Register Now
                  </button>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Registration Modal */}
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
              <h4 className="text-2xl font-bold mb-4 text-[#00ffcc]">
                Registration Coming Soon
              </h4>
              <p className="text-[#ffffffb3] mb-6">
                Our mentorship enrollment system is being finalized. Stay tuned — registration opens soon!
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
