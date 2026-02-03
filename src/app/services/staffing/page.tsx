import React from 'react';
import { StaffingHero } from '@/components/services/staffing/StaffingHero';
import { StaffingModels } from '@/components/services/staffing/StaffingModels';
import { StaffingComparison } from '@/components/services/staffing/StaffingComparison';
import { StaffingRoles } from '@/components/services/staffing/StaffingRoles';
import { StaffingProcess } from '@/components/services/staffing/StaffingProcess';
import { StaffingCTA } from '@/components/services/staffing/StaffingCTA';

export default function StaffingPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-background-dark pt-20">
            <StaffingHero />
            <StaffingModels />
            <StaffingComparison />
            <StaffingRoles />
            <StaffingProcess />
            <StaffingCTA />
        </main>
    );
}
