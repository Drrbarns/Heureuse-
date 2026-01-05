import { COMPANY_INFO } from "@/lib/constants";

interface SchemaLocalBusinessProps {
    openingHours?: string[];
    priceRange?: string;
    paymentAccepted?: string[];
    servesCuisine?: string[];
    aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
    };
    geo?: {
        latitude: number;
        longitude: number;
    };
}

// Ghana regions for service area
const GHANA_REGIONS = [
    "Greater Accra",
    "Ashanti",
    "Western",
    "Eastern",
    "Central",
    "Volta",
    "Northern",
    "Upper East",
    "Upper West",
    "Brong Ahafo",
    "Western North",
    "Ahafo",
    "Bono",
    "Bono East",
    "Oti",
    "Savannah",
    "North East"
];

export default function SchemaLocalBusiness({
    openingHours = ["Mo-Fr 08:00-17:00"],
    priceRange = "$$",
    paymentAccepted = ["Cash", "Bank Transfer", "Credit Card"],
    aggregateRating,
    geo,
}: SchemaLocalBusinessProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${COMPANY_INFO.website}#localbusiness`,
        "name": COMPANY_INFO.name,
        "image": `${COMPANY_INFO.website}/logo111.png`,
        "url": COMPANY_INFO.website,
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_INFO.address,
            "addressLocality": "Accra",
            "addressRegion": "Greater Accra",
            "addressCountry": "GH"
        },
        "geo": geo ? {
            "@type": "GeoCoordinates",
            "latitude": geo.latitude,
            "longitude": geo.longitude
        } : undefined,
        "openingHoursSpecification": openingHours.map(hours => {
            const [days, time] = hours.split(" ");
            const [open, close] = time.split("-");
            const [dayStart, dayEnd] = days.includes("-") ? days.split("-") : [days, days];
            
            return {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": dayEnd ? [
                    `https://schema.org/${dayStart}`,
                    `https://schema.org/${dayEnd}`
                ] : `https://schema.org/${dayStart}`,
                "opens": open,
                "closes": close
            };
        }),
        "priceRange": priceRange,
        "paymentAccepted": paymentAccepted,
        "currenciesAccepted": "GHS",
        "areaServed": GHANA_REGIONS.map(region => ({
            "@type": "State",
            "name": region,
            "containedIn": {
                "@type": "Country",
                "name": "Ghana"
            }
        })),
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Bulk Fuel Supply Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Bulk Diesel Supply",
                        "description": "High-quality bulk diesel delivery for OMCs, construction sites, and industrial facilities"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Bulk Petrol Supply",
                        "description": "Premium petrol supply for fuel stations and corporate fleets"
                    }
                }
            ]
        },
        "aggregateRating": aggregateRating ? {
            "@type": "AggregateRating",
            "ratingValue": aggregateRating.ratingValue,
            "reviewCount": aggregateRating.reviewCount,
            "bestRating": "5",
            "worstRating": "1"
        } : undefined,
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "License",
            "recognizedBy": {
                "@type": "Organization",
                "name": "National Petroleum Authority (NPA)"
            }
        }
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

