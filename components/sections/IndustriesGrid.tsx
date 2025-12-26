"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/section";
import { Building2, Tractor, Truck, School, Warehouse, Zap } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const industries = [
    { name: "Oil Marketing Companies (OMCs)", icon: Zap },
    { name: "Construction & Mining", icon: Tractor },
    { name: "Transport & Logistics", icon: Truck },
    { name: "Manufacturing Plants", icon: FactoryIcon },
    { name: "Commercial Farming", icon: Tractor }, // Reusing Tractor for Farm
    { name: "Schools & Hospitals", icon: School },
];

function FactoryIcon(props: React.SVGProps<SVGSVGElement>) {
    return <Building2 {...props} />
}

export default function IndustriesGrid() {
    return (
        <Section background="navy">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollAnimation variant="slideRight">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Powering Key Industries Across Ghana
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        From the bustling city centers to remote project sites, Heureuse Logistics understands the critical need for uninterrupted power. We specialize in serving sectors where downtime is not an option.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {industries.map((ind, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                                <ind.icon className="h-5 w-5 text-heureuse-gold" />
                                <span className="font-medium text-gray-100">{ind.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <Link href="/industries" className="text-heureuse-gold font-semibold hover:text-white transition-colors underline underline-offset-4">
                            Explore our industry expertise &rarr;
                        </Link>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation variant="slideLeft" className="relative h-[300px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 group mt-8 lg:mt-0">
                    <Image
                        src="/tankk.jpg"
                        alt="Industry Operations"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heureuse-navy/80 to-transparent opacity-60 hover:opacity-40 transition-opacity duration-500"></div>
                </ScrollAnimation>
            </div>
        </Section>
    );
}
