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

export default function MentorshipPlans() {
  const [activePlan, setActivePlan] = useState<PlanType>(PlanTypes.InPerson);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(inPersonPackages[0]);
  const [usdToGhs, setUsdToGhs] = useState<number | null>(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();
        if (data?.rates?.GHS) setUsdToGhs(data.rates.GHS + 2);
        else setUsdToGhs(10.83 + 2);
      } catch {
        setUsdToGhs(10.83 + 2);
      }
    };
    fetchRate();
  }, []);

  const packages = activePlan === PlanTypes.InPerson ? inPersonPackages : onlinePackages;

  // ✅ Auto-select first package whenever plan type changes
  useEffect(() => {
    setSelectedPackage(packages[0]);
  }, [activePlan]);

  return (
    <section
      id="plans"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white font-montserrat"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00ffcc]">
          Choose Your Mentorship Path
        </h2>
        <p className="text-[#ffffffcc] text-lg max-w-2xl mx-auto mb-8">
          Whether you prefer hands-on training or online flexibility, we’ve got a plan for you.
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActivePlan(PlanTypes.InPerson)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activePlan === PlanTypes.InPerson
                ? "bg-[#00ffcc] text-[#0b0f19] shadow-[0_0_20px_#00ffcc80]"
                : "border border-[#00ffcc80] text-[#00ffcc] hover:bg-[#00ffcc20]"
            }`}
          >
            In-Person Mentorship
          </button>

          <button
            onClick={() => setActivePlan(PlanTypes.Online)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activePlan === PlanTypes.Online
                ? "bg-[#FFD700] text-[#0b0f19] shadow-[0_0_20px_#FFD70080]"
                : "border border-[#FFD70080] text-[#FFD700] hover:bg-[#FFD70020]"
            }`}
          >
            Online Mentorship
          </button>
        </div>

        {!usdToGhs ? (
          <p className="text-white/70 animate-pulse">Fetching current exchange rate...</p>
        ) : (
          <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
            {/* Left side (plans) */}
            <div className="flex md:flex-col w-full md:w-1/3 gap-4 overflow-x-auto md:overflow-visible scrollbar-thin scrollbar-thumb-[#00ffcc]/70 scrollbar-track-transparent pb-4 snap-x snap-mandatory">
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  onClick={() => setSelectedPackage(pkg)}
                  whileHover={{ scale: 1.02 }}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all min-w-[80%] md:min-w-0 snap-start
                    ${
                      selectedPackage?.name === pkg.name
                        ? pkg.premium
                          ? "bg-[#FFD70020] border-[#FFD70080] shadow-[0_0_25px_#FFD70050]"
                          : "bg-[#00ffcc20] border-[#00ffcc80] shadow-[0_0_25px_#00ffcc50]"
                        : "border-[#ffffff20] hover:border-[#00ffcc60]"
                    }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3
                      className={`text-lg font-semibold ${
                        pkg.premium ? "text-[#FFD700]" : "text-[#00ffcc]"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p className="text-xl font-bold text-[#FFD700]">
                      ${pkg.priceUsd.toFixed(2)}
                    </p>
                  </div>
                  <p className="text-sm text-[#ffffffb3]">{pkg.level}</p>
                </motion.div>
              ))}
            </div>

            {/* Right side (details) */}
            <AnimatePresence>
              {selectedPackage && (
                <motion.div
                  key={selectedPackage.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.3 }}
                  className="w-full md:w-2/3 bg-[#121826]/70 border border-[#00ffcc40] rounded-2xl p-8 backdrop-blur-sm shadow-[0_0_25px_#00ffcc20]"
                >
                  <h3
                    className={`text-2xl font-semibold mb-4 ${
                      selectedPackage.premium ? "text-[#FFD700]" : "text-[#00ffcc]"
                    }`}
                  >
                    {selectedPackage.name}
                  </h3>
                  <p className="text-[#ffffffb3] mb-4">{selectedPackage.level}</p>

                  <p className="text-3xl font-bold text-[#FFD700] mb-2">
                    ${selectedPackage.priceUsd.toFixed(2)} USD
                  </p>
                  <p className="text-sm text-[#00ffcc] mb-6">
                    ≈ ₵{(selectedPackage.priceUsd * usdToGhs).toFixed(2)} GHS
                  </p>

                  <ul className="text-left text-[#ffffffcc] text-sm leading-relaxed mb-8 space-y-2">
                    {selectedPackage.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 ${
                            selectedPackage.premium ? "text-[#FFD700]" : "text-[#00ffcc]"
                          }`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      selectedPackage.premium
                        ? "bg-[#FFD700] text-[#0b0f19] hover:bg-[#e6c200]"
                        : "bg-[#00ffcc] text-[#0b0f19] hover:bg-[#00e6b3]"
                    }`}
                  >
                    Register Now
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
