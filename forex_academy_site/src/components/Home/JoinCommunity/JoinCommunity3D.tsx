// Eugene Afriyie UEB3502023
import React, { Suspense, useContext, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import { motion } from "framer-motion";
import CommunityModal from "./CommunityModal";
import { ThemeContext } from "../../../context/ThemeContext";
import { Instagram, Facebook, Twitter, Send } from "lucide-react";

function SimpleGlobe({ theme }: { theme: "dark" | "light" }) {
  const ref = useRef<any>();
  const pulse = useRef(0);

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08;
    pulse.current = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.9;
  });

  const baseColor = theme === "dark" ? "#07070a" : "#e8f9ff";
  const glowColor = theme === "dark" ? "#ffb347" : "#ff9500";

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color={baseColor}
          metalness={0.4}
          roughness={0.4}
          emissive={glowColor}
          emissiveIntensity={0.1}
        />
      </mesh>

      <mesh scale={[1.03, 1.03, 1.03]}>
        <sphereGeometry args={[1.03, 64, 64]} />
        <meshStandardMaterial
          color={glowColor}
          transparent
          opacity={0.05}
          emissive={glowColor}
          emissiveIntensity={pulse.current}
        />
      </mesh>
    </group>
  );
}

function FloatingText() {
  const textRef = useRef<any>();
  useFrame((state) => {
    if (textRef.current)
      textRef.current.rotation.y = state.clock.elapsedTime * 0.5;
  });
  return (
    <Text
      ref={textRef}
      fontSize={0.25}
      color="#ffb347"
      position={[0, 0, 1.6]}
      rotation={[0, 0, 0]}
    >
      RoadToMoney Academy
    </Text>
  );
}

export default function JoinCommunity3D() {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { name: "Telegram", href: "https://t.me/yourchannel", icon: <Send /> },
      { name: "Instagram", href: "https://instagram.com/yourpage", icon: <Instagram /> },
      { name: "Facebook", href: "https://facebook.com/yourpage", icon: <Facebook /> },
      { name: "Twitter (X)", href: "https://x.com/yourpage", icon: <Twitter /> },
    ],
    []
  );

  return (
    <section
      className={`relative py-24 transition-colors duration-700 ${
        theme === "dark"
          ? "bg-[#050507] text-slate-100"
          : "bg-[#f9fafb] text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl p-8 bg-gradient-to-br from-[#07070a] to-transparent border border-[#ffb347]/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Text Section */}
            <div>
              <motion.h2
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-[#ffb347]"
              >
                Join Our Community
              </motion.h2>
              <motion.p
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 }}
                className="mt-3 text-slate-300"
              >
                Connect with traders worldwide. Share strategies, learn, and grow together.
              </motion.p>

              <div className="mt-6 flex flex-wrap gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/20 border border-white/6 text-white/90 hover:text-[#ffb347] transition"
                  >
                    <span className="w-6 h-6 flex items-center justify-center text-[#ffb347]">
                      {l.icon}
                    </span>
                    <span className="text-sm">{l.name}</span>
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setOpen(true)}
                  className="px-5 py-3 rounded-full bg-[#ffb347] text-black font-semibold hover:scale-105 transition-transform"
                >
                  Join Community
                </button>
              </div>
            </div>

            {/* 3D Globe */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden bg-black/30 border border-[#ffb347]/10">
              <Canvas camera={{ position: [0, 0, 3.2] }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <Suspense fallback={null}>
                  <SimpleGlobe theme={theme as "dark" | "light"} />
                  <FloatingText />
                  <Stars radius={40} depth={50} count={250} factor={3} fade />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
            </div>
          </div>
        </div>
      </div>

      <CommunityModal open={open} onClose={() => setOpen(false)} links={links} />
    </section>
  );
}
