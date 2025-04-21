"use client";
import React, { useEffect, useRef } from "react";
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

const IndexLandingPage: React.FC = () => {
  const processRef = useRef<HTMLDivElement>(null);

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
    <div className="max-md:pb-24">
      <Header changeAt={260} />
      {/* Banner... */}

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
    </div>
  );
};

export default IndexLandingPage;
