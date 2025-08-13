import React from "react";

type AvatarProps = {
    name: string;
    src?: string;
    size?: number;
    status?: "online" | "offline";
    className?: string;
};

export default function Avatar({
    name,
    src,
    size = 40,
    status,
    className = "",
}: AvatarProps) {
    const initials = name
        .split(" ")
        .map((s) => s.charAt(0))
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <div
            className={`relative inline-flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
        >
            <div className="overflow-hidden rounded-full bg-primary text-white w-full h-full flex items-center justify-center">
                {src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={src}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <span className="text-sm font-semibold">{initials}</span>
                )}
            </div>

            {status && (
                <span
                    className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card ${status === "online" ? "bg-emerald-500" : "bg-gray-400"
                        }`}
                />
            )}
        </div>
    );
}

