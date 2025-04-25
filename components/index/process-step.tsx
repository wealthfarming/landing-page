"use client";
import React from "react";
import { useInterface } from "../context/interface-context";
import { Icon } from "phosphor-react";
import { useTranslation } from "react-i18next";


interface ProcessStepProps {
  number: string;
  title: string;
  iconSrc: Icon | string;
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

  const iconFill = isCompleted ? "var(--primary)" : "var(--text-mute)";
  const IconComponent = typeof iconSrc !== "string" ? iconSrc : null;
  const {t} = useTranslation()
  return (
    <>
      {(isDesktop || isTablet) && (
        <div className="flex z-10 flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[200px] transition-all duration-500 ease-in-out">
          <div
            className={`flex gap-1 justify-center items-center self-center px-1 w-10 h-10 min-h-10 rounded-[100px] transition-all duration-300 ${isCompleted
              ? "bg-[var(--primary)] scale-110"
              : "bg-white border border-[var(--other-border)] text-lg font-medium whitespace-nowrap"
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
            className={`px-4 pt-4 pb-10 mt-4 w-full rounded-lg border border-solid min-h-[182px] transition-all duration-500 ${stepIndex === activeStep
              ? "border-[var(--primary-border)] scale-105 shadow-[0_6px_16px_0_rgba(211,170,23,0.2)]"
              : "border-[var(--other-border)]"
              }`}
          >
            {typeof iconSrc === "string" ? (
              <img src={iconSrc} alt={title} className="w-6 h-6" />
            ) : (
              IconComponent && <IconComponent size={27} color={iconFill} weight="fill" />
            )}
            <div className="mt-4 w-full">
              <p className="text-[15px] text-[var(--text-mute)] font-medium">{t('step')} {number}</p>
              <h4
                className={`text-xl font-medium ${stepIndex === activeStep ? "text-[var(--primary)] animate-fade-in" : ""
                  }`}
              >
                {title}
              </h4>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto basis-0 w-full">
          <div className="p-5 w-full rounded-lg border border-[var(--other-border)] border-solid min-h-[205px]">
            <div className="flex justify-between items-center">
              {typeof iconSrc === "string" ? (
                <img src={iconSrc} alt={title} className="w-[26px] h-[27px]" />
              ) : (
                IconComponent && <IconComponent size={27} color={iconFill} weight="fill" />
              )}
              <div
                className="flex justify-center items-center self-center w-10 h-10 text-lg font-medium whitespace-nowrap bg-white border border-[var(--other-border)] border-solid min-h-10 rounded-[100px]"
              >
                {number}
              </div>
            </div>
            <div className="mt-4 w-full">
              <p className="text-[15px] text-[var(--text-mute)] font-medium">Bước {number}</p>
              <h4 className="text-lg font-medium">{title}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProcessStep;