import React, { forwardRef, useEffect, useRef, useState, ForwardedRef } from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";
import ProcessStep from "./process-step";
import PerformanceTable from "./performance-table";
import { ChartLineUp, HardDrive, Robot, ShoppingCartSimple } from "phosphor-react";
import { useInterface } from "../context/interface-context";

interface ProcessSectionProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  sticky: boolean;
}

const steps = [
  { number: "01", title: "Crawl dữ liệu số", icon: HardDrive },
  { number: "02", title: "AI dự đoán cổ phiếu thêm/loại", icon: Robot },
  { number: "03", title: "Mua ngay sau cutoff date", icon: ShoppingCartSimple },
  { number: "04", title: "Chốt lời 20% hoặc cắt lỗ -13.33%", icon: ChartLineUp },
];

const ProcessSection = forwardRef<HTMLDivElement, ProcessSectionProps>(({
  setActiveStep, activeStep, sticky
}, ref: ForwardedRef<HTMLDivElement>) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef<number>(0);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const { isMobile } = useInterface();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
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
          title={step.title}
          iconSrc={step.icon}
          activeStep={activeStep}
          stepIndex={index}
        />
      </div>
    ));

  return isMobile ? (
    <div className="relative max-w-[1200px]">
      <SectionContainer>
        <SectionTitle
          title="Bảo Mật Tuyệt Đối - Minh Bạch Từng Giao Dịch"
          subtitle="Cơ Hội Đầu Tư Chỉ Số Thế Hệ Mới - Linh Hoạt, Minh Bạch, Hiệu Quả"
        />
        <div className="grid grid-cols-2 gap-4 mt-10">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              iconSrc={step.icon}
              activeStep={index}
              stepIndex={index}
            />
          ))}
        </div>
        <div className="mt-10 max-w-screen-md mx-auto text-base font-medium text-[var(--text-bold)]">
          <h3 className="text-lg max-md:text-[17px] font-bold text-center">Performance Table</h3>
          <PerformanceTable />
          <p className="mt-6 text-center text-[var(--text-mute)]">
            Hiệu suất quá khứ không đảm bảo kết quả tương lai. Đầu tư có rủi ro.
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
        className="sticky top-0 h-screen flex flex-col items-center justify-center z-30"
      >
        <SectionContainer>
          <SectionTitle
            title="Chiến Lược & Hiệu Suất"
            subtitle="Cơ Chế Tạo Ra Lợi Nhuận 82.55% Năm"
          />
          <div className="flex relative gap-4 items-center mt-10 w-full max-md:flex-col">
            <div className="absolute top-5 z-0 shrink-0 self-start h-0 border border-[var(--other-border)] border-solid inset-x-[134px] min-w-60 w-[900px]" />
            {renderSteps()}
          </div>
          <div className="flex flex-col gap-2 self-center mt-10 max-w-screen-md text-base font-medium text-[var(--text-bold)] w-[768px] max-md:max-w-full">
            <h3 className="text-lg text-center max-md:max-w-full font-bold">Performance Table</h3>
            <PerformanceTable />
            <p className="self-center text-center text-[var(--text-mute)] max-md:max-w-full">
              Hiệu suất quá khứ không đảm bảo kết quả tương lai. Đầu tư có rủi ro.
            </p>
          </div>
        </SectionContainer>
      </div>
    </div>
  );

});

export default ProcessSection;
