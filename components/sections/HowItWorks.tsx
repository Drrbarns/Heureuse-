"use client";

import Section from "@/components/ui/section";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { ClipboardList, PhoneCall, Truck, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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

            <div ref={ref} className="grid md:grid-cols-4 gap-8 relative max-w-6xl mx-auto z-10 px-4">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0">
                    <motion.div 
                        style={{ width: lineWidth }}
                        className="absolute inset-0 bg-gradient-to-r from-heureuse-navy/20 to-heureuse-gold/50 h-full"
                    ></motion.div>
                </div>

                {steps.map((step, i) => (
                    <ScrollAnimation key={i} delay={i * 0.15} variant="scale" className="relative z-10">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon Circle */}
                            <div className="relative mb-8">
                                <motion.div 
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.8, type: "spring" }}
                                    className="w-28 h-28 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-lg group-hover:border-heureuse-gold group-hover:shadow-heureuse-gold/20 transition-all duration-500 relative z-10"
                                >
                                    <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-heureuse-navy transition-colors duration-500">
                                        <step.icon className="w-10 h-10 text-heureuse-navy group-hover:text-heureuse-gold transition-colors duration-500" />
                                    </div>
                                </motion.div>
                                {/* Number Badge */}
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.2 + 0.5, type: "spring" }}
                                    className="absolute top-0 right-0 w-8 h-8 rounded-full bg-heureuse-gold border-2 border-white flex items-center justify-center text-xs font-bold text-heureuse-navy shadow-md z-20"
                                >
                                    {step.num}
                                </motion.div>
                            </div>

                            <h3 className="text-xl font-bold text-heureuse-navy mb-3 group-hover:text-heureuse-gold transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed px-2">
                                {step.desc}
                            </p>
                        </motion.div>
                    </ScrollAnimation>
                ))}
            </div>
        </Section>
    );
}
