import React, { ButtonHTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Loader2 } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'white';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest font-display';

        const variants = {
            primary: 'bg-primary text-white hover:bg-secondary hover:shadow-[0_0_20px_rgba(245,115,27,0.4)]',
            secondary: 'bg-secondary text-white hover:bg-primary',
            outline: 'border border-primary text-primary hover:bg-primary/10',
            ghost: 'bg-transparent text-gray-600 hover:text-primary dark:text-gray-300',
            white: 'bg-white text-black hover:bg-gray-200'
        };

        const sizes = {
            sm: 'h-9 px-4 text-xs',
            md: 'h-11 px-6 text-xs',
            lg: 'h-14 px-8 text-sm',
            xl: 'h-16 px-10 text-base'
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button, cn };
