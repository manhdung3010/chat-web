"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    description?: string;
    variant?: "default" | "primary";
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
    label,
    description,
    variant = "default",
    className,
    ...props
}, ref) => {
    const variantStyles = {
        default: "border-gray-300 bg-white group-hover:border-blue-400 dark:border-gray-600 dark:bg-gray-800",
        primary: "border-blue-500 bg-blue-500 group-hover:border-blue-600 dark:border-blue-400 dark:bg-blue-400",
    };

    const isChecked = variant === "primary" || props.checked;

    return (
        <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex-shrink-0">
                <input
                    type="checkbox"
                    className="sr-only"
                    ref={ref}
                    {...props}
                />
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                        "h-5 w-5 rounded border-2 transition-all duration-200",
                        isChecked ? "border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400" : variantStyles[variant],
                        className
                    )}
                >
                    {isChecked && (
                        <motion.svg
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </motion.svg>
                    )}
                </motion.div>
            </div>
            {(label || description) && (
                <div className="flex-1">
                    {label && (
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {label}
                        </span>
                    )}
                    {description && (
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            {description}
                        </p>
                    )}
                </div>
            )}
        </label>
    );
});

Checkbox.displayName = "Checkbox";
