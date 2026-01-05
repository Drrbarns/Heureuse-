import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Bulk Fuel Supply Services",
    description: "Comprehensive bulk fuel supply services including diesel (AGO), petrol (PMS), corporate fuel management, and remote site delivery across Ghana.",
    keywords: [
        "Bulk Diesel Supply",
        "Bulk Petrol Supply",
        "Corporate Fuel Management",
        "Remote Site Fuel Delivery",
        "AGO Supply Ghana",
        "PMS Supply Ghana",
        "Fuel Logistics Services"
    ],
    canonical: "/services",
});

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

