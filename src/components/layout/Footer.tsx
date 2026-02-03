import React from 'react';
import Link from 'next/link';
import { Hexagon, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="relative bg-[#0A0A0A] text-white border-t border-grid-dark overflow-hidden pt-16 pb-8 z-50">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-4 lg:col-span-5 space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary flex items-center justify-center text-white rounded-sm">
                                <Hexagon size={18} fill="currentColor" stroke="none" />
                            </div>
                            <span className="text-xl font-display font-bold tracking-widest uppercase">Zynquor</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Building the cognitive infrastructure for the next generation of enterprise autonomy.
                            Where Intelligence Converges. Where Systems Endure.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="text-white hover:text-[#F5731B] transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-white hover:text-[#F5731B] transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-white hover:text-[#F5731B] transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="text-white hover:text-[#F5731B] transition-colors group">
                                <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="currentColor" className="group-hover:scale-110 transition-transform">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Explore</h5>
                        <ul className="space-y-4 text-sm font-display text-gray-400">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Company</h5>
                        <ul className="space-y-4 text-sm font-display text-gray-400">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Stay Synchronized</h5>
                        <div className="flex flex-col gap-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="ENTER EMAIL ADDRESS"
                                    className="w-full bg-[#141414] border border-gray-800 text-white text-xs px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-600 font-mono"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary hover:text-white transition-colors">
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                            <p className="text-xs text-gray-600">Receive intelligence reports on AI infrastructure.</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>ALL SYSTEMS OPERATIONAL</span>
                    </div>
                    <div>
                        © {new Date().getFullYear()} ZYNQUOR SYSTEMS INC.
                    </div>
                </div>
            </div>
        </footer>
    );
};
