import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-heureuse-navy text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo111.png"
                                alt="Heureuse Logistics"
                                width={150}
                                height={50}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Your trusted partner for bulk fuel supply and logistics. We power industries with reliable energy and seamless delivery across Ghana.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <Link href={COMPANY_INFO.social.linkedin} className="text-gray-400 hover:text-heureuse-gold transition-colors"><Linkedin size={20} /></Link>
                            <Link href={COMPANY_INFO.social.facebook} className="text-gray-400 hover:text-heureuse-gold transition-colors"><Facebook size={20} /></Link>
                            <Link href={COMPANY_INFO.social.twitter} className="text-gray-400 hover:text-heureuse-gold transition-colors"><Twitter size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-heureuse-gold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services Placeholder (Hardcoded for now as it maps to Services page sections) */}
                    <div>
                        <h4 className="text-lg font-semibold text-heureuse-gold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Bulk Diesel Supply</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Direct-to-Site Delivery</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Fleet Refueling</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Corporate Contracts</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-heureuse-gold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="h-5 w-5 text-heureuse-gold shrink-0" />
                                <span>{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Phone className="h-5 w-5 text-heureuse-gold shrink-0" />
                                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white">{COMPANY_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail className="h-5 w-5 text-heureuse-gold shrink-0" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
                    </p>
                    <div className="text-gray-600 text-xs text-center md:text-right">
                        Reliable Energy. Seamless Delivery.
                    </div>
                </div>
            </div>
        </footer>
    );
}
