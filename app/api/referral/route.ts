import { NextRequest, NextResponse } from "next/server";
import { referralSchema } from "@/lib/forms";
import { z } from "zod";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the data
        const validatedData = referralSchema.parse(body);

        // TODO: In production, you would:
        // 1. Save to database (e.g., Prisma, MongoDB, etc.)
        // 2. Send email notification to sales team
        // 3. Send confirmation email to referrer
        // 4. Create lead in CRM system
        // 5. Track referral source for analytics

        // For now, we'll just log it and return success
        console.log("Referral Submitted:", {
            timestamp: new Date().toISOString(),
            ...validatedData,
        });

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 500));

        return NextResponse.json(
            {
                success: true,
                message: "Referral submitted successfully",
                data: {
                    id: `REF-${Date.now()}`,
                    submittedAt: new Date().toISOString(),
                },
            },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation error",
                    errors: error.issues,
                },
                { status: 400 }
            );
        }

        console.error("Referral submission error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Internal server error",
            },
            { status: 500 }
        );
    }
}

