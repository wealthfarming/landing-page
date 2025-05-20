"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useInterface } from "@/components/context/interface-context";
import section9 from "../../public/images/home-section-7/section-7.png";

const Section8: React.FC = () => {
  const { isDesktop, isTablet, isMobile } = useInterface();
  const { t } = useTranslation();

  return (
    <section
      className={`flex w-full justify-center items-center relative bg-cover bg-center bg-no-repeat py-15 px-10 max-md:py-10 max-md:px-5 ${isDesktop ? "h-[264px]" : isTablet ? "h-[214px]" : "h-min"}`}
      style={{ backgroundImage: `url(${section9.src})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="max-w-[960px] z-20">
        <h1 className="text-[40px] max-lg:text-[36px] max-md:text-[26px] leading-[52px] max-lg:leading-[47px] max-md:leading-[31px] !text-white text-center font-semibold font-geist-raleway-place-holder">
          {t("nec_section_8_title_1")}
        </h1>
      </div>
    </section>
  );
};

export default Section8;
