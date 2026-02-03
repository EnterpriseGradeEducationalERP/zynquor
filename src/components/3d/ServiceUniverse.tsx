"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

export const ServiceUniverse = () => {
    const groupRef = useRef<THREE.Group>(null);

    const nodes = useMemo(() => {
        const items = [];
        for (let i = 0; i < 7; i++) {
            const angle = (i / 7) * Math.PI * 2;
            const radius = 2;
            items.push({
                position: new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * 0.5, Math.sin(angle) * radius),
                color: i % 2 === 0 ? "#F5731B" : "#FFFFFF"
            });
        }
        return items;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <group ref={groupRef} scale={1.2}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Central Hub */}
                <Sphere args={[0.5, 32, 32]}>
                    <meshStandardMaterial color="#F5731B" emissive="#F5731B" emissiveIntensity={0.5} />
                </Sphere>

                {/* Satellite Nodes */}
                {nodes.map((node, i) => (
                    <group key={i} position={node.position}>
                        <Sphere args={[0.15, 16, 16]}>
                            <meshStandardMaterial color={node.color} />
                        </Sphere>
                        {/* Connecting Line */}
                        <Line points={[[0, 0, 0], node.position.clone().negate()]} color="#333" lineWidth={1} transparent opacity={0.3} />
                    </group>
                ))}

                {/* Orbit Path */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[2, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#333" transparent opacity={0.2} />
                </mesh>
            </Float>
        </group>
    );
};
