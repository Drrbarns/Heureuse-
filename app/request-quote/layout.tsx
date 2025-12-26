
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Request a Quote | Bulk Fuel Supply",
    description: "Request a competitive quote for bulk diesel and petrol delivery in Ghana. Fast response and reliable service.",
    keywords: ["Request Fuel Quote", "Bulk Diesel Price", "Order Petrol Ghana", "Fuel Delivery Quote"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
