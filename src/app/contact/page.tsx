"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="py-24 bg-black text-white">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-6">Let’s Architect <br /> What Comes Next</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Tell us what you’re building — and we’ll map the best system to scale it.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-surface-light dark:bg-surface-dark">
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-display font-bold uppercase mb-8">Contact Details</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Mail className="text-primary w-6 h-6" />
                                <span className="text-lg">Info@zynquor.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-primary w-6 h-6" />
                                <span className="text-lg">+91 8897898372 / +91 9502371292</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className="text-primary w-6 h-6" />
                                <span className="text-lg">Hyderabad, Telangana</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white dark:bg-[#111] p-8 border border-grid-light dark:border-grid-dark">
                        <h3 className="text-xl font-display font-bold uppercase mb-6">Send A Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                                <input type="text" className="w-full bg-background-light dark:bg-black border border-gray-200 dark:border-gray-800 p-3 text-sm focus:border-primary focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-background-light dark:bg-black border border-gray-200 dark:border-gray-800 p-3 text-sm focus:border-primary focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service Interested In</label>
                                <select className="w-full bg-background-light dark:bg-black border border-gray-200 dark:border-gray-800 p-3 text-sm focus:border-primary focus:outline-none">
                                    <option>AI Automation</option>
                                    <option>Sales Systems</option>
                                    <option>Infrastructure</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-background-light dark:bg-black border border-gray-200 dark:border-gray-800 p-3 text-sm focus:border-primary focus:outline-none" />
                            </div>
                            <Button variant="primary" size="lg" className="w-full">
                                Request Consultation
                            </Button>
                            <p className="text-xs text-center text-gray-500">We typically respond within 24 hours.</p>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}
