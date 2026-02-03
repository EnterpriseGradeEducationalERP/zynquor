"use client";

import React from 'react';
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";

export default function ServicesPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark">
            <ServicesHero />
            <ServicesGrid />
        </div>
    );
}
