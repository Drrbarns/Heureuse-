import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Fuel Logistics Blog | Industry Insights",
    description: "Latest updates, industry trends, and expert advice on bulk fuel supply and logistics in Ghana.",
    keywords: ["Fuel Logistics Blog", "Ghana Oil Industry News", "Diesel Price Trends", "Bulk Fuel Tips", "Logistics Insights"],
});

// Blog posts data (Using placeholders for now as per requirements)
const posts = [
    {
        slug: "how-to-choose-reliable-bulk-fuel-supplier",
        title: "How to Choose a Reliable Bulk Fuel Supplier in Ghana",
        excerpt: "Discover the key factors to consider when selecting a fuel partner to ensure quality and timely delivery for your business.",
        date: "Dec 12, 2024",
        category: "Guide",
        image: "/blog/fuel-supplier-guide.png"
    },
    {
        slug: "reducing-downtime-fuel-logistics-construction",
        title: "Reducing Downtime: Fuel Logistics for Construction Sites",
        excerpt: "Learn how strategic fuel management can keep your heavy machinery running and prevent costly project delays.",
        date: "Dec 05, 2024",
        category: "Industry",
        image: "/blog/construction-fuel.png"
    },
    {
        slug: "omc-supply-corporate-buyers",
        title: "OMC Supply: What Corporate Buyers Look For",
        excerpt: "Insights into the demands of Oil Marketing Companies and how Heureuse Logistics meets these critical needs.",
        date: "Nov 28, 2024",
        category: "Corporate",
        image: "/blog/omc-corporate.png"
    },
    {
        slug: "fleet-operations-fuel-management",
        title: "Fleet Operations: Managing Fuel Supply at Scale",
        excerpt: "Best practices for transport companies to monitor consumption, prevent theft, and optimize fuel costs.",
        date: "Nov 15, 2024",
        category: "Logistics",
        image: "/blog/fleet-management.png"
    },
    {
        slug: "safety-compliance-bulk-fuel",
        title: "Safety & Compliance in Bulk Fuel Delivery",
        excerpt: "Understanding the NPA regulations and safety protocols that professional fuel suppliers must adhere to.",
        date: "Nov 02, 2024",
        category: "Safety",
        image: "/blog/safety-compliance.png"
    },
    {
        slug: "bulk-fuel-contracts-key-terms",
        title: "Understanding Bulk Fuel Contracts: Key Terms",
        excerpt: "A breakdown of common terms in fuel supply agreements to help you negotiate better deals.",
        date: "Oct 20, 2024",
        category: "Education",
        image: "/blog/contract-terms.png"
    },
];

export default function BlogPage() {
    return (
        <div>
            <Section background="hero-image" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Industry Insights</h1>
                    <p className="text-xl text-gray-300">
                        News, tips, and updates from the world of fuel logistics.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Card key={post.slug} className="flex flex-col h-full hover:shadow-lg transition-all cursor-pointer group">
                            <Link href={`/blog/${post.slug}`} className="contents">
                                {/* Image placeholder */}
                                {/* Image container */}
                                <div className="h-48 bg-gray-100 w-full relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-heureuse-navy/10 group-hover:bg-transparent transition-colors"></div>
                                </div>

                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <Badge variant="secondary" className="bg-heureuse-gold/20 text-heureuse-navy hover:bg-heureuse-gold/30">
                                            {post.category}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground">{post.date}</span>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-heureuse-gold transition-colors line-clamp-2">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="line-clamp-3">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <span className="text-sm font-semibold text-heureuse-navy group-hover:underline">Read Article</span>
                                </CardFooter>
                            </Link>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
}
