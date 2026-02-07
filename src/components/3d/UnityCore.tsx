"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Torus, Cone } from '@react-three/drei';
import * as THREE from 'three';

export const UnityCore = () => {
    const ring1 = useRef<THREE.Mesh>(null);
    const ring2 = useRef<THREE.Mesh>(null);
    const arrow = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ring1.current) {
            ring1.current.rotation.x = t * 0.2;
            ring1.current.rotation.y = t * 0.1;
        }
        if (ring2.current) {
            ring2.current.rotation.x = t * 0.25;
            ring2.current.rotation.y = -t * 0.15;
            ring2.current.rotation.z = Math.sin(t) * 0.2;
        }
        if (arrow.current) {
            arrow.current.position.y = Math.sin(t * 2) * 0.1;
        }
    });

    return (
        <group scale={1.3}>
            <Float floatIntensity={1} rotationIntensity={0.5}>
                {/* Ring 1 - ZYN (Intelligence) */}
                <Torus ref={ring1} args={[1.5, 0.08, 16, 100]}>
                    <meshStandardMaterial
                        color="#FFFFFF"
                        emissive="#FFFFFF"
                        emissiveIntensity={0.15}
                        metalness={0.8}
                        roughness={0.1}
                    />
                </Torus>

                {/* Ring 2 - QUOR (Structure) */}
                <Torus ref={ring2} args={[1.2, 0.08, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#222" metalness={0.6} roughness={0.4} />
                </Torus>

                {/* Growth Arrow Center - emissive pulse for bloom */}
                <group ref={arrow} position={[0, 0, 0]}>
                    <Cone args={[0.4, 1, 4]}>
                        <meshStandardMaterial
                            color="#F5731B"
                            emissive="#F5731B"
                            emissiveIntensity={1.2}
                            toneMapped={false}
                        />
                    </Cone>
                </group>
            </Float>
        </group>
    );
};
