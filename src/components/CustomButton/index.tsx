"use client";

import React from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  size?: "small" | "middle" | "large";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className = "",
  loading = false,
  disabled = false,
  onClick,
  suffixIcon,
  prefixIcon,
  htmlType = "button",
  size = "middle",
}) => {
  const getButtonClasses = () => {
    const baseClasses =
      "font-semibold transition-all duration-200 border-none cursor-pointer";

    if (className.includes("primary")) {
      return `${baseClasses} bg-[#4372c3] text-white uppercase text-base hover:bg-[#4372c3]/80`;
    }

    if (className.includes("gradient")) {
      return `${baseClasses} bg-gradient-to-r from-[#4372c3] to-white text-white uppercase text-sm font-semibold rounded`;
    }

    if (className.includes("gray")) {
      return `${baseClasses} bg-gray-100 text-black uppercase font-semibold text-sm rounded hover:bg-gradient-to-r hover:from-[#4372c3] hover:to-white hover:text-white hover:opacity-80`;
    }

    if (className.includes("black")) {
      return `${baseClasses} bg-[#0e0e11] text-white uppercase font-semibold text-base hover:bg-[#0e0e11]/80`;
    }

    if (className.includes("white")) {
      return `${baseClasses} bg-white text-[#212529] uppercase font-semibold text-base rounded-lg hover:bg-white/80`;
    }

    return baseClasses;
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-3 py-1 text-sm";
      case "large":
        return "px-6 py-3 text-lg";
      default:
        return "px-4 py-2 text-base";
    }
  };

  const buttonClasses = `${getButtonClasses()} ${getSizeClasses()}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      type={htmlType}
    >
      <div className="flex items-center gap-2">
        {loading && (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        )}
        {prefixIcon && <span>{prefixIcon}</span>}
        {children}
        {suffixIcon && <span>{suffixIcon}</span>}
      </div>
    </button>
  );
};

export default CustomButton;
