"use client";

import React from 'react';
import Section from "@/components/ui/section";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import Image from 'next/image';

export default function PartnerLogos() {
    return (
        <Section background="muted" className="text-center overflow-hidden py-12 md:py-16 relative">
            <ScrollAnimation variant="slideUp" className="max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-heureuse-navy">Trusted by Industry Leaders</h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">Powering operations for Ghana&apos;s biggest companies</p>
            </ScrollAnimation>

            <div className="relative w-full max-w-7xl mx-auto">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none"></div>

                <div className="flex overflow-hidden">
                    <div className="flex gap-12 md:gap-20 items-center animate-scroll-logos">
                        <Logos />
                        <Logos />
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
            <div className="relative h-24 md:h-32 w-40 md:w-48 flex items-center justify-center transition-transform duration-300 hover:scale-110 opacity-90 hover:opacity-100">
                <Image
                    src="/logos/shell.png"
                    alt="Shell"
                    width={192}
                    height={96}
                    className="h-20 md:h-28 w-auto object-contain"
                    loading="lazy"
                />
            </div>
            {/* TotalEnergies */}
            <div className="relative h-24 md:h-32 w-40 md:w-48 flex items-center justify-center transition-transform duration-300 hover:scale-110 opacity-90 hover:opacity-100">
                <Image
                    src="/logos/total.png"
                    alt="TotalEnergies"
                    width={192}
                    height={84}
                    className="h-20 md:h-28 w-auto object-contain"
                    loading="lazy"
                />
            </div>
            {/* Puma Energy */}
            <div className="relative h-24 md:h-32 w-40 md:w-48 flex items-center justify-center transition-transform duration-300 hover:scale-110 opacity-90 hover:opacity-100">
                <Image
                    src="/logos/puma.png"
                    alt="Puma Energy"
                    width={192}
                    height={84}
                    className="h-20 md:h-28 w-auto object-contain"
                    loading="lazy"
                />
            </div>
            {/* GOIL */}
            <div className="relative h-24 md:h-32 w-40 md:w-48 flex items-center justify-center transition-transform duration-300 hover:scale-110 opacity-90 hover:opacity-100">
                <Image
                    src="/logos/goil.png"
                    alt="GOIL"
                    width={192}
                    height={84}
                    className="h-20 md:h-28 w-auto object-contain"
                    loading="lazy"
                />
            </div>
            {/* Zen Petroleum */}
            <div className="relative h-24 md:h-32 w-40 md:w-48 flex items-center justify-center transition-transform duration-300 hover:scale-110 opacity-90 hover:opacity-100">
                <Image
                    src="/logos/zen.png"
                    alt="ZEN Petroleum"
                    width={192}
                    height={84}
                    className="h-20 md:h-28 w-auto object-contain"
                    loading="lazy"
                />
            </div>
        </>
    )
}
