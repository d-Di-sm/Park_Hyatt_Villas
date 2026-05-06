import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function GoldRing({ radius = 2, tube = 0.02, rotation = [0, 0, 0], speed = 0.2 }) {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * 0.3;
      ref.current.rotation.y += delta * speed;
    }
  });
  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 32, 200]} />
      <meshStandardMaterial
        color="#c9a96e"
        emissive="#c9a96e"
        emissiveIntensity={0.6}
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  );
}

function FloatingOrb() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.45, 64, 64]} />
      <meshStandardMaterial
        color="#0a0908"
        emissive="#c9a96e"
        emissiveIntensity={0.25}
        metalness={1}
        roughness={0.15}
      />
    </mesh>
  );
}

function GroundReflection() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        color="#0a0908"
        metalness={0.6}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function Scene() {
  const lightTarget = useMemo(() => new THREE.Object3D(), []);

  return (
    <>
      <color attach="background" args={['#0a0908']} />
      <fog attach="fog" args={['#0a0908', 8, 22]} />

      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 6, 4]} intensity={0.9} color="#e0c48a" />
      <pointLight position={[-3, 2, -2]} intensity={1.4} color="#c9a96e" distance={10} />
      <primitive object={lightTarget} />

      <GroundReflection />

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <FloatingOrb />
      </Float>

      <GoldRing radius={1.2} tube={0.012} rotation={[0.4, 0, 0]} speed={0.25} />
      <GoldRing radius={1.55} tube={0.01} rotation={[-0.2, 0.6, 0]} speed={-0.18} />
      <GoldRing radius={1.9} tube={0.008} rotation={[0.8, -0.3, 0.2]} speed={0.12} />

      <Sparkles
        count={80}
        scale={[6, 4, 6]}
        size={2}
        speed={0.3}
        opacity={0.7}
        color="#c9a96e"
      />
    </>
  );
}
