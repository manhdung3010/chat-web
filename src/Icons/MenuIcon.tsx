import React from "react";

interface Props {
  className?: string;
}

export const MenuIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.125 15H16.875M3.125 10H16.875M3.125 5H16.875"
        stroke="#5E718D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
