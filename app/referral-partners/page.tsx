import type { Metadata } from 'next';
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import ReferralContent from "./ReferralContent";

export const metadata = constructMetadata({
    title: "Referral Partners Program | Earn Commission",
    description: "Join Heureuse Logistics referral partner program. Earn competitive commissions by connecting businesses with Ghana's most reliable bulk fuel supplier. Submit leads and get paid.",
    keywords: [
        "Fuel Referral Program Ghana",
        "Earn Commission Fuel",
        "Bulk Fuel Partner Program",
        "Referral Partner Ghana",
        "Fuel Supply Commission",
        "Business Referral Fuel"
    ],
    canonical: "/referral-partners",
});

export default function ReferralPage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "Referral Partners", url: `${COMPANY_INFO.website}/referral-partners` }
            ]} />
            <ReferralContent />
        </>
    );
}
