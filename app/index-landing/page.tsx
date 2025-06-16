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
import indexBanner from "../../public/images/img/index_banner.webp"
import { useTranslation } from "react-i18next";

const steps = [
  { number: "01", title: "Crawl dữ liệu số" },
  { number: "02", title: "AI dự đoán cổ phiếu thêm/loại" },
  { number: "03", title: "Mua ngay sau cutoff date" },
  { number: "04", title: "Chốt lời 20% hoặc cắt lỗ -13.33%" },
];
import { useInterface } from '@/components/context/interface-context';
import Image from "next/image";
import { X } from "@phosphor-icons/react";
const IndexLandingPage: React.FC = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [sticky, setSticky] = useState(false);

  const [modalActive, setModalActive] = React.useState(false);
  const { isDesktop, isMobile, isTablet } = useInterface();
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
    <div>
      <HeaderDesktopFull changeAt={190} />
      {
        modalActive &&
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setModalActive(false)}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-lg"
            onClick={e => e.stopPropagation()}
          >
            <span className="flex flex-row items-center justify-between mb-4 relative w-full">
              <h2 className="text-xl font-bold">{t('guild_video')}</h2>
              <X
                size={20}
                onClick={() => setModalActive(false)}
                className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200"
                style={{ zIndex: 1000 }}
              />
            </span>
            <div className="aspect-video w-full mb-4">
              <iframe
                width="760"
                height="500"
                src={t('guild_video_src')}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      }
      {isDesktop &&
        <div className="w-full h-[260px] relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image src={indexBanner} alt="Index Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
        </div>
      }
      <div className="w-full bg-white flex flex-col gap-0 overflow-visible max-md:pt-20 max-md:pb-10">
        <IntroSection />
        <div className="w-full md:sticky md:h-[100vh] top-[20px] md:pb-[80px] white z-[2]">
          <ProblemSection />
        </div>
        <div className="overflow-visible sticky top-10 w-full z-[2] md:h-[120vh] md:top-5">
          <SecuritySection />
        </div>
        <div className="w-full flex flex-col items-center justify-start bg-background relative z-30">
          <SolutionSection />
          <NFTFutureSection />
          <SecurityDetailsSection />
          {/* Process Section */}
          <div className="relative w-full min-h-screen">
            <div
              className={`${sticky ? "sticky top-[80px] min-h-screen overflow-hidden z-30" : ""
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
      <FooterFull active={'index-landing'} fixed={false} setModalActive={setModalActive}
        modalActive={modalActive} />

    </div>
  );
};

export default IndexLandingPage;