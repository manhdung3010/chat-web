"use client";

import React from "react";

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
  border?: boolean;
  hover?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({
  children,
  className = "",
  padding = "md",
  shadow = "sm",
  border = true,
  hover = false,
  header,
  footer,
  title,
  subtitle,
  actions,
}) => {
  const getPaddingClasses = () => {
    switch (padding) {
      case "none":
        return "";
      case "sm":
        return "p-3";
      case "md":
        return "p-6";
      case "lg":
        return "p-8";
      default:
        return "p-6";
    }
  };

  const getShadowClasses = () => {
    switch (shadow) {
      case "none":
        return "";
      case "sm":
        return "shadow-sm";
      case "md":
        return "shadow-md";
      case "lg":
        return "shadow-lg";
      default:
        return "shadow-sm";
    }
  };

  const cardClasses = `
    bg-white rounded-lg transition-all duration-200
    ${border ? "border border-gray-200" : ""}
    ${getShadowClasses()}
    ${hover ? "hover:shadow-lg hover:-translate-y-1" : ""}
    ${className}
  `.trim();

  const bodyClasses = getPaddingClasses();

  return (
    <div className={cardClasses}>
      {(header || title) && (
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
          {header || (
            <div className="flex items-center justify-between">
              <div>
                {title && (
                  <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
                )}
              </div>
              {actions && (
                <div className="flex items-center gap-2">{actions}</div>
              )}
            </div>
          )}
        </div>
      )}

      <div className={bodyClasses}>{children}</div>

      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  );
};

export default CustomCard;
