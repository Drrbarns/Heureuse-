import { COMPANY_INFO } from "@/lib/constants";

interface SchemaArticleProps {
    headline: string;
    description: string;
    image?: string | string[];
    datePublished: string;
    dateModified?: string;
    author?: {
        name: string;
        url?: string;
    };
    publisher?: {
        name: string;
        logo?: string;
    };
    articleSection?: string;
    keywords?: string[];
    articleBody?: string;
    wordCount?: number;
}

export default function SchemaArticle({
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author = {
        name: "Heureuse Editorial",
        url: COMPANY_INFO.website
    },
    publisher = {
        name: COMPANY_INFO.name,
        logo: `${COMPANY_INFO.website}/logo111.png`
    },
    articleSection,
    keywords,
    articleBody,
    wordCount
}: SchemaArticleProps) {
    const images = Array.isArray(image) ? image : (image ? [image] : [`${COMPANY_INFO.website}/logo111.png`]);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": headline,
        "description": description,
        "image": images,
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": {
            "@type": "Person",
            "name": author.name,
            "url": author.url
        },
        "publisher": {
            "@type": "Organization",
            "name": publisher.name,
            "logo": {
                "@type": "ImageObject",
                "url": publisher.logo
            }
        },
        "articleSection": articleSection,
        "keywords": keywords?.join(", "),
        "articleBody": articleBody,
        "wordCount": wordCount,
        "inLanguage": "en-GH",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": COMPANY_INFO.website
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

