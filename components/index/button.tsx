import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "white" | "orange";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "white",
  onClick,
}) => {
  const baseClasses =
    "self-stretch px-4 my-auto min-h-10 shadow-[0px_2px_2px_rgba(0,0,0,0.12)] rounded";

  const variantClasses = {
    white: "bg-white border border-gray-200 border-solid text-zinc-800",
    orange: "bg-orange-300 text-zinc-800",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
