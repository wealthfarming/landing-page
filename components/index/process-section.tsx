import React, { forwardRef, useEffect, useRef, useState, ForwardedRef } from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";
import ProcessStep from "./process-step";
import PerformanceTable from "./performance-table";
import { ChartLineUp, HardDrive, Robot, ShoppingCartSimple } from "phosphor-react";
import { useInterface } from "../context/interface-context";
import { useTranslation } from "react-i18next";

interface ProcessSectionProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  sticky: boolean;
}

const steps = [
  { number: "01", title: "process_section_step_1", icon: HardDrive },
  { number: "02", title: "process_section_step_2", icon: Robot },
  { number: "03", title: "process_section_step_3", icon: ShoppingCartSimple },
  { number: "04", title: "process_section_step_4", icon: ChartLineUp },
];

const ProcessSection = forwardRef<HTMLDivElement, ProcessSectionProps>(({
  setActiveStep, activeStep, sticky
}, ref: ForwardedRef<HTMLDivElement>) => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef<number>(0);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const { isMobile } = useInterface();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      {
        threshold: 0.0,
        rootMargin: "-60% 0px -90% 0px",
      }
    );
  
    const el = sectionRef.current;
    if (el) observer.observe(el);
  
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);
  

  useEffect(() => {
    if (!isSectionInView) return;

    const SCROLL_THRESHOLD = 700;
    let scrollBuffer = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollY.current;
      scrollBuffer += deltaY;

      if (scrollBuffer >= SCROLL_THRESHOLD) {
        setScrollCount((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
        scrollBuffer = 0;
      } else if (scrollBuffer <= -SCROLL_THRESHOLD) {
        setScrollCount((prev) => (prev > 0 ? prev - 1 : prev));
        scrollBuffer = 0;
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSectionInView]);

  useEffect(() => {
    setActiveStep(scrollCount);
  }, [scrollCount, setActiveStep]);

  const renderSteps = () =>
    steps.map((step, index) => (
      <div key={index} className="flex-1">
        <ProcessStep
          number={step.number}
          title={t(step.title)}
          iconSrc={step.icon}
          activeStep={activeStep}
          stepIndex={index}
        />
      </div>
    ));

  return isMobile ? (
    <div className="relative max-w-[1200px] min-h-screen">
      <SectionContainer bgColor="bg-[var(--canvas-bg)]">
        <SectionTitle
          title={t('process_section_title')}
          subtitle={t('process_section_subtitle')}
        />
        <div className="grid grid-cols-2 gap-4 mt-10">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={t(step.title)}
              iconSrc={step.icon}
              activeStep={index}
              stepIndex={index}
            />
          ))}
        </div>
        <div className="mt-10 max-w-screen-md mx-auto text-base font-medium text-[var(--text-bold)]">
          <h3 className="text-lg max-md:text-[17px] font-bold text-center">{t('process_section_performance_table_title')}</h3>
          <PerformanceTable />
          <p className="mt-6 text-center text-[var(--text-mute)]">
            {t('process_section_disclaimer')}
          </p>
        </div>
      </SectionContainer>
    </div>
  ) : (
    <div
      ref={sectionRef}
      style={{ minHeight: `${steps.length * 100}vh` }}
      className="relative w-full"
    >
      <div
        ref={ref}
        className="sticky top-[80px] h-screen flex flex-col items-center justify-center z-30"
      >
        <SectionContainer bgColor="bg-[var(--canvas-bg)]">
          <SectionTitle
            title={t('process_section_title')}
            subtitle={t('process_section_subtitle')}
          />
          <div className="flex w-full items-center justify-center">
            <div className="flex relative gap-4 items-center justify-center mt-10 w-[1105px] max-md:flex-col">
              <div className="absolute top-5 z-0 shrink-0 self-start h-0 border border-[var(--other-border)] border-solid inset-x-[134px] min-w-60 w-[430px]" />
              {renderSteps()}
            </div>
          </div>
          <div className="flex flex-col gap-2 self-center mt-10 max-w-screen-md text-base font-medium text-[var(--text-bold)] w-[768px] max-md:max-w-full">
            <h3 className="text-lg text-center max-md:max-w-full font-bold">{t('process_section_performance_table_title')}</h3>
            <PerformanceTable />
            <p className="self-center text-center text-[var(--text-mute)] max-md:max-w-full text-[12px]">
              {t('process_section_disclaimer')}
            </p>
          </div>
        </SectionContainer>
      </div>
    </div>
  );

});

export default ProcessSection;
