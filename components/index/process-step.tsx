"use client";

import React from "react";
import { useInterface } from "../context/interface-context";
import { Check, Icon } from "phosphor-react";
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
  const {t} = useTranslation()
  const iconFill = isCompleted ? "var(--primary)" : "var(--text-mute)";
  const IconComponent = typeof iconSrc !== "string" ? iconSrc : null;

  const lineColor = isCompleted ? "var(--primary)" : "var(--other-border)";

  return (
    <>
      {(isDesktop || isTablet) && (
        <div className="flex z-10 flex-col flex-1 shrink self-stretch my-auto basis-0 w-[262px] relative">
          <div
            className={`flex gap-1 justify-center items-center self-center px-1 w-10 h-10 min-h-10 rounded-[100px] ${isCompleted
              ? "bg-[var(--primary)]"
              : "bg-white border border-[var(--other-border)] text-lg font-medium whitespace-nowrap"
              }`}
          >
            {isCompleted ? (
              <Check
                size={28}
                color="#fff"
                className="object-contain self-stretch my-auto aspect-square"
              />
            ) : (
              <span className="font-geist-mono font-bold">{number}</span>
            )}
          </div>
          {(stepIndex > 0) && (
            <div
            className="absolute top-5 left-[-49%] w-[92%] h-0 border border-solid z-0 transition-all duration-500"
            style={{
              borderColor: lineColor,
            }} />
          )}
          <div
            className={`px-4 pt-4 pb-10 mt-4 w-full bg-[var(--base-bg)] rounded-lg border border-solid h-[212px] ${stepIndex === activeStep
              ? "border-[var(--primary-border)] duration-500 shadow-[0_6px_16px_0_rgba(211,170,23,0.2)]"
              : "border-[var(--other-border)]"
              }`}
          >
            {typeof iconSrc === "string" ? (
              <img src={iconSrc} alt={title} className="w-6 h-6" />
            ) : (
              IconComponent && (
                <IconComponent size={27} color={iconFill} weight="fill" />
              )
            )}
            <div className="mt-4 w-full">
              <p className="text-[15px] text-[var(--text-mute)] font-medium">
              {t('step')} {number}
              </p>
              <h4
                className={`text-xl font-medium font-geist-raleway w-[221.25px] ${stepIndex === activeStep
                  ? "text-[var(--primary)]"
                  : ""
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
                <img src={iconSrc} alt={title} className="w-[26 guère h-[27px]" />
              ) : (
                IconComponent && (
                  <IconComponent size={27} color={iconFill} weight="fill" />
                )
              )}
              <div className="flex justify-center items-center self-center w-10 h-10 text-lg font-medium whitespace-nowrap bg-white border border-[var(--other-border)] border-solid min-h-10 rounded-[100px]">
                {number}
              </div>
            </div>
            <div className="mt-4 w-full">
              <p className="text-[15px] text-[var(--text-mute)] font-medium">
              {t('step')} {number}
              </p>
              <h4 className="text-lg font-medium">{title}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProcessStep;