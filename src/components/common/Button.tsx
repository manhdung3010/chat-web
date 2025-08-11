"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost" | "destructive" | "gradient";
    size?: "sm" | "md" | "lg" | "xl";
    isLoading?: boolean;
};

const base = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md active:scale-95";
const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "h-9 px-4 text-sm rounded-lg",
    md: "h-11 px-6 text-sm rounded-xl",
    lg: "h-12 px-8 text-base rounded-xl",
    xl: "h-14 px-10 text-lg rounded-2xl",
};
const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/40 border border-primary/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-primary/10 border border-border",
    ghost: "bg-transparent text-foreground hover:bg-secondary/50 focus:ring-primary/10 border border-transparent",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive/40 border border-destructive/20",
    gradient: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 focus:ring-primary/40 border border-primary/20",
};

export default function Button({
    className,
    variant = "primary",
    size = "md",
    isLoading = false,
    children,
    ...props
}: ButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(base, sizes[size], variants[variant], className)}
            {...props}
        >
            {isLoading ? (
                <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/60 border-t-transparent" />
                    <span>Loading</span>
                </span>
            ) : (
                children
            )}
        </motion.button>
    );
}


