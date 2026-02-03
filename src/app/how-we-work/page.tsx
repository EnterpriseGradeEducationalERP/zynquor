"use client";

import React from 'react';
import { EngagementModel } from "@/components/home/EngagementModel";
import { CTABanner } from '@/components/home/CTABanner';
import { FileText, Clock, Users, CheckSquare } from 'lucide-react';
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

export default function HowWeWorkPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="py-24 bg-background-light dark:bg-background-dark text-center">
                <div className="container mx-auto px-6 lg:px-12">
                    <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-6">Our Proven <br /> Engagement Model</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We follow a structured delivery method that ensures speed, clarity, and accountability.
                    </p>
                </div>
            </section>

            {/* Framework Reuse */}
            <EngagementModel />

            {/* Deliverables */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl font-display font-bold uppercase mb-12 text-center">What We Deliver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center">
                            <FileText className="w-10 h-10 mx-auto mb-4 text-primary" />
                            <CardTitle className="text-lg">Master MOU</CardTitle>
                            <CardDescription>Clear terms and scope from day one.</CardDescription>
                        </Card>
                        <Card className="text-center">
                            <CheckSquare className="w-10 h-10 mx-auto mb-4 text-primary" />
                            <CardTitle className="text-lg">Service SOWs</CardTitle>
                            <CardDescription>Detailed Statement of Work for every phase.</CardDescription>
                        </Card>
                        <Card className="text-center">
                            <Clock className="w-10 h-10 mx-auto mb-4 text-primary" />
                            <CardTitle className="text-lg">Clear Timelines</CardTitle>
                            <CardDescription>Project management with critical path tracking.</CardDescription>
                        </Card>
                        <Card className="text-center">
                            <Users className="w-10 h-10 mx-auto mb-4 text-primary" />
                            <CardTitle className="text-lg">Dedicated Ownership</CardTitle>
                            <CardDescription>Single point of contact for accountability.</CardDescription>
                        </Card>
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
