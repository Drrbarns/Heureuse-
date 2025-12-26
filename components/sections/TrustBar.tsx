"use client";

import Section from "@/components/ui/section";
import { CheckCircle2, Truck, Clock, Shield } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const features = [
    {
        icon: Truck,
        title: "Reliable Supply",
        desc: "Consistent fuel availability, even during market shortages.",
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        desc: "Strict adherence to delivery schedules to prevent downtime.",
    },
    {
        icon: Shield,
        title: "Safety & Compliance",
        desc: "Fully licensed by NPA and adhering to strict HSSE standards.",
    },
    {
        icon: CheckCircle2,
        title: "Corporate Ready",
        desc: "Professional invoicing, transparent pricing, and credit terms.",
    },
];

export default function TrustBar() {
    return (
        <Section className="py-12 md:py-16 border-b">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {features.map((feature, i) => (
                    <ScrollAnimation key={i} delay={i * 0.1} variant="fade">
                        <div className="flex flex-col items-center text-center space-y-3 hover:-translate-y-1 transition-transform duration-300 px-2">
                            <div className="p-3 rounded-full bg-heureuse-navy/5 text-heureuse-navy mb-2 hover:bg-heureuse-navy hover:text-white transition-colors">
                                <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                            </div>
                            <h3 className="font-bold text-heureuse-navy text-sm md:text-base">{feature.title}</h3>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </Section>
    );
}
