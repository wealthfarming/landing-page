"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/header/header-desktop";
import IntroSection from "@/components/index/intro-section";
import ProblemSection from "@/components/index/problem-section";
import SecuritySection from "@/components/index/security-section";
import SolutionSection from "@/components/index/solution-section";
import NFTFutureSection from "@/components/index/nft-futures-ection";
import SecurityDetailsSection from "@/components/index/security-details-section";
import ProcessSection from "@/components/index/process-section";
import PartnersSection from "@/components/index/partners-section";
import ContactSection from "@/components/index/contact-section";
import FAQSection from "@/components/index/faq-section";

const steps = [
  { number: "01", title: "Crawl dữ liệu số" },
  { number: "02", title: "AI dự đoán cổ phiếu thêm/loại" },
  { number: "03", title: "Mua ngay sau cutoff date" },
  { number: "04", title: "Chốt lời 20% hoặc cắt lỗ -13.33%" },
];

const IndexLandingPage: React.FC = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const ref = processRef.current;
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCentered = entry.isIntersecting;
        setSticky(isCentered && activeStep !== steps.length - 1);
      },
      { threshold: 0.5 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, []); // Không phụ thuộc vào activeStep

  return (
    <div className="max-md:pb-24">
      <Header changeAt={260} />
      <div className="w-full bg-white flex flex-col gap-0 overflow-visible">
        <IntroSection />
        <ProblemSection />
        <SecuritySection />
        <SolutionSection />
        <NFTFutureSection />
        <SecurityDetailsSection />

        {/* Process Section */}
        <div className="relative w-full">
          <div
            className={`${
              sticky ? "sticky top-0 min-h-screen overflow-hidden z-30" : ""
            }`}
          >
            <ProcessSection
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              sticky={sticky}
            />
          </div>
        </div>

        <PartnersSection />
        <ContactSection />
        <FAQSection />
      </div>
    </div>
  );
};

export default IndexLandingPage;