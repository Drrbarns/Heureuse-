import type { Metadata } from 'next';
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import RequestQuoteContent from "./RequestQuoteContent";

export const metadata = constructMetadata({
    title: "Request a Quote | Get Bulk Fuel Pricing",
    description: "Request a competitive quote for bulk diesel (AGO) or petrol (PMS) supply in Ghana. Fast response, flexible terms, and reliable delivery from Heureuse Logistics.",
    keywords: [
        "Bulk Fuel Quote Ghana",
        "Diesel Price Quote",
        "AGO Quote Request",
        "PMS Quote Ghana",
        "Fuel Supply Pricing",
        "Corporate Fuel Quote",
        "Bulk Diesel Quote Accra"
    ],
    canonical: "/request-quote",
});

export default function RequestQuotePage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "Request Quote", url: `${COMPANY_INFO.website}/request-quote` }
            ]} />
            <RequestQuoteContent />
        </>
    );
}
