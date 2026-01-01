"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactSchema } from "@/lib/forms";
import Section from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ContactPage() {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: z.infer<typeof contactSchema>) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || 'Failed to send message');
            }

            toast.success("Message sent successfully! We'll get back to you soon.");
            form.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
        }
    };

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
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your phone number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="email@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea className="min-h-[150px]" placeholder="How can we help you?" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button 
                                    type="submit" 
                                    className="w-full text-lg h-12 bg-heureuse-navy hover:bg-heureuse-navy/90"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {form.formState.isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>

                </div>
            </Section>
        </div>
    );
}
