"use client";

import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    label?: string;
    error?: string;
    variant?: "default" | "success" | "error";
    floatingLabel?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    className = "",
    leftIcon,
    rightIcon,
    label,
    error,
    variant = "default",
    floatingLabel = false,
    ...props
}, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        setHasValue(e.target.value.length > 0);
        props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(e.target.value.length > 0);
        props.onChange?.(e);
    };

    const getVariantStyles = () => {
        switch (variant) {
            case "success":
                return "border-green-500 focus:border-green-500 focus:ring-green-500/20";
            case "error":
                return "border-red-500 focus:border-red-500 focus:ring-red-500/20";
            default:
                return "border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-gray-600 dark:focus:border-blue-400";
        }
    };

    const inputClasses = cn(
        "w-full rounded-xl border bg-white/50 px-4 py-4 text-gray-900 placeholder-transparent backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-4 dark:bg-gray-800/50 dark:text-white dark:placeholder-transparent",
        leftIcon ? "pl-12" : "",
        rightIcon ? "pr-12" : "",
        getVariantStyles(),
        floatingLabel ? "placeholder-transparent" : "",
        className
    );

    return (
        <div className="space-y-2">
            <motion.div
                initial={false}
                animate={{
                    scale: isFocused ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="relative"
            >
                {leftIcon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        {leftIcon}
                    </div>
                )}

                <input
                    {...props}
                    ref={ref}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder={floatingLabel ? label : props.placeholder}
                />

                {floatingLabel && label && (
                    <motion.label
                        initial={false}
                        animate={{
                            y: isFocused || hasValue ? -12 : 0,
                            scale: isFocused || hasValue ? 0.85 : 1,
                            color: isFocused ? "rgb(59 130 246)" : "rgb(107 114 128)",
                        }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "absolute left-4 top-4 text-sm font-medium transition-all duration-200 pointer-events-none",
                            leftIcon ? "left-12" : "",
                            isFocused ? "text-blue-500 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                        )}
                    >
                        {label}
                    </motion.label>
                )}

                {rightIcon && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        {rightIcon}
                    </div>
                )}
            </motion.div>

            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 dark:text-red-400"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
});

Input.displayName = "Input";
