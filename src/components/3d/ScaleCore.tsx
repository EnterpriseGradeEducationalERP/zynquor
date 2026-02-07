"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Html } from '@react-three/drei';
import * as THREE from 'three';

export const ScaleCore = () => {
    const outerRingRef = useRef<THREE.Mesh>(null);
    const innerRingRef = useRef<THREE.Mesh>(null);
    const coreRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (outerRingRef.current) {
            outerRingRef.current.rotation.x = Math.sin(t * 0.2) * 0.5;
            outerRingRef.current.rotation.y = t * 0.1;
        }

        if (innerRingRef.current) {
            innerRingRef.current.rotation.x = Math.cos(t * 0.3) * 0.5;
            innerRingRef.current.rotation.y = -t * 0.2;
        }

        if (coreRef.current) {
            const scale = 1 + Math.sin(t * 2) * 0.05;
            coreRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group scale={1.2}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Core Sphere - bloom-friendly emissive */}
                <Sphere ref={coreRef} args={[0.8, 32, 32]}>
                    <meshStandardMaterial
                        color="#F5731B"
                        emissive="#F5731B"
                        emissiveIntensity={1.2}
                        roughness={0.2}
                        metalness={0.8}
                        toneMapped={false}
                    />
                </Sphere>

                {/* Inner Ring */}
                <Torus ref={innerRingRef} args={[1.4, 0.05, 16, 100]}>
                    <meshStandardMaterial
                        color="#FFFFFF"
                        emissive="#FFFFFF"
                        emissiveIntensity={0.2}
                        roughness={0.1}
                        metalness={0.9}
                    />
                </Torus>

                {/* Outer Ring */}
                <Torus ref={outerRingRef} args={[1.8, 0.02, 16, 100]}>
                    <meshStandardMaterial color="#EA9A2A" roughness={0.1} metalness={0.9} />
                </Torus>

                {/* Floating Particles - glow for bloom */}
                {[...Array(5)].map((_, i) => (
                    <mesh
                        key={i}
                        position={[
                            Math.sin(i * (Math.PI * 2) / 5) * 2.5,
                            Math.cos(i * (Math.PI * 2) / 5) * 2.5,
                            0,
                        ]}
                    >
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshBasicMaterial color="#F5731B" toneMapped={false} />
                    </mesh>
                ))}

                <Html position={[2, 1, 0]} className="pointer-events-none">
                    <div className="bg-black/80 text-white text-[10px] font-mono p-1 border border-primary/50 whitespace-nowrap">
                        [SYSTEM ONLINE]
                    </div>
                </Html>
            </Float>
        </group>
    );
};
