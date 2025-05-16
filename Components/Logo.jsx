import React from "react";

const Logo = ({ color = "text-purple-600" }) => {
  return (
    <svg
      className={`w-9 h-9 ${color}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2L4 6v6c0 4 4 6 8 10 4-4 8-6 8-10V6l-8-4z"
      />
    </svg>
  );
};

export default Logo;
