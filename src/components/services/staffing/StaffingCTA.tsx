"use client";

import React from 'react';
import { ArrowUpRight, BookOpen, Check } from 'lucide-react';
import Link from 'next/link';

export const StaffingCTA = () => {
    const idealFor = [
        "Startups scaling fast without HR overhead",
        "Enterprises optimizing cost and productivity",
        "Tech companies building distributed teams",
        "Agencies managing fluctuating workloads",
        "Businesses adopting AI-first operations"
    ];

    return (
        <div className="bg-background-dark text-white">
            <section className="px-6 py-24 lg:px-12 border-t border-white/10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Who This Is Built For */}
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-white mb-8 font-display">
                                Who This Is Built For
                            </h2>
                            <ul className="space-y-4">
                                {idealFor.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-lg text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Final CTA Card */}
                        <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-10 ring-1 ring-white/10 shadow-2xl text-center">
                            <h3 className="text-3xl font-bold text-white tracking-tight mb-4">
                                Design Your Talent Strategy with ZYNQUOR
                            </h3>
                            <p className="text-gray-400 text-lg mb-8">
                                Stop hiring for headcount. Start hiring for output.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <Link href="/contact" className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-primary active:scale-95 shadow-lg shadow-primary/20">
                                    Start Strategy Call
                                    <ArrowUpRight className="w-5 h-5" />
                                </Link>
                                <Link href="/contact" className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95">
                                    Talk to Staffing Architects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
