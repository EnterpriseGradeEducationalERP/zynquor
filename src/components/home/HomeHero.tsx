"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimation, useSpring, useMotionValue, useTransform, Variants } from 'framer-motion';

const Counter = ({ from, to }: { from: number; to: number }) => {
    const count = useSettings(from, to);
    return <span>{count}</span>;
}

// Simple hook for counting up
function useSettings(from: number, to: number) {
    const [count, setCount] = useState(from);

    useEffect(() => {
        const controls = { value: from };
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(from + (to - from) * ease));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [from, to]);

    return count;
}


export const HomeHero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

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
        <section
            className="min-h-[90vh] flex items-center relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F17C27]/20 via-white/5 to-transparent -z-10"></div>

            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Text */}
                <motion.div
                    className="lg:col-span-8 relative z-20 space-y-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center space-x-2 bg-[#F5731B]/10 border border-[#F5731B]/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F5731B] animate-pulse"></div>
                        <span className="text-[#F5731B] font-bold text-xs uppercase tracking-widest">Architecture of Intelligent Scale</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl lg:text-6xl font-display font-bold leading-tight uppercase tracking-tight text-black"
                    >
                        AI Automation, Infrastructure & Talent<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 animate-gradient-x">
                            Solutions for Scalable Businesses
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 dark:text-gray-400 w-full md:w-3/4 border-l-2 border-grid-light dark:border-grid-dark pl-6 leading-relaxed"
                    >
                        ZYNQUOR is an AI-first systems company helping startups, enterprises, and global teams scale without chaos — by unifying automation, cloud infrastructure, and high-performance talent.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Link href="/contact" className="group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative bg-[#F5731B] text-white px-8 py-4 font-display font-bold uppercase tracking-widest flex items-center justify-center shadow-[0_0_20px_rgba(245,115,27,0.3)] hover:shadow-[0_0_30px_rgba(245,115,27,0.5)] transition-all duration-300 text-center text-sm rounded-full overflow-hidden"
                            >
                                <span className="relative z-10">Book a Strategic Consultation</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </motion.div>
                        </Link>
                        <Link href="/services" className="group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative border border-black dark:border-white text-black dark:text-white px-8 py-4 font-display font-bold uppercase tracking-widest flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-center text-sm rounded-full"
                            >
                                <span>Explore Services</span>
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="flex gap-12 pt-12 border-t border-grid-light dark:border-grid-dark opacity-70"
                    >
                        <div>
                            <p className="text-3xl font-display font-bold flex items-center">
                                <Counter from={0} to={98} /><span className="text-[#F5731B] text-lg">%</span>
                            </p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Efficiency Gain</p>
                        </div>
                        <div>
                            <p className="text-3xl font-display font-bold flex items-center">
                                <Counter from={0} to={400} /><span className="text-[#F5731B] text-lg">+</span>
                            </p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Enterprise Nodes</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="lg:col-span-4 relative h-[600px] flex items-center justify-center"
                >
                    {/* Background Mix */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F17C27]/20 to-white/20 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>

                    {/* Rotating Circles */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-[500px] h-[500px] rounded-full border border-[#F17C27] opacity-30 border-dashed"
                        ></motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="w-[600px] h-[600px] rounded-full border-2 border-dotted border-[#F17C27] absolute opacity-30"
                        ></motion.div>
                    </div>

                    <motion.div
                        className="relative w-full h-full flex items-center justify-center"
                        style={{
                            x: useTransform(mouseX, [-0.5, 0.5], [-20, 20]),
                            y: useTransform(mouseY, [-0.5, 0.5], [-20, 20]),
                        }}
                    >
                        <Image
                            src="/assets/hero-image.png"
                            alt="Futuristic 3D Mechanical Core"
                            width={800}
                            height={800}
                            className="object-contain max-h-[120%] z-10 mix-blend-multiply dark:mix-blend-normal drop-shadow-2xl"
                            style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
                        />

                        {/* Floating Elements with Physics-like movement */}
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-1/4 left-0 z-20 flex items-center gap-3"
                        >
                            <div className="w-3 h-3 bg-[#F5731B] rounded-full shadow-[0_0_10px_#F5731B] animate-pulse"></div>
                            <div className="bg-white/90 backdrop-blur-md dark:bg-[#141414]/90 border border-gray-200 dark:border-gray-700 px-4 py-2 text-xs font-mono uppercase shadow-xl rounded-sm">
                                [AI Core: Online]
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [10, -10, 10],
                                rotate: [0, -5, 5, 0]
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="absolute bottom-1/3 right-0 z-20 flex items-center gap-3 flex-row-reverse"
                        >
                            <div className="w-3 h-3 bg-white border-2 border-[#F5731B] rounded-full"></div>
                            <div className="bg-white/90 backdrop-blur-md dark:bg-[#141414]/90 border border-gray-200 dark:border-gray-700 px-4 py-2 text-xs font-mono uppercase shadow-xl rounded-sm">
                                [Infrastructure: Scaled]
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-0 left-0 w-full h-16 border-t border-grid-light dark:border-grid-dark flex items-center justify-between px-12 text-xs font-mono text-gray-400"
            >
                <span className="hidden lg:block">[SCROLL TO EXPLORE]</span>
                <div className="flex gap-8">
                    <span>LAT: 34.0522 N</span>
                    <span>LON: 118.2437 W</span>
                </div>
            </motion.div>
        </section>
    );
};
