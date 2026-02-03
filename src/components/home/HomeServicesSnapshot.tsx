"use client";
import React from 'react';
import Link from 'next/link';
import MagicBento, { BentoCardProps } from '../ui/MagicBento';

export const HomeServicesSnapshot = () => {
    const services: BentoCardProps[] = [
        {
            title: "AI Services & Automation",
            href: "/services/ai-automation",
            label: "Intelligence",
            description: "Deploy intelligent agents and automate complex workflows for 100x efficiency.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
        },
        {
            title: "Sales Systems & CRM Automation",
            href: "/services/sales-systems",
            label: "Revenue Ops",
            description: "Unified customer data and automated pipelines that drive predictable growth.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
        },
        {
            title: "Digital Marketing & Demand Engineering",
            href: "/services/digital-marketing",
            label: "Growth",
            description: "Data-driven campaigns and systems that convert traffic into revenue at scale.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
        },
        {
            title: "Sales & Lead Generation",
            href: "/services/lead-gen",
            label: "Pipeline",
            description: "High-quality leads and outbound strategies that fill your funnel.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
        },
        {
            title: "Application Development",
            href: "/services/app-dev",
            label: "Engineering",
            description: "Custom software built for performance, security, and enterprise scale.",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=400"
        },
        {
            title: "Infrastructure & DevOps",
            href: "/services/infrastructure",
            label: "Cloud",
            description: "Robust architecture, CI/CD pipelines, and 99.99% uptime reliability.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
        },
        {
            title: "HR & Staffing Services",
            href: "/services/staffing",
            label: "Talent",
            description: "Top-tier technical talent acquisition and management for your teams.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400"
        },
        {
            title: "Need a Custom Strategy?",
            description: "Let's audit your current infrastructure and build a roadmap.",
            href: "/contact",
            label: "Consultation",
            color: '#F5731B',
            textColor: '#FFFFFF',
            disableAnimations: true
        }
    ];

    return (
        <section className="py-24 bg-[#F8F9FA] text-gray-900 relative overflow-hidden">
            {/* Background Element - Tech Grid Pattern (Light) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="mb-20 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-1 bg-[#F5731B]"></div>
                        <h3 className="text-[#F5731B] font-bold text-sm uppercase tracking-[0.2em]">Our Capabilities</h3>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-display font-bold uppercase mb-8 leading-none text-gray-900">
                        What We <span className="text-transparent" style={{ WebkitTextStroke: "1px #111" }}>Deliver</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
                        Each service works independently — and performs <span className="text-gray-900 font-medium">exponentially better together</span>.
                    </p>
                </div>

                {/* MagicBento Grid */}
                <div className="w-full">
                    <MagicBento
                        cards={services}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        spotlightRadius={300}
                        particleCount={6}
                        glowColor="245, 115, 27"
                        textAutoHide={true}
                    />
                </div>

                <div className="border-t border-gray-200 pt-10 flex justify-center mt-20">
                    <p className="text-sm font-mono uppercase tracking-widest text-[#F5731B] text-center opacity-80">
                        Fast onboarding <span className="mx-4 text-gray-400">•</span> Enterprise-ready execution <span className="mx-4 text-gray-400">•</span> Outcome-driven delivery
                    </p>
                </div>
            </div>
        </section>
    );
};
