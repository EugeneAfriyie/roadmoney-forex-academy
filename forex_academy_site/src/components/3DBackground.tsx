// 3DBackground.tsx
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

interface DBackgroundProps {
  activeIndex: number;
}

function BrainModel({ activeIndex }: DBackgroundProps) {
  const { scene } = useGLTF('/assets/brain.glb'); // Path to brain GLTF model
  const modelRef = useRef<THREE.Group>(null);

  // Example: Use activeIndex to adjust model behavior (e.g., rotation speed)
  // You can implement logic here, e.g., change material opacity or rotation
  // For now, log to confirm prop is received
  console.log('Active Index:', activeIndex);

  return <primitive ref={modelRef} object={scene} scale={3} position={[0, 0, -1]} />;
}

const DBackground: React.FC<DBackgroundProps> = ({ activeIndex }) => {
  return (
    <div className="absolute inset-0 opacity-20">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <BrainModel activeIndex={activeIndex} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default DBackground;