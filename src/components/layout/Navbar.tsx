"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Menu, X, Hexagon } from 'lucide-react';
import { clsx } from 'clsx';
import { ServicesMegaMenu } from './ServicesMegaMenu';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleServicesEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsServicesHovered(true);
    };

    const handleServicesLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsServicesHovered(false);
        }, 200);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto max-w-7xl rounded-2xl",
                isScrolled
                    ? "glass py-5 px-8 shadow-lg top-4"
                    : "bg-transparent py-6 px-8 top-0"
            )}
        >
            <div className="flex justify-between items-center relative">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center text-white rounded-md transition-shadow group-hover:shadow-[0_0_15px_rgba(245,115,27,0.5)]">
                        <Hexagon size={18} fill="currentColor" stroke="none" />
                    </div>
                    <span className="text-lg font-display font-bold tracking-widest uppercase text-gray-900">
                        Zynquor
                    </span>
                </Link>

                {/* Centered Desktop Links */}
                <div className="hidden lg:flex items-center space-x-5 absolute left-1/2 transform -translate-x-1/2 w-max pointer-events-auto h-full">
                    <Link href="/" className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-primary transition-colors">
                        Home
                    </Link>

                    <div
                        className="relative h-full flex items-center"
                        onMouseEnter={handleServicesEnter}
                        onMouseLeave={handleServicesLeave}
                    >
                        <Link href="/services" className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-primary transition-colors py-4">
                            Services
                        </Link>
                    </div>

                    <Link href="/services/staffing" className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-primary transition-colors">
                        HR & Staffing
                    </Link>
                    <Link href="/how-we-work" className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-primary transition-colors">
                        How We Work
                    </Link>
                    <Link href="/why-zynquor" className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-primary transition-colors">
                        Why Zynquor
                    </Link>
                    <Link href="/contact" className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <Link href="/about" className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-primary transition-colors">
                        About
                    </Link>
                </div>

                {/* Actions */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Button variant="primary" size="sm" className="uppercase tracking-widest font-bold text-xs h-10 px-6 rounded-md">
                        Strategic Consultation
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-gray-900 dark:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mega Menu - Positioned relative to Nav */}
            <div
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
                className="absolute left-0 top-full w-full"
            >
                <ServicesMegaMenu isOpen={isServicesHovered} />
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-grid-light dark:border-grid-dark p-6 lg:hidden flex flex-col space-y-4 shadow-xl">
                    <Link href="/services" className="text-base font-display font-bold uppercase tracking-widest py-2 border-b border-grid-light dark:border-grid-dark" onClick={() => setIsMobileMenuOpen(false)}>
                        Services
                    </Link>
                    <Link href="/about" className="text-base font-display font-bold uppercase tracking-widest py-2 border-b border-grid-light dark:border-grid-dark" onClick={() => setIsMobileMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="/case-studies" className="text-base font-display font-bold uppercase tracking-widest py-2 border-b border-grid-light dark:border-grid-dark" onClick={() => setIsMobileMenuOpen(false)}>
                        Case Studies
                    </Link>
                    <div className="pt-4">
                        <Button variant="primary" size="lg" className="w-full">
                            Strategic Consultation
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
