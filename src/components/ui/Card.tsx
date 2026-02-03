import React, { ReactNode } from 'react';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
    className?: string;
    children: ReactNode;
    variant?: 'default' | 'service' | 'feature' | 'case-study';
    hoverEffect?: boolean;
}

export const Card = ({ className, children, variant = 'default', hoverEffect = true }: CardProps) => {
    const baseStyles = 'glass-card p-8 relative overflow-hidden';

    const hoverStyles = hoverEffect
        ? 'hover:border-primary/50 hover:shadow-[0_4px_20px_-4px_rgba(245,115,27,0.1)] group'
        : '';

    return (
        <div className={clsx(baseStyles, hoverStyles, className)}>
            {children}
            {/* Decorator line for hover */}
            {hoverEffect && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300" />
            )}
        </div>
    );
};

export const CardHeader = ({ children, className }: { children: ReactNode; className?: string }) => (
    <div className={clsx("mb-4", className)}>{children}</div>
);

export const CardTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
    <h3 className={clsx("text-xl font-display font-bold uppercase tracking-tight text-gray-900 mb-2", className)}>
        {children}
    </h3>
);

export const CardDescription = ({ children, className }: { children: ReactNode; className?: string }) => (
    <p className={clsx("text-sm text-gray-600 leading-relaxed", className)}>
        {children}
    </p>
);

export const CardFooter = ({ children, className }: { children: ReactNode; className?: string }) => (
    <div className={clsx("mt-6 flex items-center", className)}>{children}</div>
);

export const CardAction = ({ href, children = "Explore", className }: { href: string; children?: ReactNode; className?: string }) => (
    <Link href={href} className={clsx("inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors group-hover:translate-x-1 duration-300", className)}>
        {children}
        <ArrowRight size={14} className="ml-2" />
    </Link>
);
