import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-heureuse-navy">
            {/* Background with Gradient/Image Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Hero Background Image - Optimized with Next.js Image */}
                <Image
                    src="/truck1.jpg"
                    alt="Heureuse Logistics Fuel Truck"
                    fill
                    className="object-cover opacity-100 md:opacity-20 md:mix-blend-overlay"
                    priority
                    quality={75}
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-heureuse-navy/80 md:bg-gradient-to-r md:from-heureuse-navy md:from-10% md:via-heureuse-navy/95 md:to-heureuse-navy/60"></div>
                {/* Animated decorative blob */}
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-heureuse-gold/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        Reliable Energy, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-heureuse-gold via-heureuse-lightGold to-heureuse-gold">
                            Seamless Delivery.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                        We provide bulk fuel supply ensuring your operations never stop.
                        Trusted by OMCs, construction sites, and industries across Ghana for on-time delivery and quality assurance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button asChild size="xl" variant="cta" className="sm:w-auto w-full shadow-heureuse-gold/20 shadow-lg">
                            <Link href="/request-quote" className="flex items-center justify-center gap-2">
                                Request a Quote <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>

                        <Button asChild size="xl" variant="outline" className="sm:w-auto w-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2">
                                <Phone className="h-5 w-5" /> Call Now
                            </a>
                        </Button>
                    </div>

                    <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8 text-sm text-gray-400">
                        <div>
                            <span className="block text-2xl font-bold text-white">99%</span>
                            <span>On-Time Delivery</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-white">24/7</span>
                            <span>Support Ready</span>
                        </div>
                    </div>
                </div>

                {/* Visual Element / Abstract Representation */}
                <div className="hidden lg:block relative h-[600px] w-full animate-in slide-in-from-right duration-1000 fade-in">
                    {/* Abstract Composition using CSS/Shapes or placeholders */}
                    <div className="absolute inset-0 bg-gradient-to-br from-heureuse-gold/20 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm p-4 transform rotate-3">
                        <div className="relative h-full w-full rounded-xl overflow-hidden opacity-80 shadow-2xl">
                            <Image
                                src="/tank1.jpg"
                                alt="Fuel Tank"
                                fill
                                className="object-cover"
                                loading="lazy"
                                quality={75}
                                sizes="(max-width: 1024px) 0vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
