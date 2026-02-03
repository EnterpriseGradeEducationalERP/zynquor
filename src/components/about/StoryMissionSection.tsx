"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, X, Check } from 'lucide-react';

export const StoryMissionSection = () => {
    return (
        <section className="relative py-32 bg-gray-50 text-gray-900 overflow-hidden">
            {/* Ambient Backgrounds */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* SECTION 03: Brand Story */}
                <div className="max-w-5xl mx-auto mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex flex-col items-center text-center mb-16">
                            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-[0.2em] mb-8">
                                The Origin
                            </span>
                            <h2 className="text-4xl md:text-6xl font-display font-medium text-gray-900 leading-tight">
                                Built to Engineer <span className="italic text-gray-500 font-serif">Endurance</span>
                            </h2>
                        </div>

                        <div className="prose prose-xl mx-auto text-center mb-16 max-w-3xl">
                            <p className="text-gray-600 font-light leading-relaxed">
                                <strong className="text-black font-semibold">ZYNQUOR</strong> started with a realization: the industry is obsessed with speed, but neglects <span className="text-gray-900 font-medium border-b border-primary/30">stability</span>. We saw the same patterns of failure repeating everywhere:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                            {[
                                { text: "AI without integration", icon: "connection" },
                                { text: "Hiring without productivity", icon: "user" },
                                { text: "Agencies without accountability", icon: "shield" },
                                { text: "Growth without architecture", icon: "layers" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-full bg-red-50 group-hover:bg-red-100 flex items-center justify-center flex-shrink-0 transition-colors">
                                        <X size={20} className="text-red-500" />
                                    </div>
                                    <span className="text-lg text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative py-12 px-8 md:px-16 bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50 text-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent opacity-50" />
                            <p className="relative z-10 text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
                                "Everyone was executing. <br className="hidden md:block" />
                                <strong className="text-black font-semibold font-display">Very few were designing systems that endure.</strong>"
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-mono text-gray-500 uppercase tracking-wider">
                                <span className="px-3 py-1 bg-gray-50 rounded border border-gray-100">Strategy</span>
                                <span className="text-gray-300">/</span>
                                <span className="px-3 py-1 bg-gray-50 rounded border border-gray-100">Execution</span>
                                <span className="text-gray-300">/</span>
                                <span className="px-3 py-1 bg-gray-50 rounded border border-gray-100">Reality</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* SECTION 04: Mission & Vision */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="group relative h-full bg-gradient-to-br from-white to-gray-50 p-10 md:p-12 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-20px_rgba(245,115,27,0.15)] transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 transform group-hover:scale-110">
                                <Target size={200} />
                            </div>

                            <div className="relative z-10">
                                <span className="inline-block p-3 rounded-2xl bg-primary/10 text-primary mb-8">
                                    <Target size={32} />
                                </span>
                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">Our Mission</h3>
                                <p className="text-xl text-gray-600 leading-relaxed font-light">
                                    To engineer <strong className="text-gray-900 font-semibold">intelligent systems</strong> that allow organizations to scale without
                                    <span className="inline-flex flex-wrap gap-2 mx-2">
                                        <span className="line-through decoration-red-400/50 decoration-2 text-gray-400">strain</span>
                                        <span className="line-through decoration-red-400/50 decoration-2 text-gray-400">chaos</span>
                                        <span className="text-gray-400">or</span>
                                        <span className="line-through decoration-red-400/50 decoration-2 text-gray-400">compromise</span>.
                                    </span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="group relative h-full bg-gradient-to-bl from-white to-gray-50 p-10 md:p-12 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.15)] transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 transform group-hover:scale-110">
                                <Eye size={200} />
                            </div>

                            <div className="relative z-10">
                                <span className="inline-block p-3 rounded-2xl bg-blue-500/10 text-blue-500 mb-8">
                                    <Eye size={32} />
                                </span>
                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">Our Vision</h3>
                                <p className="text-xl text-gray-600 leading-relaxed font-light">
                                    To become the <span className="relative inline-block font-semibold text-gray-900">
                                        <span className="absolute inset-0 bg-blue-100/50 -skew-y-2 -z-10 rounded-sm" />
                                        invisible architecture
                                    </span> behind the world’s most scalable organizations.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};
