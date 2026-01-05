import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Contact Us",
    description: "Get in touch with Heureuse Logistics for bulk fuel supply inquiries, quotes, and support. Available Mon-Fri 8am-5pm, 24/7 for emergency contracts.",
    keywords: [
        "Contact Heureuse Logistics",
        "Bulk Fuel Inquiry",
        "Fuel Supply Contact",
        "Ghana Fuel Company Contact"
    ],
    canonical: "/contact",
});

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

