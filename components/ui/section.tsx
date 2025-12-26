import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string;
    background?: "default" | "muted" | "navy" | "navy-dark" | "hero-image";
}

export default function Section({
    className,
    containerClassName,
    background = "default",
    children,
    ...props
}: SectionProps) {

    const bgColors = {
        default: "bg-background",
        muted: "bg-muted/30",
        navy: "bg-heureuse-navy text-white",
        "navy-dark": "bg-[#0f1629] text-white",
        "hero-image": "bg-heureuse-navy text-white relative overflow-hidden"
    };

    return (
        <section
            className={cn(
                "py-12 md:py-24 transition-colors",
                bgColors[background],
                className
            )}
            {...props}
        >
            {background === "hero-image" && (
                <>
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-[url('/tankk.jpg')] bg-cover bg-center"
                        style={{ backgroundPosition: 'center 40%' }}
                    ></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-heureuse-navy/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </>
            )}

            <div className={cn("container mx-auto px-4 md:px-6 relative z-10", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
