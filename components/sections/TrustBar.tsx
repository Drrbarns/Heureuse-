"use client";

import Section from "@/components/ui/section";
import { CheckCircle2, Truck, Clock, Shield } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";

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
        <Section className="py-12 md:py-16 border-b bg-white relative z-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {features.map((feature, i) => (
                    <ScrollAnimation key={i} delay={i * 0.1} variant="fade">
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center text-center space-y-3 px-2 group cursor-default"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-3 rounded-full bg-heureuse-navy/5 text-heureuse-navy mb-2 group-hover:bg-heureuse-navy group-hover:text-white transition-colors duration-300"
                            >
                                <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                            </motion.div>
                            <h3 className="font-bold text-heureuse-navy text-sm md:text-base group-hover:text-heureuse-gold transition-colors duration-300">{feature.title}</h3>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    </ScrollAnimation>
                ))}
            </div>
        </Section>
    );
}
