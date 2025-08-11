"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldDark = stored ? stored === "dark" : prefersDark;
        setIsDark(shouldDark);
        document.documentElement.classList.toggle("dark", shouldDark);
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary"
        >
            <motion.span
                key={String(isDark)}
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="text-xl"
            >
                {isDark ? "🌙" : "☀️"}
            </motion.span>
        </button>
    );
}


