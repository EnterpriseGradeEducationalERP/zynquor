"use client";

import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { serviceGroups } from './servicesMenuData';

export const ServicesMegaMenu = ({ isOpen }: { isOpen: boolean }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useLayoutEffect(() => {
        if (!isOpen) {
            // Reset when closed
            gsap.set(containerRef.current, { opacity: 0, scale: 0.95, display: 'none' });
            return;
        }

        const ctx = gsap.context(() => {
            // Container entrance
            gsap.to(containerRef.current, {
                display: 'flex',
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });

            // Cards stagger entrance
            gsap.fromTo(cardsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power3.out", delay: 0.1 }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [isOpen]);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <div
            ref={containerRef}
            className="absolute top-full left-0 w-[1000px] bg-transparent pt-4 flex gap-4 origin-top hidden z-50 pointer-events-auto"
            style={{ display: 'none' }} // Initial state
        >
            {serviceGroups.map((group, idx) => (
                <div
                    key={idx}
                    ref={addToRefs}
                    className="flex-1 flex flex-col p-8 rounded-2xl min-h-[260px] transition-transform hover:-translate-y-1 duration-300 shadow-[0_25px_50px_-12px_rgba(245,115,27,0.3)]"
                    style={{ backgroundColor: group.bgColor, color: group.textColor }}
                >
                    <h3 className="text-2xl font-medium">{group.label}</h3>
                    <div className="flex flex-col gap-2 mt-[20px]">
                        {group.links.map((link, lIdx) => (
                            <Link
                                key={lIdx}
                                href={link.href}
                                className="flex items-center gap-3 opacity-90 hover:opacity-100 hover:text-black transition-all duration-300 text-base group font-medium"
                            >
                                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
