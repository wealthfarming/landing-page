"use client";
import React, { useEffect, useRef, useState } from "react";
import HeaderDesktopFull from "@/components/header/header-desktop";
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
import FooterFull from "@/components/footer/footer-full";

const steps = [
  { number: "01", title: "Crawl dữ liệu số" },
  { number: "02", title: "AI dự đoán cổ phiếu thêm/loại" },
  { number: "03", title: "Mua ngay sau cutoff date" },
  { number: "04", title: "Chốt lời 20% hoặc cắt lỗ -13.33%" },
];
import { useInterface } from '@/components/context/interface-context';
import Image from "next/image";
import indexBanner from "../../public/images/img/index_banner.webp"

const IndexLandingPage: React.FC = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [sticky, setSticky] = useState(false);

  const { isDesktop } = useInterface();
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
  }, []);

  return (
    <div className="">
      <HeaderDesktopFull changeAt={190} />
      {isDesktop &&
        <div className="w-full h-[260px] relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image src={indexBanner} alt="Index Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
        </div>
      }
      <div className="w-full bg-white " style={{ "display": "flex", "flexFlow": "column", "gap": "0px", "height": "min-content", "overflow": "visible", "padding": "0px", "position": "relative" }}>
        <IntroSection />
        <div className="w-full sticky h-[100vh] top-[20px] pt-[40px] pb-[80px]  white z-[2]">
          <ProblemSection />
        </div>
        <div style={{ "overflow": "visible", "position": "sticky", "top": "20px", "width": "100%", "zIndex": "2" }}>
          <SecuritySection />
        </div>
        <div className="w-full flex flex-col items-center justify-start bg-background relative z-30">
          <SolutionSection />
          <NFTFutureSection />
          <SecurityDetailsSection />
          {/* <ProcessSection /> */}
          <PartnersSection />
          <ContactSection />
          <FAQSection />

          {/* <FooterFull /> */}
        </div>


      </div>
      <FooterFull active={'introduction'} fixed={false} />

    </div>
  );
};

export default IndexLandingPage;