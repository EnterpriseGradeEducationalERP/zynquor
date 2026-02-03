"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Loader } from '@react-three/drei';

interface ThreeCanvasProps {
    children: React.ReactNode;
    className?: string;
    cameraPosition?: [number, number, number];
}

export const ThreeCanvas = ({ children, className = "w-full h-full", cameraPosition = [0, 0, 5] }: ThreeCanvasProps) => {
    return (
        <div className={className}>
            <Canvas
                camera={{ position: cameraPosition, fov: 45 }}
                dpr={[1, 2]} // Handle high DPI screens
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    {children}
                    {/* Default Lighting */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                </Suspense>
            </Canvas>
            <Loader
                dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
                containerStyles={{ background: 'transparent' }}
                barStyles={{ background: '#F5731B' }}
                dataStyles={{ color: '#F5731B', fontFamily: 'Space Grotesk' }}
            />
        </div>
    );
};
