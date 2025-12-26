import { Metadata } from "next";

export interface MetadataProps {
    title: string;
    description: string;
    image?: string;
    noIndex?: boolean;
    keywords?: string[];
    authors?: { name: string; url?: string }[];
}

export function constructMetadata({
    title,
    description,
    image = "/og-image.jpg",
    noIndex = false,
    keywords = [],
    authors = [],
}: MetadataProps): Metadata {
    return {
        title: `${title} | Heureuse Logistics`,
        description,
        keywords,
        authors,
        openGraph: {
            title: `${title} | Heureuse Logistics`,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Heureuse Logistics`,
            description,
            images: [image],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
            },
        },
    };
}
