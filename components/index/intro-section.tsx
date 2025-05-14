"use client";
import React from "react";
import Button from "./button";
import SectionContainer from "./section-container";
import { Separator } from "../ui/separator";
import { AnimatedText } from "../animation/introduction/Animations";
import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/i18n";
import { useInView } from "react-intersection-observer";

const IntroSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });
  return (
    <SectionContainer borderBottom={false}>
      <div className="flex flex-col justify-center items-center self-stretch w-full text-center max-md:max-w-full " ref={ref}>
        <h1 className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-[34px] max-w-[1000px] font-geist-raleway">
          {language == "vi" ? (
            <AnimatedText
              text={[
                "BEQ INDEXES", "REWIEW INDEX NFT"
              ]}
              customClass={["font-[600] text-[var(--primary)] font-geist-raleway text-[49px] max-md:text-[34px]", "font-[600] font-geist-raleway text-[49px] max-md:text-[34px]"]}
              delayBetween={0.1}
              inView={inView}
            />
          ) : (
            <AnimatedText
              text={[
                t("index_section_1_title_1"),
                t("index_section_1_title_2"),
                t("index_section_1_title_3"),
                t("index_section_1_title_4"),
              ]}
              customClass={["font-[900]", "", "font-[900]", ""]}
              delayBetween={0.05}
              duration={0.3}
              inView={inView}
            />
          )}
        </h1>
        <p className="mt-5 max-w-screen-md text-[15px] leading-6 text-gray-700 w-[768px] max-md:max-w-full max-md:font-geist-display">
          {t("index_intro_section_subtitle")}
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex gap-2 md:flex-row flex-col my-10 md:mt-10 text-sm md:w-full font-medium tracking-wide justify-center items-center text-zinc-800">
          <div>
            <Button
              onClick={() => window.open("https://www.facebook.com/profile.php?id=61574682066111", "_blank")}
              variant="white" classname="px-8 !font-[500] !text-[12px] max-md:px-4 max-md:h-10 flex justify-center items-center">
              <ChatCenteredDots size={20} />
              <p>{t("button_contact_private")}</p>
            </Button>
          </div>
          <div>
            {language == 'en' ? (
              <Button
                onClick={() => window.open("https://wealthfarming.app/", "_blank")}
                variant="orange" classname="!font-[500] !text-[12px] max-md:h-10 !bg-[var(--primary)] max-md:w-[132px] flex justify-center items-center">
                <CursorClick size={20} className="animate-diagonal-2" />
                <p>{t("button_secret_documnet")}</p>
              </Button>) : (
              <Button
                onClick={() => window.open("https://wealthfarming.app/", "_blank")}
                variant="white" classname="px-8 !font-[500] !text-[12px] max-md:px-4 max-md:h-10 flex justify-center items-center !bg-[var(--primary)]">
                <CursorClick size={20} className="animate-diagonal-2" />
                <p>{t("button_secret_documnet")}</p>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10 max-w-full max-md:flex max-md:flex-col max-md:gap-2 text-sm font-medium text-gray-700 md:min-h-[555px] w-[956px] max-md:mt-0">
          <div className="flex flex-wrap flex-row gap-2 items-center w-full max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1baeb458dd1369807c053be7ac1de2b04be1b451?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              alt="Icon"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <p className="self-stretch my-auto md:w-[768px] max-md:max-w-full max-md:whitespace-nowrap max-md:text-[12px]">
              {t("index_section_2_description")}
            </p>
          </div>
          <div className="w-full h-fit md:h-[522px] relative">
            <div
              className="w-full h-fit p-1 rounded-[20px]"
              style={{
                background:
                  "conic-gradient(from 316deg at 50% 50%, rgba(232, 180, 97, 0) 18deg, rgb(237, 195, 116) 44.905deg, rgba(232, 212, 169, 0.85) 79.4925deg, rgba(235, 213, 167, 0.31) 110.755deg, rgba(253, 233, 155, 0) 280.8deg, rgb(191, 255, 221) 330.818deg, rgba(252, 233, 154, 0.76) 342deg, rgba(252, 233, 154, 0) 353.303deg)",
              }}
            >
              <video
                className="w-full h-full rounded-[20px] object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
              ></video>
            </div>

            <div className="absolute top-[54.8px] left-[7px] md:top-[56px] md:left-[-59px] w-[87px] md:w-[202px] h-[72px] m-[1px] bg-white rounded-[6px] border-[var(--primary-border)] border">
              <div className="flex flex-col justify-center items-center h-full w-full font-[var(--font-geist-display)]">
                <div className="flex flex-row items-center justify-center h-1/3 md:h-1/2 w-full border-b-[1px] border-b-gray-300 text-[12px] md:text-[16px] !font-medium">
                  {t('profit')}
                </div>
                <div className="flex flex-col md:flex-row items-center text-center h-2/3 md:h-1/2 w-full font-[var(--font-geist-display)]">
                  <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full bg-[#23CB70] text-[18px] md:text-[24px] text-white font-[700]">
                    <p>82.55%</p>
                  </div>
                  <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full text-[#23CB70] text-[16px] md:text-[18px] !font-[700]">
                    <p>{t('year')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[54px] md:bottom-[57.22px] right-[-9px] md:right-[-83px] w-[99px] md:w-[202px] h-[76px] m-[1px] bg-white rounded-[6px] border-[var(--primary-border)] border ">
              <div className="flex flex-col justify-center items-center h-full w-full font-[var(--font-geist-display)]">
                <div className="flex flex-row items-center justify-center h-1/3 md:h-1/2 w-full border-b-[1px] border-b-gray-300 text-[13px] md:text-[16px] font-[500]">
                  {t('liquidity')}
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center text-center h-2/3 md:h-1/2 w-full">
                <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full text-[#E8B561] text-[16px] md:text-[18px] font-[700]">
                    <p>{t('continuity')}</p>
                  </div>
                  <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full bg-[#E8B561] text-[18px] md:text-[24px] text-white font-[700] rounded-b-[6px]">
                    <p>24/7</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default IntroSection;
