"use client";
import React, { useEffect, useRef } from "react";
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
import { useInterface } from '@/components/context/interface-context';
import Image from "next/image";
const IndexLandingPage: React.FC = () => {
  const processRef = useRef<HTMLDivElement>(null);

  const { isDesktop, isMobile, isTablet } = useInterface();
  useEffect(() => {
    let hasScrolled = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const bounding = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;

        const isCentered =
          bounding.top >= viewportHeight / 2 - bounding.height / 2 - 10 &&
          bounding.top <= viewportHeight / 2 - bounding.height / 2 + 10;

        if (entry.isIntersecting && !isCentered && !hasScrolled) {
          hasScrolled = true;
          processRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          setTimeout(() => {
            hasScrolled = false;
          }, 100);
        }
      },
      {
        threshold: 0,
      }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);


  return (
    <div className="">
      <HeaderDesktopFull changeAt={190} />
      {isDesktop &&
        <div className="w-full h-[260px] relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          <Image src="/images/img/index_banner.webp" alt="Index Banner" width={735} height={260} className="w-full h-[260px] object-cover" />

        </div>
      }
      <div className="w-full bg-white flex flex-col gap-0 overflow-visible">
        <IntroSection />
        <div className="w-full sticky h-[100vh] top-[20px] pt-[40px] pb-[80px]  white z-[2]">
          <ProblemSection />
        </div>
        <div style={{ overflow: "visible", position: "sticky", top: "20px", width: "100%", zIndex: 2 }}>
          <SecuritySection />
        </div>
        <div className="w-full flex flex-col items-center justify-start bg-background relative z-30">
          <SolutionSection />
          <NFTFutureSection />
          <SecurityDetailsSection />
          <div ref={processRef}>
            <ProcessSection />
          </div>
          <PartnersSection />
          <ContactSection />
          <FAQSection />

        </div>
      </div>
      <FooterFull active={'introduction'} fixed={false} />

    </div>
  );
};

export default IndexLandingPage;
