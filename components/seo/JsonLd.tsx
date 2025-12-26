
import { COMPANY_INFO } from "@/lib/constants";

export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": COMPANY_INFO.name,
        "url": COMPANY_INFO.website,
        "logo": `${COMPANY_INFO.website}/logo111.png`,
        "sameAs": [
            COMPANY_INFO.social.linkedin,
            COMPANY_INFO.social.facebook,
            COMPANY_INFO.social.twitter
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": COMPANY_INFO.phone,
            "contactType": "customer service",
            "areaServed": "GH",
            "availableLanguage": "English"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_INFO.address,
            "addressLocality": "Accra",
            "addressCountry": "GH"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
