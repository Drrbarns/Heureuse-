
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Request a Quote",
    description: "Get a customized quote for bulk fuel supply. Fill out our simple form with your company details, fuel requirements, and delivery preferences.",
    keywords: [
        "Bulk Fuel Quote",
        "Request Fuel Quote",
        "Diesel Price Quote",
        "Petrol Supply Quote",
        "Fuel Delivery Quote Ghana",
        "Bulk Diesel Price",
        "Order Petrol Ghana"
    ],
    canonical: "/request-quote",
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
