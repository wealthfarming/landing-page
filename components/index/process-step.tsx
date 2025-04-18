"use client";
import React from "react";
import { useInterface } from "../context/interface-context";

interface ProcessStepProps {
  number: string;
  title: string;
  iconSrc: string;
  activeStep?: number;
  stepIndex?: number;
  active?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  iconSrc,
  activeStep = 0,
  stepIndex = 0,
  active = false,
}) => {
  const { isDesktop, isTablet, isMobile } = useInterface();
  const isCompleted = isDesktop || isTablet ? stepIndex <= activeStep : active;

  return (
    <>
      {(isDesktop || isTablet) && (
        <div className="flex z-10 flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[200px] transition-all duration-500 ease-in-out">
          <div
            className={`flex gap-1 justify-center items-center self-center px-1 w-10 h-10 min-h-10 rounded-[100px] transition-all duration-300 ${
              isCompleted
                ? "bg-orange-300 scale-110"
                : "bg-white border border-gray-200 text-lg font-medium whitespace-nowrap text-zinc-800"
            }`}
          >
            {isCompleted ? (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/484fb28eb6cbc5ffadca6d2e34a688e8d3cdd505?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                alt="Check icon"
                className="object-contain self-stretch my-auto w-5 aspect-square animate-fade-in"
              />
            ) : (
              <span>{number}</span>
            )}
          </div>
          <div
            className={`px-4 pt-4 pb-10 mt-4 w-full text-black bg-white rounded-lg border border-solid min-h-[150px] transition-all duration-500 ${
              stepIndex === activeStep
                ? "border-[#fdea9b] scale-105 shadow-[0_6px_16px_0_rgba(211,170,23,0.2)]"
                : "border-gray-200"
            }`}
          >
            <img
              src={iconSrc}
              alt="Step icon"
              className="object-contain w-6 aspect-square"
            />
            <div className="mt-4 w-full">
              <p className="text-sm">Bước {number}</p>
              <h4
                className={`text-base font-medium ${
                  stepIndex === activeStep ? "text-[#f5b324] animate-fade-in" : ""
                }`}
              >
                {title}
              </h4>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto basis-0 w-[160px]">
          <div
            className={`${
              active
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