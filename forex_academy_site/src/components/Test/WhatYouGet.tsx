// Eugene Afriyie UEB3502023
// WhatYouGet.tsx
import React, { useContext, useMemo, useState } from "react";
import { motion } from "framer-motion";
// import { ThemeContext } from "../../../context/ThemeContext"; // adjust path
import {
  Book,
  Headphones,
  Users,
  Shield,
  Award,
  Calendar,
  Layers,
  Zap,
  PieChart,
  Target,
  Clock,
  CheckCircle,
  Cpu,
  TrendingUp,
  Play,
  LifeBuoy,
} from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

/**
 * Data: program benefits (16 items provided)
 */
const BENEFITS = [
  "1 month intensive training",
  "lifetime coaching",
  "Access to mentorship group (For life)",
  "Live trading sessions whiles learning",
  "Deep dive into my trading system",
  "Weekly psychology sessions",
  "Weekly market outlook with mentorship group",
  "Equilibrium Scaping/swinging strategy",
  "Risk management session",
  "Prop firm passing techniques",
  "Multitimeframe analysis",
  "Trading psychology",
  "Deep dive into correlation",
  "Fundamental analysis",
  "My entry criteria",
  "A Certificate of Participation",
];

/**
 * Utility: pick a lucide icon per index to keep variety
 */
const ICONS = [
  Book, // learning
  Headphones,
  Users,
  Shield,
  Award,
  Calendar,
  Layers,
  Zap,
  Shield, // reuse for risk
  Target,
  PieChart,
  LifeBuoy,
  TrendingUp,
  Cpu,
  CheckCircle,
  Award,
];

type LayoutMode = "grid" | "flow" | "split";

/* ---------------------------
   Small reusable components
   --------------------------- */
const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/6 dark:bg-black/10 text-[#00c896]">
    {children}
  </span>
);

/* ---------------------------
   Animated Chart (SVG + CSS)
   lightweight, theme-aware
   --------------------------- */
// const AnimatedChartSVG: React.FC<{ theme: string }> = ({ theme }) => {
//   // subtle stroke color
//   const stroke = theme === "dark" ? "#00ffcc" : "#0078ff";
//   const glow = theme === "dark" ? "rgba(0,255,204,0.12)" : "rgba(0,120,255,0.10)";

//   return (
//     <div className="relative w-full h-full flex items-center justify-center">
//       <svg viewBox="0 0 800 360" preserveAspectRatio="none" className="w-full h-full">
//         {/* grid background */}
//         <defs>
//           <linearGradient id="gLine" x1="0" x2="1">
//             <stop offset="0%" stopColor={stroke} stopOpacity="0.06" />
//             <stop offset="80%" stopColor={stroke} stopOpacity="0.02" />
//           </linearGradient>
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="12" result="coloredBlur" />
//             <feMerge>
//               <feMergeNode in="coloredBlur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* faint grid lines (SVG) */}
//         <g stroke={theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"} strokeWidth="1">
//           {Array.from({ length: 20 }).map((_, i) => (
//             <line key={`v${i}`} x1={(i * 800) / 20} y1={0} x2={(i * 800) / 20} y2={360} />
//           ))}
//           {Array.from({ length: 12 }).map((_, i) => (
//             <line key={`h${i}`} x1={0} y1={(i * 360) / 12} x2={800} y2={(i * 360) / 12} />
//           ))}
//         </g>

//         {/* animated polyline (simulated price) */}
//         <polyline
//           id="priceLine"
//           points="0,220 80,200 160,210 240,170 320,190 400,160 480,180 560,140 640,150 720,130 800,120"
//           fill="none"
//           stroke="url(#gLine)"
//           strokeWidth="3"
//           strokeLinecap="round"
//           style={{ filter: "url(#glow)" }}
//         >
//           <animate
//             attributeName="points"
//             dur="10s"
//             repeatCount="indefinite"
//             values="
//             0,220 80,200 160,210 240,170 320,190 400,160 480,180 560,140 640,150 720,130 800,120;
//             0,200 80,220 160,190 240,180 320,170 400,150 480,200 560,160 640,140 720,120 800,140;
//             0,220 80,200 160,210 240,170 320,190 400,160 480,180 560,140 640,150 720,130 800,120
//             "
//           />
//         </polyline>

//         {/* soft glow circle */}
//         <circle cx="680" cy="120" r="6" fill={stroke} style={{ opacity: 0.9 }}>
//           <animate attributeName="r" dur="3s" values="6;12;6" repeatCount="indefinite" />
//         </circle>

//         {/* overlay gradient */}
//         <rect x="0" y="0" width="800" height="360" fill={glow} opacity="0.06" />
//       </svg>
//       {/* floating badge */}
//       <div className="absolute top-6 left-6">
//         <Badge>Live Market Snapshot</Badge>
//       </div>
//     </div>
//   );
// };

/* ---------------------------
   Version 1: Modern Grid
   --------------------------- */
const WhatYouGetGrid: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <section aria-labelledby="what-grid" className="py-16">
      <h2 id="what-grid" className="text-3xl font-bold text-center mb-6 text-[#00c896]">
        What You’ll Get — Program Highlights
      </h2>
      <p className="text-center max-w-2xl mx-auto text-sm mb-8 text-muted-foreground">
        Everything included in the mentorship — structured, practical, and focused on real results.
      </p>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BENEFITS.map((b, i) => {
          const Icon = (ICONS[i] as any) || Book;
          return (
            <motion.article
              key={b}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              className={`p-6 rounded-2xl border border-white/6 backdrop-blur-sm transition-shadow duration-300 relative overflow-hidden ${theme === "dark" ? "bg-[#06111a]/40" : "bg-white/60"}`}
              role="group"
              aria-label={b}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${theme === "dark" ? "bg-black/30" : "bg-white/90"}`}>
                  <Icon size={20} className="text-[#00c896]" />
                </div>
                <h3 className="font-semibold text-lg">{b}</h3>
              </div>
              <p className="text-sm opacity-80">Part of the structured curriculum and support for every mentee.</p>

              {/* subtle glowing accent */}
              <span
                aria-hidden
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                style={{
                  background: theme === "dark" ? "radial-gradient(circle, rgba(0,255,204,0.14), transparent 40%)" : "radial-gradient(circle, rgba(0,200,255,0.08), transparent 40%)",
                }}
              />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

/* ---------------------------
   Version 2: Step Flow
   --------------------------- */
const WhatYouGetFlow: React.FC<{ theme: string }> = ({ theme }) => {
  // pick four core steps from benefits to make a neat flow
  const steps = [
    { title: "Learn the System", text: "1 month intensive training + deep system dive", icon: Book },
    { title: "Practice Live", text: "Live trading sessions & weekly market outlook", icon: Play },
    { title: "Pass Firms", text: "Prop firm passing techniques & risk templates", icon: Target },
    { title: "Scale & Sustain", text: "Lifetime coaching + psychology & community", icon: Users },
  ];

  return (
    <section aria-labelledby="what-flow" className="py-16">
      <h2 id="what-flow" className="text-3xl font-bold text-center mb-6 text-[#00c896]">
        How the Program Works — Step by Step
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <div className="space-y-8">
              {steps.map((s, i) => {
                const Icon = s.icon as any;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="p-6 rounded-2xl border border-white/6 backdrop-blur-sm bg-transparent"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-black/20">
                        <Icon size={18} className="text-[#00c896]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{s.title}</h4>
                        <p className="text-sm opacity-80">{s.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            {/* vertically stacked arrows with animated center */}
            <div className="relative w-full h-[320px] rounded-xl flex items-center justify-center">
              <div className="w-full h-full rounded-xl border border-white/6 bg-gradient-to-br from-black/10 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm mb-2 text-muted-foreground">Your path</p>
                  <h3 className="text-2xl font-bold text-[#00c896]">Learn → Practice → Test → Scale</h3>
                  <p className="mt-4 text-sm opacity-80">We guide you at each step and remove guesswork.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------
   Version 3: Split Combo
   --------------------------- */
const WhatYouGetSplit: React.FC<{ theme: string }> = ({ theme }) => {
  // pick 6 highlighted benefits to show beside chart
  const highlights = [
    BENEFITS[0],
    BENEFITS[3],
    BENEFITS[4],
    BENEFITS[8],
    BENEFITS[9],
    BENEFITS[15],
  ];

  return (
    <section aria-labelledby="what-split" className="py-16">
      <h2 id="what-split" className="text-3xl font-bold text-center mb-6 text-[#00c896]">
        What You’ll Get — Spotlight
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="w-full h-[380px] rounded-2xl overflow-hidden border border-white/6 relative bg-transparent">
          {/* <AnimatedChartSVG theme={theme} /> */}
        </div>

        <div className="w-full">
          <p className="text-sm mb-6 text-muted-foreground">
            These core features give you the framework and live practice needed to build consistency and pass prop challenges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const Icon = (ICONS[i] as any) || TrendingUp;
              return (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="p-4 rounded-xl border border-white/6 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/20">
                    <Icon size={18} className="text-[#00c896]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">{h}</h5>
                    <p className="text-xs opacity-80">Included in the mentorship curriculum</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-6">
            <a href="/mentorship" className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#00c896] to-[#00ffcc] text-black font-semibold">
              See Full Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------
   Main exported component
   --------------------------- */
const WhatYouGet: React.FC<{ defaultLayout?: LayoutMode }> = ({ defaultLayout = "grid" }) => {
  const { theme } = useContext(ThemeContext);
  const [layout, setLayout] = useState<LayoutMode>(defaultLayout);

  const layoutBtn = (mode: LayoutMode, label: string) => (
    <button
      onClick={() => setLayout(mode)}
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        layout === mode ? "bg-[#00c896] text-black" : "bg-white/6 text-white/80"
      }`}
      aria-pressed={layout === mode}
    >
      {label}
    </button>
  );

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">What You'll Get</h2>
          <div className="flex gap-2">
            {layoutBtn("grid", "Grid")}
            {layoutBtn("flow", "Flow")}
            {layoutBtn("split", "Split")}
          </div>
        </div>
        <div className="rounded-2xl p-0">
          {layout === "grid" && <WhatYouGetGrid theme={theme} />}
          {layout === "flow" && <WhatYouGetFlow theme={theme} />}
          {layout === "split" && <WhatYouGetSplit theme={theme} />}
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
