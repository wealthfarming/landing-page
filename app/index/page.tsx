"use client";
import React from "react";
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
import FooterFull from "@/components/footer/footer-full";
import FloatingMetrics from "@/components/index/floating-metrics";

const IndexLandingPage: React.FC = () => {
  return (
    <div className="max-md:pb-24">
      <Header changeAt={260} />
      <div className="w-full h-[260px] hidden lg:block relative">
        <img
          src="https://framerusercontent.com/images/421ll4oDtrclmr3OtfbBhOV9E.png?lossless=1"
          alt="Index Banner"
          className="absolute w-full -z-10 top-[-400px] object-cover brightness-50"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
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
          <ProcessSection />
          <PartnersSection />
          <ContactSection />
          <FAQSection />

          {/* <FooterFull /> */}
        </div>
      </div>
    </div>
  );
};

export default IndexLandingPage;
