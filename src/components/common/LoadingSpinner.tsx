"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    color?: "white" | "blue" | "gray";
    className?: string;
}

export function LoadingSpinner({ size = "md", color = "white", className }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
    };

    const colorClasses = {
        white: "border-white/30 border-t-white",
        blue: "border-blue-500/30 border-t-blue-500",
        gray: "border-gray-500/30 border-t-gray-500",
    };

    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className={cn(`${sizeClasses[size]} rounded-full border-2 ${colorClasses[color]}`, className)}
        />
    );
}
