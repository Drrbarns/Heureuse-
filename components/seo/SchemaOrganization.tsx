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
        "legalName": COMPANY_INFO.legalName,
        "alternateName": COMPANY_INFO.alternateName,
        "url": COMPANY_INFO.website,
        "logo": `${COMPANY_INFO.website}/logo111.png`,
        "slogan": slogan,
        "description": COMPANY_INFO.description,
        "knowsAbout": [
            "Bulk Fuel Supply",
            "Bulk Fuel Supply Ghana",
            "Fuel Delivery Accra",
            "OMC Fuel Supply Ghana",
            "Diesel Supply Ghana",
            "Petrol Supply Ghana",
            "Mining Fuel Delivery",
            "Construction Site Fuel",
            "Logistics",
            "Energy Distribution",
            "Petroleum Product Haulage",
            "Fuel Management",
            "AGO Supply",
            "PMS Supply"
        ],
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Bulk Diesel Supply (AGO)",
                    "description": "Premium Automotive Gas Oil delivery to OMCs, mines, and industrial sites across Ghana"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Bulk Petrol Supply (PMS)",
                    "description": "Reliable Premium Motor Spirit supply for filling stations and commercial use in Ghana"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Fuel Delivery Accra",
                    "description": "Same-day and next-day fuel delivery services in Greater Accra Region"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "OMC Fuel Supply",
                    "description": "Wholesale fuel supply partnership for Oil Marketing Companies in Ghana"
                }
            }
        ],
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

