import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  classname?: string;
  variant?: "white" | "orange";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  classname,
  variant = "white",
  onClick,
}) => {
  const baseClasses =
    "self-stretch my-auto min-h-10 shadow-[0px_2px_2px_rgba(0,0,0,0.12)] rounded";

  const variantClasses = {
    white: "bg-white border border-gray-200 border-solid text-zinc-800",
    orange: "!border-[1px] !rounded-[4px] cursor-pointer !shadow-[0px_1px_2px_0px_rgba(0,0,0,0.24)] !py-0 px-[24px] max-md:px-4 !bg-[var(--color-primary)] hover:brightness-[1.1] border-none button rounded-none transition-transform duration-300 ease-in-out text-zinc-800",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${classname} cursor-pointer h-[60px] flex flex-row justify-center items-center gap-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
