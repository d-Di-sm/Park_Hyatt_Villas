import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Scene from './Scene.jsx';

export default function CanvasExperience() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: false }}
      style={{ display: 'block' }}
    >
      <PerspectiveCamera makeDefault position={[0, 0.6, 4.5]} fov={45} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.06}
        autoRotate
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.9}
      />
    </Canvas>
  );
}
