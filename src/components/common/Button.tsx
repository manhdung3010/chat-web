"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { LoadingSpinner } from "./LoadingSpinner";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost" | "destructive" | "gradient" | "outline";
    size?: "sm" | "md" | "lg" | "xl";
    isLoading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
};

const base = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md active:scale-95 relative overflow-hidden";
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
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 focus:ring-blue-500/30 shadow-lg hover:shadow-xl",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500/30 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20",
};

export default function Button({
    className,
    variant = "primary",
    size = "md",
    isLoading = false,
    icon,
    iconPosition = "left",
    children,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(base, sizes[size], variants[variant], className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {/* Loading Overlay */}
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit"
                >
                    <LoadingSpinner size="sm" color="white" />
                </motion.div>
            )}

            {/* Content */}
            <motion.div
                animate={{ opacity: isLoading ? 0 : 1 }}
                className="flex items-center gap-2"
            >
                {icon && iconPosition === "left" && <span className="text-lg">{icon}</span>}
                {children}
                {icon && iconPosition === "right" && <span className="text-lg">{icon}</span>}
            </motion.div>

            {/* Gradient Overlay for gradient variant */}
            {variant === "gradient" && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            )}
        </motion.button>
    );
}


