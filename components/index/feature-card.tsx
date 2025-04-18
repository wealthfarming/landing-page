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
    <div className="flex flex-col min-w-60 w-[263px]">
      {!imageOnly ? (
        <div className="flex gap-1 justify-center items-center self-center px-1.5 bg-gray-100 rounded-md h-[60px] min-h-[60px] w-[60px]">
          <img
            src={iconSrc}
            alt="Feature icon"
            className="object-contain self-stretch my-auto w-12 aspect-square"
          />
        </div>
      ) : (
        <img
          src={iconSrc}
          alt="Feature illustration"
          className="object-contain self-center max-w-full aspect-[0.87] w-[200px]"
        />
      )}
      <p className="mt-5 text-base font-medium leading-6 text-center text-black">
        {title}
      </p>
    </div>
  );
};

export default FeatureCard;
