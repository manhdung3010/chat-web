"use client";

import React from "react";
import { cn } from "@/utils/cn";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

export function TextInput({ className = "", leftIcon, rightIcon, ...props }: TextInputProps) {
    return (
        <div className="relative">
            {leftIcon && <div className="pointer-events-none absolute inset-y-0 left-0 z-10 grid w-10 place-content-center text-foreground/50">{leftIcon}</div>}
            <input
                {...props}
                className={cn(
                    "w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition",
                    leftIcon ? "pl-10" : "",
                    rightIcon ? "pr-10" : "",
                    className
                )}
            />
            {rightIcon && <div className="absolute inset-y-0 right-0 z-10 grid w-10 place-content-center text-foreground/50">{rightIcon}</div>}
        </div>
    );
}


