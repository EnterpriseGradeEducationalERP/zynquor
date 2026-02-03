"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export const AboutHero = () => {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden border-b border-gray-100 -mt-24 pt-32">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                    backgroundSize: "4rem 4rem"
                }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="space-y-8"
                >
                    <motion.div variants={fadeInUp} className="flex items-center gap-2 text-[#F5731B] font-mono text-xs font-bold uppercase tracking-widest">
                        <span className="text-xl">∞</span>
                        <span>Unity Core V4.0</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="font-display font-bold uppercase leading-[0.9]">
                        <span className="block text-6xl md:text-8xl text-black mb-2">About</span>
                        <span className="block text-6xl md:text-8xl text-[#F5731B] mb-6">Zynquor</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-xl leading-relaxed">
                        Experience the architecture of intelligent scale. We build the systems of tomorrow that refuse to break under the pressure of today.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="pt-4">
                        <Link href="#our-story" className="inline-flex items-center gap-2 text-[#F5731B] font-bold uppercase tracking-widest hover:gap-4 transition-all">
                            Explore Our Story <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        {/* Using the image provided by user */}
                        <Image
                            src="/assets/about-hero.png"
                            alt="Abstract organic form representing scalable architecture"
                            width={800}
                            height={800}
                            className="w-full h-auto object-cover"
                        />

                        {/* Floating Status Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 flex justify-between items-center"
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-xs font-bold text-[#F5731B] uppercase tracking-widest">System Status</span>
                                </div>
                                <p className="font-display font-medium text-gray-900">Optimal Performance</p>
                            </div>
                            <div className="text-[#F5731B]">
                                <BarChart3 size={32} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
