import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog-content'

const baseUrl = "https://heureusesupply.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        { path: "", priority: 1.0, changeFrequency: "weekly" as const },
        { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/request-quote", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/referral-partners", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
        { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
        { path: "/faqs", priority: 0.7, changeFrequency: "monthly" as const },
        { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
        { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    ]

    const blogPosts = await getAllPosts()
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const staticRoutes = routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))

    return [...staticRoutes, ...blogRoutes]
}
