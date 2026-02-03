import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const SystemsNotServices = () => {
    const buildItems = [
        "Automation that reduces headcount dependency",
        "Systems that improve speed, quality, and accountability",
        "Infrastructure that stays stable under growth",
        "Talent models that increase output without burnout"
    ];
    const outcomes = [
        "Faster execution",
        "Lower operational friction",
        "Predictable pipeline",
        "Real ROI from AI & automation"
    ];

    return (
        <section className="py-24 bg-background-light dark:bg-[#0f0f0f] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-grid-light dark:bg-grid-dark opacity-10" />

            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">[ The Solution ]</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-gray-900 dark:text-white leading-none mb-8">
                            Systems, <br />
                            Not Services.
                        </h3>
                        <div className="text-lg text-gray-600 dark:text-gray-400 space-y-6 max-w-lg leading-relaxed">
                            <p>
                                ZYNQUOR solves scale at the system level — not the task level.
                            </p>
                            <p>
                                We unify AI, revenue operations, infrastructure, and talent into one operating architecture built to endure.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Button variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
                                Architect Your Growth
                            </Button>
                        </div>
                    </div>

                    {/* Comparison Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-surface-dark p-8 border border-grid-light dark:border-grid-dark relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800" />
                            <h4 className="font-display font-bold text-xl mb-6">What We Build</h4>
                            <ul className="space-y-4">
                                {buildItems.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                                        <span className="w-1.5 h-1.5 bg-gray-400 mt-1.5 rounded-full flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-surface-dark p-8 border border-primary/20 relative shadow-[0_0_30px_-10px_rgba(245,115,27,0.1)]">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                            <h4 className="font-display font-bold text-xl mb-6 text-primary">What You Get</h4>
                            <ul className="space-y-4">
                                {outcomes.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-900 dark:text-white font-medium">
                                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
