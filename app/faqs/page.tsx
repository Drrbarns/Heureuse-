import type { Metadata } from 'next';
import Section from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { constructMetadata } from "@/lib/seo";
import CTA from "@/components/sections/CTA";
import { SchemaFAQ } from "@/components/seo";

export const metadata = constructMetadata({
    title: "Frequently Asked Questions",
    description: "Answers to common questions about bulk fuel supply, delivery logistics, and corporate accounts with Heureuse Logistics.",
    keywords: [
        "Bulk Fuel FAQ",
        "Diesel Delivery Questions",
        "Heureuse Logistics Help",
        "Minimum Order Quantity Fuel",
        "Fuel Supply FAQ",
        "Bulk Fuel Delivery Questions"
    ],
    canonical: "/faqs",
});

const faqs = [
    {
        category: "Ordering & Delivery",
        items: [
            { q: "What is your minimum order quantity?", a: "For bulk deliveries, our minimum order quantity is typically 1,000 liters within Accra and 5,000 liters for other regions. However, we can discuss custom arrangements based on your contract." },
            { q: "How fast can you deliver?", a: "We aim for 24-48 hour delivery windows for verified orders. Emergency same-day delivery is available for contracted partners." },
            { q: "Do you deliver on weekends?", a: "Yes, our logistics team operates 7 days a week to ensure your operations never stop." },
        ]
    },
    {
        category: "Product Quality & Safety",
        items: [
            { q: "How do you guarantee fuel quality?", a: "We source only from top-tier Bulk Distribution Companies (BDCs) and provide a Certificate of Analysis (CoA) upon request. Our tankers are sealed and tracked." },
            { q: "Are your trucks compliant with safety standards?", a: "Absolutely. All our trucks are NPA-licensed, fitted with tracking devices, and operated by trained drivers adhering to strict HSSE protocols." },
            { q: "Do you supply low-sulfur diesel?", a: "Yes, we supply standard low-sulfur diesel (50ppm or lower) suitable for modern engines, heavy machinery, and sensitive generators to extend their lifespan." }
        ]
    },
    {
        category: "Payments, Pricing & Coverage",
        items: [
            { q: "What is the current price of bulk diesel?", a: "Bulk fuel prices fluctuate based on deregulation and NPA window rates. tailored to your volume. Contact us for a real-time, competitive quote." },
            { q: "Do you offer credit facilities?", a: "Yes, we offer flexible credit terms to qualifying corporate clients and OMCs after a standard credit assessment." },
            { q: "What areas do you cover in Ghana?", a: "We have nationwide coverage. From the Greater Accra Region to the Ashanti, Western, Northern, and other regions, our fleet can reach your site, even in remote areas." },
            { q: "Can you fill up my backup generator?", a: "Yes, we provide specialized discharge services for corporate and industrial backup generators, ensuring your business stays powered during outages." }
        ]
    }
];

export default function FAQPage() {
    // Flatten FAQs for schema
    const faqItems = faqs.flatMap(cat =>
        cat.items.map(item => ({
            question: item.q,
            answer: item.a
        }))
    );

    return (
        <div>
            <SchemaFAQ faqs={faqItems} />
            <Section background="hero-image" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-300">
                        Everything you need to know about working with us.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="max-w-3xl mx-auto space-y-12">
                    {faqs.map((cat, i) => (
                        <div key={i}>
                            <h2 className="text-2xl font-bold text-heureuse-navy mb-6">{cat.category}</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {cat.items.map((faq, j) => (
                                    <AccordionItem key={j} value={`item-${i}-${j}`}>
                                        <AccordionTrigger className="text-left font-medium text-lg">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </Section>

            <CTA />
        </div>
    );
}
