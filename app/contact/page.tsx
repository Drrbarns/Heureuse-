import Section from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Contact Us",
    description: "Get in touch with Heureuse Logistics. Visit our office, call us, or send a message for all your bulk fuel needs.",
    keywords: ["Contact Heureuse Logistics", "Fuel Supplier Contact", "Accra Fuel Company", "Request Fuel Quote"],
});

export default function ContactPage() {
    return (
        <div>
            <Section background="hero-image" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-xl text-gray-300">
                        Have a question or need a custom quote? We are here to help.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="prose prose-lg">
                            <h2 className="text-3xl font-bold text-heureuse-navy">Contact Information</h2>
                            <p className="text-muted-foreground">
                                Our team is available Mon-Fri from 8am to 5pm, and 24/7 for emergency supply contracts.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="w-12 h-12 rounded-full bg-heureuse-navy/5 flex items-center justify-center text-heureuse-navy">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Phone</div>
                                        <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-heureuse-navy">{COMPANY_INFO.phone}</a>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="w-12 h-12 rounded-full bg-heureuse-navy/5 flex items-center justify-center text-heureuse-navy">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Email</div>
                                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-muted-foreground hover:text-heureuse-navy">{COMPANY_INFO.email}</a>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="w-12 h-12 rounded-full bg-heureuse-navy/5 flex items-center justify-center text-heureuse-navy">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Office Address</div>
                                        <p className="text-muted-foreground">{COMPANY_INFO.address}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* General Inquiry Form */}
                    <div className="bg-muted/30 p-8 rounded-2xl border">
                        <h2 className="text-2xl font-bold text-heureuse-navy mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Name</Label>
                                    <Input placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Phone</Label>
                                    <Input placeholder="Your phone number" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input type="email" placeholder="email@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label>Message</Label>
                                <Textarea className="min-h-[150px]" placeholder="How can we help you?" />
                            </div>
                            <Button type="submit" className="w-full text-lg h-12 bg-heureuse-navy hover:bg-heureuse-navy/90">
                                Send Message
                            </Button>
                        </form>
                    </div>

                </div>
            </Section>
        </div>
    );
}
