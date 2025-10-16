// Eugene Afriyie UEB3502023
// WhyForex.tsx
import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Clock, DollarSign, Globe } from 'lucide-react';
import SectionHeader from '../QuoteCard/SectionHeader'; // adjust path if needed
import { ThemeContext } from '../../../context/ThemeContext';

/**
 * AnimatedChartCanvas
 * - Pure-code canvas animation that draws a subtle trading grid + moving "price" line and occasional bars.
 * - Theme-aware colors via `theme` prop.
 * - Pauses when not visible (IntersectionObserver) to save CPU.
 */
const AnimatedChartCanvas: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const gridColor = theme === 'dark' ? 'rgba(0,255,204,0.06)' : 'rgba(0,120,255,0.06)';
    const axisColor = theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
    const lineColor = theme === 'dark' ? 'rgba(0,255,204,0.85)' : 'rgba(0,120,255,0.95)';
    const barUp = theme === 'dark' ? 'rgba(0,200,150,0.9)' : 'rgba(0,120,255,0.95)';
    const barDown = theme === 'dark' ? 'rgba(255,80,100,0.9)' : 'rgba(255,80,100,0.9)';

    let t = 0;
    let points: number[] = []; // normalized -1..1 baseline points

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.max(300, Math.floor(width * devicePixelRatio));
      canvas.height = Math.max(150, Math.floor(height * devicePixelRatio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    function initPoints() {
      points = [];
      const count = Math.max(40, Math.floor(width / 30));
      for (let i = 0; i < count; i++) points.push(Math.sin(i * 0.6) * (Math.random() * 0.6 + 0.2));
    }

    function drawGrid() {
      ctx.clearRect(0, 0, width, height);
      // vertical & horizontal grid lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = gridColor;
      const stepX = Math.max(40, width / 12);
      for (let x = 0; x < width; x += stepX) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
        ctx.stroke();
      }
      const stepY = Math.max(24, height / 8);
      for (let y = 0; y < height; y += stepY) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
      }
      // center axis
      ctx.strokeStyle = axisColor;
      ctx.beginPath();
      ctx.moveTo(0, height / 2 + 0.5);
      ctx.lineTo(width, height / 2 + 0.5);
      ctx.stroke();
    }

    function drawLineAndBars() {
      if (!points.length) return;
      const margin = 20;
      const usableW = width - margin * 2;
      const usableH = height - margin * 2;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      // update points to simulate movement
      for (let i = 0; i < points.length; i++) {
        const noise = Math.sin((t + i) * 0.12) * 0.02 + (Math.random() - 0.5) * 0.01;
        points[i] = points[i] * 0.995 + noise;
      }

      // draw bars occasionally
      const barCount = Math.min(6, Math.floor(points.length / 6));
      for (let b = 0; b < barCount; b++) {
        const i = Math.floor((t * 0.2 + b * 7) % points.length);
        const px = margin + (i / (points.length - 1)) * usableW;
        const barHeight = (Math.abs(points[i]) * usableH) / 2 + Math.random() * 10;
        const up = Math.random() > 0.3;
        ctx.fillStyle = up ? barUp : barDown;
        ctx.globalAlpha = 0.14;
        ctx.fillRect(px - 6, height / 2 - (up ? barHeight : 0), 12, up ? barHeight : barHeight);
        ctx.globalAlpha = 1;
      }

      // draw smooth polyline
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const x = margin + (i / (points.length - 1)) * usableW;
        const y = height / 2 - points[i] * usableH / 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      // gradient stroke
      const grad = ctx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, 'rgba(255,255,255,0.06)');
      grad.addColorStop(0.2, lineColor);
      grad.addColorStop(1, 'rgba(255,255,255,0.06)');
      ctx.strokeStyle = grad;
      ctx.stroke();

      // glow overlay
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const x = margin + (i / (points.length - 1)) * usableW;
        const y = height / 2 - points[i] * usableH / 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineWidth = 6;
      ctx.strokeStyle = lineColor;
      ctx.globalAlpha = 0.06;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    function step() {
      if (!isVisible) return;
      t += 1;
      drawGrid();
      drawLineAndBars();
      rafRef.current = window.requestAnimationFrame(step);
    }

    // intersection observer to set isVisible
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(canvas);

    // init
    resize();
    initPoints();
    window.addEventListener('resize', () => {
      resize();
      initPoints();
    });

    // start loop
    rafRef.current = window.requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      obs.disconnect();
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, isVisible]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      role="img"
    />
  );
};

/**
 * WhyForex component
 * - main content with animated canvas background
 */
const WhyForex: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const bgClass =
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#0b0f19] via-[#0f1520] to-[#0b0f19]'
      : 'bg-gradient-to-b from-[#f8f9fb] via-[#eef1f6] to-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-[#ffffffcc]' : 'text-[#0b0f0f]';

  // reasons content
  const reasons = [
    {
      title: 'Flexible Work Schedule',
      description:
        'Trade anytime with the 24/5 Forex market, giving you control over your time unlike traditional 9-to-5 jobs.',
      icon: <Clock size={20} className="text-[#00c896] dark:text-[#00ffcc] mr-3 flex-shrink-0" />,
    },
    {
      title: 'Unlimited Earning Potential',
      description:
        'Forex offers significant returns through leveraged positions and skillful trading, offering growth beyond fixed salaries.',
      icon: (
        <DollarSign size={20} className="text-[#00c896] dark:text-[#00ffcc] mr-3 flex-shrink-0" />
      ),
    },
    {
      title: 'Global Accessibility',
      description:
        'Access the global market from anywhere with an internet connection — trade on your schedule from any location.',
      icon: <Globe size={20} className="text-[#00c896] dark:text-[#00ffcc] mr-3 flex-shrink-0" />,
    },
  ];

  return (
    <section
      id="why-forex"
      aria-labelledby="why-forex-heading"
      className={`relative py-20 overflow-hidden ${bgClass} ${textClass} font-montserrat transition-colors duration-500`}
    >
      {/* Animated canvas background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatedChartCanvas theme={theme as 'dark' | 'light'} />
        {/* soft overlay to unify color tone */}
        <motion.div
          style={{ translateY }}
          className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/10' : 'bg-white/6'} mix-blend-overlay`}
          aria-hidden
        />
      </div>

      {/* Floating accent blob */}
      <motion.div
        aria-hidden
        className="absolute bottom-[-18%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-18"
        animate={{
          x: ['0%', '-18%', '10%', '0%'],
          y: ['0%', '-8%', '12%', '0%'],
          scale: [1, 1.06, 1.02, 1],
          rotate: [0, -30, 24, 0],
        }}
        transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(135deg, rgba(0,255,204,0.16), rgba(0,200,150,0.10))'
              : 'linear-gradient(135deg, rgba(0,200,150,0.12), rgba(60,150,255,0.08))',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 z-10">
        <SectionHeader title="Why Forex? Why Now?" id="why-forex-heading" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className={`text-base sm:text-lg text-center max-w-3xl mx-auto mb-10 ${textClass}`}
        >
          Forex trading is more than price charts — it’s a global system of opportunity. Here are three
          reasons traders choose forex as their path to financial independence.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Animated visual (canvas already covers background — show floating card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-transparent"
          >
            {/* A semi-foreground "live snapshot" card to make it look active */}
            <div className="absolute inset-6 rounded-xl bg-gradient-to-b from-black/25 to-transparent backdrop-blur-md border border-white/6 z-20 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/80">Live Market Snapshot</p>
                  <h4 className="text-lg font-bold text-white">EUR / USD</h4>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#00c896]">+0.34%</p>
                  <p className="text-xs text-white/70">1.0895</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-white/70">Session: London</div>
                <button
                  className="px-3 py-1 rounded-full bg-[#00c896] text-black font-semibold text-sm hover:brightness-95 transition"
                  aria-label="View live trades"
                >
                  View Trades
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#00c896] dark:text-[#00ffcc] mb-4">
              Forex: A Career Like No Other
            </h3>
            <p className="text-sm sm:text-base mb-6">
              Forex lets you trade global currencies, scale risk, and build a repeatable edge. It’s not
              about luck — it’s about systems, discipline, and consistency.
            </p>

            <ul className="space-y-6 mb-6">
              {reasons.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg"
                    aria-hidden
                    style={{
                      background: theme === 'dark' ? 'rgba(0,255,204,0.06)' : 'rgba(0,200,150,0.06)',
                    }}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-[#00c896] dark:text-[#00ffcc]">
                      {r.title}
                    </h4>
                    <p className="text-sm">{r.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="/mentorship"
              role="button"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#00c896] to-[#00ffcc] text-black font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#00c896]"
              aria-label="Start your forex journey"
            >
              Start Your Forex Journey
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyForex;
