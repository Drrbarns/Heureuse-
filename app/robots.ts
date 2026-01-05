import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/private/", "/api/"],
                crawlDelay: 0,
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/private/", "/api/"],
                crawlDelay: 0,
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                disallow: ["/private/", "/api/"],
                crawlDelay: 1,
            },
        ],
        sitemap: "https://heureusesupply.com/sitemap.xml",
    };
}
