"use client";

import Link from "next/link";
import Image from "next/image"; // Added import
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Section from "@/components/ui/section";
import { Droplets, Truck, Factory, ShieldCheck, ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        title: "Bulk Diesel Supply (AGO)",
        description: "Premium ultra-low sulfur diesel for industrial fleets, generators, and heavy machinery. Guaranteed quality specs and exact quantities.",
        icon: Droplets,
        href: "/services",
        image: "/1.jpg",
    },
    {
        title: "Corporate Fuel Contracts",
        description: "Long-term supply agreements for OMCs and large institutions. Lock in reliability and enjoy priority dispatch during shortages.",
        icon: Factory,
        href: "/services",
        image: "/3.jpg",
    },
    {
        title: "Direct-to-Site Delivery",
        description: "We bring fuel exactly where you need it—construction sites, remote mines, or farm depots—with our specialized tanker fleet.",
        icon: Truck,
        href: "/services",
        image: "/4.jpg",
    },
    {
        title: "Quality Assurance",
        description: "Every drop is verified. We adhere to rigorous safety standards and NPA regulations to ensure your equipment stays safe.",
        icon: ShieldCheck,
        href: "/services",
        image: "/6.jpg",
    },
];

export default function ServicesGrid() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <Section className="bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="services">
            {/* Subtle mesh pattern background with parallax */}
            <motion.div 
                style={{ y }}
                className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
            ></motion.div>

            <ScrollAnimation className="text-center max-w-2xl mx-auto mb-16 relative z-10">
                <span className="text-heureuse-gold font-semibold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
                <h2 className="text-3xl md:text-5xl font-bold text-heureuse-navy mb-6 tracking-tight">
                    Fueling Your <span className="relative inline-block">
                        Business Growth
                        <motion.span 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="absolute bottom-1 left-0 h-2 bg-heureuse-gold/20 -z-10 rounded-sm"
                        ></motion.span>
                    </span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
                    We offer comprehensive bulk fuel solutions tailored to the unique demands of the Ghanaian market.
                </p>
            </ScrollAnimation>

            <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {services.map((service, index) => (
                    <ScrollAnimation key={index} delay={index * 0.1} variant="scale" className="h-full">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="h-full"
                        >
                            <Card className="h-full border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white hover:border-heureuse-gold/30 flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image 
                                        src={service.image} 
                                        alt={service.title} 
                                        fill 
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-heureuse-navy/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                <CardHeader className="space-y-4 pt-6 relative">
                                    <div className="absolute -top-10 left-6 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10 border border-gray-100">
                                        <service.icon className="h-7 w-7 text-heureuse-navy group-hover:text-heureuse-gold transition-colors" />
                                    </div>
                                    <div className="pt-2">
                                        <CardTitle className="text-xl font-bold group-hover:text-heureuse-navy transition-colors">{service.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <CardDescription className="text-base text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </CardDescription>
                                    <Link href={service.href} className="text-sm font-bold text-heureuse-navy hover:text-heureuse-gold inline-flex items-center group/link transition-all">
                                        Learn more <motion.span className="ml-1" whileHover={{ x: 5 }}><ArrowRight className="w-4 h-4" /></motion.span>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </ScrollAnimation>
                ))}
            </div>

            <ScrollAnimation variant="slideUp" delay={0.4} className="text-center mt-16 relative z-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline" size="lg" className="border-heureuse-navy text-heureuse-navy hover:bg-heureuse-navy hover:text-white transition-all duration-300 font-semibold px-8 shadow-sm hover:shadow-md">
                        <Link href="/services">View All Services</Link>
                    </Button>
                </motion.div>
            </ScrollAnimation>
        </Section>
    );
}
