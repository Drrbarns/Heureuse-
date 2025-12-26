import { getPostBySlug } from "@/lib/blog-content";
import Section from "@/components/ui/section";
import CTA from "@/components/sections/CTA";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Facebook, Linkedin, Twitter } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);
    if (!post) {
        return {
            title: "Post Not Found"
        }
    }
    return {
        title: `${post.title} | Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <Section background="navy" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-white">
                    <Link href="/blog" className="inline-flex items-center text-sm text-gray-400 hover:text-heureuse-gold mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Link>
                    <div className="mb-4">
                        <Badge className="bg-heureuse-gold hover:bg-heureuse-lightGold text-heureuse-navy font-bold">
                            {post.category}
                        </Badge>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                        <span>Heureuse Editorial Team</span>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="max-w-3xl mx-auto">
                    {/* Featured Image */}
                    {post.image && (
                        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12 shadow-xl border border-gray-100">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Content Render */}
                    <article className="prose prose-lg prose-blue max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className="border-t border-gray-100 pt-8 flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">Share this article:</div>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors"><Facebook className="h-4 w-4" /></button>
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors"><Twitter className="h-4 w-4" /></button>
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors"><Linkedin className="h-4 w-4" /></button>
                        </div>
                    </div>
                </div>
            </Section>

            <CTA />
        </div>
    );
}
