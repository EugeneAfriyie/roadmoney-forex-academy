// AnimatedBackground.tsx
// Eugene Afriyie UEB3502023
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00c896] rounded-full opacity-70"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
