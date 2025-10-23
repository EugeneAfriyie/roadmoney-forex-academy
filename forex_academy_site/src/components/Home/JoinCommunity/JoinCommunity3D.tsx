// Eugene Afriyie UEB3502023
import { Suspense, useContext, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CommunityModal from "./CommunityModal";
import { ThemeContext } from "../../../context/ThemeContext";
import { Instagram, Facebook, Twitter, Send } from "lucide-react";

// Core rotating globe
function SimpleGlobe() {
  const ref = useRef<any>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08;
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0b0f19"
          metalness={0.2}
          roughness={0.6}
          emissive="#00ffcc"
          emissiveIntensity={0.15}
        />
      </mesh>

      <mesh scale={[1.03, 1.03, 1.03]}>
        <sphereGeometry args={[1.03, 64, 64]} />
        <meshStandardMaterial
          color="#00ffcc"
          transparent
          opacity={0.05}
          emissive="#00ffcc"
          emissiveIntensity={0.3}
        />
      </mesh>

      <OrbitingText />
    </group>
  );
}

// Orbiting text around globe
function OrbitingText() {
  const ref = useRef<any>(null);
  const words = ["R", "O", "A", "D", "T", "O", "M", "O", "N", "E", "Y", "A", "C", "A", "D", "E", "M", "Y"];
  const radius = 2.3;

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1;
    if (ref.current) ref.current.rotation.y = t;
  });

  return (
    <group ref={ref}>
      {words.map((word, i) => {
        const angle = (i / words.length) * Math.PI * 2;
        return (
          <Text
            key={i}
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
            rotation={[0, -angle, 0]}
            fontSize={0.25}
            color="#00ffcc"
            anchorX="center"
            anchorY="middle"
          >
            {word}
          </Text>
        );
      })}
    </group>
  );
}

export default function JoinCommunity3D() {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  // Links memoized to avoid unnecessary re-renders
  const links = useMemo(
    () => [
      { name: "Telegram", href: "https://t.me/yourchannel", icon: <Send /> },
      { name: "Instagram", href: "https://instagram.com/yourpage", icon: <Instagram /> },
      { name: "Facebook", href: "https://facebook.com/yourpage", icon: <Facebook /> },
      { name: "Twitter (X)", href: "https://x.com/yourpage", icon: <Twitter /> },
    ],
    []
  );

  // Keep hooks always executed, hide content if theme !== dark
  const isDark = theme === "dark";

  return (
    <section
      ref={ref}
      className={`relative py-20 overflow-hidden font-montserrat ${
        isDark ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-[#ffffffcc]" : "hidden"
      }`}
      id="community"
    >
      {isDark && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="rounded-3xl border border-[#00ffcc]/20 p-8 shadow-[0_0_40px_-10px_#00ffcc40]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Text */}
              <div>
                <motion.h2
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-4xl font-bold text-[#00ffcc]"
                >
                  Join Our Community
                </motion.h2>

                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-[#ffffffcc]"
                >
                  Connect with thousands of traders worldwide. Share insights, learn proven strategies,
                  and grow within a supportive network.
                </motion.p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#121826] border border-[#00ffcc40] text-[#ffffffcc] hover:bg-[#00ffcc20] transition-all"
                    >
                      <span className="w-6 h-6 flex items-center justify-center text-[#00ffcc]">{l.icon}</span>
                      <span className="text-sm">{l.name}</span>
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="mt-6 px-6 py-3 rounded-full bg-[#00ffcc] text-[#0b0f19] font-semibold hover:bg-[#00e6b3] transition-colors"
                >
                  Join Community
                </button>
              </div>

              {/* Right Globe */}
              <div className="relative w-full h-[350px] sm:h-[420px] rounded-2xl overflow-hidden bg-[#0b0f19]/60">
                {inView && (
                  <Canvas camera={{ position: [0, 0, 3.2] }}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[4, 4, 4]} intensity={1} />
                    <Suspense fallback={null}>
                      <SimpleGlobe />
                      <Stars radius={40} depth={60} count={300} factor={4} fade />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
                  </Canvas>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <CommunityModal open={open} onClose={() => setOpen(false)} links={links} />
    </section>
  );
}
