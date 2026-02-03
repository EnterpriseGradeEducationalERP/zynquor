"use client";

import React from 'react';

export const StaffingProcess = () => {
    const steps = [
        {
            title: "Capability Mapping",
            description: "We analyze your goals, workflows, and bottlenecks."
        },
        {
            title: "Talent + Automation Design",
            description: "Roles are paired with tools, AI, and processes."
        },
        {
            title: "Precision Hiring & Onboarding",
            description: "Talent is onboarded into your systems, not just your payroll."
        },
        {
            title: "Performance Monitoring",
            description: "Output, efficiency, and delivery metrics tracked continuously."
        },
        {
            title: "Scale or Optimize",
            description: "Teams scale up, down, or evolve without disruption."
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-12 bg-white dark:bg-background-dark">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white sm:text-4xl font-display mb-16">
                    Our 5-Step Staffing & Productivity Framework
                </h2>

                <div className="relative">
                    {/* Center Line showing on Desktop */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 dark:bg-white/10 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Text Content */}
                                <div className={`flex-1 text-center ${idx % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Number Circle */}
                                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white dark:ring-black">
                                    {idx + 1}
                                </div>

                                {/* Placeholder for balance */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
