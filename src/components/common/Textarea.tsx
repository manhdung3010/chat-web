"use client";

import React, { forwardRef } from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, error, className = "", ...props }, ref) => {
    return (
        <div className="w-full space-y-1 flex">
            {label && <label className="block text-sm font-medium text-foreground/80">{label}</label>}
            <textarea
                {...props}
                ref={ref}
                className={`w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition ${className}`}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
});

Textarea.displayName = "Textarea";

export default Textarea;



