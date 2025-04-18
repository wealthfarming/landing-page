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
import Footer from "@/components/index/footer";
import FloatingMetrics from "@/components/index/floating-metrics";

const IndexLandingPage: React.FC = () => {
  return (
    <div className="pb-[6363px] max-md:pb-24">
      <div className="overflow-hidden w-full bg-white max-md:max-w-full">
        <Header changeAt={0} />
        <IntroSection />
        <ProblemSection />
        <SecuritySection />
        <SolutionSection />
        <NFTFutureSection />
        <SecurityDetailsSection />
        <ProcessSection />
        <PartnersSection />
        <ContactSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default IndexLandingPage;
