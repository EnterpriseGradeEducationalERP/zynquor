import React from 'react';
import { Card, CardTitle, CardDescription, CardFooter, CardAction } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const cases = [
    {
        project: "Project: AETHER",
        industry: "Fintech • AI Security",
        desc: "Implemented a quantum-resistant encryption layer for a global banking network.",
        year: "2023",
        image: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)" // Placeholder for actual image
    },
    {
        project: "Project: TITAN",
        industry: "Manufacturing • Robotics",
        desc: "Autonomous assembly line orchestration using computer vision and edge computing.",
        year: "2024",
        image: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)"
    },
    {
        project: "Project: NEXUS",
        industry: "Logistics • Data",
        desc: "Predictive supply chain modeling reducing waste by 34% annually.",
        year: "2023",
        image: "linear-gradient(135deg, #1f1f1f 0%, #0f0f0f 100%)"
    }
];

export const CaseStudiesPreview = () => {
    return (
        <section className="py-24 bg-white dark:bg-black border-t border-grid-light dark:border-grid-dark">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">[ Social Proof ]</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold uppercase text-gray-900 dark:text-white">
                            Recent Deployments
                        </h3>
                    </div>
                    <Button variant="outline" size="sm">
                        View All Case Studies
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((project, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative h-[300px] bg-gray-200 dark:bg-gray-800 mb-6 overflow-hidden border border-transparent group-hover:border-primary transition-all">
                                {/* Image Placeholder */}
                                <div className="w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" style={{ background: project.image }} />
                                <div className="absolute bottom-0 left-0 bg-white dark:bg-black px-4 py-2 text-xs font-mono border-t border-r border-primary">
                                    [{project.year}]
                                </div>
                            </div>
                            <h4 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{project.project}</h4>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{project.industry}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{project.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
