"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const ServicesHero = () => {
    return (
        <section
            className="relative min-h-[90vh] flex flex-col justify-center border-b border-grid-light dark:border-grid-dark overflow-hidden"
            style={{
                backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
                backgroundSize: "24px 24px"
            }}
        >
            {/* Background Grid & Lines */}
            <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
                <div className="col-span-3 border-r border-grid-light dark:border-grid-dark h-full opacity-50"></div>
                <div className="col-span-6 border-r border-grid-light dark:border-grid-dark h-full opacity-50"></div>
                <div className="col-span-3 h-full"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 h-full py-24">
                {/* Left Column: Content */}
                <div className="flex flex-col items-start text-left">
                    <div className="mb-4">
                        <span className="inline-block py-1 px-3 border border-primary/50 text-primary font-mono text-[10px] uppercase tracking-[0.2em] rounded-full mb-6 bg-primary/5 backdrop-blur-sm">
                            [ Service Orbit Universe ]
                        </span>
                    </div>

                    <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-8 uppercase mix-blend-difference dark:mix-blend-normal text-gray-900 dark:text-white">
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px black' }}>SYSTEMS</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                            INTELLIGENCE
                        </span>
                    </h1>

                    <p className="max-w-xl text-gray-600 dark:text-gray-400 font-sans text-lg leading-relaxed mb-12">
                        Orchestrating the digital future with modular 3D infrastructure and AI-driven service layers. Explore the universe of capabilities.
                    </p>
                </div>

                {/* Right Column: Orbit Visualization */}
                <div className="relative w-full h-[500px] flex justify-center items-center">
                    <div className="absolute inset-0 flex justify-center items-center">
                        {/* Outer Orbit */}
                        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-gray-200 dark:border-white/10 animate-[spin_30s_linear_infinite] opacity-40">
                            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(255,90,54,0.8)]"></div>
                        </div>
                        {/* Middle Orbit (Reverse) */}
                        <div className="absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] border border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite_reverse]">
                            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-gray-900 dark:bg-white rounded-full -translate-x-1/2 translate-y-1.5 shadow-lg"></div>
                        </div>
                        {/* Inner Orbit */}
                        <div className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] border border-gray-200 dark:border-white/10 rounded-full animate-[spin_15s_linear_infinite] opacity-60"></div>
                    </div>

                    {/* Central Core */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-40 h-40 md:w-56 md:h-56 bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden shadow-2xl z-10 group cursor-pointer transition-transform duration-500 rounded-2xl"
                        style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
                    >
                        <img
                            alt="3D Core Visual"
                            className="w-full h-full object-cover mix-blend-overlay opacity-80"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7NqdZt4GbaVKKm6atw7G29-qe2gakghIpaRPlk1px5HuRyWWai75TFZZL44ZtqVYYVLi0XcBDi5dM9DbZW_Mfz0uB1Y-yxAmNc8E8yIU3TpcagKIwgiTrpRmDeDCOT9xbpbwJfmeUosRv0Bd5vXqNpFMFG8LgxsP_oqxEP5OrVcLGTKY1y0u2CaK7w7AUimfY0n83ke2bh5jYKDazvLIEFCVIZRUhUAeMyxojr3g6PSnAl5URHDbg0DUhwaOtEDkiw5kHYQxw6Cw2"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                            <span className="font-mono text-white text-xs tracking-widest uppercase border-b border-primary pb-1">Enter Core</span>
                        </div>
                        <span className="absolute bottom-3 right-3 font-mono text-[10px] text-primary tracking-widest">[01_CORE]</span>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-8 right-8 flex items-center space-x-4">
                <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400 tracking-widest uppercase">Scroll to Explore</span>
                <div className="h-8 w-[1px] bg-primary"></div>
            </div>
        </section>
    );
};
