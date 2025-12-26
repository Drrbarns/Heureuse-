"use client";

import Section from "@/components/ui/section";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { ClipboardList, PhoneCall, Truck, MapPin } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Request",
        desc: "Submit your bulk fuel order via our online form or WhatsApp.",
        icon: ClipboardList,
    },
    {
        num: "02",
        title: "Confirm",
        desc: "We verify stock, pricing, and delivery timeline with you instantly.",
        icon: PhoneCall,
    },
    {
        num: "03",
        title: "Dispatch",
        desc: "Fuel is loaded and our tracked tankers are dispatched to your location.",
        icon: Truck,
    },
    {
        num: "04",
        title: "Deliver",
        desc: "Safe discharge at your site with quantity and quality verification.",
        icon: MapPin,
    },
];

export default function HowItWorks() {
    return (
        <Section className="bg-white relative overflow-hidden" id="process">
            {/* Subtle Texture Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#151E37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            <ScrollAnimation variant="slideUp" className="text-center mb-20 relative z-10">
                <span className="text-heureuse-gold font-bold tracking-widest text-xs uppercase mb-3 block">Seamless Operations</span>
                <h2 className="text-3xl md:text-5xl font-bold text-heureuse-navy mb-4">How We Deliver Excellence</h2>
                <p className="text-muted-foreground max-w-xl mx-auto text-lg pt-2 leading-relaxed">
                    A streamlined, transparent process designed to keep your business running without interruption.
                </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-4 gap-8 relative max-w-6xl mx-auto z-10 px-4">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-heureuse-navy/10 to-transparent w-full"></div>
                </div>

                {steps.map((step, i) => (
                    <ScrollAnimation key={i} delay={i * 0.15} variant="scale" className="relative z-10">
                        <div className="flex flex-col items-center text-center group">
                            {/* Icon Circle */}
                            <div className="relative mb-8">
                                <div className="w-28 h-28 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-lg group-hover:border-heureuse-gold group-hover:shadow-heureuse-gold/20 transition-all duration-500 group-hover:scale-105 relative z-10">
                                    <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-heureuse-navy transition-colors duration-500">
                                        <step.icon className="w-10 h-10 text-heureuse-navy group-hover:text-heureuse-gold transition-colors duration-500" />
                                    </div>
                                </div>
                                {/* Number Badge */}
                                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-heureuse-gold border-2 border-white flex items-center justify-center text-xs font-bold text-heureuse-navy shadow-md z-20">
                                    {step.num}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-heureuse-navy mb-3 group-hover:text-heureuse-gold transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed px-2">
                                {step.desc}
                            </p>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </Section>
    );
}
