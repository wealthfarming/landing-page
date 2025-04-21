"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";
import ProcessStep from "./process-step";
import PerformanceTable from "./performance-table";
import { useInterface } from "../../components/context/interface-context";

const ProcessSection: React.FC = () => {
  const { isDesktop, isTablet, isMobile } = useInterface();
  const processStepRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;

  useEffect(() => {
    // Initialize lastScrollY with current scroll position
    lastScrollY.current = window.scrollY;

    const handleWheel = (event: WheelEvent) => {
      if (processStepRef.current) {
        const rect = processStepRef.current.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isInView) {
          if (activeStep < totalSteps - 1) {
            if (activeStep === 0 && event.deltaY < 0) {
              return;
            }
            event.preventDefault();

            if (event.deltaY > 0 && activeStep < totalSteps - 1) {
              setActiveStep((prev) => prev + 1);
            } else if (event.deltaY < 0 && activeStep > 0) {
              setActiveStep((prev) => prev - 1);
            }
          } else if (activeStep === totalSteps - 1 && event.deltaY < 0) {
            event.preventDefault();
            setActiveStep((prev) => prev - 1);
          }
        }
      }
    };

    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeStep]);

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

            <ProcessStep
              number="01"
              title="Crawl dữ liệu số"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a5af695dc9c973a517f0cf9063b6abbab5b2ba6f?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              activeStep={activeStep}
              stepIndex={0}
            />
            <ProcessStep
              number="02"
              title="AI dự đoán cổ phiếu thêm/loại"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb1449d5b691fe3994c0ce444fa9bdaf8d59f1d?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              activeStep={activeStep}
              stepIndex={1}
            />
            <ProcessStep
              number="03"
              title="Mua ngay sau cutoff date"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f54438ab0e32425c90307c9edcfa519a4a58af12?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              activeStep={activeStep}
              stepIndex={2}
            />
            <ProcessStep
              number="04"
              title="Chốt lời 20% hoặc cắt lỗ -13.33%"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/249e2d7060232b8b9f8b0cfd98085dfc295f36d3?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              activeStep={activeStep}
              stepIndex={3}
            />
          </div>

          <div className="flex flex-col self-center mt-10 max-w-screen-md text-base font-medium text-zinc-800 w-[768px] max-md:max-w-full">
            <h3 className="text-2xl text-center max-md:max-w-full">
              Performance Table
            </h3>
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
            <ProcessStep
              number="01"
              title="Crawl dữ liệu số"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a5af695dc9c973a517f0cf9063b6abbab5b2ba6f?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              active={false}
            />
            <div className="absolute top-5 z-0 shrink-0 self-start h-0 border border-gray-200 border-solid inset-x-[100px] min-w-[150px]" />
            <ProcessStep
              number="02"
              title="AI dự đoán cổ phiếu thêm/loại"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb1449d5b691fe3994c0ce444fa9bdaf8d59f1d?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
            />
            <ProcessStep
              number="03"
              title="Mua ngay sau cutoff date"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f54438ab0e32425c90307c9edcfa519a4a58af12?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
            />
            <div className="absolute top-[275px] z-0 shrink-0 self-start h-0 border border-gray-200 border-solid inset-x-[100px] min-w-[150px]" />
            <ProcessStep
              number="04"
              title="Chốt lời 20% hoặc cắt lỗ -13.33%"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/249e2d7060232b8b9f8b0cfd98085dfc295f36d3?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
            />
          </div>

          <div className="flex flex-col self-center mt-10 max-w-screen-md text-base font-medium text-zinc-800 w-[768px] max-md:max-w-full">
            <h3 className="text-2xl text-center max-md:max-w-full">
              Performance Table
            </h3>
            <PerformanceTable />
            <p className="self-center mt-6 text-center text-gray-700 max-md:max-w-full">
              Hiệu suất quá khứ không đảm bảo kết quả tương lai. Đầu tư có rủi ro.
            </p>
          </div>
        </SectionContainer>
      )}
    </>
  );
};

export default ProcessSection;