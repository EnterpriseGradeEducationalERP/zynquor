"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { CTABanner } from '@/components/home/CTABanner';
import { ShieldCheck, Cpu, Globe, Zap } from 'lucide-react';

export default function WhyZynquorPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="py-24 bg-surface-light dark:bg-surface-dark text-center">
                <div className="container mx-auto px-6 lg:px-12">
                    <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-6">Why Choose ZYNQUOR</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                        Because growth without systems collapses. Because AI without context fails. Because talent without leverage burns out.
                    </p>
                    <Button variant="primary">Speak to an Architect</Button>
                </div>
            </section>

            {/* Differentiators */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl font-display font-bold uppercase mb-12 text-center">Market Differentiators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card>
                            <Cpu className="w-10 h-10 text-primary mb-6" />
                            <CardTitle>AI-First, Not Hype</CardTitle>
                            <CardDescription>We focus on operational AI that delivers leverage, not just chat demos.</CardDescription>
                        </Card>
                        <Card>
                            <Zap className="w-10 h-10 text-primary mb-6" />
                            <CardTitle>Systems Over Headcount</CardTitle>
                            <CardDescription>We reduce dependency on hiring by automating core workflows.</CardDescription>
                        </Card>
                        <Card>
                            <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                            <CardTitle>One Accountable Partner</CardTitle>
                            <CardDescription>Unified responsibility across Tech, Revenue, and Talent.</CardDescription>
                        </Card>
                        <Card>
                            <Globe className="w-10 h-10 text-primary mb-6" />
                            <CardTitle>Global Execution</CardTitle>
                            <CardDescription>Built for India & Global markets with enterprise-grade standards.</CardDescription>
                        </Card>
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
