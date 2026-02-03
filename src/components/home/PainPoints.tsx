import React from 'react';
import { Card, CardTitle, CardDescription, CardHeader } from '@/components/ui/Card';
import { AlertCircle, Layers, Link2, Users, PieChart, Lock } from 'lucide-react';

const painPoints = [
    {
        icon: <Link2 size={32} />,
        title: "Disconnected Tools",
        description: "Your workflows live across too many apps, dashboards, and spreadsheets."
    },
    {
        icon: <Layers size={32} />,
        title: "Manual Ops",
        description: "Teams waste time doing manual data entry that systems should automate."
    },
    {
        icon: <Users size={32} />,
        title: "Sales Dependency",
        description: "Revenue becomes personality-driven instead of process-driven."
    },
    {
        icon: <PieChart size={32} />,
        title: "Hiring Complexity",
        description: "More headcount creates complexity without guaranteed productivity."
    },
    {
        icon: <AlertCircle size={32} />,
        title: "Pilot Purgatory",
        description: "Proof-of-concepts never turn into scalable daily operations."
    },
    {
        icon: <Lock size={32} />,
        title: "No Accountability",
        description: "Multiple vendors deliver tasks — nobody delivers business outcomes."
    }
];

export const PainPoints = () => {
    return (
        <section className="py-24 bg-white dark:bg-black border-t border-grid-light dark:border-grid-dark relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">[ The Friction ]</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold uppercase text-gray-900 dark:text-white">
                        Why Growth <br /> Stalls
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        Growth doesn’t fail because of ambition. It fails because systems don’t keep up.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-grid-light dark:bg-grid-dark border border-grid-light dark:border-grid-dark">
                    {painPoints.map((item, index) => (
                        <Card key={index} className="rounded-none border-none">
                            <CardHeader className="text-gray-400 group-hover:text-primary transition-colors">
                                {item.icon}
                            </CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
