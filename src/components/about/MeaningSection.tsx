"use client";

import React from 'react';
import { motion } from 'framer-motion';
import GlareHover from '../ui/GlareHover';

export const MeaningSection = () => {
    return (
        <section className="relative py-32 bg-surface-light dark:bg-surface-dark overflow-hidden">
            {/* Background Decor - Subtle Grid & Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-[#050505] -z-10" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-mono text-primary mb-4 block uppercase tracking-[0.2em]">[ The Etymology ]</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white" style={{ color: 'black' }}>
                        Decoding <span className="text-primary">ZYNQUOR</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* ZYN Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="h-full"
                        >
                            <GlareHover
                                width="100%"
                                height="100%"
                                background="transparent"
                                borderRadius="12px"
                                glareColor="#F5731B"
                                glareOpacity={0.2}
                                glareAngle={-30}
                                playOnce={false}
                                className="group relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full p-10 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-300">
                                    <div className="absolute top-0 right-0 p-6 opacity-10">
                                        <span className="text-9xl font-display font-bold text-gray-900 dark:text-white">Z</span>
                                    </div>

                                    <h3 className="text-7xl md:text-8xl font-display font-bold text-gray-900 dark:text-white mb-4 relative z-10">ZYN</h3>
                                    <div className="h-1.5 w-16 bg-primary mb-8 rounded-full" />

                                    <div className="space-y-2 mb-6">
                                        <p className="text-xs font-mono text-primary uppercase tracking-widest font-bold">Root: Syzygy / Synchronization</p>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed font-medium mb-8">
                                        Represents <strong className="text-gray-900 dark:text-white border-b-2 border-primary/20">connection</strong>. The intelligent weaving together of disparate elements into a unified, functioning whole.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {['Intelligence', 'Cognition', 'Foresight'].map((tag, i) => (
                                            <span key={i} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800/50 text-sm font-semibold rounded-md text-gray-700 dark:text-gray-300 border border-transparent hover:border-primary/30 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlareHover>
                        </motion.div>
                    </motion.div>

                    {/* Divider / Connector */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="hidden lg:flex flex-col items-center justify-center pt-20"
                    >
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-black border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center shadow-lg z-20">
                            <span className="text-3xl text-gray-400 font-light">+</span>
                        </div>
                    </motion.div>

                    {/* QUOR Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex-1"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} // Stagger float
                            className="h-full"
                        >
                            <GlareHover
                                width="100%"
                                height="100%"
                                background="transparent"
                                borderRadius="12px"
                                glareColor="#3B82F6"
                                glareOpacity={0.2}
                                glareAngle={-30}
                                playOnce={false}
                                className="group relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-bl from-blue-500/30 to-transparent rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full p-10 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300">
                                    <div className="absolute top-0 right-0 p-6 opacity-10">
                                        <span className="text-9xl font-display font-bold text-gray-900 dark:text-white">Q</span>
                                    </div>

                                    <h3 className="text-7xl md:text-8xl font-display font-bold text-gray-900 dark:text-white mb-4 relative z-10">QUOR</h3>
                                    <div className="h-1.5 w-16 bg-blue-500 mb-8 rounded-full" />

                                    <div className="space-y-2 mb-6">
                                        <p className="text-xs font-mono text-blue-500 uppercase tracking-widest font-bold">Root: Quorum / Core</p>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed font-medium mb-8">
                                        Represents <strong className="text-gray-900 dark:text-white border-b-2 border-blue-500/20">structure</strong>. The foundational agreement and stability required for systems to operate at scale.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {['Alignment', 'Structure', 'Quorum'].map((tag, i) => (
                                            <span key={i} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800/50 text-sm font-semibold rounded-md text-gray-700 dark:text-gray-300 border border-transparent hover:border-blue-500/30 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlareHover>
                        </motion.div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
};
