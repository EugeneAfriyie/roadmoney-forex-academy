// Eugene Afriyie UEB3502023
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, ArrowRight } from "lucide-react";

export default function FreeValueHook() {
  return (
    <section className="relative bg-gradient-to-br from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white py-20 px-6 md:px-16 text-center overflow-hidden">
      {/* Glowing accents */}
      <div className="absolute -top-32 left-10 w-80 h-80 bg-[#00ffcc25] rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 right-10 w-80 h-80 bg-[#00ffcc25] rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 bg-[#00ffcc1a] border border-[#00ffcc33] px-4 py-2 rounded-full mb-6 text-[#00ffcc] font-medium">
          <Sparkles className="w-4 h-4" /> Free Value for You
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00ffcc] leading-snug">
          Discover Your Trading Personality 🔍  
        </h2>
        <p className="text-[#ffffffcc] text-lg mb-8 max-w-2xl mx-auto">
          Take our quick 2-minute quiz to find out which trading style suits you best —  
          Day Trader, Swing Trader, or Long-Term Investor.  
          Get a personalized roadmap to boost your results instantly!
        </p>

        <motion.a
          href="/quiz"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-[#00ffcc] text-[#0b0f19] font-semibold px-8 py-4 rounded-full shadow-[0_0_25px_#00ffcc66] hover:shadow-[0_0_35px_#00ffccaa] transition-all"
        >
          Start Free Quiz <ArrowRight className="w-5 h-5" />
        </motion.a>

        <p className="text-[#ffffff80] text-sm mt-4 flex items-center justify-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#00ffcc]" /> 
          Gain clarity. Grow smarter. Trade confidently.
        </p>
      </motion.div>
    </section>
  );
}
