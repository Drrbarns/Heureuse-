import type { Metadata } from 'next';
import Image from "next/image";
import Section from "@/components/ui/section";
import CTA from "@/components/sections/CTA";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = constructMetadata({
    title: "Industries We Serve | OMCs, Construction, Mining & More",
    description: "Serving OMCs, Construction, Mining, Transport, and Corporate institutions with reliable bulk fuel supply in Ghana. Tailored solutions for every industry.",
    keywords: [
        "OMC Fuel Supply Ghana",
        "Construction Site Diesel",
        "Mining Fuel Supply",
        "Transport Fleet Fuel",
        "Industrial Fuel Ghana",
        "Hospital Generator Fuel",
        "Hotel Fuel Supply"
    ],
    canonical: "/industries",
});

const industries = [
    {
        name: "Oil Marketing Companies (OMCs)",
        desc: "We serve as a reliable supply partner for OMCs, bridging the gap between BDCs and retail stations. Our efficient logistics ensure you never run dry.",
        image: "/1.jpg"
    },
    {
        name: "Construction & Infrastructure",
        desc: "Road networks, bridges, and building projects require immense power. We deliver directly to site tanks, reducing downtime for your excavators and trucks.",
        image: "/referral-partner.jpg"
    },
    {
        name: "Transport & Fleet Operators",
        desc: "For logistics companies, fuel is the biggest cost. Our bulk supply contracts help you manage price and ensure quality, protecting your engines.",
        image: "/truck1.jpg"
    },
    {
        name: "Manufacturing & Industrial",
        desc: "Backup generators and industrial boilers need steady fuel. We provide scheduled top-ups to ensure your production lines keep moving.",
        image: "/3.jpg"
    },
    {
        name: "Mining & Quarrying",
        desc: "Operating in remote and rugged terrains? Our fleet is equipped to reach your site safely and discharge according to strict safety protocols.",
        image: "/4.jpg"
    },
    {
        name: "Institutions (Schools, Hospitals, Hotels)",
        desc: "Reliable power is non-negotiable for hospitals and hotels. We offer priority emergency delivery services for institutional clients.",
        image: "/5.jpg"
    }
];

export default function IndustriesPage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "Industries", url: `${COMPANY_INFO.website}/industries` }
            ]} />
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
        </>
    );
}
