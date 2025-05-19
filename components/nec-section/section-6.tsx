"use client";
import React from "react";
import section6 from "@/public/images/nec-section-6/section-6.webp";
import { CursorClick } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useInterface } from "../context/interface-context";
import { useTranslation } from "react-i18next";

const Section6: React.FC = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const { isDesktop, isTablet, isMobile } = useInterface();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const contents = [
    {
      num: "01",
      text: t('nec_section_6_description_1'),
    },
    {
      num: "02",
      text: t('nec_section_6_description_2'),
    },
    {
      num: "03",
      text: t('nec_section_6_description_3'),
    },
  ];
  return (
    <div
      className={`flex w-full md:h-[668px] justify-center items-center relative bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${section6.src})` }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full py-20 px-10 max-md:py-10 max-md:px-5">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="flex flex-col gap-10 max-w-[700px]">
          <div
            className={`relative z-10 font-semibold text-center text-white mb-2 ${
              isDesktop
                ? "text-[40px]"
                : isTablet
                ? "text-[36px]"
                : "text-[29px] "
            }`}
          >
            <div className="self-start">
              {t('nec_section_6_title_1')}
            </div>
          </div>
          <div
            className="relative z-10 text-center font-medium text-white text-xl max-sm:text-lg"
          >
            <div className="flex flex-col justify-center items-center">
              {contents.map((content) => (
                <div className="flex items-center border-b-[1px] border-solid border-[#ebebeb33] gap-10 py-4">
                  <p className="font-medium">
                    {content.num}
                  </p>
                  <h4
                    className="font-medium font-geist-raleway text-start"
                  >
                    {content.text}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative z-10 flex justify-center"
          >
            <div className="h-[48px]">
              <a href="https://wealthfarming.app/" target="_blank">
                <div className={`flex items-center h-full gap-2 px-6 shadow-sm rounded-sm button bg-[var(--primary)] hover:bg-[var(--primary-gradient)] hover:cursor-pointer`}>
                  <div
                  >
                    <CursorClick size={20} className="animate-diagonal-2" />
                  </div>
                  <div>
                    {t("header_investNow")}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
