"use client";
import React from 'react';
import { Unlink, MousePointerClick, Bot, TrendingUp, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomeChallenges = () => {
    const challenges = [
        {
            icon: Unlink,
            issue: 'ISSUE 001',
            title: 'Disconnected Tools',
            description: 'Siloed data and fragmented workflows create friction that slows down decision making and strategic pivots.'
        },
        {
            icon: MousePointerClick, // Represents Manual Operations/Interaction
            issue: 'ISSUE 002',
            title: 'Manual Operations',
            description: 'Processes that look digital but rely on human glue. Scaling requires more "glue" instead of automated efficiency.'
        },
        {
            icon: Bot,
            issue: 'ISSUE 003',
            title: 'AI Stuck in Pilot Mode',
            description: 'Endless experiments that never reach production value. Tools without a system are just expensive distractions.'
        },
        {
            icon: TrendingUp,
            issue: 'ISSUE 004',
            title: 'Sales Dependence',
            description: 'Revenue tied to individual heroics rather than a predictable machine. If your top performers leave, growth stops.'
        },
        {
            icon: Users,
            issue: 'ISSUE 005',
            title: 'Costly Hiring',
            description: 'Scaling headcount without scaling linear output. Operating margins shrink as the complexity of the team grows.'
        },
        {
            icon: Target,
            issue: 'ISSUE 006',
            title: 'No Execution Owner',
            description: 'Accountability gaps in end-to-end system health. No one owns the integrity of the technology stack.'
        }
    ];

    return (
        <section className="py-24 border-t border-gray-100 relative bg-[#F9FAFB] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="mb-16 max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-0.5 bg-[#F5731B]"></div>
                        <h2 className="text-sm font-bold text-[#F5731B] uppercase tracking-widest">System Diagnosis</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">Why Most Companies <br /><span className="text-[#F5731B]">Struggle to Scale</span></h3>
                    <p className="text-lg text-black max-w-2xl font-medium">
                        Growth doesn't fail because of ambition. <br />
                        It fails because systems don't keep up.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: index < 3 ? -50 : 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
                            className="group relative bg-[#FAF9F6] p-10 border border-gray-200 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
                        >
                            {/* Loading Line Effect */}
                            <div className="absolute top-0 left-0 h-1.5 bg-[#F5731B] w-0 group-hover:w-full transition-all duration-700 ease-in-out" />

                            <div className="flex justify-between items-start mb-8">
                                <challenge.icon size={32} className="text-[#F5731B]" />
                                <span className="font-mono text-xs font-bold tracking-[0.2em] text-gray-400/80 uppercase mt-1">{challenge.issue}</span>
                            </div>
                            <h4 className="font-display font-bold text-xl mb-4 text-gray-900 group-hover:text-[#F5731B] transition-colors duration-300">{challenge.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">{challenge.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
