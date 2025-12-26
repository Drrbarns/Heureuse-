"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { referralSchema } from "@/lib/forms";
import { z } from "zod";
import Section from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import Image from "next/image";
import { CheckCircle2, DollarSign, Handshake, Send, Users, Wallet } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function ReferralPage() {
    const form = useForm<z.infer<typeof referralSchema>>({
        resolver: zodResolver(referralSchema),
        defaultValues: {
            consent: false
        }
    });

    const onSubmit = async (data: z.infer<typeof referralSchema>) => {
        // Simulate API
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Referral:", data);
        toast.success("Referral submitted! We will contact you.");
        form.reset();
    };

    const benefits = [
        {
            title: "High Commissions",
            desc: "Earn competitive rates on every liter supplied to your referred client.",
            icon: Wallet
        },
        {
            title: "Transparent Tracking",
            desc: "Get regular updates on delivery status and payment confirmations.",
            icon: CheckCircle2
        },
        {
            title: "Reliable Payments",
            desc: "Guaranteed commission payouts within 48 hours of client payment.",
            icon: DollarSign
        }
    ];

    const steps = [
        {
            num: "01",
            title: "Submit a Lead",
            desc: "Fill out the form with details of a company needing bulk fuel.",
            icon: Send
        },
        {
            num: "02",
            title: "We Close the Deal",
            desc: "Our expert sales team contacts them and secures the supply contract.",
            icon: Handshake
        },
        {
            num: "03",
            title: "You Earn",
            desc: "Receive your commission continuously as long as they buy from us.",
            icon: DollarSign
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden bg-heureuse-navy">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/referral-partner.jpg"
                        alt="Partnership"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-heureuse-navy/80 via-heureuse-navy/60 to-heureuse-navy/90"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
                    <ScrollAnimation variant="slideUp">
                        <span className="text-heureuse-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                            Join Our Network
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Partner & <span className="text-transparent bg-clip-text bg-gradient-to-r from-heureuse-gold to-yellow-200">Earn</span> With Us
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Connect construction sites, factories, and OMCs with Ghana's most reliable fuel supplier. You bring the connection, we handle the logistics.
                        </p>

                    </ScrollAnimation>
                </div>
            </div>

            {/* How It Works & Benefits */}
            <Section className="bg-slate-50 relative overflow-hidden">

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 -skew-x-12 opacity-50 pointer-events-none"></div>

                <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                        <ScrollAnimation>
                            <h2 className="text-3xl font-bold text-heureuse-navy mb-6">Why Partner with Heureuse?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We value our referral partners as an extension of our sales force. Our program is designed to be simple, transparent, and rewarding.
                            </p>
                        </ScrollAnimation>

                        <div className="grid gap-6">
                            {benefits.map((bg, i) => (
                                <ScrollAnimation key={i} delay={i * 0.1} variant="slideRight" className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-full bg-heureuse-navy/5 flex items-center justify-center text-heureuse-gold shrink-0">
                                        <bg.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-heureuse-navy mb-1">{bg.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{bg.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>

                        <ScrollAnimation delay={0.3} className="mt-12 p-6 bg-heureuse-navy rounded-xl text-white relative overflow-hidden">
                            <div className="absolute -right-6 -top-6 text-white/5">
                                <Users className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">Ideal Referral Clients</h3>
                                <ul className="grid sm:grid-cols-2 gap-2 text-gray-300 text-sm mt-4">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-heureuse-gold rounded-full"></div>Construction Sites</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-heureuse-gold rounded-full"></div>Factories</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-heureuse-gold rounded-full"></div>Transport Fleets</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-heureuse-gold rounded-full"></div>Mines & Quarries</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-heureuse-gold rounded-full"></div>Large Hospitals</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-heureuse-gold rounded-full"></div>Hotels</li>
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="space-y-8">
                        {/* Process Steps for Mobile mostly, but visible on desktop too */}
                        <div className="grid sm:grid-cols-3 gap-4 mb-8">
                            {steps.map((step, i) => (
                                <ScrollAnimation key={i} delay={i * 0.1} variant="scale" className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                                    <div className="w-10 h-10 mx-auto rounded-full bg-heureuse-gold/10 text-heureuse-gold font-bold flex items-center justify-center mb-3">
                                        {step.num}
                                    </div>
                                    <h4 className="font-bold text-sm text-heureuse-navy mb-1">{step.title}</h4>
                                </ScrollAnimation>
                            ))}
                        </div>

                        {/* Form Card */}
                        <ScrollAnimation variant="slideLeft">
                            <Card className="border-t-4 border-t-heureuse-gold shadow-2xl overflow-hidden">
                                <CardHeader className="bg-gray-50/50 pb-8">
                                    <CardTitle className="text-2xl text-heureuse-navy">Submit a Lead</CardTitle>
                                    <CardDescription>Enter the details below. We'll handle the rest.</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-4">
                                                    <div className="text-xs font-bold text-heureuse-navy uppercase tracking-wider mb-2">Your Info</div>
                                                    <FormField name="referrerName" control={form.control} render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl><Input placeholder="Your Name" {...field} className="bg-gray-50" /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField name="referrerContact" control={form.control} render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl><Input placeholder="Your Phone / Email" {...field} className="bg-gray-50" /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="text-xs font-bold text-heureuse-navy uppercase tracking-wider mb-2">Lead Info</div>
                                                    <FormField name="referredCompany" control={form.control} render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl><Input placeholder="Company Name" {...field} className="bg-gray-50" /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField name="referredContact" control={form.control} render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl><Input placeholder="Contact Person & Phone" {...field} className="bg-gray-50" /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>
                                            </div>

                                            <FormField name="estimatedVolume" control={form.control} render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Estimated Volume (Optional)</FormLabel>
                                                    <FormControl><Input placeholder="e.g. 5,000 Liters / Week" {...field} className="bg-gray-50" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField name="notes" control={form.control} render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Notes (Optional)</FormLabel>
                                                    <FormControl><Textarea placeholder="Any extra context about this lead..." {...field} className="bg-gray-50 min-h-[80px]" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField name="consent" control={form.control} render={({ field }) => (
                                                <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-2">
                                                    <FormControl>
                                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                                    </FormControl>
                                                    <div className="space-y-1 leading-none">
                                                        <FormLabel className="font-normal text-xs text-gray-500">
                                                            I certify that I have permission to share these details.
                                                        </FormLabel>
                                                        <FormMessage />
                                                    </div>
                                                </FormItem>
                                            )} />

                                            <Button type="submit" className="w-full bg-heureuse-navy hover:bg-heureuse-navy/90 text-white font-bold h-12 shadow-lg hover:shadow-xl transition-all" disabled={form.formState.isSubmitting}>
                                                {form.formState.isSubmitting ? "Submitting..." : "Submit Referral"}
                                            </Button>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </div>
                </div>
            </Section>
        </div>
    );
}
