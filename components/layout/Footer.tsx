import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-heureuse-navy text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4 text-center md:text-left">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo111.png"
                                alt="Heureuse Logistics"
                                width={150}
                                height={50}
                                className="h-10 w-auto object-contain mx-auto md:mx-0"
                                loading="lazy"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Your trusted partner for bulk fuel supply and logistics. We power industries with reliable energy and seamless delivery across Ghana.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {/* Social links */}
                            <Link href={COMPANY_INFO.social.linkedin} className="text-gray-400 hover:text-heureuse-gold transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="LinkedIn"><Linkedin size={20} /></Link>
                            <Link href={COMPANY_INFO.social.facebook} className="text-gray-400 hover:text-heureuse-gold transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="Facebook"><Facebook size={20} /></Link>
                            <Link href={COMPANY_INFO.social.twitter} className="text-gray-400 hover:text-heureuse-gold transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="Twitter"><Twitter size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-base md:text-lg font-semibold text-heureuse-gold mb-4 md:mb-6">Company</h4>
                        <ul className="space-y-2 md:space-y-3">
                            {NAV_LINKS.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services - SEO optimized anchor text */}
                    <div className="text-center md:text-left">
                        <h4 className="text-base md:text-lg font-semibold text-heureuse-gold mb-4 md:mb-6">Our Services</h4>
                        <ul className="space-y-2 md:space-y-3">
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">Bulk Fuel Supply Ghana</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">Diesel Delivery Accra</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">OMC Fuel Supply</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">Mining & Construction Fuel</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">Fleet Fuel Management</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-left">
                        <h4 className="text-base md:text-lg font-semibold text-heureuse-gold mb-4 md:mb-6">Contact Us</h4>
                        <ul className="space-y-3 md:space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400 justify-center md:justify-start">
                                <MapPin className="h-5 w-5 text-heureuse-gold shrink-0 mt-0.5" />
                                <span className="text-left">{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400 justify-center md:justify-start">
                                <Phone className="h-5 w-5 text-heureuse-gold shrink-0" />
                                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400 justify-center md:justify-start">
                                <Mail className="h-5 w-5 text-heureuse-gold shrink-0" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">{COMPANY_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center">
                    <p className="text-gray-500 text-xs md:text-sm order-2 md:order-1">
                        &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
                    </p>
                    <div className="text-gray-600 text-xs order-1 md:order-2">
                        Reliable Energy. Seamless Delivery.
                    </div>
                </div>
            </div>
        </footer>
    );
}
