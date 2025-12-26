export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    content: string; // HTML or Markdown string
    image?: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "how-to-choose-reliable-bulk-fuel-supplier",
        title: "How to Choose a Reliable Bulk Fuel Supplier in Ghana",
        date: "Dec 12, 2024",
        category: "Guide",
        image: "/blog/fuel-supplier-guide.png",
        excerpt: "Discover the key factors to consider when selecting a fuel partner to ensure quality and timely delivery for your business.",
        content: `
      <p>Choosing a bulk fuel supplier is a critical decision for any Oil Marketing Company (OMC), construction firm, or industrial facility. The wrong choice can lead to operational downtime, damaged equipment from poor quality fuel, and financial loss.</p>
      
      <h2>1. Product Quality Assurance</h2>
      <p>The first thing to verify is the quality of the fuel. Does the supplier source from reputable Bulk Distribution Companies (BDCs)? Can they provide a Certificate of Analysis (CoA) for every consignment? At Heureuse Logistics, we ensure every drop meets strict NPA standards.</p>
      
      <h2>2. Supply Reliability</h2>
      <p>In Ghana, fuel shortages can happen. You need a partner who has secured allocation and a robust fleet. Ask about their fleet size and contingency plans.</p>
      
      <h2>3. Safety Standards</h2>
      <p>Bulk fuel is hazardous. Ensure your supplier is fully licensed by the National Petroleum Authority (NPA) and adheres to Health, Safety, Security, and Environment (HSSE) protocols.</p>
      
      <h2>4. Pricing and Payment Terms</h2>
      <p>While price is important, the cheapest option isn't always the best if it comes with hidden costs like delays or contamination. Look for transparent pricing and flexible payment terms for long-term contracts.</p>
      
      <h2>Conclusion</h2>
      <p>Your operations depend on energy. Choose a partner that treats your business with the seriousness it deserves.</p>
    `
    },
    {
        slug: "reducing-downtime-fuel-logistics-construction",
        title: "Reducing Downtime: Fuel Logistics for Construction Sites",
        date: "Dec 05, 2024",
        category: "Industry",
        image: "/blog/construction-fuel.png",
        excerpt: "Learn how strategic fuel management can keep your heavy machinery running and prevent costly project delays.",
        content: `
      <p>Construction projects run on tight schedules. When an excavator stops because of an empty tank, money is lost every minute.</p>

      <h2>Direct-to-Site Delivery</h2>
      <p>The most efficient way to manage fuel is to have it delivered directly to your equipment or on-site storage tanks. This eliminates the need for your trucks to leave the site to refuel.</p>

      <h2>Monitoring Consumption</h2>
      <p>By tracking fuel usage accurately, you can predict when you'll need the next delivery. Heureuse Logistics offers scheduled top-ups based on your average burn rate.</p>

      <h2>Quality Matters for heavy Machinery</h2>
      <p>Modern diesel engines in heavy equipment are sensitive to impurities. Using filtered, clean diesel extends engine life and reduces maintenance costs.</p>
    `
    },
    // Add more placeholders if needed to match the list in blog/page.tsx
    {
        slug: "omc-supply-corporate-buyers",
        title: "OMC Supply: What Corporate Buyers Look For",
        excerpt: "Insights into the demands of Oil Marketing Companies and how Heureuse Logistics meets these critical needs.",
        date: "Nov 28, 2024",
        category: "Corporate",
        image: "/blog/omc-corporate.png",
        content: "<p>Content coming soon...</p>"
    },
    {
        slug: "fleet-operations-fuel-management",
        title: "Fleet Operations: Managing Fuel Supply at Scale",
        excerpt: "Best practices for transport companies to monitor consumption, prevent theft, and optimize fuel costs.",
        date: "Nov 15, 2024",
        category: "Logistics",
        image: "/blog/fleet-management.png",
        content: "<p>Content coming soon...</p>"
    },
    {
        slug: "safety-compliance-bulk-fuel",
        title: "Safety & Compliance in Bulk Fuel Delivery",
        excerpt: "Understanding the NPA regulations and safety protocols that professional fuel suppliers must adhere to.",
        date: "Nov 02, 2024",
        category: "Safety",
        image: "/blog/safety-compliance.png",
        content: "<p>Content coming soon...</p>"
    },
    {
        slug: "bulk-fuel-contracts-key-terms",
        title: "Understanding Bulk Fuel Contracts: Key Terms",
        excerpt: "A breakdown of common terms in fuel supply agreements to help you negotiate better deals.",
        date: "Oct 20, 2024",
        category: "Education",
        image: "/blog/contract-terms.png",
        content: "<p>Content coming soon...</p>"
    },
];

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    // Simulator async fetch
    return BLOG_POSTS.find(post => post.slug === slug);
}

export async function getAllPosts(): Promise<BlogPost[]> {
    return BLOG_POSTS;
}
