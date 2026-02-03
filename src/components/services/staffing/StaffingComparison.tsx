"use client";

import React from 'react';
import { LayoutTemplate, BrainCircuit, Target, Activity, ArrowRight } from 'lucide-react';

export const StaffingComparison = () => {
    const features = [
        {
            title: "Talent mapped to business output",
            description: "We don't just match resumes to keywords. We align talent capabilities directly with your business goals and delivery requirements.",
            icon: <Target className="w-7 h-7" />,
            bad: "Resume Matching",
            good: "Outcome Alignment"
        },
        {
            title: "Staffing designed as operational architecture",
            description: "Your team isn't just a list of names. It's an engineered system of roles, workflows, and handoffs designed for peak efficiency.",
            icon: <LayoutTemplate className="w-7 h-7" />,
            bad: "Headcount Filling",
            good: "Operational Design"
        },
        {
            title: "Automation embedded from day one",
            description: "We equip our talent with the latest AI agents and automation tools, multiplying their individual output immediately.",
            icon: <BrainCircuit className="w-7 h-7" />,
            bad: "Manual Workflows",
            good: "AI-Augmented"
        },
        {
            title: "Performance measured beyond attendance",
            description: "We track deliverables, code quality, and project velocity—not just hours logged. Transparency is total.",
            icon: <Activity className="w-7 h-7" />,
            bad: "Timesheets",
            good: "Velocity Metrics"
        }
    ];

    return (
        <section className="px-6 py-24 lg:px-12 bg-white dark:bg-background-dark">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-display mb-6">
                            Why ZYNQUOR Staffing Is Different
                        </h2>
                        <div className="flex flex-col gap-2 text-lg text-gray-600 dark:text-gray-400">
                            <p className="flex items-center gap-2">
                                <span className="opacity-60 decoration-2 line-through">Most staffing firms focus on filling roles.</span>
                            </p>
                            <p className="font-bold text-primary text-xl">
                                ZYNQUOR focuses on building productive capacity.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="p-6 bg-orange-50 dark:bg-white/5 rounded-2xl border border-orange-100 dark:border-white/10">
                            <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">The Shift</p>
                            <div className="flex flex-col gap-1">
                                <span className="text-gray-400 line-through">"Who do you need?"</span>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">"What outcomes do you want?"</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 dark:bg-white/5 dark:border-white/5 dark:hover:border-primary/30">
                            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150"></div>
                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors dark:bg-white/10">
                                        {feature.icon}
                                    </div>
                                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                        DIFFERENTIATOR
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                                <div className="mt-4 border-t border-dashed border-gray-200 pt-4 dark:border-white/10">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex flex-wrap gap-2 items-center">
                                        <span className="text-red-400 line-through decoration-2 opacity-75">{feature.bad}</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                                        <span className="text-primary font-bold">{feature.good}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="h-14 rounded-full bg-gray-900 px-10 text-lg font-bold text-white transition-all hover:bg-primary hover:shadow-lg active:scale-95 dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white">
                        Build a High-Performance Team
                    </button>
                </div>
            </div>
        </section>
    );
};
