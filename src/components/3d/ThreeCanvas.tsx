"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Loader, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

interface ThreeCanvasProps {
    children: React.ReactNode;
    className?: string;
    cameraPosition?: [number, number, number];
    enableOrbit?: boolean;
    enableBloom?: boolean;
}

export const ThreeCanvas = ({
    children,
    className = "w-full h-full",
    cameraPosition = [0, 0, 5],
    enableOrbit = true,
    enableBloom = true,
}: ThreeCanvasProps) => {
    return (
        <div className={className}>
            <Canvas
                camera={{ position: cameraPosition, fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            >
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-5, 5, 5]} intensity={0.5} color="#F5731B" />
                    {children}
                    {enableOrbit && (
                        <OrbitControls
                            enableZoom={true}
                            enablePan={false}
                            minPolarAngle={Math.PI / 4}
                            maxPolarAngle={Math.PI / 2}
                            autoRotate
                            autoRotateSpeed={0.5}
                        />
                    )}
                    {enableBloom && (
                        <EffectComposer>
                            <Bloom
                                luminanceThreshold={0.4}
                                luminanceSmoothing={0.9}
                                intensity={0.8}
                                mipmapBlur
                            />
                        </EffectComposer>
                    )}
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
