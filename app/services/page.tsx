import type { Metadata } from 'next';
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb, SchemaService } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import ServicesContent from "./ServicesContent";

export const metadata = constructMetadata({
    title: "Bulk Fuel Supply Services Ghana | Diesel & Petrol Delivery | Heureuse",
    description: "Heureuse Logistics offers bulk fuel supply services in Ghana: Diesel (AGO) delivery, Petrol (PMS) supply, OMC fuel partnership, corporate fuel management, and 24/7 fuel delivery to Accra, mines, and construction sites.",
    keywords: [
        // Primary service terms
        "Bulk Fuel Supply Ghana", "Fuel Delivery Accra", "OMC Fuel Supply Ghana",
        "Diesel Supply Ghana", "Petrol Supply Ghana",
        // Brand
        "Heureuse Services", "Heureuse Fuel Delivery",
        // Specific services
        "Bulk Diesel Supply Ghana", "AGO Supply Ghana", "PMS Supply Ghana",
        "Corporate Fuel Management", "Remote Site Fuel Delivery",
        "Mining Fuel Supply Ghana", "Construction Fuel Delivery",
        // Location-based
        "Fuel Delivery Greater Accra", "Fuel Supply Kumasi", "Fuel Supply Takoradi"
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
                serviceName="Bulk Fuel Supply Ghana - Heureuse Logistics"
                description="Ghana's premier bulk fuel supply services. Heureuse Logistics delivers diesel (AGO) and petrol (PMS) to OMCs, construction sites, mines, and corporate fleets. 24/7 fuel delivery in Accra and nationwide."
                areaServed={["Ghana", "Accra", "Kumasi", "Takoradi", "Tema"]}
                serviceOutput={{
                    name: "Bulk Diesel and Petrol Delivery",
                    description: "High-quality bulk diesel (AGO) and petrol (PMS) supply for OMCs, mining sites, construction projects, and industrial facilities across Ghana"
                }}
            />
            <ServicesContent />
        </>
    );
}
