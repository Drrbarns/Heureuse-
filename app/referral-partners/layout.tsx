
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Referral Partners Program",
    description: "Join Heureuse Logistics referral program and earn commissions by connecting businesses with reliable bulk fuel supply. High commissions, transparent tracking, reliable payments.",
    keywords: [
        "Fuel Referral Program",
        "Bulk Fuel Commission",
        "Referral Partners Ghana",
        "Fuel Sales Referral",
        "Earn from Fuel Referrals",
        "Earn Commission Ghana",
        "Logistics Partnership",
        "Fuel Brokerage",
        "Business Opportunity"
    ],
    canonical: "/referral-partners",
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
