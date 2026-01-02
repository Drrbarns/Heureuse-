"use client";

import Section from "@/components/ui/section";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { ClipboardList, PhoneCall, Truck, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress: sectionProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    
    const { scrollYProgress: gridProgress } = useScroll({
        target: gridRef,
        offset: ["start center", "end center"],
    });

    const lineWidth = useTransform(gridProgress, [0, 1], ["0%", "100%"]);
    const tankY = useTransform(sectionProgress, [0, 1], [100, -100]);
    const tankkY = useTransform(sectionProgress, [0, 1], [-50, 150]);
    const bgY = useTransform(sectionProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={sectionRef} className="relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div style={{ y: bgY }} className="absolute inset-0 h-[120%] -top-[10%]">
                    <Image
                        src="/truck1.jpg"
                        alt="Seamless Operations"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-heureuse-navy/50"></div>
            </div>

            <Section className="relative overflow-hidden py-24 bg-transparent" id="process">
                {/* Parallax Floating Element - Right Side */}
                <motion.div 
                    style={{ y: tankY }}
                    className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-10 z-0 pointer-events-none hidden lg:block"
                >
                <Image
                    src="/tank1.jpg"
                    alt="Fuel Tank Abstract"
                    fill
                    className="object-cover rounded-full blur-sm grayscale"
                />
            </motion.div>

            {/* Parallax Floating Element - Left Side */}
            <motion.div 
                style={{ y: tankkY }}
                className="absolute -top-32 -left-32 w-[400px] h-[400px] opacity-15 z-0 pointer-events-none hidden lg:block"
            >
                <Image
                    src="/tankk.jpg"
                    alt="Fuel Tank Abstract"
                    fill
                    className="object-cover rounded-full blur-sm grayscale"
                />
            </motion.div>

            <ScrollAnimation variant="slideUp" className="text-center mb-20 relative z-10">
                <span className="text-heureuse-gold font-bold tracking-widest text-xs uppercase mb-3 block">Seamless Operations</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How We Deliver Excellence</h2>
                <p className="text-gray-300 max-w-xl mx-auto text-lg pt-2 leading-relaxed">
                    A streamlined, transparent process designed to keep your business running without interruption.
                </p>
            </ScrollAnimation>

            <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-8 relative max-w-6xl mx-auto z-10 px-4">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0">
                    <motion.div 
                        style={{ width: lineWidth }}
                        className="absolute inset-0 bg-gradient-to-r from-heureuse-gold/20 to-heureuse-gold h-full"
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
                                    className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-heureuse-gold group-hover:shadow-heureuse-gold/20 transition-all duration-500 relative z-10 backdrop-blur-sm"
                                >
                                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-heureuse-gold transition-colors duration-500">
                                        <step.icon className="w-10 h-10 text-white group-hover:text-heureuse-navy transition-colors duration-500" />
                                    </div>
                                </motion.div>
                                {/* Number Badge */}
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.2 + 0.5, type: "spring" }}
                                    className="absolute top-0 right-0 w-8 h-8 rounded-full bg-heureuse-gold border-2 border-heureuse-navy flex items-center justify-center text-xs font-bold text-heureuse-navy shadow-md z-20"
                                >
                                    {step.num}
                                </motion.div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-heureuse-gold transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed px-2">
                                {step.desc}
                            </p>
                        </motion.div>
                    </ScrollAnimation>
                ))}
            </div>
        </Section>
        </div>
    );
}
