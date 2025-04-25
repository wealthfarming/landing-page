import React from "react";

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: string;
  textColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  textColor = "text-zinc-800",
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full text-center max-md:max-w-full">
      <h2 className={`text-4xl font-medium ${textColor} max-md:max-w-full`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-screen-md text-base text-gray-700 max-md:max-w-full">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
