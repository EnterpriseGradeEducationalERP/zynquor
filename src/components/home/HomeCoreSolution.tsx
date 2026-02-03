"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Network, Cpu, ArrowRight, AppWindow, Cloud, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomeCoreSolution = () => {
    // hub->Network, speed->Cpu
    return (
        <section className="relative bg-[#F8F8F8] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.4 }}
                    className="relative min-h-[400px] lg:min-h-[500px] bg-gray-200 overflow-hidden"
                >
                    <Image
                        src="/our-mission.webp"
                        alt="Our Mission"
                        fill
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#F5731B] w-2/3 h-1/3 flex items-center justify-center p-8" style={{ clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)" }}>
                        <div className="text-white text-right w-full">
                            <h3 className="text-4xl font-display font-bold">45%</h3>
                            <p className="text-sm uppercase tracking-wider opacity-90">Revenue Increase</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.4 }}
                    className="p-12 lg:p-24 flex flex-col justify-center relative rounded-[15px]"
                >
                    <div className="absolute top-0 left-0 w-full h-px bg-grid-light lg:hidden"></div>
                    <span className="text-[#F5731B] font-bold text-xs uppercase tracking-widest mb-6 block">[ ABOUT ZYNQUOR ]</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-none mb-8 text-gray-900">
                        Built for <br />
                        <span className="text-[#F5731B]">Scale That Lasts</span>
                    </h2>

                    <div className="space-y-8 mt-4">
                        <div className="space-y-6">
                            <p className="text-xl text-gray-800 leading-relaxed font-light">
                                ZYNQUOR is an AI-first systems company created to solve the biggest challenge growing businesses face: <span className="font-bold">fragmentation</span>.
                            </p>
                            <p className="text-lg text-[#A17C6B] leading-relaxed">
                                We bring together AI automation, cloud infrastructure, revenue systems, and high-performance talent into one connected execution architecture. Our engineering-led approach ensures your foundation is as resilient as your vision.
                            </p>
                        </div>

                        <div className="pb-4">
                            <Link href="/about" className="group inline-flex items-center text-[#F5731B] font-bold text-lg border-b-2 border-[#F5731B] pb-1 hover:text-[#d65f0f] transition-colors">
                                Learn More About ZYNQUOR <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex flex-wrap lg:flex-nowrap gap-4">
                            {[
                                { icon: AppWindow, label: "AI Automation" },
                                { icon: Cloud, label: "Cloud Infrastructure" },
                                { icon: TrendingUp, label: "Revenue Systems" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#E5E5E5] bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <item.icon className="text-[#F5731B]" size={20} />
                                    <span className="font-bold text-sm text-gray-900 whitespace-nowrap">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
