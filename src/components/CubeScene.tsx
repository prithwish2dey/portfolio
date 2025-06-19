// import { Canvas, useFrame } from '@react-three/fiber';
// import { useRef, useEffect, useState } from 'react';

// function RotatingCube({ position, size }: { position: [number, number, number]; size: number }) {
//   const cubeRef = useRef(null);

//   useFrame(() => {
//     if (cubeRef.current) {
//       cubeRef.current.rotation.y += 0.01;
//       cubeRef.current.rotation.x += 0.005;
//     }
//   });

//   return (
//     <mesh ref={cubeRef} position={position}>
//       <boxGeometry args={[size, size, size]} />
//       <meshStandardMaterial
//         color="#00FFFF"
//         transparent
//         opacity={0.25}
//         metalness={0.6}
//         roughness={0.1}
//         emissive="#00ffff"
//         emissiveIntensity={0.4}
//       />
//     </mesh>
//   );
// }

// export default function CubeScene() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(max-width: 768px)');
//     const handleResize = () => setIsMobile(mediaQuery.matches);

//     handleResize(); // run on mount
//     mediaQuery.addEventListener('change', handleResize);

//     return () => {
//       mediaQuery.removeEventListener('change', handleResize);
//     };
//   }, []);

//   const cubePosition: [number, number, number] = isMobile ? [0.1, , 0] : [1.8, 0.4, 0];
//   const cubeSize = isMobile ? 2.0 : 2.5;

//   return (
//     <Canvas
//       camera={{ position: [0, 1.5, 6], fov: 60 }}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       <ambientLight intensity={0.6} />
//       <pointLight position={[4, 4, 4]} intensity={1.2} />
//       <RotatingCube position={cubePosition} size={cubeSize} />
//     </Canvas>
//   );
// }






import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import { Edges } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCube({ position, size }: { position: [number, number, number]; size: number }) {
  const cubeRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01;
      cubeRef.current.rotation.x += 0.005;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= 0.005;
    }
  });

  return (
    <group position={position}>
      {/* Main cube */}
      <mesh ref={cubeRef}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color="#00FFFF"
          transparent
          opacity={0.15}
          metalness={0.5}
          roughness={0.2}
          emissive="#00FFFF"
          emissiveIntensity={0.6}
        />
        <Edges scale={1.01} color="#00FFFF" />
      </mesh>

      {/* Glow cube */}
      <mesh ref={glowRef} scale={1.12}>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial
          color="#00FFFF"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function CubeScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // run on mount
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const cubePosition: [number, number, number] = isMobile ? [0.1, -2, 0] : [1.8, 0.4, 0];
  const cubeSize = isMobile ? 2.0 : 2.5;

  return (
    <Canvas
      camera={{ position: [0, 1.5, 6], fov: 60 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={1} />
      <RotatingCube position={cubePosition} size={cubeSize} />
    </Canvas>
  );
}
