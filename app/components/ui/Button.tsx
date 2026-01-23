"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    className?: string;
    href?: string;
}

export default function Button({
    children,
    variant = "primary",
    className,
    href,
    ...props
}: ButtonProps) {
    const baseStyles =
        "relative px-8 py-3.5 font-medium tracking-tight text-sm md:text-base transition-all duration-300 rounded-full focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden flex items-center justify-center gap-2 active:scale-95";

    const variants = {
        primary:
            "bg-primary text-primary-invert hover:bg-primary/90 shadow-lg hover:shadow-xl",
        secondary:
            "bg-secondary text-foreground hover:bg-secondary/80",
        outline:
            "bg-transparent text-foreground border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/5",
        ghost: "bg-transparent text-foreground/70 hover:text-foreground hover:bg-foreground/5",
    };

    const Component = motion.button;

    // We are handling navigation in the parent usually, but if href is passed we could wrap it.
    // For now simple button.

    return (
        <Component
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </Component>
    );
}
