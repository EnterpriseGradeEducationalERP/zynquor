"use client";

import React from 'react';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

export const StaffingHero = () => {
    return (
        <section className="relative overflow-hidden px-6 py-16 lg:px-12 lg:py-24 bg-white dark:bg-background-dark">
            {/* Global Dot Pattern Overlay from layout/body but ensuring it's visible if needed or just rely on body */}
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 lg:max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/50 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm w-fit dark:bg-orange-900/10 dark:border-orange-900/30">
                            <Shield className="w-4 h-4" />
                            ENTERPRISE GRADE SECURITY
                        </div>
                        <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl font-display">
                            The Architecture of <span className="text-primary">Intelligent Scale</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                            We don't just build software; we engineer resilient AI infrastructures that protect and propel your enterprise through periods of hyper-growth.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="h-12 rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95">
                                Start With a Strategy Call
                            </button>
                            <button className="group flex h-12 items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 text-base font-semibold text-gray-900 transition-all hover:border-primary/50 hover:bg-orange-50/10 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10">
                                <span>View System Specs</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Right Visual - Shield */}
                    <div className="relative flex items-center justify-center lg:h-[600px] perspective-1000">
                        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px] animate-pulse"></div>
                        <div className="relative z-10 w-full h-full min-h-[400px] rounded-2xl bg-white/50 backdrop-blur-sm shadow-2xl shadow-orange-500/10 border border-white/60 overflow-hidden transform transition-transform hover:scale-[1.01] duration-700 dark:bg-white/5 dark:border-white/10">
                            <img
                                alt="3D Architecture Shield Model"
                                className="w-full h-full object-cover opacity-90"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5JNSMgssV_cCu_C0CzSuZEMGe7L9fEfBYPcRPSnZpbCCxzxlEhWY7uFFKHzrA4HYbq6jRzG3ukePNKWlaASOfx38HriITHGeoDa4i2392NHyZBPH6XEXVxtTvbgKpaEqA6piECSfb91ci0kWqW0IZHCtLN6ox7v7urzQOIOTHao23j7vOZu3Tpj4wtVg7yXX4_lylMDh13jMgqy1Z7eWGNHxuOx2f33p3kMBZFJsiQq2PdKgkWnmQoOShbDyhax-wqdLkcwDhoH6C"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent mix-blend-overlay dark:from-black/40"></div>

                            {/* Floating Card */}
                            <div className="absolute bottom-8 left-8 right-8 rounded-xl bg-white/90 backdrop-blur-md p-4 shadow-lg border border-white/50 animate-[float_4s_ease-in-out_infinite] dark:bg-black/80 dark:border-white/10">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1">
                                        <Shield className="w-3.5 h-3.5" />
                                        System Integrity
                                    </span>
                                    <span className="text-xs font-bold text-green-600">99.99%</span>
                                </div>
                                <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                                    <div className="h-full w-[99.9%] rounded-full bg-primary shadow-[0_0_10px_rgba(244,116,31,0.5)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
