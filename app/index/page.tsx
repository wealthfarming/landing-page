"use client";

import React, { Suspense } from "react";
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
import Header from "@/components/header/header-desktop";
const IndexLandingPage = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="h-[72px]" />}>
          <Header changeAt={0} />
        </Suspense>
        <div className="w-full h-[260px] bg-black">

        </div>
      <div className="overflow-hidden w-full bg-white max-md:max-w-full">
        
        <IntroSection />
        <ProblemSection />
        <SecuritySection />
        <SolutionSection />
        <NFTFutureSection />
        <SecurityDetailsSection />
        <PartnersSection />
        <ProcessSection />
        <ContactSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default IndexLandingPage;
