"use client";
import React from "react";
import { NecCarousel } from "../carousel/nec-carousel";
import { useInterface } from "../context/interface-context";
import { ChatCenteredDots } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Section7: React.FC = () => {
  const { isDesktop, isTablet, isMobile } = useInterface();
  const { t } = useTranslation();

  return (
    <section className="flex justify-center items-center py-20 px-10 max-lg:py-15 max-md:py-10 max-md:px-5 relative bg-[#f6f8fd]">
      <div className="flex flex-col justify-center items-center w-full grow max-w-[1200px] gap-10">
        <div
          className={`text-center font-semibold ${
            isDesktop ? "text-[40px]" : isTablet ? "text-[36px]" : "text-[29px]"
          }`}
        >
          {t('nec_section_7_title_1')}
        </div>
        <NecCarousel />
        <div className="h-[48px]">
          <a href="https://www.facebook.com/people/Wealth-Farming/61574682066111/" target="_blank">
            <div className={`flex items-center h-full gap-2 px-6 shadow-sm rounded-sm button bg-[var(--primary)] hover:bg-[var(--primary-gradient)] hover:cursor-pointer`}>
              <div
              >
                <ChatCenteredDots size={20} className="animate-diagonal-2" />
              </div>
              <div>
                {t('free_support')}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section7;
