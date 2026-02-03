import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HomeScale = () => {
    return (
        <section className="relative bg-[#F8F8F8] border-t border-grid-light">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                <div className="lg:col-span-8 p-12 lg:p-24 flex flex-col justify-between relative border-r border-grid-light">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[0.85]">
                            Ready to <br />
                            Scale?
                        </h2>
                    </div>
                    <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-end gap-8">
                        <div className="max-w-xs">
                            <p className="text-sm text-gray-500 mb-2">General Inquiries</p>
                            <a href="mailto:Info@zynquor.com" className="text-xl font-medium text-gray-900 hover:text-[#F5731B] transition-colors">Info@zynquor.com</a>
                        </div>
                        <div className="max-w-xs">
                            <p className="text-sm text-gray-500 mb-2">Location</p>
                            <p className="text-xl font-medium text-gray-900 hover:text-[#F5731B] transition-colors cursor-default">Hyderabad, Telangana</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 bg-[#F5731B] flex flex-col justify-center p-12 relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative z-10 text-white">
                        <div className="mb-4">
                            <ArrowRight size={48} />
                        </div>
                        <h3 className="text-5xl font-display font-bold uppercase leading-none mb-6">Get in <br />Touch</h3>
                        <p className="opacity-90 max-w-xs mb-8">Schedule a consultation with our system architects.</p>
                        <span className="border border-white px-6 py-3 uppercase text-xs font-bold tracking-widest inline-block group-hover:bg-white group-hover:text-[#F5731B] transition-all">Start Now</span>
                    </div>
                    <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
};
