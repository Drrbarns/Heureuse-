"use client";

import React from 'react';
import Section from "@/components/ui/section";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import Image from 'next/image';

export default function PartnerLogos() {
    return (
        <Section background="muted" className="text-center overflow-hidden py-10 relative">
            <ScrollAnimation variant="slideUp" className="max-w-4xl mx-auto mb-10">
                <h2 className="text-2xl font-bold text-heureuse-navy">Trusted by Industry Leaders</h2>
                <p className="text-muted-foreground mt-2">Powering operations for Ghana&apos;s biggest companies</p>
            </ScrollAnimation>

            <div className="relative w-full max-w-7xl mx-auto">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                <div className="flex overflow-hidden group">
                    {/* The animation duration should be adjusted based on the number of logos to ensure smooth scrolling */}
                    <div className="flex gap-16 min-w-full items-center justify-center p-10">
                        <Logos />
                    </div>
                </div>
            </div>
        </Section>
    );
}

function Logos() {
    return (
        <>
            {/* Shell */}
            <div className="relative h-20 w-32 flex items-center justify-center transition-transform duration-300 transform hover:scale-90">
                <img
                    src="/logos/shell.png"
                    alt="Shell"
                    className="h-16 w-auto object-contain"
                />
            </div>
            {/* TotalEnergies */}
            <div className="relative h-20 w-32 flex items-center justify-center transition-transform duration-300 transform hover:scale-90">
                <img
                    src="/logos/total.png"
                    alt="TotalEnergies"
                    className="h-14 w-auto object-contain"
                />
            </div>
            {/* Puma Energy */}
            <div className="relative h-20 w-32 flex items-center justify-center transition-transform duration-300 transform hover:scale-90">
                <img
                    src="/logos/puma.png"
                    alt="Puma Energy"
                    className="h-14 w-auto object-contain"
                />
            </div>
            {/* GOIL */}
            <div className="relative h-20 w-32 flex items-center justify-center transition-transform duration-300 transform hover:scale-90">
                <img
                    src="/logos/goil.png"
                    alt="GOIL"
                    className="h-14 w-auto object-contain mix-blend-multiply"
                />
            </div>
            {/* Zen Petroleum */}
            <div className="relative h-20 w-32 flex items-center justify-center transition-transform duration-300 transform hover:scale-90">
                <img
                    src="/logos/zen.png"
                    alt="ZEN Petroleum"
                    className="h-14 w-auto object-contain"
                />
            </div>
        </>
    )
}
