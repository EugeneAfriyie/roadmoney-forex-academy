import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

interface DBackgroundProps {
  activeIndex: number;
}

function BrainModel({ activeIndex }: DBackgroundProps) {
  const { scene } = useGLTF('/assets/brain.glb');
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = activeIndex * 0.1;
    }
  }, [activeIndex]);

  return <primitive ref={modelRef} object={scene} scale={1.5} position={[0, 0, -1]} />;
}

const DBackground: React.FC<DBackgroundProps> = ({ activeIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const handleContextLost = (event: Event) => {
        event.preventDefault();
        console.warn('WebGL context lost in 3DBackground, attempting recovery');
      };
      const handleContextRestored = () => {
        console.log('WebGL context restored in 3DBackground, redrawing');
        if (canvasRef.current) {
          const gl = canvasRef.current.getContext('webgl');
          if (gl) gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }
      };
      canvasRef.current.addEventListener('webglcontextlost', handleContextLost);
      canvasRef.current.addEventListener('webglcontextrestored', handleContextRestored);
      return () => {
        canvasRef.current?.removeEventListener('webglcontextlost', handleContextLost);
        canvasRef.current?.removeEventListener('webglcontextrestored', handleContextRestored);
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 opacity-20">
      <Canvas ref={canvasRef} gl={{ antialias: true }} camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <BrainModel activeIndex={activeIndex} />
          <OrbitControls enableZoom={false} autoRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DBackground;