"use client";
import { AnimatedText } from "@/components/animation/introduction/Animations";
import { useLanguage } from "@/components/context/i18n";
import { useInterface } from "@/components/context/interface-context";
import EcoCard from "@/components/ecosystem/eco-card";
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import { useTranslation } from "react-i18next";
import Image, { StaticImageData } from "next/image";
import productBase from "../../public/images/img/product_base.jpg"
import eco1 from "../../public/images/img/eco-1.png"
import eco2 from "../../public/images/img/eco-2.png"
import eco3 from "../../public/images/img/eco-3.png"
import eco4 from "../../public/images/img/eco-4.png"
import { useInView } from "react-intersection-observer";
import React from "react";
import { X } from "@phosphor-icons/react";

type ContentItem = string;

interface Section {
  img: StaticImageData;
  title: string;
  content: ContentItem[];
}

export default function EcoPage() {
  const { isDesktop, isTablet } = useInterface();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const ecoData = [
    {
      img: eco1,
      title: t('eco_data_title_1'),
      content: [
        t('eco_data_content_1_1'),
        t('eco_data_content_1_2'),
        t('eco_data_content_1_3'),
      ],
    },
    {
      img: eco2,
      title: t('eco_data_title_2'),
      content: [
        t('eco_data_content_2_1'),
        t('eco_data_content_2_2'),
        t('eco_data_content_2_3'),
      ],
    },
    {
      img: eco3,
      title: t('eco_data_title_3'),
      content: [
        t('eco_data_content_3_1'),
        t('eco_data_content_3_2'),
        t('eco_data_content_3_3'),
      ],
    },
    {
      img: eco4,
      title: t('eco_data_title_4'),
      content: [
        t('eco_data_content_4_1'),
        t('eco_data_content_4_2'),
        t('eco_data_content_4_3'),
      ],
    },
  ]

  const selectedEcoData = ecoData;
  const [modalActive, setModalActive] = React.useState(false);
  return (
    <div className={`flex flex-col ${isDesktop ? 'pb-[100px]' : isTablet ? '' : ''}`}>
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
      <HeaderDesktopFull changeAt={300} />
      {isDesktop &&
        <div className="w-full h-[260px] relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image src={productBase} alt="Product Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
        </div>
      }
      <div
        className={`w-full flex-grow flex flex-col items-center justify-start bg-background ${isDesktop ? ' mb-[505px]' : isTablet ? 'mb-[505px] pt-20' : 'pt-20'
          } relative z-30`}
      >
        <div
          className={`max-w-[1200px] flex flex-col ${isDesktop ? 'p-10 gap-20' : isTablet ? 'p-10 gap-30' : 'pt-12 px-5 gap-10'
            }`}
        >
          <div className={`flex flex-col gap-6`} ref={ref}>
            <h1
              className={` ${isDesktop ? 'px-[108px] text-[49px]' : isTablet ? 'text-[44px] pt-2' : 'text-[34px]'
                } font-[600] w-full text-center`}
            >
              <AnimatedText
                text={[t('eco_title')]}
                delayBetween={0.05}
                duration={0.3}
                customClass={[`${isDesktop ? 'text-[49px] leading-[58.8px] font-[500] flex flex-wrap' : isTablet ? 'text-[44px] leading-[52.8px] font-[500] flex flex-wrap' : 'text-[34px]  leading-[40.8px] font-[500] flex flex-wrap'}`]}
                inView={inView}
              />
            </h1>
            <p
              className={` ${isDesktop ? 'text-[18px] px-[199px]' : isTablet ? 'px-[110px] text-xl' : 'text-lg mb-5'
                } font-medium w-full text-center text-[var(--text-medium)]`}
            >
              {t('eco_description')}
            </p>
          </div>
          <div
            className={`${isDesktop
              ? 'grid-cols-2 gap-[40px_60px] pb-[80px]'
              : isTablet
                ? 'grid-cols-2 gap-[40px_60px] pb-[40px]'
                : 'grid-cols-1 gap-10 pb-[40px]'
              } grid flex-wrap justify-center w-full`}
          >
            {selectedEcoData.map((section, index) => (
              <EcoCard key={index} section={section} />
            ))}
          </div>
        </div>
      </div>
      <FooterFull active={"ecosystem"} setModalActive={setModalActive}
        modalActive={modalActive} />
    </div>
  );
}