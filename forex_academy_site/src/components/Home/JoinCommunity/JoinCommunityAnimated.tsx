// JoinCommunityAnimated.tsx
// Animated background version (Framer Motion + Tailwind)
import React, { useContext, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Send, Globe } from "lucide-react";
// import CommunityModal from "./CommunityModal";
import { ThemeContext } from "../../../context/ThemeContext";

export default function JoinCommunityAnimated() {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { name: "Telegram", href: "https://t.me/yourchannel", icon: <Send />, subtitle: "Real-time signals & chat" },
      { name: "Instagram", href: "https://instagram.com/yourpage", icon: <Instagram />, subtitle: "Short insights & reels" },
      { name: "Facebook", href: "https://facebook.com/yourpage", icon: <Facebook />, subtitle: "Community posts & events" },
      { name: "Twitter (X)", href: "https://x.com/yourpage", icon: <Twitter />, subtitle: "Live announcements & threads" },
    ],
    []
  );

  return (
    <section className="relative py-20">
      {/* animated subtle grid and blobs */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            theme === "dark"
              ? "linear-gradient(90deg, rgba(0,255,204,0.06) 1px, transparent 1px), linear-gradient(rgba(0,255,204,0.04) 1px, transparent 1px)"
              : "linear-gradient(90deg, rgba(0,120,255,0.06) 1px, transparent 1px), linear-gradient(rgba(0,120,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px, 60px 60px",
          animation: "grid-move 20s linear infinite",
          opacity: 0.12,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden p-8 bg-gradient-to-br from-[#111217] to-transparent border border-[#ffb347]/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* left */}
            <div>
              <motion.h2 initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-[#ffb347]">
                Join Our Community
              </motion.h2>
              <motion.p initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 }} className="text-slate-200 mt-3">
                Connect with traders worldwide. Share strategies, learn from each other, and grow as a team.
              </motion.p>

              <div className="mt-6 flex flex-wrap gap-3">
                {links.map((l) => (
                  <motion.a
                    key={l.name}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/20 border border-white/6 text-white/90"
                  >
                    <span className="w-6 h-6 flex items-center justify-center text-[#ffb347]">{l.icon}</span>
                    <span className="text-sm">{l.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6">
                <button onClick={() => setOpen(true)} className="px-5 py-3 rounded-full bg-[#ffb347] text-black font-semibold">
                  Join Community
                </button>
              </div>
            </div>

            {/* right visual (animated globe-like gradient) */}
            <div className="relative h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden">
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* layered glow and earth-like texture simulation */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,200,120,0.12),transparent 30%)] mix-blend-screen" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,200,150,0.08),transparent 20%)] mix-blend-screen" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.03),rgba(0,0,0,0.02))] filter blur-[10px]" />
                </div>
                {/* decorative planet image placeholder (you can swap with an asset) */}
                <div className="absolute inset-0 flex items-end justify-end p-6">
                  <img src="/assets/earth-small.png" alt="earth" className="w-40 h-40 object-cover rounded-full shadow-lg" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <CommunityModal open={open} onClose={() => setOpen(false)} links={links.map((l) => ({ name: l.name, href: l.href, icon: l.icon }))} />
    </section>
  );
}
