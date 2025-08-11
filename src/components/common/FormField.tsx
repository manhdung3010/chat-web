import React from "react";
import { cn } from "@/utils/cn";

type FormFieldProps = {
    label?: string;
    hint?: string;
    error?: string;
    className?: string;
    children: React.ReactNode;
};

export default function FormField({ label, hint, error, className, children }: FormFieldProps) {
    return (
        <div className={cn("w-full space-y-1", className)}>
            {label && <label className="block text-sm font-medium text-foreground/80">{label}</label>}
            {children}
            {hint && !error && <p className="text-xs text-foreground/60">{hint}</p>}
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}


