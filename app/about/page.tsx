import type { Metadata } from 'next';
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import AboutContent from "./AboutContent";

export const metadata = constructMetadata({
    title: "About Us | Ghana's Trusted Bulk Fuel Partner",
    description: "Learn about Heureuse Logistics - Ghana's premier bulk fuel supply company. Discover our mission, vision, values, and commitment to reliable energy delivery across West Africa.",
    keywords: [
        "About Heureuse Logistics",
        "Bulk Fuel Company Ghana",
        "Fuel Supplier History",
        "Ghana Energy Partner",
        "Trusted Fuel Logistics",
        "Fuel Supply Mission"
    ],
    canonical: "/about",
});

export default function AboutPage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "About Us", url: `${COMPANY_INFO.website}/about` }
            ]} />
            <AboutContent />
        </>
    );
}
