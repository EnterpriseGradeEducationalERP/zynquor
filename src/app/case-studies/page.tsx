"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { CTABanner } from '@/components/home/CTABanner';

const projects = [
    {
        name: "Project: AETHER",
        tags: ["Fintech", "AI Security"],
        problem: "Legacy encryption vulnerable to quantum threats.",
        solution: "Implemented a quantum-resistant encryption layer.",
        result: "100% security audit pass rate.",
        year: "2023",
        color: "#1a1a1a"
    },
    {
        name: "Project: TITAN",
        tags: ["Manufacturing", "Robotics"],
        problem: "Inefficient manual assembly lines.",
        solution: "Autonomous assembly orchestration with Computer Vision.",
        result: "40% increase in daily output.",
        year: "2024",
        color: "#222"
    },
    {
        name: "Project: NEXUS",
        tags: ["Logistics", "Data"],
        problem: "Supply chain waste due to poor forecasting.",
        solution: "Predictive supply chain modeling.",
        result: "Reduced waste by 34% annually.",
        year: "2023",
        color: "#1f1f1f"
    },
    {
        name: "Project: VELOCITY",
        tags: ["Sales", "Automation"],
        problem: "High lead leakage in sales funnel.",
        solution: "Automated follow-up sequences across SMS/Email.",
        result: "2.5x increase in conversion.",
        year: "2024",
        color: "#1c1c1c"
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-6">Experiences & <br /> Case Studies</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                        Explore real ZYNQUOR deployments across automation, cloud, sales systems, infrastructure, marketing, and staffing.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="primary">View Work</Button>
                        <Button variant="outline">Request Demo</Button>
                    </div>
                </div>
            </section>

            {/* Filter & Grid */}
            <section className="py-12 bg-white dark:bg-black border-t border-grid-light dark:border-grid-dark">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Filters - simplified for now */}
                    <div className="flex flex-wrap gap-4 mb-12 justify-center">
                        {["All", "AI Automation", "CRM", "DevOps", "Staffing"].map((filter) => (
                            <button key={filter} className="text-sm font-bold uppercase tracking-widest px-4 py-2 border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors hover:text-primary">
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative h-[400px] bg-gray-100 dark:bg-gray-800 mb-6 overflow-hidden border border-transparent group-hover:border-primary transition-all">
                                    <div className="w-full h-full opacity-50 group-hover:scale-105 transition-transform duration-700 bg-gradient-to-br from-gray-800 to-black" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-mono bg-primary text-white px-2 py-1 uppercase">{tag}</span>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl font-display font-bold text-white mb-2">{project.name}</h3>
                                        <p className="text-sm text-gray-300 mb-4">{project.result}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
