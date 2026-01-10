import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SchemaOrganization } from "@/components/seo";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Heureuse Logistics GH | Premier Bulk Fuel Supply in Ghana",
        template: "%s | Heureuse Logistics GH",
    },
    description: "Heureuse Logistics - Ghana's trusted bulk fuel supply company. We deliver diesel (AGO) and petrol (PMS) to OMCs, construction sites, mines, and fleet operators. Fuel delivery in Accra and nationwide.",
    keywords: [
        // Brand signals
        "Heureuse", "Heureuse GH", "Heureuse Ghana", "Heureuse Logistics", "Heureuse Logistics GH",
        "Heureuse Supply", "Heureuse Fuel Supply",
        // Primary service terms
        "Bulk Fuel Supply Ghana", "Fuel Delivery Accra", "OMC Fuel Supply Ghana",
        "Diesel Supply Ghana", "Petrol Supply Ghana", "AGO Supplier Ghana", "PMS Supplier Ghana",
        // Industry-specific
        "Mining Fuel Supply Ghana", "Construction Site Fuel Delivery", "Fleet Fuel Management Ghana",
        // Location-based
        "Fuel Suppliers Accra", "Bulk Diesel Accra", "Fuel Logistics Ghana", "Petroleum Haulage Ghana",
        // Long-tail
        "Best Fuel Supplier Ghana", "Reliable Fuel Delivery Ghana", "24/7 Fuel Supply Ghana"
    ],
    metadataBase: new URL('https://heureusesupply.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Heureuse Logistics | Reliable Bulk Fuel Supply",
        description: "Reliable Energy, Seamless Delivery. Your trusted partner for bulk fuel availability and logistics in Ghana.",
        url: 'https://heureusesupply.com',
        siteName: 'Heureuse Logistics',
        locale: 'en_GH',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Heureuse Logistics Bulk Fuel Supply',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Heureuse Logistics",
        description: "Reliable Energy, Seamless Delivery in Ghana.",
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
            { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ScrollProgress />
                <SchemaOrganization />
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
