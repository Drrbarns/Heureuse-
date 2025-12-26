import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog-content'

const baseUrl = "https://heureuselogistics.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        "",
        "/about",
        "/services",
        "/industries",
        "/request-quote",
        "/referral-partners",
        "/blog",
        "/contact",
        "/terms",
        "/privacy",
    ]

    const blogPosts = await getAllPosts()
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const staticRoutes = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === "" ? 'weekly' : 'monthly') as "weekly" | "monthly",
        priority: route === "" ? 1.0 : 0.8,
    }))

    return [...staticRoutes, ...blogRoutes]
}
