import React from "react";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  imageOnly?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  title,
  imageOnly = false,
}) => {
  return (
    <div className="flex flex-col min-w-60 w-[263px] max-md:w-full">
      {!imageOnly ? (
        <div className="flex gap-1 justify-center items-center self-center px-1.5 max-md:px-0 md:bg-gray-100 rounded-md h-[60px] min-h-[60px] w-[60px]">
          <img
            src={iconSrc}
            alt="Feature icon"
            className="object-contain self-stretch my-auto w-12 aspect-square !max-md:w-[60px] max-md:h-[60px] max-md:my-0"
          />
        </div>
      ) : (
        <img
          src={iconSrc}
          alt="Feature illustration"
          className="object-contain self-center max-w-full aspect-[0.87] w-[200px]"
        />
      )}
      <p className="mt-5 text-lg font-medium leading-6 text-center text-[var(--text-medium)] max-md:text-[17px]">
        {title}
      </p>
    </div>
  );
};

export default FeatureCard;
