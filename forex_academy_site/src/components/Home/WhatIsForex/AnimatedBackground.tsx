// Eugene Afriyie UEB3502023
import { motion } from 'framer-motion';
import { useMemo } from 'react'; // Correct import for useMemo


export default function AnimatedBackground() {
  const positions = useMemo(() => 
    [...Array(5)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    })),
    []
  );

  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] overflow-hidden">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00c896] rounded-full opacity-70"
          initial={{ x: pos.x, y: pos.y }}
          animate={{ y: pos.y + 100, opacity: 0.7 }}
          transition={{ duration: 8 + Math.random() * 5, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}