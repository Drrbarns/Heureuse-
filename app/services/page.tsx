import type { Metadata } from 'next';
import Image from "next/image";
import Section from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import CTA from "@/components/sections/CTA";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Bulk Fuel Supply Services",
    description: "Comprehensive fuel logistics services: Bulk Diesel (AGO), Petrol (PMS), direct-to-site delivery, and corporate fuel management contracts in Ghana.",
    keywords: ["Bulk Diesel", "Petrol Supply", "Direct Delivery", "Fuel Management", "Ghana Logistics"],
});

const services = [
    {
        title: "Bulk Diesel Supply (AGO)",
        content: "Our core service. We supply premium Automotive Gas Oil (AGO) to OMCs, industrial sites, and commercial fleets. We guarantee pure product, free from adulteration, sourced from top Bulk Distribution Companies (BDCs).",
        features: ["Ultra-low sulfur content available", "Certificate of analysis provided", "Flexible volume options"],
        image: "/1.jpg"
    },
    {
        title: "Bulk Petrol Supply (PMS)",
        content: "Reliable supply of Premium Motor Spirit (PMS) for filling stations and commercial use. We ensure safe transport and timely discharge to keep your pumps running.",
        features: ["Consistent availability", "Safety-compliant tankers", "Competitive pricing"],
        image: "/2.jpg"
    },
    {
        title: "Corporate Fuel Management",
        content: "We act as your outsourced fuel department. We monitor your usage, schedule refills automatically, and provide detailed reporting to help you manage costs.",
        features: ["Usage tracking & reporting", "Automatic replenishment", "Dedicated account manager"],
        image: "/3.jpg"
    },
    {
        title: "Project Site & Remote Delivery",
        content: "Getting fuel to hard-to-reach locations is our specialty. Whether it's a road construction project or a new mine site, our trucks are equipped for the terrain.",
        features: ["Off-road capable fleet", "On-site discharge support", "Emergency delivery options"],
        image: "/4.jpg"
    }
];

export default function ServicesPage() {
    return (
        <div>
            <Section background="hero-image" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-gray-300">
                        End-to-end bulk fuel supply and logistics solutions designed for reliability and efficiency.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-8 items-center border-b border-gray-100 pb-12 last:border-0">
                            <div className={index % 2 === 1 ? "md:order-2" : ""}>
                                <div className="aspect-video rounded-xl bg-gray-100 overflow-hidden shadow-md relative group">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-heureuse-navy/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                            </div>
                            <div className={index % 2 === 1 ? "md:order-1" : ""}>
                                <h2 className="text-3xl font-bold text-heureuse-navy mb-4">{service.title}</h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {service.content}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-heureuse-gold" />
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>


            <Section background="muted">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-heureuse-navy mb-8">What We Need From You</h2>
                    <Card>
                        <CardContent className="pt-6 text-left space-y-4">
                            <p>To ensure a smooth delivery, please have the following ready when requesting a quote:</p>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                <li>Accurate volume requirements (in liters)</li>
                                <li>Specific delivery location (GPS pin preferred for new sites)</li>
                                <li>Preferred delivery window</li>
                                <li>Storage tank capacity and condition</li>
                                <li>Site access details (for large trucks)</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            <CTA />
        </div>
    );
}
