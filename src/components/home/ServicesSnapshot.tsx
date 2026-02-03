import React from 'react';
import { Card, CardTitle, CardAction } from '@/components/ui/Card';
import { Bot, LineChart, Megaphone, Target, Code2, Server, Users } from 'lucide-react';

const services = [
    { title: "AI Services & Automation", icon: Bot, href: "/services/ai-automation" },
    { title: "Sales Systems & CRM", icon: LineChart, href: "/services/sales-systems" },
    { title: "Digital Marketing", icon: Megaphone, href: "/services/digital-marketing" },
    { title: "Sales & Lead Gen", icon: Target, href: "/services/lead-gen" },
    { title: "App Development", icon: Code2, href: "/services/app-dev" },
    { title: "Infrastructure & DevOps", icon: Server, href: "/services/infrastructure" },
    { title: "HR & Staffing Services", icon: Users, href: "/services/staffing" },
];

export const ServicesSnapshot = () => {
    return (
        <section className="py-24 bg-surface-light dark:bg-surface-dark border-t border-grid-light dark:border-grid-dark">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-12">
                    <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">[ The Capabilities ]</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold uppercase text-gray-900 dark:text-white">
                        Connected Services. <br /> Exponential Output.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} variant="service" className="min-h-[220px] flex flex-col justify-between group">
                            <div>
                                <service.icon size={32} className="text-gray-400 group-hover:text-primary transition-colors mb-6" />
                                <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                            </div>
                            <div className="mt-4 pt-4 border-t border-grid-light dark:border-grid-dark opacity-0 group-hover:opacity-100 transition-opacity">
                                <CardAction href={service.href}>Explore</CardAction>
                            </div>
                        </Card>
                    ))}
                    {/* Filler card to complete the grid or promo */}
                    <div className="bg-primary p-8 flex flex-col justify-center items-start text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
                        <h4 className="font-display font-bold text-2xl mb-2 relative z-10">One Unified System</h4>
                        <p className="text-sm opacity-90 mb-6 relative z-10">Fast onboarding. Enterprise ready.</p>
                        <CardAction href="/services" className="text-white hover:text-white/80">View All Services</CardAction>
                    </div>
                </div>
            </div>
        </section>
    );
};
