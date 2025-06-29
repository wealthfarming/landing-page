import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  bgColor?: string;
  borderBottom?: boolean;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  bgColor = "bg-white",
  borderBottom = true,
  className
}) => {
  return (
    <section
      className={`flex flex-col justify-center items-center px-10 py-20 max-md:py-10 w-full ${bgColor} ${borderBottom ? "border-b border-gray-200" : ""} max-md:px-5 max-md:max-w-full ${className || ""}`}
    >
      <div className="flex flex-col justify-center w-full max-w-[1200px] max-md:max-w-full">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
