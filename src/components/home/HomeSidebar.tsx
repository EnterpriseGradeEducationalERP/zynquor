import React from 'react';

export const HomeSidebar = () => {
    return (
        <div className="fixed top-0 left-0 bottom-0 w-[120px] z-40 border-r border-[#E5E5E5] dark:border-[#262626] hidden md:flex flex-col justify-between py-24 items-center bg-transparent pointer-events-none">
            <div className="transform -rotate-90 origin-center whitespace-nowrap mt-32">
                <h1 className="text-sm tracking-[0.3em] font-bold uppercase text-gray-400 dark:text-gray-600 font-display">ZYNQUOR Systems</h1>
            </div>
            <div className="flex flex-col space-y-4 text-xs text-gray-400 dark:text-gray-600 font-mono">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span className="text-[#F5731B] font-bold">04</span>
            </div>
        </div>
    );
};
