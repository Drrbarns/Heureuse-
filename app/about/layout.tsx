import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "About Heureuse Logistics",
    description: "Learn about Heureuse Logistics - Ghana's trusted bulk fuel supply partner. Our mission, vision, values, and commitment to reliable energy logistics.",
    keywords: [
        "About Heureuse Logistics",
        "Ghana Fuel Company",
        "Bulk Fuel Supplier History",
        "Fuel Logistics Company Ghana"
    ],
    canonical: "/about",
});

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

