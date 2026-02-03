import React from 'react';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { ThreeCanvas } from "@/components/3d/ThreeCanvas";
import { ServiceUniverse } from "@/components/3d/ServiceUniverse";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { CTABanner } from '@/components/home/CTABanner';
import { CheckCircle2 } from 'lucide-react';

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="overflow-hidden">
            {/* Dynamic Hero */}
            <section className="relative min-h-[80vh] flex items-center bg-background-light dark:bg-background-dark">
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <service.icon size={28} className="text-primary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-primary">{service.title}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase mb-6 leading-tight">
                            {service.headline}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                            {service.subheadline}
                        </p>
                        <div className="flex gap-4">
                            <Button variant="primary">{service.cta}</Button>
                            <Button variant="outline">Consult an Expert</Button>
                        </div>
                    </div>
                    {/* Reusing Service Universe for 3D context, or could be specific model */}
                    <div className="h-[500px] w-full">
                        <ThreeCanvas>
                            <ServiceUniverse />
                        </ThreeCanvas>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="py-24 bg-surface-light dark:bg-surface-dark border-y border-grid-light dark:border-grid-dark">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl font-display font-bold uppercase mb-12 text-center">{service.gridTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.gridItems.map((item, idx) => (
                            <Card key={idx} className="flex items-center gap-4 py-6">
                                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                                <span className="font-medium text-lg">{item}</span>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes / Why It Matters */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-display font-bold uppercase mb-8">{service.outcomesTitle}</h2>
                        <div className="space-y-6">
                            {service.outcomes.map((outcome, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <CheckCircle2 className="text-primary mt-1 shrink-0" />
                                    <p className="text-lg text-gray-700 dark:text-gray-300">{outcome}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Graphic Placeholder */}
                    <div className="bg-gray-100 dark:bg-gray-800 h-[400px] w-full rounded-lg border border-grid-light dark:border-grid-dark relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                        <service.icon size={80} className="text-gray-300 dark:text-gray-700" />
                        <p className="absolute bottom-6 text-sm text-gray-500 font-mono uppercase tracking-widest">[ System Visualization ]</p>
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
