"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Line } from "@react-three/drei";
import * as THREE from "three";

export const Hero3DScene = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const particles = useMemo(() => {
    return [...Array(12)].map((_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 1.8 + Math.random() * 0.4;
      return {
        position: new THREE.Vector3(
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 0.6,
          Math.sin(angle) * radius
        ),
      };
    });
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.2;
      ringRef.current.rotation.z = Math.sin(t * 0.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={1.4}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        {/* Central core */}
        <Sphere args={[0.45, 32, 32]}>
          <meshStandardMaterial
            color="#F5731B"
            emissive="#F5731B"
            emissiveIntensity={1.2}
            toneMapped={false}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>

        {/* Orbital ring */}
        <Torus ref={ringRef} args={[1.2, 0.03, 16, 80]}>
          <meshStandardMaterial
            color="#F5731B"
            emissive="#F5731B"
            emissiveIntensity={0.6}
            toneMapped={false}
          />
        </Torus>

        {/* Satellite particles with connecting lines */}
        {particles.map((p, i) => (
          <group key={i} position={p.position}>
            <Sphere args={[0.06, 12, 12]}>
              <meshStandardMaterial
                color={i % 3 === 0 ? "#F5731B" : "#ffffff"}
                emissive={i % 3 === 0 ? "#F5731B" : "#888"}
                emissiveIntensity={i % 3 === 0 ? 0.8 : 0.2}
                toneMapped={false}
              />
            </Sphere>
            <Line
              points={[[0, 0, 0], p.position.clone().negate()]}
              color="#F5731B"
              lineWidth={0.5}
              transparent
              opacity={0.25}
            />
          </group>
        ))}

        {/* Inner glow ring */}
        <Torus args={[0.9, 0.02, 16, 60]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial
            color="#F5731B"
            transparent
            opacity={0.4}
          />
        </Torus>
      </Float>
    </group>
  );
};
