"use client";
import React from "react";
import { useInterface } from "../context/interface-context";

interface ProcessStepProps {
  number: string;
  title: string;
  iconSrc: string;
  active?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  iconSrc,
  active = false,
}) => {
  const { isDesktop, isTablet, isMobile } = useInterface();
  return (
    <>
      {(isDesktop || isTablet) && (
        <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-60">
          <div
            className={`${active
              ? "flex gap-1 justify-center items-center self-center px-1 w-10 h-10 bg-orange-300 min-h-10 rounded-[100px]"
              : "flex justify-center items-center gap-1 self-center px-1 w-10 h-10 text-lg font-medium whitespace-nowrap bg-white border border-gray-200 border-solid min-h-10 rounded-[100px] text-zinc-800"
              }`}
          >
            {active ? (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/484fb28eb6cbc5ffadca6d2e34a688e8d3cdd505?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                alt="Check icon"
                className="object-contain self-stretch my-auto w-5 aspect-square"
              />
            ) : (
              number
            )}
          </div>
          <div className="px-4 pt-4 pb-20 mt-4 w-full text-black bg-white rounded-lg border border-gray-200 border-solid min-h-[182px]">
            <img
              src={iconSrc}
              alt="Step icon"
              className="object-contain w-6 aspect-square"
            />
            <div className="mt-4 w-full">
              <p className="text-sm">Bước {number}</p>
              <h4 className="text-base font-medium">{title}</h4>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto basis-0 w-[160px]">
          <div
            className={`${active
              ? "flex gap-1 justify-center items-center self-center px-1 w-10 h-10 bg-orange-300 min-h-10 rounded-[100px]"
              : "flex justify-center items-center gap-1 self-center px-1 w-10 h-10 text-lg font-medium whitespace-nowrap bg-white border border-gray-200 border-solid min-h-10 rounded-[100px] text-zinc-800"
              }`}
          >
            {active ? (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/484fb28eb6cbc5ffadca6d2e34a688e8d3cdd505?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                alt="Check icon"
                className="object-contain self-stretch my-auto w-5 aspect-square"
              />
            ) : (
              number
            )}
          </div>
          <div className="px-4 pt-4 pb-20 mt-4 w-full text-black bg-white rounded-lg border border-gray-200 border-solid h-[182px]">
            <img
              src={iconSrc}
              alt="Step icon"
              className="object-contain w-6 aspect-square"
            />
            <div className="mt-4 w-full">
              <p className="text-sm">Bước {number}</p>
              <h4 className="text-base font-medium">{title}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProcessStep;
