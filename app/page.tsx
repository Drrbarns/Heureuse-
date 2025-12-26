import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Section from "@/components/ui/section";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import PartnerLogos from "@/components/sections/PartnerLogos";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export const metadata = constructMetadata({
    title: "Reliable Bulk Fuel Supply in Ghana",
    description: "Heureuse Logistics provides seamless bulk diesel and petrol supply for OMCs, construction, and corporate fleets in Ghana. Request a quote today.",
});

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <TrustBar />
            <ServicesGrid />
            <IndustriesGrid />
            <HowItWorks />

            {/* Partner Logos */}
            <PartnerLogos />

            {/* FAQ Preview */}
            <Section>
                <ScrollAnimation variant="slideUp" className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-heureuse-navy">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Do you deliver to remote construction sites?</AccordionTrigger>
                            <AccordionContent>
                                Yes, our specialized fleet is designed to reach remote sites, including mining and construction areas across Ghana.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>What is the minimum order quantity?</AccordionTrigger>
                            <AccordionContent>
                                Our standard minimum for bulk delivery is usually 1,000 - 5,000 liters, depending on location. Contact us for specific requirements.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Do you offer credit terms for corporate clients?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we offer flexible credit terms for verified corporate clients and OMCs after an initial credit assessment.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="text-center mt-8">
                        <Link href="/faqs" className="text-heureuse-navy underline underline-offset-4 hover:text-heureuse-gold font-medium">
                            View all FAQs
                        </Link>
                    </div>
                </ScrollAnimation>
            </Section>

            <CTA />
        </div>
    );
}
