import { COMPANY_INFO } from "@/lib/constants";

interface SchemaOrganizationProps {
    additionalType?: string[];
    foundingDate?: string;
    numberOfEmployees?: string;
    slogan?: string;
    aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
    };
}

export default function SchemaOrganization({
    additionalType,
    foundingDate,
    numberOfEmployees,
    slogan = COMPANY_INFO.tagline,
    aggregateRating
}: SchemaOrganizationProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${COMPANY_INFO.website}#organization`,
        "name": COMPANY_INFO.name,
        "url": COMPANY_INFO.website,
        "logo": `${COMPANY_INFO.website}/logo111.png`,
        "slogan": slogan,
        "description": "Heureuse Logistics is a premier bulk fuel supply and logistics company in Ghana, specializing in the delivery of high-quality Diesel (AGO) and Petrol (PMS) to OMCs, mines, construction sites, and corporate fleets.",
        "knowsAbout": ["Bulk Fuel Supply", "Logistics", "Energy Distribution", "Petroleum Product Haulage", "Fuel Management"],
        "foundingDate": foundingDate,
        "numberOfEmployees": numberOfEmployees,
        "additionalType": additionalType || ["https://schema.org/Wholesale", "https://schema.org/TransportationService"],
        "sameAs": [
            COMPANY_INFO.social.linkedin,
            COMPANY_INFO.social.facebook,
            COMPANY_INFO.social.twitter
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": COMPANY_INFO.phone,
            "contactType": "customer service",
            "email": COMPANY_INFO.email,
            "areaServed": {
                "@type": "Country",
                "name": "Ghana"
            },
            "availableLanguage": ["English"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_INFO.address,
            "addressLocality": "Accra",
            "addressRegion": "Greater Accra",
            "addressCountry": "GH"
        },
        "aggregateRating": aggregateRating ? {
            "@type": "AggregateRating",
            "ratingValue": aggregateRating.ratingValue,
            "reviewCount": aggregateRating.reviewCount,
            "bestRating": "5",
            "worstRating": "1"
        } : undefined
    };

    // Remove undefined fields
    const cleanedJsonLd = JSON.parse(JSON.stringify(jsonLd));

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanedJsonLd) }}
        />
    );
}

