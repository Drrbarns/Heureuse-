"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { quoteStep1Schema, quoteStep2Schema, quoteStep3Schema, fuelTypes, companyTypes, frequencies } from "@/lib/forms";
import Section from "@/components/ui/section";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, Loader2 } from "lucide-react";

// Form Steps
const steps = [
    { id: 1, title: "Company Details" },
    { id: 2, title: "Fuel Request" },
    { id: 3, title: "Delivery Info" },
    { id: 4, title: "Review" },
];

export default function RequestQuotePage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Initialize forms for each step
    const form1 = useForm<z.infer<typeof quoteStep1Schema>>({
        resolver: zodResolver(quoteStep1Schema),
        defaultValues: formData,
    });

    const form2 = useForm<z.infer<typeof quoteStep2Schema>>({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolver: zodResolver(quoteStep2Schema) as any,
        defaultValues: formData,
    });

    const form3 = useForm<z.infer<typeof quoteStep3Schema>>({
        resolver: zodResolver(quoteStep3Schema),
        defaultValues: formData,
    });

    // Handlers
    const onStep1Submit = (data: z.infer<typeof quoteStep1Schema>) => {
        setFormData((prev: any) => ({ ...prev, ...data }));
        setCurrentStep(2);
    };

    const onStep2Submit = (data: z.infer<typeof quoteStep2Schema>) => {
        setFormData((prev: any) => ({ ...prev, ...data }));
        setCurrentStep(3);
    };

    const onStep3Submit = (data: z.infer<typeof quoteStep3Schema>) => {
        setFormData((prev: any) => ({ ...prev, ...data }));
        setCurrentStep(4);
    };

    const onFinalSubmit = async () => {
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Failed to submit quote request');
            }

            setIsSuccess(true);
            toast.success("Quote request submitted successfully!");
        } catch (error) {
            console.error('Error submitting quote:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to submit quote request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Section background="hero-image" className="pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="max-w-4xl mx-auto text-center text-white capitalize px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                        {isSuccess ? "Request Received!" : "Request a Quote"}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        {isSuccess
                            ? "We have received your details."
                            : "Tell us what you need, and we'll get you a competitive price."}
                    </p>
                </div>
            </Section>

            <Section background="muted" className="relative z-10 -mt-8 md:-mt-10 pb-12 md:pb-20">
                <div className="container max-w-3xl mx-auto px-4">
                    {isSuccess ? (
                        <Card className="text-center p-6 md:p-8 shadow-lg">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                                <Check className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-heureuse-navy mb-4">Submission Successful</h2>
                            <p className="text-muted-foreground mb-6 md:mb-8">
                                Our sales team will review your requirements and contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> shortly.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button asChild variant="outline" className="w-full sm:w-auto">
                                    <a href="/">Back to Home</a>
                                </Button>
                                <Button asChild className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                                    <a href={`https://wa.me/233243710010?text=Hi, received my quote request? Ref: ${formData.companyName}`} target="_blank">Chat on WhatsApp</a>
                                </Button>
                            </div>
                        </Card>
                    ) : (
                        <>
                            {/* Steps Indicator */}
                            <div className="flex justify-between mb-8 max-w-md mx-auto relative px-2">
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
                                {steps.map((step) => (
                                    <div key={step.id} className={cn(
                                        "flex flex-col items-center bg-background px-2",
                                        currentStep === step.id ? "text-heureuse-navy font-bold" : "text-gray-400"
                                    )}>
                                        <div className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 mb-1 transition-colors",
                                            currentStep >= step.id ? "bg-heureuse-navy text-white border-heureuse-navy" : "bg-white border-gray-200"
                                        )}>
                                            {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                                        </div>
                                        <span className="text-xs hidden sm:block">{step.title}</span>
                                    </div>
                                ))}
                            </div>

                            <Card className="border-t-4 border-t-heureuse-gold shadow-lg">
                                <CardHeader className="p-4 md:p-6">
                                    <CardTitle>{steps[currentStep - 1].title}</CardTitle>
                                    <CardDescription>Step {currentStep} of 4</CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 md:p-6 pt-0 md:pt-0">

                                    {/* Step 1 Form */}
                                    {currentStep === 1 && (
                                        <Form {...form1}>
                                            <form onSubmit={form1.handleSubmit(onStep1Submit)} className="space-y-6">
                                                <FormField control={form1.control} name="companyName" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Company Name</FormLabel>
                                                        <FormControl><Input placeholder="Globex Corp" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <FormField control={form1.control} name="contactPerson" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Contact Person</FormLabel>
                                                            <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form1.control} name="phone" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Phone Number</FormLabel>
                                                            <FormControl><Input placeholder="050 123 4567" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>
                                                <FormField control={form1.control} name="email" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email Address</FormLabel>
                                                        <FormControl><Input placeholder="john@company.com" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form1.control} name="companyType" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Industry Type</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select industry" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {companyTypes.map((type) => (
                                                                    <SelectItem key={type} value={type}>{type}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <div className="flex justify-end pt-4">
                                                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                                                        Next Step <ChevronRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </form>
                                        </Form>
                                    )}

                                    {/* Step 2 Form */}
                                    {currentStep === 2 && (
                                        <Form {...form2}>
                                            <form onSubmit={form2.handleSubmit(onStep2Submit)} className="space-y-6">
                                                <FormField control={form2.control} name="fuelType" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Fuel Type</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger><SelectValue placeholder="Select Fuel" /></SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {fuelTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <FormField control={form2.control} name="volume" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Volume (Liters)</FormLabel>
                                                            <FormControl><Input type="number" placeholder="5000" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form2.control} name="frequency" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Frequency</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger><SelectValue placeholder="Select Frequency" /></SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    {frequencies.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="flex justify-between pt-4">
                                                    <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>Back</Button>
                                                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                                                        Next Step <ChevronRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </form>
                                        </Form>
                                    )}

                                    {/* Step 3 Form */}
                                    {currentStep === 3 && (
                                        <Form {...form3}>
                                            <form onSubmit={form3.handleSubmit(onStep3Submit)} className="space-y-6">
                                                <FormField control={form3.control} name="address" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Delivery Address</FormLabel>
                                                        <FormControl><Textarea placeholder="Plot 45, Industrial Area..." {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <FormField control={form3.control} name="city" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>City/Region</FormLabel>
                                                            <FormControl><Input placeholder="Accra" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form3.control} name="mapLink" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Google Maps Link (Optional)</FormLabel>
                                                            <FormControl><Input placeholder="https://maps.google.com/..." {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <FormField control={form3.control} name="notes" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Special Instructions</FormLabel>
                                                        <FormControl><Textarea placeholder="Any restricted access times, hose length required, etc." {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <div className="flex justify-between pt-4">
                                                    <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>Back</Button>
                                                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                                                        Review Quote <ChevronRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </form>
                                        </Form>
                                    )}

                                    {/* Step 4 Review */}
                                    {currentStep === 4 && (
                                        <div className="space-y-6">
                                            <div className="bg-muted p-4 md:p-6 rounded-md space-y-4 text-sm">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                                                    <div className="grid grid-cols-2 sm:block">
                                                        <span className="font-semibold text-muted-foreground block">Company:</span>
                                                        <span>{formData.companyName}</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 sm:block">
                                                        <span className="font-semibold text-muted-foreground block">Contact:</span>
                                                        <span>{formData.contactPerson} ({formData.phone})</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 sm:block">
                                                        <span className="font-semibold text-muted-foreground block">Type:</span>
                                                        <span>{formData.companyType}</span>
                                                    </div>
                                                </div>
                                                <div className="h-px bg-border"></div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                                                    <div className="grid grid-cols-2 sm:block">
                                                        <span className="font-semibold text-muted-foreground block">Fuel:</span>
                                                        <span>{formData.fuelType}</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 sm:block">
                                                        <span className="font-semibold text-muted-foreground block">Volume:</span>
                                                        <span>{formData.volume} Liters</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 sm:block">
                                                        <span className="font-semibold text-muted-foreground block">Freq:</span>
                                                        <span>{formData.frequency}</span>
                                                    </div>
                                                </div>
                                                <div className="h-px bg-border"></div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                                                    <div className="grid grid-cols-2 sm:block">
                                                        <span className="font-semibold text-muted-foreground block">Loc:</span>
                                                        <span>{formData.city}</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 sm:block">
                                                        <span className="font-semibold text-muted-foreground block">Address:</span>
                                                        <span className="truncate">{formData.address}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex justify-between pt-4">
                                                <Button type="button" variant="outline" onClick={() => setCurrentStep(3)}>Back</Button>
                                                <Button onClick={onFinalSubmit} size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                                                        </>
                                                    ) : (
                                                        "Submit Request"
                                                    )}
                                                </Button>
                                            </div>
                                        </div>
                                    )}

                                </CardContent>
                            </Card>
                        </>
                    )}
                </div>
            </Section>
        </div>
    );
}
