
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Referral Program | Partner & Earn",
    description: "Join Heureuse Logistics referral network. Earn commissions by connecting construction sites, factories, and OMCs with reliable fuel supply.",
    keywords: ["Fuel Referral Program", "Earn Commission Ghana", "Logistics Partnership", "Fuel Brokerage", "Business Opportunity"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
