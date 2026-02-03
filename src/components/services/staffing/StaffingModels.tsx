"use client";

import React from 'react';
import { Briefcase, Users, UserCheck, Shield, Cpu, ArrowRight } from 'lucide-react';

export const StaffingModels = () => {
    const models = [
        {
            title: "Contract Staffing",
            description: "On-demand skilled professionals for short- and mid-term projects without long-term overhead.",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Dedicated Teams",
            description: "Fully managed teams aligned to your workflows, KPIs, and delivery timelines.",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Permanent Hiring",
            description: "Precision hiring for long-term roles with cultural and performance alignment.",
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Payroll & Compliance Management",
            description: "End-to-end payroll, statutory compliance, and HR operations handled seamlessly.",
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "AI + HR Hybrid Models",
            description: "Human talent augmented with automation, AI agents, and productivity tooling.",
            icon: <Cpu className="w-6 h-6" />
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-black/20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-display mb-6">
                        Staffing Models Designed for Modern Businesses
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        We offer flexible, outcome-driven staffing models that adapt to your growth stage, workload, and operational complexity.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {models.map((model, idx) => (
                        <div key={idx} className="group relative bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                            <div className="mb-6 inline-flex items-center justify-center p-3 rounded-lg bg-orange-50 text-primary dark:bg-orange-500/10">
                                {model.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                {model.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                {model.description}
                            </p>
                            <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 text-primary" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
