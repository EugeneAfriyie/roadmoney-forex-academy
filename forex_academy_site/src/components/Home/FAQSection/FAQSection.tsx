"use client";

import  { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "How long does the mentorship last?",
    a: "Programs typically last 4–8 weeks depending on your level and learning pace. You’ll have access to resources even after completion.",
  },
  {
    q: "Can I learn remotely?",
    a: "Yes! We offer both online and hybrid mentorships. You’ll join live Zoom sessions or access pre-recorded lessons at your convenience.",
  },
  {
    q: "Do I need trading experience?",
    a: "Not at all. The quiz helps us determine your level and start you from the best program — whether you’re a total beginner or experienced trader.",
  },
  {
    q: "Is mentorship available outside Accra?",
    a: "Absolutely. Most of our programs are online, so you can join from anywhere in Ghana or abroad.",
  },
  {
    q: "What payment options are available?",
    a: "You can pay via mobile money, bank transfer, or card — full details will be shared once you choose your program.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="relative bg-[#0b0f19] text-white py-20 px-6 sm:px-12 md:px-20 overflow-hidden"
    >
      {/* background glows */}
      <div className="pointer-events-none absolute -top-32 left-10 w-72 h-72 bg-[#00ffcc22] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-10 w-72 h-72 bg-[#00ffcc22] rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        {/* heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#00ffcc12] px-3 py-1 rounded-full border border-[#00ffcc33] text-[#00ffcc] mb-4">
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ffcc]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#ffffffb3] mt-3 max-w-xl mx-auto">
            Got more questions? Here are the most common ones about RoadMoney
            mentorship and trading programs.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#121826]/60 border border-[#00ffcc22] rounded-xl p-5"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-[#00ffcc]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00ffcc99] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#ffffffcc] mt-3 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 bg-[#00ffcc10] border border-[#00ffcc33] rounded-2xl p-6 text-center shadow-[0_0_20px_#00ffcc20]"
        >
          <h3 className="text-2xl font-bold text-[#00ffcc] mb-2">
            Still have questions?
          </h3>
          <p className="text-[#ffffffcc] mb-5">
            Our team is happy to help — get quick answers about programs,
            mentorship, or enrollment.
          </p>
          <motion.a
            href="mailto:groupeight00@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px #00ffcc80" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#00ffcc] text-[#0b0f19] font-semibold px-6 py-3 rounded-full transition"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
