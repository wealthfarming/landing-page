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

const ProcessSection = forwardRef<HTMLDivElement>((_props, ref: ForwardedRef<HTMLDivElement>) => {
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
            title="Bảo Mật Tuyệt Đối - Minh Bạch Từng Giao Dịch"
            subtitle="Cơ Hội Đầu Tư Chỉ Số Thế Hệ Mới - Linh Hoạt, Minh Bạch, Hiệu Quả"
          />
          <div
            ref={processStepRef}
            className="flex relative gap-4 items-center mt-10 w-full max-md:max-w-full"
          >
            <div className="absolute top-5 z-0 shrink-0 self-start h-0 border border-gray-200 border-solid inset-x-[134px] min-w-60 w-[910px]" />
            {[
              {
                number: "01",
                title: "Crawl dữ liệu số",
                icon: "a5af695dc9c973a517f0cf9063b6abbab5b2ba6f"
              },
              {
                number: "02",
                title: "AI dự đoán cổ phiếu thêm/loại",
                icon: "6fb1449d5b691fe3994c0ce444fa9bdaf8d59f1d"
              },
              {
                number: "03",
                title: "Mua ngay sau cutoff date",
                icon: "f54438ab0e32425c90307c9edcfa519a4a58af12"
              },
              {
                number: "04",
                title: "Chốt lời 20% hoặc cắt lỗ -13.33%",
                icon: "249e2d7060232b8b9f8b0cfd98085dfc295f36d3"
              }
            ].map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                iconSrc={`https://cdn.builder.io/api/v1/image/assets/TEMP/${step.icon}?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540`}
                activeStep={activeStep}
                stepIndex={index}
              />
            ))}
          </div>

          <div className="flex flex-col self-center mt-10 max-w-screen-md text-base font-medium text-zinc-800 w-[768px] max-md:max-w-full">
            <h3 className="text-2xl text-center max-md:max-w-full">Performance Table</h3>
            <PerformanceTable />
            <p className="self-center mt-6 text-center text-gray-700 max-md:max-w-full">
              Hiệu suất quá khứ không đảm bảo kết quả tương lai. Đầu tư có rủi ro.
            </p>
          </div>
        </SectionContainer>
      )}

      {isMobile && (
        <SectionContainer>
          <SectionTitle
            title="Bảo Mật Tuyệt Đối - Minh Bạch Từng Giao Dịch"
            subtitle="Cơ Hội Đầu Tư Chỉ Số Thế Hệ Mới - Linh Hoạt, Minh Bạch, Hiệu Quả"
          />
          <div className="grid grid-cols-2 relative gap-4 items-center mt-10 w-full max-md:max-w-full">
            <div className="absolute top-5 z-0 shrink-0 self-start h-0 border border-gray-200 border-solid inset-x-[100px] min-w-[150px]" />
            {[
              {
                number: "01",
                title: "Crawl dữ liệu số",
                icon: "a5af695dc9c973a517f0cf9063b6abbab5b2ba6f"
              },
              {
                number: "02",
                title: "AI dự đoán cổ phiếu thêm/loại",
                icon: "6fb1449d5b691fe3994c0ce444fa9bdaf8d59f1d"
              },
              {
                number: "03",
                title: "Mua ngay sau cutoff date",
                icon: "f54438ab0e32425c90307c9edcfa519a4a58af12"
              },
              {
                number: "04",
                title: "Chốt lời 20% hoặc cắt lỗ -13.33%",
                icon: "249e2d7060232b8b9f8b0cfd98085dfc295f36d3"
              }
            ].map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                iconSrc={`https://cdn.builder.io/api/v1/image/assets/TEMP/${step.icon}?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540`}
              />
            ))}
            <div className="absolute top-[275px] z-0 shrink-0 self-start h-0 border border-gray-200 border-solid inset-x-[100px] min-w-[150px]" />
          </div>

          <div className="flex flex-col self-center mt-10 max-w-screen-md text-base font-medium text-zinc-800 w-[768px] max-md:max-w-full">
            <h3 className="text-2xl text-center max-md:max-w-full">Performance Table</h3>
            <PerformanceTable />
            <p className="self-center mt-6 text-center text-gray-700 max-md:max-w-full">
              Hiệu suất quá khứ không đảm bảo kết quả tương lai. Đầu tư có rủi ro.
            </p>
          </div>
        </SectionContainer>
      )}
    </>
  );
});

export default ProcessSection;
