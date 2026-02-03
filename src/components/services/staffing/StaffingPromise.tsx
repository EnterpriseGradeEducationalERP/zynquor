"use client";

import React from 'react';

export const StaffingPromise = () => {
    return (
        <section className="relative overflow-hidden bg-primary px-6 py-24 lg:px-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg height="100%" viewBox="0 0 800 800" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#FFF" strokeWidth="1">
                        <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
                        <path d="M-31 229L237 261 390 382 603 493 308.5 538.5 101.5 381.5M370 905L295 764"></path>
                        <path d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
                        <path d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382"></path>
                        <path d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269"></path>
                    </g>
                </svg>
            </div>
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
                <div className="mb-6 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm shadow-sm border border-white/20">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">The ZYNQUOR Promise</span>
                </div>
                <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
                    "Stability is not accidental.<br /> It is engineered."
                </h2>
                <p className="mt-8 max-w-2xl text-lg font-medium text-white/90 md:text-xl leading-relaxed">
                    We don't rely on luck or legacy code. Every system we deploy is tested against chaos, ensuring your business stays online, secure, and ready for whatever comes next.
                </p>
            </div>
        </section>
    );
};
