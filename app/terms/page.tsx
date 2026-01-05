import Section from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Terms and Conditions",
    description: "Terms and Conditions for using Heureuse Logistics services and website. Read our fuel supply agreement terms.",
    keywords: ["Terms and Conditions", "Fuel Supply Agreement", "Legal Terms", "Heureuse Logistics Terms"],
    canonical: "/terms",
});

export default function TermsPage() {
    return (
        <Section className="pt-32 pb-20">
            <div className="max-w-3xl mx-auto prose prose-blue">
                <h1 className="text-3xl font-bold text-heureuse-navy mb-8">Terms and Conditions</h1>
                <p>Last updated: December 2024</p>

                <h3>1. Introduction</h3>
                <p>Welcome to Heureuse Logistics. These Terms and Conditions govern your use of our website and services.</p>

                <h3>2. Fuel Supply Agreement</h3>
                <p>All bulk fuel supply is subject to a specific supply agreement or purchase order terms agreed upon between Heureuse Logistics and the Client. Prices are subject to NPA periodic reviews.</p>

                <h3>3. Delivery & Safety</h3>
                <p>We adhere to strict safety standards. Clients must ensure their discharge sites are safe and accessible. We reserve the right to refuse delivery if safety protocols are compromised.</p>

                <h3>4. Payment Terms</h3>
                <p>Payment terms are defined in individual contracts. Late payments may attract interest as stipulated in the invoice.</p>

                {/* Placeholder for legal text */}
                <p className="text-muted-foreground italic">[Full legal terms to be inserted here by legal counsel]</p>
            </div>
        </Section>
    );
}
