import type { Metadata } from 'next';
import Image from "next/image";
import Section from "@/components/ui/section";
import CTA from "@/components/sections/CTA";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Industries Served",
    description: "Serving OMCs, Construction, Mining, Transport, and Corporate institutions with reliable bulk fuel supply in Ghana.",
    keywords: ["OMC Supply", "Construction Fuel", "Mining Fuel", "Transport Fleet Fuel", "Institutional Fuel"],
});

const industries = [
    {
        name: "Oil Marketing Companies (OMCs)",
        desc: "We serve as a reliable supply partner for OMCs, bridging the gap between BDCs and retail stations. Our efficient logistics ensure you never run dry.",
        image: "/images/industries/omc-station.png"
    },
    {
        name: "Construction & Infrastructure",
        desc: "Road networks, bridges, and building projects require immense power. We deliver directly to site tanks, reducing downtime for your excavators and trucks.",
        image: "/images/industries/construction-site.png"
    },
    {
        name: "Transport & Fleet Operators",
        desc: "For logistics companies, fuel is the biggest cost. Our bulk supply contracts help you manage price and ensure quality, protecting your engines.",
        image: "/7.jpg"
    },
    {
        name: "Manufacturing & Industrial",
        desc: "Backup generators and industrial boilers need steady fuel. We provide scheduled top-ups to ensure your production lines keep moving.",
        image: "/images/industries/manufacturing-factory.png"
    },
    {
        name: "Mining & Quarrying",
        desc: "Operating in remote and rugged terrains? Our fleet is equipped to reach your site safely and discharge according to strict safety protocols.",
        image: "/images/industries/mining-quarry.png"
    },
    {
        name: "Institutions (Schools, Hospitals, Hotels)",
        desc: "Reliable power is non-negotiable for hospitals and hotels. We offer priority emergency delivery services for institutional clients.",
        image: "/6.jpg"
    }
];

export default function IndustriesPage() {
    return (
        <div>
            <Section background="hero-image" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
                    <p className="text-xl text-gray-300">
                        Tailored fuel solutions for the backbone of Ghana's economy.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind, i) => (
                        <Card key={i} className="hover:shadow-lg transition-shadow border-t-4 border-t-heureuse-gold overflow-hidden group">
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={ind.image}
                                    alt={ind.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl text-heureuse-navy">{ind.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {ind.desc}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>


            <CTA />
        </div>
    );
}
