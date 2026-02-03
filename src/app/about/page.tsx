"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ThreeCanvas } from "@/components/3d/ThreeCanvas";
import { UnityCore } from "@/components/3d/UnityCore";
import { AboutHero } from "@/components/about/AboutHero";
import { MeaningSection } from "@/components/about/MeaningSection";
import { StoryMissionSection } from "@/components/about/StoryMissionSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Target, Flag, Zap, Shield, Users } from 'lucide-react';
import { HomeScale } from '@/components/home/HomeScale';

export default function AboutPage() {
    return (
        <div>
            <AboutHero />

            <MeaningSection />

            <StoryMissionSection />
            <HomeScale />
        </div>
    );
}
