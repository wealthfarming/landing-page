"use client";
import React from "react";
import Button from "./button";
import SectionContainer from "./section-container";
import { AnimatedText } from "../animation/introduction/Animations";
import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/i18n";
import { useInView } from "react-intersection-observer";
import ButtonPrimary from "../custom-button/button-primary";
import Images from 'next/image'
import chartline_section2 from "../../public/images/img/chartline_section2.png"
import RiseFade from '../animation/section2/index_grow'
import { useInterface } from "@/components/context/interface-context";

const IntroSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const { isDesktop } = useInterface();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <SectionContainer borderBottom={false} className="pb-0">
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
              <a href="https://wealthfarming.app/" target="_blank" className="w-[164px]" >
                <ButtonPrimary variant="outline" className={`!bg-[var(--color-primary)] hover:brightness-[1.1] border-none button rounded-none w-full h-[60px] transition-transform duration-300 ease-in-out !font-[500] !text-[12px] max-md:h-10 max-md:w-[132px] flex justify-center items-center`}>
                  <CursorClick size={24} className="min-w-[20px] min-h-[20px] animate-diagonal-2" />
                  <p>{t("button_secret_documnet")}</p>
                </ButtonPrimary>  
              </a>
            ) : (
              <a href="https://wealthfarming.app/" target="_blank" className="w-full" >
                <ButtonPrimary variant="outline" className={` hover:brightness-[1.1] border-none button rounded-none w-full h-[60px] transition-transform duration-300 ease-in-out !font-[500] !text-[12px] max-md:h-10 !bg-[var(--primary)] flex justify-center items-center`}>
                  <CursorClick size={24} className="min-w-[20px] min-h-[20px] animate-diagonal-2" />
                  <p>{t("button_secret_documnet")}</p>
                </ButtonPrimary>  
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-gray-200 p-5 w-full pb-10 relative bg-[var(--base-bg)]">
            <div className={`flex ${isDesktop ? 'flex-row' : 'flex-col'} max-w-[1100px] justify-center ${isDesktop ? 'items-start': 'items-center'} gap-[16px]  bg-[var(--base-bg)]`} style={{ zIndex: 101 }}>
                <Images src={chartline_section2} alt="Section base 2" width={1200} height={80} className={`absolute w-full -z-10 ${isDesktop ? 'top-0' : 'top-[22%]'}`} />
                <div className='-z-10'>
                    <RiseFade num={30} />
                    <RiseFade num={20} />
                    <RiseFade num={18} />
                    <RiseFade num={35} />
                    <RiseFade num={8} />
                    <RiseFade num={12} />
                </div>
            </div>
      </div>
      <div className="flex flex-col justify-center items-center">
  <div className="mt-20 max-w-full max-md:flex max-md:flex-row max-md:gap-4 text-sm font-medium text-gray-700 w-[956px] max-md:w-full max-md:px-4 max-md:mt-4">
  <div className="w-full flex flex-row max-md:flex-row max-md:gap-4 md:gap-[500px] md:mt-5 justify-center px-4 md:px-0">
    {/* Profit Component */}
    <div className="w-[140px] md:w-[202px] h-[72px] bg-white rounded-[6px] border-[var(--primary-border)] border">
      <div className="md:w-[202px] flex flex-col justify-center items-center h-full w-full font-[var(--font-geist-display)]">
        <div className="flex flex-row items-center justify-center h-1/3 md:h-1/2 w-full border-b-[1px] border-b-gray-300 text-[12px] md:text-[16px] !font-medium">
          {t('profit')}
        </div>
        <div className="flex flex-col md:flex-row items-center text-center h-2/3 md:h-1/2 w-full font-[var(--font-geist-display)]">
          <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full bg-[#23CB70] text-[16px] md:text-[24px] text-white font-[700]">
            <p>82.55%</p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full text-[#23CB70] text-[14px] md:text-[18px] !font-[700]">
            <p>{t('year')}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Liquidity Component */}
    <div className="w-[140px] md:w-[202px] h-[76px] bg-white rounded-[6px] border-[var(--primary-border)] border">
      <div className="md:w-[202px] flex flex-col justify-center items-center h-full w-full font-[var(--font-geist-display)]">
        <div className="flex flex-row items-center justify-center h-1/3 md:h-1/2 w-full border-b-[1px] border-b-gray-300 text-[12px] md:text-[16px] font-[500]">
          {t('liquidity')}
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center text-center h-2/3 md:h-1/2 w-full">
          <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full text-[#E8B561] text-[14px] md:text-[18px] font-[700]">
            <p>{t('continuity')}</p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full bg-[#E8B561] text-[16px] md:text-[24px] text-white font-[700] rounded-b-[6px]">
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
