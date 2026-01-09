import type { Metadata } from 'next';
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb, SchemaLocalBusiness } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import ContactContent from "./ContactContent";

export const metadata = constructMetadata({
    title: "Contact Us | Get in Touch",
    description: "Contact Heureuse Logistics for bulk fuel supply inquiries, quotes, and support. Reach us by phone, email, or visit our office in Accra, Ghana. Available 24/7 for emergencies.",
    keywords: [
        "Contact Heureuse Logistics",
        "Fuel Supply Contact Ghana",
        "Bulk Diesel Order Phone",
        "Fuel Delivery Accra Office",
        "Ghana Fuel Supplier Customer Service",
        "24/7 Emergency Fuel Support",
        "Fuel Quote Request Ghana"
    ],
    canonical: "/contact",
});

export default function ContactPage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "Contact", url: `${COMPANY_INFO.website}/contact` }
            ]} />
            <SchemaLocalBusiness
                geo={{ latitude: 5.6037, longitude: -0.1870 }}
            />
            <ContactContent />
        </>
    );
}
