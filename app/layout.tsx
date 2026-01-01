import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Heureuse Logistics | Premier Bulk Fuel Supply in Ghana",
        template: "%s | Heureuse Logistics",
    },
    description: "Reliable bulk fuel supply and logistics company in Ghana. We deliver high-quality diesel and petrol to OMCs, construction sites, mines, and fleet operators.",
    keywords: ["Bulk Fuel Supply", "Diesel Supply Ghana", "OMC Partner", "Fuel Logistics", "Direct to Site Fuel", "Heureuse Logistics", "Mining Fuel Supply"],
    metadataBase: new URL('https://heureuselogistics.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Heureuse Logistics | Reliable Bulk Fuel Supply",
        description: "Reliable Energy, Seamless Delivery. Your trusted partner for bulk fuel availability and logistics in Ghana.",
        url: 'https://heureuselogistics.com',
        siteName: 'Heureuse Logistics',
        locale: 'en_GH',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
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
        images: ['/og-image.jpg'],
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
                <JsonLd />
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
