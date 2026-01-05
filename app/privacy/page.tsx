import Section from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Privacy Policy",
    description: "Privacy Policy for Heureuse Logistics. Learn how we collect, use, and protect your personal data.",
    keywords: ["Privacy Policy", "Data Protection", "Heureuse Logistics Privacy", "Personal Data Protection"],
    canonical: "/privacy",
});

export default function PrivacyPage() {
    return (
        <Section className="pt-32 pb-20">
            <div className="max-w-3xl mx-auto prose prose-blue">
                <h1 className="text-3xl font-bold text-heureuse-navy mb-8">Privacy Policy</h1>
                <p>Last updated: December 2024</p>

                <h3>1. Information We Collect</h3>
                <p>We collect information you provide directly to us when you request a quote, fill out a form, or communicate with us.</p>

                <h3>2. How We Use Your Information</h3>
                <p>We use your information to process orders, provide customer support, and communicate with you about our services.</p>

                <h3>3. Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information.</p>

                {/* Placeholder for legal text */}
                <p className="text-muted-foreground italic">[Full privacy policy to be inserted here]</p>
            </div>
        </Section>
    );
}
