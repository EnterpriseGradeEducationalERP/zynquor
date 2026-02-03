"use client";

import React from 'react';
import { Code, Bot, LineChart, Server, Megaphone, Headset, CheckCircle } from 'lucide-react';

export const StaffingRoles = () => {
    const roles = [
        { name: "Software Engineers & Full-Stack Developers", icon: <Code className="w-5 h-5" /> },
        { name: "AI / ML Engineers & Data Analysts", icon: <Bot className="w-5 h-5" /> },
        { name: "Product Managers & Business Analysts", icon: <LineChart className="w-5 h-5" /> },
        { name: "DevOps, Cloud & Infrastructure Engineers", icon: <Server className="w-5 h-5" /> },
        { name: "Marketing, Growth & Performance Specialists", icon: <Megaphone className="w-5 h-5" /> },
        { name: "Operations, Support & Back-office Teams", icon: <Headset className="w-5 h-5" /> },
    ];

    const alignmentFeatures = [
        "Clear KPIs",
        "Defined ownership",
        "Automation-assisted workflows"
    ];

    return (
        <section className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-black/20">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left - Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-display mb-8">
                            Talent Across Technology, Operations & Growth
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                            We source, deploy, and manage talent across critical business functions, ensuring every placement adds strategic value.
                        </p>

                        <div className="space-y-4">
                            {roles.map((role, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-primary bg-orange-50 dark:bg-white/10 p-2 rounded-lg">
                                        {role.icon}
                                    </div>
                                    <span className="font-semibold text-gray-800 dark:text-white">{role.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Alignment Box */}
                    <div className="lg:w-1/3 w-full">
                        <div className="sticky top-24 bg-gray-900 dark:bg-white/5 text-white p-8 rounded-2xl shadow-xl">
                            <h3 className="text-xl font-bold mb-6 text-primary">Each role is aligned with:</h3>
                            <ul className="space-y-6">
                                {alignmentFeatures.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <span className="text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 p-6 bg-white/5 rounded-xl border border-white/10">
                                <p className="text-sm text-gray-400 italic text-center">
                                    "We don't just place bodies. We place outcome owners."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
