import type { Metadata } from 'next';
import Image from "next/image";
import Section from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import CTA from "@/components/sections/CTA";
import { CheckCircle2, Award, Users, Globe } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "About Us",
    description: "Learn about Heureuse Logistics, our mission, vision, and commitment to reliable fuel supply in Ghana. We prioritize integrity, reliability, and safety.",
    keywords: ["About Heureuse Logistics", "Fuel Supply Mission", "Logistics Vision", "Ghana Fuel Company"],
});

const values = [
    { title: "Integrity", desc: "We operate with total transparency in pricing and quantity." },
    { title: "Reliability", desc: "We deliver on time, every time, to keep your business running." },
    { title: "Safety", desc: "We adhere to the highest HSSE standards in fuel transportation." },
    { title: "Partnership", desc: "We build long-term relationships, not just one-off transactions." },
];

export default function AboutPage() {
    return (
        <div>
            <Section background="hero-image" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Heureuse Logistics</h1>
                    <p className="text-xl text-gray-300">
                        Powering Ghana's industries with integrity, reliability, and speed.
                    </p>
                </div>
            </Section>

            {/* Mission/Vision */}
            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold text-heureuse-navy mb-4">Our Mission</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To provide seamless, reliable, and safe bulk fuel supply solutions that empower businesses to operate without interruption. We aim to become the most trusted logistics partner in the West African sub-region.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-heureuse-navy mb-4">Our Vision</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To be the gold standard in energy logistics, recognized for our commitment to quality, safety, and customer innovation.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract Image Composition */}
                        <div className="aspect-square rounded-2xl bg-gray-100 relative overflow-hidden shadow-xl group">
                            <Image
                                src="/5.jpg"
                                alt="Heureuse Logistics Team"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-heureuse-navy/10 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-heureuse-gold/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </Section>

            {/* Values */}
            <Section background="muted">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-heureuse-navy">Our Core Values</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((val, i) => (
                        <Card key={i} className="text-center hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-12 h-12 mx-auto rounded-full bg-heureuse-navy/5 flex items-center justify-center text-heureuse-navy mb-4">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                                <p className="text-muted-foreground">{val.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Stats/Credibility */}
            <Section>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                    <div>
                        <div className="text-4xl font-bold text-heureuse-gold mb-2">5+</div>
                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Years Experience</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-heureuse-gold mb-2">50+</div>
                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Corporate Clients</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-heureuse-gold mb-2">1M+</div>
                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Liters Delivered</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-heureuse-gold mb-2">100%</div>
                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Safety Record</div>
                    </div>
                </div>
            </Section>

            <CTA />
        </div>
    );
}
