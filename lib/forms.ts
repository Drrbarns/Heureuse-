import { z } from "zod";

export const fuelTypes = ["Diesel", "Petrol", "Kerosene", "Heavy Fuel Oil", "Other"] as const;
export const companyTypes = [
    "OMC",
    "Construction",
    "Transport/Fleet",
    "Manufacturing",
    "Mining",
    "Warehouse/Logistics",
    "Agriculture/Farm",
    "Institution (School/Hospital)",
    "Other"
] as const;
export const frequencies = ["One-time", "Daily", "Weekly", "Monthly", "Contract"] as const;

export const quoteStep1Schema = z.object({
    companyName: z.string().min(2, "Company name is required"),
    contactPerson: z.string().min(2, "Contact person is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),
    companyType: z.enum(companyTypes),
});

export const quoteStep2Schema = z.object({
    fuelType: z.enum(fuelTypes),
    volume: z.coerce.number().min(100, "Minimum volume is 100 liters"),
    frequency: z.enum(frequencies),
    preferredDate: z.date().optional(), // Optional in UI but good to have
});

export const quoteStep3Schema = z.object({
    address: z.string().min(5, "Delivery address is required"),
    city: z.string().min(2, "City/Region is required"),
    mapLink: z.string().optional(),
    notes: z.string().optional(),
});

// Combined schema for final submit
export const quoteRequestSchema = quoteStep1Schema
    .merge(quoteStep2Schema)
    .merge(quoteStep3Schema);

export const referralSchema = z.object({
    referrerName: z.string().min(2, "Your name is required"),
    referrerContact: z.string().min(10, "Your phone or email is required"),
    referredCompany: z.string().min(2, "Referred company name is required"),
    referredContact: z.string().min(2, "Referred contact person/details required"),
    estimatedVolume: z.string().optional(),
    notes: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

export const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});