"use client";

import React, { useState } from "react";
import { Input } from "antd";

interface CustomInputProps {
  value?: string;
  onChange?: (value: any) => void;
  placeholder?: string;
  className?: string;
  type?: "text" | "password" | "number" | "email" | "tel";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: boolean;
  size?: "small" | "middle" | "large";
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder,
  className = "",
  type = "text",
  prefix,
  suffix,
  disabled = false,
  readOnly = false,
  required = false,
  error = false,
  size = "middle",
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (onChange) {
      if (type === "number") {
        onChange(Number(newValue) || 0);
      } else {
        onChange(newValue);
      }
    }
  };

  const getInputClasses = () => {
    const baseClasses =
      "border-none focus:border-none focus:shadow-none hover:border-none";
    const errorClasses = error ? "border-red-500 focus:border-red-500" : "";
    const disabledClasses = disabled ? "bg-gray-100 text-gray-500" : "";

    return `${baseClasses} ${errorClasses} ${disabledClasses} ${className}`.trim();
  };

  return (
    <div className="w-full">
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={getInputClasses()}
        type={type}
        prefix={prefix}
        suffix={suffix}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        size={size}
      />
    </div>
  );
};

// CustomTextarea component
interface CustomTextareaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: boolean;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  value,
  onChange,
  placeholder,
  className = "",
  rows = 4,
  disabled = false,
  readOnly = false,
  required = false,
  error = false,
}) => {
  const [textareaValue, setTextareaValue] = useState(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextareaValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const getTextareaClasses = () => {
    const baseClasses =
      "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    const errorClasses = error ? "border-red-500 focus:ring-red-500" : "";
    const disabledClasses = disabled
      ? "bg-gray-100 text-gray-500 cursor-not-allowed"
      : "";

    return `${baseClasses} ${errorClasses} ${disabledClasses} ${className}`.trim();
  };

  return (
    <textarea
      value={textareaValue}
      onChange={handleChange}
      placeholder={placeholder}
      className={getTextareaClasses()}
      rows={rows}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
    />
  );
};

export { CustomTextarea };
export default CustomInput;
