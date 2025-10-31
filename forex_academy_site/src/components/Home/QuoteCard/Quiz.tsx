"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { inPersonPackages, onlinePackages } from "../../Plans/TestMentordhip";
// import { inPersonPackages, onlinePackages } from "/QuoteCard/Plans/import { inPersonPackages, onlinePackages } from "./MentorshipPlans";

// import { inPersonPackages, onlinePackages } from "./TestMentordhip";
// import MentorshipPlans from "../../Plans/TestMentordhip";

  const handleScrollToPlans = () => {
    const section = document.getElementById("plans");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


interface Question {
  id: number;
  question: string;
  options: string[];
  key: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "How would you describe your trading experience?",
    options: ["Beginner", "1–3 years", "Over 3 years"],
    key: "experience",
  },
  {
    id: 2,
    question: "What’s your preferred learning style?",
    options: ["Live sessions", "Self-paced videos", "1-on-1 mentorship"],
    key: "learning",
  },
  {
    id: 3,
    question: "Where are you currently located?",
    options: ["Accra", "Outside Ghana", "Other regions in Ghana"],
    key: "location",
  },
  {
    id: 4,
    question: "How much time can you dedicate per week?",
    options: ["<5 hours", "5–10 hours", "10+ hours"],
    key: "schedule",
  },
  {
    id: 5,
    question: "What’s your trading capital range?",
    options: ["Under $500", "$500–$2000", "Over $2000"],
    key: "capital",
  },
];

export default function SmartTradingQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<any>(null);

  const handleSelect = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
    setTimeout(() => setStep(step + 1), 300);
  };

  const computeRecommendation = () => {
    const { experience, schedule, location, capital,  } = answers;
    let planType: "inPerson" | "online" = "online";
    let planName = "Standard Mentorship";

    // Determine plan type
    if (location?.includes("Accra")) planType = "inPerson";

    // Determine level
    if (experience === "1–3 years") planName = "Advanced Mentorship";
    else if (experience === "Over 3 years") planName = "Premium Mentorship";

    const description = `Based on your profile (${experience?.toLowerCase()} trader, ${schedule?.toLowerCase()} schedule, and ${capital?.toLowerCase()} capital), we recommend the ${planName} under our ${planType === "inPerson" ? "In-Person" : "Online"} program.`;

    setResult({ title: planName, description, planType, planName });
  };

  const handleRestart = () => {
    setAnswers({});
    setStep(0);
    setResult(null);
  };

  return (
    <section className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white font-montserrat">
      
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00ffcc]">
          Find Your Ideal Mentorship Path
        </h2>
        <p className="text-[#ffffffcc] text-lg mb-12">
          Take this short quiz and let’s match you with the perfect mentorship program tailored to your goals.
        </p>

        <AnimatePresence mode="wait">
          {!result ? (
            step < questions.length ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#121826]/70 border border-[#00ffcc40] rounded-2xl p-8 backdrop-blur-sm shadow-[0_0_25px_#00ffcc20]"
              >
                <h3 className="text-2xl font-semibold mb-8">
                  {questions[step].question}
                </h3>
                <div className="flex flex-col gap-4">
                  {questions[step].options.map((option) => (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        handleSelect(questions[step].key, option)
                      }
                      className="px-6 py-4 text-lg rounded-xl bg-[#0b1220]/70 border border-[#00ffcc30] hover:border-[#00ffcc80] hover:bg-[#00ffcc10] transition-all"
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-10 text-[#00ffcc] text-sm">
                  Question {step + 1} of {questions.length}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={computeRecommendation}
                  className="px-10 py-4 bg-[#00ffcc] text-[#0b0f19] font-semibold rounded-xl hover:bg-[#00e6b3] transition"
                >
                  Show My Recommendation
                </button>
              </motion.div>
            )
          ) : (
            <ResultPanel result={result} onRetake={handleRestart} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ------------------ Result Panel ------------------ */
const ResultPanel = ({
  result,
  onRetake,
}: {
  result: {
    title: string;
    description: string;
    planType: "inPerson" | "online";
    planName: string;
  };
  onRetake: () => void;
}) => {
  const plans = result.planType === "inPerson" ? inPersonPackages : onlinePackages;
  const matchedPlan = plans.find((p) => p.name === result.planName) || plans[0];

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="bg-[#121826]/70 border border-[#00ffcc44] rounded-3xl p-8 shadow-[0_0_25px_#00ffcc30]"
    >
      <h3 className="text-2xl font-bold text-center text-[#00ffcc] mb-2">
        Your Recommended Program
      </h3>
      <p className="text-center text-[#ffffffcc] mb-8">{result.description}</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0b1220]/50 border border-[#00ffcc30] rounded-2xl p-6 mb-8"
      >
        <div className="flex justify-between items-center mb-2">
          <h4
            className={`text-xl font-semibold ${
              matchedPlan.premium ? "text-[#FFD700]" : "text-[#00ffcc]"
            }`}
          >
            {matchedPlan.name}
          </h4>
          <p className="text-lg font-bold text-[#FFD700]">
            ${matchedPlan.priceUsd}
          </p>
        </div>
        <p className="text-sm text-[#ffffffb3] mb-4">{matchedPlan.level}</p>
        <ul className="space-y-2 text-[#ffffffcc] text-sm">
          {matchedPlan.benefits.slice(0, 5).map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle2
                className={`w-4 h-4 mt-0.5 ${
                  matchedPlan.premium ? "text-[#FFD700]" : "text-[#00ffcc]"
                }`}
              />
              {b}
            </li>
          ))}
        </ul>

        <button
          onClick={handleScrollToPlans}
        //   href="/mentorship#plans"
          className={`mt-6 block text-center w-full py-3 rounded-xl font-semibold transition-all ${
            matchedPlan.premium
              ? "bg-[#FFD700] text-[#0b0f19] hover:bg-[#e6c200]"
              : "bg-[#00ffcc] text-[#0b0f19] hover:bg-[#00e6b3]"
          }`}
        >
          Learn More & Register
        </button>
      </motion.div>

      <button
        onClick={onRetake}
        className="px-6 py-2 border border-[#ffffff20] rounded-full text-[#ffffffb3] hover:bg-[#ffffff10] transition"
      >
        Retake Quiz
      </button>
    </motion.div>
  );
};
