import React from 'react';
import { Microscope, PencilRuler, Rocket, LineChart } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Diagnose",
        desc: "Identify bottlenecks, leakage, and system gaps.",
        icon: Microscope
    },
    {
        id: "02",
        title: "Architect",
        desc: "Design scalable workflow & infrastructure blueprint.",
        icon: PencilRuler
    },
    {
        id: "03",
        title: "Deploy",
        desc: "Build + integrate AI, tech, and talent systems.",
        icon: Rocket
    },
    {
        id: "04",
        title: "Optimize",
        desc: "Continuous improvement with measurable outcomes.",
        icon: LineChart
    }
];

export const EngagementModel = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-[#0f0f0f] border-t border-grid-light dark:border-grid-dark">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">[ Framework ]</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold uppercase text-gray-900 dark:text-white">
                        How We Work
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        A proven engagement model built for execution, not just planning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-grid-light dark:bg-grid-dark -z-10" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-surface-light dark:bg-surface-dark p-8 border border-grid-light dark:border-grid-dark relative group hover:border-primary transition-colors">
                            <div className="w-12 h-12 bg-background-light dark:bg-black border border-grid-light dark:border-grid-dark flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <step.icon size={20} />
                            </div>
                            <span className="absolute top-8 right-8 text-4xl font-display font-bold text-gray-100 dark:text-gray-800 -z-10 group-hover:text-gray-200 dark:group-hover:text-gray-700 transition-colors">
                                {step.id}
                            </span>
                            <h4 className="font-display font-bold text-xl mb-3">{step.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
