"use client";

import React from 'react';
import { ArrowUpRight, Play, Settings, ArrowRight, Database, Cloud, BarChart3, Target, Users, Code, Cpu, Smartphone } from 'lucide-react';
import Link from 'next/link';

export const ServicesGrid = () => {
    const services = [
        {
            id: "01",
            title: "AI & Automation",
            description: "Neural network architecture and autonomous agents for enterprise scale.",
            icon: <Settings className="w-10 h-10" strokeWidth={1} />,
            link: "/services/ai-automation",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" // AI/Neural abstract
        },
        {
            id: "02",
            title: "CRM & Sales Systems",
            description: "Integrated data pipelines and automated lead scoring infrastructure.",
            icon: <Database className="w-10 h-10" strokeWidth={1} />,
            link: "/services/sales-systems",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" // Dashboard/Data
        },
        {
            id: "03",
            title: "Infrastructure & DevOps",
            description: "Scalable cloud architecture with automated CI/CD pipelines.",
            icon: <Cloud className="w-10 h-10" strokeWidth={1} />,
            link: "/services/infrastructure",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" // Network/Cloud
        },
        {
            id: "04",
            title: "Digital Marketing",
            description: "Data-driven growth engines and precision targeting campaigns.",
            icon: <BarChart3 className="w-10 h-10" strokeWidth={1} />,
            link: "/services/digital-marketing",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" // Analytics/Growth
        },
        {
            id: "05",
            title: "Sales & Lead Gen",
            description: "High-velocity acquisition systems and conversion optimization.",
            icon: <Target className="w-10 h-10" strokeWidth={1} />,
            link: "/services/lead-gen",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" // Business/Handshake/Meeting
        },
        {
            id: "06",
            title: "HR & Staffing",
            description: "Talent acquisition networks and automated workforce management.",
            icon: <Users className="w-10 h-10" strokeWidth={1} />,
            link: "/services/staffing",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" // Team/People
        },
        {
            id: "07",
            title: "App Development",
            description: "Native and cross-platform mobile experiences built for performance.",
            icon: <Smartphone className="w-10 h-10" strokeWidth={1} />,
            link: "/services/app-dev",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" // Mobile Phone
        },
        {
            id: "08",
            title: "Custom Software",
            description: "Bespoke software solutions tailored to complex business logic.",
            icon: <Cpu className="w-10 h-10" strokeWidth={1} />,
            link: "/services/app-dev",
            image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=800&auto=format&fit=crop" // Code/Software
        },
        {
            id: "09",
            title: "Mobile Solutions",
            description: "Enterprise mobility strategies and secure device ecosystems.",
            icon: <Code className="w-10 h-10" strokeWidth={1} />,
            link: "/services/app-dev",
            image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop" // Technology/System
        }
    ];

    return (
        <>
            <section className="border-b border-grid-light dark:border-grid-dark bg-background-light dark:bg-background-dark">
                {/* Intro Header */}
                <div className="grid grid-cols-1 md:grid-cols-12 border-b border-grid-light dark:border-grid-dark">
                    <div className="col-span-1 md:col-span-3 p-8 md:border-r border-grid-light dark:border-grid-dark flex items-center bg-gray-50 dark:bg-white/5">
                        <h2 className="font-display font-bold text-xl uppercase tracking-wide text-[#f5731b]">Capabilities<span className="text-primary">.</span></h2>
                    </div>
                    <div className="col-span-1 md:col-span-9 p-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <p className="font-mono text-xs text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
                            Access our suite of modular enterprise services. Each node represents a specialized department within the ZYNQUOR ecosystem.
                        </p>
                        <div className="mt-4 md:mt-0 flex space-x-2">
                            <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase">
                                <span className="block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                <span>System Online</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3x3 Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b border-grid-light dark:border-grid-dark">
                    {services.map((service, index) => (
                        <div key={service.id} className="group relative p-10 md:border-r border-b border-grid-light dark:border-grid-dark hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 min-h-[380px] flex flex-col justify-between overflow-hidden">
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-all duration-500"></div>
                            </div>

                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-primary transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="font-mono text-xs text-primary">[{service.id}]</span>
                                    {/* Icon color changed to orange by default, white on hover */}
                                    <div className="text-[#f5731b] group-hover:text-white transition-colors">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="font-display text-2xl font-bold uppercase mb-4 leading-tight text-[#f5731b] group-hover:text-white transition-colors">{service.title}</h3>
                                <div className="w-12 h-1 bg-white/20 group-hover:bg-primary transition-colors mb-6"></div>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <p className="text-sm text-gray-200 mb-6 group-hover:text-white transition-colors leading-relaxed">
                                    {service.description}
                                </p>
                                <Link href={service.link} className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
                                    Know More <ArrowRight className="ml-2 w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Content Row (Quote + CTA) */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b border-grid-light dark:border-grid-dark">
                    {/* Quote / Highlight (Spans 2 cols) */}
                    <div className="md:col-span-2 bg-primary text-white p-10 flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 border-[20px] border-white/10 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="absolute top-10 right-10 text-white/20 text-6xl font-serif">"</div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold leading-snug relative z-10 max-w-lg">
                            "We don't just build systems; we architect the nervous system of your digital enterprise."
                        </h3>
                        <div className="mt-8 flex items-center relative z-10">
                            <div className="w-10 h-10 bg-black rounded-full mr-4 border-2 border-white/20 p-0.5">
                                <img alt="User" className="w-full h-full rounded-full grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9Xu2Ly1tilV58Mjp1eHspUwVUqXTSApcy1LTRDv6AIE4E4h-ZWk67Bedmm7J0PEnEi0QrudipCcO73594FdNgLfAY_3FIOMzFRQNdLbncN1MHx-4S_3n_WgbKbqIqCpeePzlF3vd64412IlQW9LCyDLsLsFUBXJGK-cYl_r1WorXz_7jAL7iQ0evoZBiG3Oaq2VMzeR1_Bm54mYWxc-EaHdrwLLTE-AOzpOhqAxM7lW8vUApkrzj8Fjt5NzFFIxXYN8xshIhSUt3" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-mono text-xs font-bold tracking-widest">ZOYA AL-RASHID</span>
                                <span className="font-mono text-[10px] opacity-70 uppercase">Lead Systems Architect</span>
                            </div>
                        </div>
                    </div>

                    {/* Start Project CTA */}
                    <Link href="/contact" className="group relative p-10 bg-[#f5731b] flex flex-col justify-center items-center text-center hover:bg-black transition-colors duration-500 cursor-pointer md:border-l border-grid-light dark:border-grid-dark">
                        <h3 className="font-display text-4xl font-black uppercase text-white mb-6 leading-tight transition-colors">
                            Start<br />Project
                        </h3>
                        <div className="w-20 h-20 bg-black group-hover:bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                            <ArrowUpRight className="text-white group-hover:text-black w-8 h-8" />
                        </div>
                        <span className="font-mono text-[10px] mt-8 text-white/80 group-hover:text-gray-400 tracking-widest transition-colors">[ INITIALIZE CONTACT ]</span>
                    </Link>
                </div>
            </section>

            {/* Marquee Section */}
            <section className="border-y border-grid-light dark:border-grid-dark py-4 overflow-hidden bg-background-light dark:bg-background-dark">
                {/* Pause on hover wrapper */}
                <div className="flex select-none group hover:[animation-play-state:paused]">
                    <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                        {/* Tripling the services array to ensure smooth seamless scrolling */}
                        {[...services, ...services, ...services].map((service, i) => (
                            <React.Fragment key={`${service.id}-${i}`}>
                                <Link
                                    href={service.link}
                                    className="text-3xl md:text-5xl font-display font-black text-transparent px-8 hover:text-[#f5731b] transition-colors duration-300 cursor-pointer"
                                    style={{ WebkitTextStroke: '1px black' }}
                                >
                                    {service.title.toUpperCase()}
                                </Link>
                                <span className="text-xl mx-4 text-primary">✦</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
            `}</style>
        </>
    );
};
