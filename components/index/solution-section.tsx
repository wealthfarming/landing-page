import React, { useState } from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";
import { useTranslation } from "react-i18next";
import { X } from "@phosphor-icons/react";
import { useInterface } from "@/components/context/interface-context";
import VideoBox from "@/components/footer/video_box";

const SolutionSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isDesktop, isTablet, isMobile } = useInterface();
  const [modalActive, setModalActive] = useState(false);
  
  const youtubeUrl = i18n.language === "vi" 
    ? "https://www.youtube.com/embed/9C9WrmfWzdw" 
    : "https://www.youtube.com/embed/GDDLzUM4Fcc";
  
  const thumbnailUrl = i18n.language === "vi"
    ? "https://img.youtube.com/vi/9C9WrmfWzdw/maxresdefault.jpg"
    : "https://img.youtube.com/vi/GDDLzUM4Fcc/maxresdefault.jpg";

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalActive(false);
    }
  };

  return (
    <SectionContainer className="pt-0">
      <SectionTitle
        title={<span dangerouslySetInnerHTML={{ __html: t('solution_section_title') }} />}
        subtitle={t('solution_section_subtitle')}
      />
      <VideoBox modalActive={modalActive} setModalActive={setModalActive} />
      <div className="flex flex-wrap gap-10 justify-center items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex-1 shrink p-2 text-base bg-white rounded-xl border border-gray-200 border-solid basis-0 min-w-60 text-zinc-800 max-md:max-w-full">
          <div className="flex w-full text-lg text-orange-300 border-b border-gray-200 font-[var(--font-geist-raleway)]">
            <div className="flex-1 p-4 font-medium">
              {t('feature')}
            </div>
            <div className="flex-1 p-4 font-medium">
              {t('benefit')}
            </div>
          </div>

          <div className="flex w-full font-geist-display text-[15px]">
            <div className="flex-1 p-4 font-semibold">
              {t('solution_section_feature_1')}
            </div>
            <div className="flex-1 p-4 leading-6">
              {t('solution_section_benefit_1')}
            </div>
          </div>

          <div className="flex w-full rounded-lg bg-slate-50 font-geist-display text-[15px]">
            <div className="flex-1 p-4 font-semibold">
              {t('solution_section_feature_2')}
            </div>
            <div className="flex-1 p-4 leading-6">
              {t('solution_section_benefit_2')}
            </div>
          </div>

          <div className="flex w-full font-geist-display text-[15px]">
            <div className="flex-1 p-4 font-semibold">
              {t('solution_section_feature_3')}
            </div>
            <div className="flex-1 p-4 leading-6">
              {t('solution_section_benefit_3')}
            </div>
          </div>

          <div className="flex w-full rounded-lg bg-slate-50 font-geist-display text-[15px]">
            <div className="flex-1 p-4 font-semibold">
              {t('solution_section_feature_4')}
            </div>
            <div className="flex-1 p-4 leading-6">
              {t('solution_section_benefit_4')}
            </div>
          </div>
        </div>
        <div className="flex-1 shrink basis-4 min-w-60 max-md:max-w-full">
          <div className="relative flex flex-col justify-center items-center px-16 py-28 w-full rounded-2xl min-h-[295px] max-md:px-5 max-md:py-24 max-md:max-w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDF0BA] to-[#CDFEE4] p-[1px] rounded-2xl">
              <div className="relative h-full rounded-2xl">
                <img
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                  className="object-cover absolute inset-0 size-full rounded-2xl"
                />
                <div 
                  className="flex relative gap-1 justify-center items-center px-1 -mb-6 bg-white bg-opacity-60 h-[60px] min-h-[60px] rounded-[100px] w-[60px] max-md:mb-2.5 top-[42%] left-[45%] max-md:top-[40%] max-md:left-[42%] cursor-pointer"
                >
                  {isDesktop || isTablet ? (
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/14b4fbf2d0067aec7cdec97a722d437fa2046f99?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                      alt="Play icon"
                      className="object-contain self-stretch my-auto w-6 aspect-square"
                      onClick={() => setModalActive(true)}
                    />
                  ) : (
                    <a href="/explain-index">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/14b4fbf2d0067aec7cdec97a722d437fa2046f99?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                        alt="Play icon"
                        className="object-contain self-stretch my-auto w-6 aspect-square"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          {modalActive && (isDesktop || isTablet) && (
            <div 
              className="fixed inset-0 z-[1000] flex justify-center items-center bg-black/50"
              onClick={handleCloseModal}
            >
              <div className={`relative bg-background rounded-[10px] w-[70%] h-[70%] ${isMobile ? 'max-w-[95%]' : 'max-w-[70%]'} max-h-[70%]`}>
                <iframe
                  src={youtubeUrl}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-[10px]"
                ></iframe>
                <div
                  className="absolute top-[-10px] right-[-10px] bg-[var(--other-border)] rounded-[100px] w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                  onClick={() => setModalActive(false)}
                >
                  <X size={14} weight="bold" />
                </div>
              </div>
            </div>
          )}
          <div className="flex gap-2 items-center mt-2 w-full text-sm font-medium text-gray-700 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/057ca6d14da423d30721f79b58699eecfd47b2e6?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              alt="Info icon"
              className=""
            />
            <p className="self-stretch my-auto w-[768px] max-md:max-w-full">
              {t('solution_section_strategy_label')}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SolutionSection;