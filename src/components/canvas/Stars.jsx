import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

// NOTE: The crashing import for 'maath/random' is completely removed from this file.

const Stars = (props) => {
  const ref = useRef();
  
  // FIX: Stable geometry creation using simple JavaScript Math.random()
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const radius = 1.2;
    for (let i = 0; i < 5000 * 3; i++) {
      // Guaranteed non-NaN position generation
      positions[i] = (Math.random() - 0.5) * radius * 2;
    }
    return positions;
  }, []); 

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}> 
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;