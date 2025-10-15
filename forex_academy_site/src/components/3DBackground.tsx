import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function BrainModel() {
  const { scene, error } = useGLTF('/assets/brain.glb'); // Path to brain GLTF model
  const modelRef = useRef();

  if (error) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00c896" />
      </mesh>
    );
  }

  return <primitive ref={modelRef} object={scene} scale={3} position={[0, 0, -1]} />;
}

export default function DBackground() {
  return (
    <div className="absolute inset-0 opacity-20">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <BrainModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}