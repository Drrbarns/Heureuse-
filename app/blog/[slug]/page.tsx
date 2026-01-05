import { getPostBySlug, getAllPosts } from "@/lib/blog-content";
import Section from "@/components/ui/section";
import CTA from "@/components/sections/CTA";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Facebook, Linkedin, Twitter } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { extractWordCount, calculateReadingTime, formatSchemaDate, generateBreadcrumbs } from "@/lib/schema-utils";
import { COMPANY_INFO } from "@/lib/constants";
import { SchemaArticle, SchemaBreadcrumb } from "@/components/seo";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) {
        return {
            title: "Post Not Found"
        }
    }

    const wordCount = extractWordCount(post.content);
    const readingTime = calculateReadingTime(wordCount);
    const imageUrl = post.image ? `${COMPANY_INFO.website}${post.image}` : `${COMPANY_INFO.website}/og-image.png`;

    return constructMetadata({
        title: post.title,
        description: post.excerpt,
        image: imageUrl,
        type: "article",
        publishedTime: formatSchemaDate(post.date),
        modifiedTime: formatSchemaDate(post.date),
        section: post.category,
        tags: [post.category, "Fuel Logistics", "Bulk Fuel", "Ghana"],
        canonical: `/blog/${slug}`,
        keywords: [
            post.category,
            "Fuel Logistics",
            "Bulk Fuel Supply",
            "Ghana Fuel Industry",
            post.title
        ],
    });
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    const allPosts = await getAllPosts();

    // Simple related posts logic (same category or just next 2)
    const relatedPosts = allPosts
        .filter(p => p.slug !== slug && p.category === post?.category)
        .slice(0, 2);

    if (!post) {
        notFound();
    }

    const wordCount = extractWordCount(post.content);
    const readingTime = calculateReadingTime(wordCount);
    const breadcrumbs = generateBreadcrumbs(`/blog/${slug}`);

    return (
        <div className="bg-white">
            <SchemaBreadcrumb items={breadcrumbs} />
            <SchemaArticle
                headline={post.title}
                description={post.excerpt}
                image={post.image}
                datePublished={formatSchemaDate(post.date)}
                dateModified={formatSchemaDate(post.date)}
                articleSection={post.category}
                keywords={[post.category, "Fuel Logistics", "Bulk Fuel", "Ghana"]}
                articleBody={post.content}
                wordCount={wordCount}
            />
            {/* Hero Header with Parallax Image */}
            <div className="relative h-[60vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {post.image ? (
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full bg-heureuse-navy" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-heureuse-navy via-heureuse-navy/60 to-transparent"></div>
                </div>

                <div className="container relative z-10 px-4">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center text-sm text-gray-300 hover:text-heureuse-gold mb-6 transition-colors font-medium tracking-wide">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                        </Link>

                        <div className="space-y-4 animate-in slide-in-from-bottom-10 fade-in duration-700">
                            <Badge className="bg-heureuse-gold hover:bg-heureuse-lightGold text-heureuse-navy font-bold px-3 py-1 rounded-full text-sm border-none">
                                {post.category}
                            </Badge>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-sm">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-6 text-gray-300 text-sm font-medium pt-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-heureuse-gold flex items-center justify-center text-heureuse-navy font-bold">H</div>
                                    <span>Heureuse Editorial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-heureuse-gold" />
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 py-16 relative z-20 -mt-10">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
                    {/* Content Render */}
                    <article className="prose prose-lg prose-slate max-w-none 
                        prose-headings:text-heureuse-navy prose-headings:font-bold 
                        prose-a:text-heureuse-gold prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-heureuse-navy prose-blockquote:border-l-heureuse-gold prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                        prose-img:rounded-xl prose-img:shadow-lg
                        first-letter:text-5xl first-letter:font-bold first-letter:text-heureuse-gold first-letter:float-left first-letter:mr-3 first-letter:mt-[-5px]"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Share & Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="text-center sm:text-left">
                                <h4 className="font-bold text-heureuse-navy mb-1">Share this article</h4>
                                <p className="text-sm text-gray-500">Spread the knowledge with your network</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="p-3 rounded-full bg-slate-100 hover:bg-[#1877F2] hover:text-white text-gray-600 transition-all duration-300"><Facebook className="h-5 w-5" /></button>
                                <button className="p-3 rounded-full bg-slate-100 hover:bg-[#1DA1F2] hover:text-white text-gray-600 transition-all duration-300"><Twitter className="h-5 w-5" /></button>
                                <button className="p-3 rounded-full bg-slate-100 hover:bg-[#0A66C2] hover:text-white text-gray-600 transition-all duration-300"><Linkedin className="h-5 w-5" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <Section background="muted" className="py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-heureuse-navy mb-8 pl-4 border-l-4 border-heureuse-gold">Read Next</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="grid sm:grid-cols-3 h-full">
                                        <div className="relative h-48 sm:h-full">
                                            <Image
                                                src={relatedPost.image || '/tank1.jpg'}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="col-span-2 p-6 flex flex-col justify-center">
                                            <span className="text-xs font-bold text-heureuse-gold uppercase tracking-wider mb-2">{relatedPost.category}</span>
                                            <h3 className="font-bold text-lg text-heureuse-navy mb-2 group-hover:text-heureuse-gold transition-colors line-clamp-2">{relatedPost.title}</h3>
                                            <p className="text-sm text-gray-500 line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                                            <span className="text-xs font-medium text-gray-400">{relatedPost.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            <CTA />
        </div>
    );
}
