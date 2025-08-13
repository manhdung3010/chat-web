"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
    return (
        <SonnerToaster
            position="top-center"
            toastOptions={{
                unstyled: false,
                classNames: {
                    toast: "group toast",
                    description: "group-[.toast]:text-gray-600 dark:group-[.toast]:text-gray-400",
                    actionButton: "group-[.toast]:bg-blue-600 group-[.toast]:text-white hover:group-[.toast]:bg-blue-700",
                    cancelButton: "group-[.toast]:bg-gray-200 group-[.toast]:text-gray-700 hover:group-[.toast]:bg-gray-300 dark:group-[.toast]:bg-gray-700 dark:group-[.toast]:text-gray-300",
                },
            }}
            richColors={false}
            duration={4000}
            expand={false}
            gap={8}

        />
    );
}
