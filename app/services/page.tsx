import type { Metadata } from 'next';
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb, SchemaService } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import ServicesContent from "./ServicesContent";

export const metadata = constructMetadata({
    title: "Our Services | Bulk Fuel Supply Solutions",
    description: "Comprehensive bulk fuel supply services in Ghana. Diesel (AGO), Petrol (PMS), corporate fuel management, and remote site delivery for OMCs, construction, and mining.",
    keywords: [
        "Bulk Diesel Supply Ghana",
        "AGO Supply",
        "PMS Supply Ghana",
        "Corporate Fuel Management",
        "Remote Site Fuel Delivery",
        "Mining Fuel Supply Ghana",
        "Construction Fuel Delivery"
    ],
    canonical: "/services",
});

export default function ServicesPage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "Services", url: `${COMPANY_INFO.website}/services` }
            ]} />
            <SchemaService
                serviceType="Bulk Fuel Supply"
                serviceName="Bulk Fuel Supply Services"
                description="Comprehensive bulk fuel supply services including diesel (AGO), petrol (PMS), corporate fuel management, and remote site delivery across Ghana."
                areaServed={["Ghana"]}
                serviceOutput={{
                    name: "Bulk Diesel and Petrol",
                    description: "High-quality bulk diesel and petrol supply for OMCs, construction sites, and industrial facilities"
                }}
            />
            <ServicesContent />
        </>
    );
}
