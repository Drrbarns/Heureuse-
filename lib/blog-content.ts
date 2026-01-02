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
    {
        slug: "omc-supply-corporate-buyers",
        title: "OMC Supply: What Corporate Buyers Look For",
        excerpt: "Insights into the demands of Oil Marketing Companies and how Heureuse Logistics meets these critical needs.",
        date: "Nov 28, 2024",
        category: "Corporate",
        image: "/blog/omc-corporate.png",
        content: `
        <p>Oil Marketing Companies (OMCs) are the backbone of fuel distribution in Ghana. For corporate buyers partnering with OMCs, the expectation goes beyond just receiving fuel—it's about partnership, reliability, and brand integrity.</p>

        <h2>Consistency is Key</h2>
        <p>Corporate buyers cannot afford stockouts. Whether it's a factory running 24/7 or a fleet of delivery trucks, fuel availability is non-negotiable. OMCs look for logistics partners who can guarantee supply even during market fluctuations.</p>

        <h2>Brand Reputation & Safety</h2>
        <p>When an OMC's branded truck arrives at a client's site, it represents the OMC. If the truck is dirty, the driver unprofessional, or safety protocols ignored, it reflects poorly on the OMC. Heureuse Logistics understands this, maintaining a fleet that meets the highest visual and safety standards.</p>

        <h2>Data Transparency</h2>
        <p>In the modern energy landscape, data is as valuable as the fuel itself. Corporate buyers demand precise waybills, digital tracking, and transparent invoicing. Our systems ensure that every liter is accounted for, from loading at the BDC to discharge at the customer's tank.</p>
        `
    },
    {
        slug: "fleet-operations-fuel-management",
        title: "Fleet Operations: Managing Fuel Supply at Scale",
        excerpt: "Best practices for transport companies to monitor consumption, prevent theft, and optimize fuel costs.",
        date: "Nov 15, 2024",
        category: "Logistics",
        image: "/blog/fleet-management.png",
        content: `
        <p>Fuel often accounts for over 40% of operating costs for transport and logistics companies. Managing this expense isn't just about finding the cheapest price per liter—it's about efficiency and control.</p>

        <h2>Preventing Fuel Theft</h2>
        <p>Pilferage is a common challenge. By partnering with a reputable bulk supplier for in-house dispensing, companies can eliminate the risks associated with drivers filling up at random stations with cash. On-site storage allows for strict monitoring of who takes fuel and when.</p>

        <h2>Quality Control</h2>
        <p>Bad fuel kills injectors. For modern trucks with sensitive common-rail engines, contaminated diesel can cause thousands of cedis in damage. Sourcing directly from a trusted supplier ensures you get clean, filtered product every time.</p>

        <h2>Inventory Management</h2>
        <p>Running out of fuel in your depot grounds your fleet. We help fleet managers implement "just-in-time" inventory practices, using historical data to schedule deliveries before tanks run low, optimizing working capital.</p>
        `
    },
    {
        slug: "safety-compliance-bulk-fuel",
        title: "Safety & Compliance in Bulk Fuel Delivery",
        excerpt: "Understanding the NPA regulations and safety protocols that professional fuel suppliers must adhere to.",
        date: "Nov 02, 2024",
        category: "Safety",
        image: "/blog/safety-compliance.png",
        content: `
        <p>Handling hazardous materials like diesel and petrol requires unwavering commitment to safety. In Ghana, the National Petroleum Authority (NPA) sets the standards, but true safety culture goes beyond compliance.</p>

        <h2>Driver Training</h2>
        <p>A truck is only as safe as its driver. Our drivers undergo rigorous defensive driving training and hazardous material handling courses. They know how to react in emergencies and how to manage fatigue on long journeys.</p>

        <h2>Vehicle Maintenance</h2>
        <p>Brake failures and tire blowouts are major causes of tanker accidents. Heureuse Logistics implements a strict preventative maintenance schedule. Every truck is inspected before it leaves the yard.</p>

        <h2>Discharge Protocols</h2>
        <p>The most dangerous moment in fuel logistics is the transfer from truck to tank. Static electricity, spills, and vapor leaks are real risks. Our teams use grounding cables, check hoses for integrity, and maintain a clear exclusion zone during discharge to protect your site and personnel.</p>
        `
    },
    {
        slug: "bulk-fuel-contracts-key-terms",
        title: "Understanding Bulk Fuel Contracts: Key Terms",
        excerpt: "A breakdown of common terms in fuel supply agreements to help you negotiate better deals.",
        date: "Oct 20, 2024",
        category: "Education",
        image: "/blog/contract-terms.png",
        content: `
        <p>Entering into a bulk fuel supply agreement can be complex. Understanding the industry jargon ensures you get a fair deal and avoid hidden surprises.</p>

        <h2>1. Platts / Window Price</h2>
        <p>Fuel prices often float based on international benchmarks. Contracts may reference "Platts" pricing plus a premium. Understanding this mechanism helps you verify if your price adjustments are fair.</p>

        <h2>2. Minimum Order Quantity (MOQ)</h2>
        <p>Suppliers have logistics costs. The MOQ defines the smallest amount they will deliver without a surcharge. Ensure this matches your tank capacity and usage rate.</p>

        <h2>3. Payment Terms (Credit vs. Cash)</h2>
        <p>Payment terms define when cash leaves your account. "Net 30" means you have 30 days to pay. These terms often affect the price per liter—cash upfront usually secures a discount.</p>

        <h2>4. Force Majeure</h2>
        <p>What happens if there's a nationwide shortage or a natural disaster? This clause protects both parties from liability for events beyond their control. Ensure it's balanced and doesn't leave you stranded without recourse.</p>
        `
    },
];

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    // Simulator async fetch
    return BLOG_POSTS.find(post => post.slug === slug);
}

export async function getAllPosts(): Promise<BlogPost[]> {
    return BLOG_POSTS;
}
