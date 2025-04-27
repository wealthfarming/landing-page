import React from "react";

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: string;
  textColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  textColor = "text-[var(--text-bold)]",
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full text-center max-md:max-w-full gap-3">
      <h2 className={`text-[40px] font-medium ${textColor} max-md:max-w-full`}>
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-screen-md text-lg text-[var(--text-medium)] font-medium max-md:max-w-full">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
