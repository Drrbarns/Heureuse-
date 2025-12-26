"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Section from "@/components/ui/section";
import { Droplets, Truck, Factory, ShieldCheck } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const services = [
    {
        title: "Bulk Diesel Supply (AGO)",
        description: "Premium ultra-low sulfur diesel for industrial fleets, generators, and heavy machinery. Guaranteed quality specs and exact quantities.",
        icon: Droplets,
        href: "/services",
    },
    {
        title: "Corporate Fuel Contracts",
        description: "Long-term supply agreements for OMCs and large institutions. Lock in reliability and enjoy priority dispatch during shortages.",
        icon: Factory,
        href: "/services",
    },
    {
        title: "Direct-to-Site Delivery",
        description: "We bring fuel exactly where you need it—construction sites, remote mines, or farm depots—with our specialized tanker fleet.",
        icon: Truck,
        href: "/services",
    },
    {
        title: "Quality Assurance",
        description: "Every drop is verified. We adhere to rigorous safety standards and NPA regulations to ensure your equipment stays safe.",
        icon: ShieldCheck,
        href: "/services",
    },
];

export default function ServicesGrid() {
    return (
        <Section className="bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="services">
            {/* Subtle mesh pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <ScrollAnimation className="text-center max-w-2xl mx-auto mb-16 relative z-10">
                <span className="text-heureuse-gold font-semibold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
                <h2 className="text-3xl md:text-5xl font-bold text-heureuse-navy mb-6 tracking-tight">
                    Fueling Your <span className="relative inline-block">
                        Business Growth
                        <span className="absolute bottom-1 left-0 w-full h-2 bg-heureuse-gold/20 -z-10 rounded-sm"></span>
                    </span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
                    We offer comprehensive bulk fuel solutions tailored to the unique demands of the Ghanaian market.
                </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {services.map((service, index) => (
                    <ScrollAnimation key={index} delay={index * 0.1} variant="scale" className="h-full">
                        <Card className="h-full border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden bg-white hover:border-heureuse-gold/30">
                            <CardHeader className="space-y-4">
                                <div className="w-14 h-14 rounded-2xl bg-heureuse-navy/5 flex items-center justify-center group-hover:bg-heureuse-gold group-hover:text-heureuse-navy transition-all duration-300 shadow-sm group-hover:scale-110">
                                    <service.icon className="h-7 w-7 text-heureuse-navy group-hover:text-inherit" />
                                </div>
                                <CardTitle className="text-xl font-bold group-hover:text-heureuse-navy transition-colors">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </CardDescription>
                                <Link href={service.href} className="text-sm font-bold text-heureuse-navy hover:text-heureuse-gold inline-flex items-center group-hover:gap-2 transition-all">
                                    Learn more <span className="ml-1 text-lg leading-none">&rarr;</span>
                                </Link>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>
                ))}
            </div>

            <ScrollAnimation variant="slideUp" delay={0.4} className="text-center mt-16 relative z-10">
                <Button asChild variant="outline" size="lg" className="border-heureuse-navy text-heureuse-navy hover:bg-heureuse-navy hover:text-white transition-all duration-300 font-semibold px-8 shadow-sm hover:shadow-md">
                    <Link href="/services">View All Services</Link>
                </Button>
            </ScrollAnimation>
        </Section>
    );
}
