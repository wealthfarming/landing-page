"use client";

import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  ForwardedRef
} from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";
import ProcessStep from "./process-step";
import PerformanceTable from "./performance-table";
import { useInterface } from "../../components/context/interface-context";
import { ChartLineUp, HardDrive, Robot, ShoppingCartSimple } from "phosphor-react";
import { useTranslation } from "react-i18next";


const ProcessSection = forwardRef<HTMLDivElement>((_props, ref: ForwardedRef<HTMLDivElement>) => {
  const {t} = useTranslation()
  const { isDesktop, isTablet, isMobile } = useInterface();
  const processStepRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;

  const activeStepRef = useRef(activeStep);
  const isScrolling = useRef(false);

  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    const isSectionInView = () => {
      if (processStepRef.current) {
        const rect = processStepRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        return (
          rect.top >= -rect.height * 0.4 &&
          rect.bottom <= windowHeight + rect.height * 0.4
        );
      }
      return false;
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isSectionInView()) return;

      if (isScrolling.current) {
        event.preventDefault();
        return;
      }

      const delta = event.deltaY;
      const currentStep = activeStepRef.current;

      if (delta > 0 && currentStep < totalSteps - 1) {
        event.preventDefault();
        isScrolling.current = true;
        const nextStep = currentStep + 1;
        setActiveStep(nextStep);
        activeStepRef.current = nextStep;

        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      } else if (delta < 0 && currentStep > 0) {
        event.preventDefault();
        isScrolling.current = true;
        const prevStep = currentStep - 1;
        setActiveStep(prevStep);
        activeStepRef.current = prevStep;

        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      {(isDesktop || isTablet) && (
        <SectionContainer>
          <SectionTitle
            title={t('process_section_title')}
            subtitle={t('process_section_subtitle')}
          />
          <div
            ref={processStepRef}
            className="flex relative gap-4 items-center mt-10 w-full max-md:max-w-full"
          >
            <div className="absolute top-5 z-0 shrink-0 self-start h-0 border border-[var(--other-border)] border-solid inset-x-[134px] min-w-60 w-[900px]" />
            {[
              {
                number: "01",
                title: t('process_section_step_1'),
                icon: HardDrive
              },
              {
                number: "02",
                title: t('process_section_step_2'),
                icon: Robot
              },
              {
                number: "03",
                title: t('process_section_step_3'),
                icon: ShoppingCartSimple
              },
              {
                number: "04",
                title: t('process_section_step_4'),
                icon: ChartLineUp
              }
            ].map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                iconSrc={step.icon}
                activeStep={activeStep}
                stepIndex={index}
              />
            ))}
          </div>

          <div className="flex flex-col self-center mt-10 max-w-screen-md text-base font-medium text-zinc-800 w-[768px] max-md:max-w-full">
            <h3 className="text-2xl text-center max-md:max-w-full">{t('process_section_performance_table_title')}</h3>
            <PerformanceTable />
            <p className="self-center mt-6 text-center text-gray-700 max-md:max-w-full">
              {t('process_section_disclaimer')}
            </p>
          </div>
        </SectionContainer>
      )}

      {isMobile && (
        <SectionContainer>
          <SectionTitle
            title={t('process_section_title')}
            subtitle={t('process_section_subtitle')}
          />
          <div className="grid grid-cols-2 relative gap-3 items-center mt-10 w-full max-md:max-w-full">
            {[
              {
                number: "01",
                title: t('process_section_step_1'),
                icon: HardDrive
              },
              {
                number: "02",
                title: t('process_section_step_2'),
                icon: Robot
              },
              {
                number: "03",
                title: t('process_section_step_3'),
                icon: ShoppingCartSimple
              },
              {
                number: "04",
                title: t('process_section_step_4'),
                icon: ChartLineUp
              }
            ].map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                iconSrc={step.icon}
                activeStep={activeStep}
                stepIndex={index}
              />
            ))}
          </div>

          <div className="flex flex-col self-center mt-10 max-w-screen-md text-base font-medium text-zinc-800 max-md:max-w-full">
            <h3 className="text-2xl text-center max-md:max-w-full">{t('process_section_performance_table_title')}</h3>
            <PerformanceTable />
            <p className="self-center mt-6 text-center text-gray-700 max-md:max-w-full">
              {t('process_section_disclaimer')}
            </p>
          </div>
        </SectionContainer>
      )}
    </>
  );
});

export default ProcessSection;