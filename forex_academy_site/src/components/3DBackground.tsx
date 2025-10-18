import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface DBackgroundProps {
  activeIndex: number;
}

function BrainModel({ activeIndex }: DBackgroundProps) {
  const { scene } = useGLTF('/assets/brain.glb'); // Ensure brain.glb exists
  const modelRef = useRef<THREE.Group>(null);

  // Rotate model based on activeIndex
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = activeIndex * 0.1; // Smooth rotation based on activeIndex
    }
  }, [activeIndex]);

  return <primitive ref={modelRef} object={scene} scale={2} position={[0, 0, -1]} />; // Reduced scale for performance
}

const DBackground: React.FC<DBackgroundProps> = ({ activeIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Handle WebGL context loss
  useEffect(() => {
    if (canvasRef.current) {
      const handleContextLost = (event: Event) => {
        event.preventDefault();
        console.warn('WebGL context lost in 3DBackground');
      };
      const handleContextRestored = () => {
        console.log('WebGL context restored in 3DBackground');
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
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <BrainModel activeIndex={activeIndex} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> {/* Reduced speed */}
      </Canvas>
    </div>
  );
};

export default DBackground;