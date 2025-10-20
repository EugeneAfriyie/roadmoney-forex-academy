// Eugene Afriyie UEB3502023
import { motion } from "framer-motion";
import { MapPin, TrendingUp } from "lucide-react";

export default function TradingAcademyAd() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white py-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        {/* LEFT TEXT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffcc]">
            🚨 BIG ANNOUNCEMENT!
          </h2>
          <p className="text-lg md:text-xl text-[#ffffffcc] mb-6 leading-relaxed">
            We’re thrilled to announce that our <strong>Physical Trading Academy</strong> 
            is now officially open in <strong>Accra, Ghana!</strong> 🎉
          </p>

          <div className="bg-[#121826]/80 border border-[#00ffcc]/30 rounded-2xl p-6 shadow-[0_0_25px_#00ffcc55] mb-6">
            <h3 className="text-2xl font-semibold mb-3 text-[#00ffcc]">
              Visit the RoadMoney Forex Academy
            </h3>
            <p className="text-[#ffffffb3] mb-5">
              Step into a world of <span className="text-[#00ffcc]">financial empowerment</span> — 
              connect with our experts, learn in a professional environment, 
              and grow your skills through mentorship that wins.
            </p>

            <ul className="text-[#ffffffb3] space-y-2 mb-6">
              <li>✅ Professional Trading Environment</li>
              <li>✅ Expert Guidance & Mentorship</li>
              <li>✅ Exclusive Resources & Networking</li>
            </ul>

            <div className="flex flex-col items-center md:items-start gap-4">
              <motion.a
                href="https://maps.google.com?q=Accra+McCarthy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-[#00ffcc] text-[#0b0f19] px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                <MapPin className="w-5 h-5" /> Visit Us in Accra
              </motion.a>

              <p className="text-sm text-[#ffffff80] flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#00ffcc]" /> Your journey to
                financial freedom starts here!
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_#00ffcc55] border border-[#00ffcc33]">
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1751247112/PREG1_pqz5ik.jpg"
              alt="RoadMoney Trading Academy Ghana"
              className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/60 to-transparent rounded-2xl"></div>
        </motion.div>
      </motion.div>

      {/* Glowing background accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00ffcc33] rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#00ffcc33] rounded-full blur-3xl"></div>
    </section>
  );
}
