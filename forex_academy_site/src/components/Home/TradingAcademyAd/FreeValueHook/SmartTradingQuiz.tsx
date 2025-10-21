// Eugene Afriyie UEB3502023
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * SmartTradingQuiz
 * - Intro panel (description + stat tiles). Tap a stat to start the quiz.
 * - 5-step quiz, same-page, animated transitions.
 * - Result card with recommended program and CTA to /mentorship.
 *
 * TailwindCSS + Framer Motion expected in project.
 */

const steps = [
  {
    key: "experience",
    question: "How long have you been trading?",
    options: [
      "I’m new to trading",
      "Less than 1 year",
      "1–3 years",
      "Over 3 years",
    ],
  },
  {
    key: "schedule",
    question: "What’s your typical weekday schedule?",
    options: ["I work full-time (9–5)", "I have flexible hours", "I’m a student/freelancer"],
  },
  {
    key: "location",
    question: "Do you live in or near Accra (Ghana)?",
    options: ["Yes — I live in/near Accra", "No — I’m outside Accra"],
  },
  {
    key: "capital",
    question: "What’s your available capital for trading right now?",
    options: ["Under $200", "$200–$1000", "Over $1000"],
  },
  {
    key: "learning",
    question: "How do you prefer to learn?",
    options: ["Video & visuals (self-paced)", "Live sessions with mentors", "Hybrid (mix of both)"],
  },
];

type Answers = {
  experience?: string;
  schedule?: string;
  location?: string;
  capital?: string;
  learning?: string;
};

export default function SmartTradingQuiz(): JSX.Element {
  const [started, setStarted] = useState(false); // intro -> quiz
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);

  // brief analytics/stat tiles content (shown before quiz)
  const statTiles = [
    { title: "Fast Placement", sub: "Find right program in 2 mins" },
    { title: "Personalized", sub: "Based on experience & capital" },
    { title: "Local / Online", sub: "We match you by location" },
  ];

  const handleStart = () => {
    setStarted(true);
    setStepIndex(0);
    setShowResult(false);
  };

  const selectOption = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    // move next
    if (stepIndex < steps.length - 1) {
      setStepIndex((s) => s + 1);
    } else {
      // finished quiz
      setShowResult(true);
    }
  };

  // logic to compute recommendation
  const computeRecommendation = () => {
    const { experience, schedule, location, capital, learning } = answers;
    // determine level
    let level = "Beginner";
    if (!experience || experience === "I’m new to trading" || experience === "Less than 1 year") {
      level = "Beginner";
    } else if (experience === "1–3 years") {
      level = "Intermediate";
    } else {
      level = "Advanced";
    }

    // delivery mode
    let mode = "Online Mentorship";
    if (location && location.includes("Accra")) {
      // prefer in-person if near Accra and wants live
      mode = "In-Person (Accra)";
      if (learning && learning.includes("Video") && !learning.includes("Live")) {
        mode = "Hybrid (Recommended)";
      }
    } else {
      mode = "Online Mentorship";
      if (learning && learning.includes("Live")) {
        mode = "Live Online Mentorship";
      }
    }

    // style preference inference
    let style = "Swing Trading";
    if (schedule && schedule.includes("full-time")) {
      style = "Swing Trading / Longer holds";
    } else if (schedule && schedule.includes("flexible")) {
      style = "Day Trading / Active";
    } else {
      style = "Long-Term Investing";
    }

    // capital influence
    let capitalNote = "";
    if (capital && capital.includes("Under")) capitalNote = "Start small, focus on risk management.";
    else if (capital && capital.includes("$200")) capitalNote = "Good starting capital to learn scaling.";
    else capitalNote = "You have capital to deploy into diversified strategies.";

    const title = `${level} ${mode}`;
    const description = `Suggested style: ${style}. ${capitalNote} We recommend the ${level} program delivered as ${mode}.`;

    return { title, description };
  };

  const result = showResult ? computeRecommendation() : null;

  return (
    <section
      id="smart-quiz"
      className="relative bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white py-16 px-4 sm:px-8 md:px-16"
    >
      {/* glow accents */}
      <div className="pointer-events-none absolute -top-32 left-8 w-72 h-72 rounded-full blur-3xl bg-[#00ffcc22]" />
      <div className="pointer-events-none absolute -bottom-32 right-8 w-72 h-72 rounded-full blur-3xl bg-[#00ffcc22]" />

      <div className="max-w-4xl mx-auto">
        {/* heading & intro */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#00ffcc12] px-3 py-1 rounded-full border border-[#00ffcc33] text-[#00ffcc] mb-4">
            <Sparkles className="w-4 h-4" />
            Smart Placement
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#00ffcc] mb-3">
            Which RoadMoney program fits you best?
          </h2>

          <p className="text-[#ffffffb3] max-w-2xl mx-auto">
            Answer a few quick questions — we’ll recommend the best mentorship package
            (online or in-person) and the trading style that matches your lifestyle and capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left: intro/stat or quiz/result */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              {!started && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45 }}
                  className="bg-[#121826]/60 border border-[#00ffcc33] rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#00ffcc] mb-3">
                    Quick intro
                  </h3>
                  <p className="text-[#ffffffcc] mb-4">
                    This quick quiz helps us match you with the right RoadMoney program.
                    Tap any stat below to start — it’s fast, private, and tailored.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {statTiles.map((t) => (
                      <button
                        key={t.title}
                        onClick={handleStart}
                        aria-label={`Start quiz: ${t.title}`}
                        className="text-left p-4 bg-[#0b1220]/60 hover:bg-[#0b1220]/80 transition rounded-lg border border-[#ffffff06] flex flex-col gap-1"
                      >
                        <div className="text-sm text-[#00ffcc] font-semibold">{t.title}</div>
                        <div className="text-xs text-[#ffffff99]">{t.sub}</div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 text-sm text-[#ffffff99]">
                    <strong>Tip:</strong> be honest — your answers help us suggest the best
                    starting point and whether you should join online or in-person.
                  </div>
                </motion.div>
              )}

              {started && !showResult && (
                <motion.div
                  key={`question-${stepIndex}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.35 }}
                  className="bg-[#121826]/60 border border-[#00ffcc33] rounded-2xl p-6 shadow-lg"
                >
                  {/* progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-[#ffffff99] mb-2">
                      <div>Question {stepIndex + 1} of {steps.length}</div>
                      <div>{Math.round(((stepIndex) / steps.length) * 100)}%</div>
                    </div>
                    <div className="w-full bg-white/6 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 bg-gradient-to-r from-[#00c896] to-[#00ffcc]"
                        style={{ width: `${((stepIndex) / steps.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-[#00ffcc] mb-4">{steps[stepIndex].question}</h4>

                  <div className="grid gap-3">
                    {steps[stepIndex].options.map((opt) => (
                      <motion.button
                        key={opt}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => selectOption(steps[stepIndex].key, opt)}
                        className="py-3 px-4 text-left rounded-xl bg-[#00ffcc10] hover:bg-[#00ffcc20] transition border border-[#ffffff04]"
                      >
                        <div className="font-medium text-[#ffffffdd]">{opt}</div>
                      </motion.button>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => {
                        if (stepIndex === 0) {
                          setStarted(false);
                          setAnswers({});
                        } else {
                          setStepIndex((s) => Math.max(0, s - 1));
                        }
                      }}
                      className="text-sm text-[#ffffff99] underline"
                    >
                      Back
                    </button>

                    <div className="text-sm text-[#ffffff99]">
                      Need help?{" "}
                      <a href="mailto:groupeight00@gmail.com" className="text-[#00ffcc] underline">
                        Contact us
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {showResult && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  className="bg-[#121826]/70 border border-[#00ffcc44] rounded-3xl p-6 shadow-[0_0_20px_#00ffcc30]"
                >
                  <div className="flex flex-col items-center gap-3">
                    <CheckCircle2 className="w-12 h-12 text-[#00ffcc]" />
                    <h3 className="text-2xl font-semibold text-[#00ffcc]">{result.title}</h3>
                    <p className="text-[#ffffffcc] text-center max-w-xl">{result.description}</p>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <a
                        href="/mentorship"
                        className="inline-flex items-center gap-2 bg-[#00ffcc] text-[#0b0f19] px-5 py-3 rounded-full font-semibold"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => {
                          // let user retake quiz
                          setShowResult(false);
                          setStarted(true);
                          setStepIndex(0);
                          setAnswers({});
                        }}
                        className="inline-flex items-center gap-2 border border-[#ffffff10] text-[#ffffffcc] px-4 py-3 rounded-full"
                      >
                        Retake Quiz
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right column: small stats / suggestions UI (clickable to reveal extra explanation) */}
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <div className="bg-[#0b1220]/50 border border-[#ffffff06] rounded-xl p-4 shadow-sm">
                <h4 className="text-sm text-[#00ffcc] font-semibold mb-2">What we look at</h4>

                <ul className="space-y-2 text-[#ffffffb3] text-sm">
                  <li><strong>Experience:</strong> years of trading shows transferable skills.</li>
                  <li><strong>Schedule:</strong> tells us if day trading fits your life.</li>
                  <li><strong>Location & Capital:</strong> help decide online vs in-person and suitable strategies.</li>
                </ul>

                <div className="mt-4">
                  <details className="text-sm text-[#ffffffcc]">
                    <summary className="cursor-pointer text-[#00ffcc]">Why this matters</summary>
                    <div className="mt-2 text-[#ffffffb3]">
                      Asking about availability and capital helps us recommend realistic strategies and the right mentorship format — so you don’t waste time or money.
                    </div>
                  </details>
                </div>
              </div>

              <div className="mt-4 bg-[#121826]/40 border border-[#ffffff06] rounded-xl p-4 text-sm text-[#ffffffcc]">
                <div className="font-semibold mb-2">Quick tips</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Be honest — the better the answers, the better the match.</li>
                  <li>If you’re outside Accra, online mentorship is usually best unless you plan to relocate.</li>
                  <li>Smaller capital = focus on risk management and position sizing.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
