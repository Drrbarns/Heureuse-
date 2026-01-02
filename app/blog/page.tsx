import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog-content";

export const metadata = constructMetadata({
    title: "Fuel Logistics Blog | Industry Insights",
    description: "Latest updates, industry trends, and expert advice on bulk fuel supply and logistics in Ghana.",
    keywords: ["Fuel Logistics Blog", "Ghana Oil Industry News", "Diesel Price Trends", "Bulk Fuel Tips", "Logistics Insights"],
});

export default async function BlogPage() {
    const posts = await getAllPosts();

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
                                {/* Image container */}
                                <div className="h-48 bg-gray-100 w-full relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src={post.image || "/tank1.jpg"}
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
