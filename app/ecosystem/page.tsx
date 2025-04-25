"use client";
import { AnimatedText } from "@/components/animation/introduction/Animations";
import { useLanguage } from "@/components/context/i18n";
import { useInterface } from "@/components/context/interface-context";
import EcoCard from "@/components/ecosystem/eco-card";
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import { useTranslation } from "react-i18next";
import Image from "next/image";

type ContentItem = string;

interface Section {
  img: string;
  title: string;
  content: ContentItem[];
}





export default function EcoPage() {
  const { isDesktop, isTablet } = useInterface();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const ecoData  = [
    {
      img: "/images/img/eco-1.png",
      title: t('eco_data_title_1'),
      content: [
        t('eco_data_content_1_1'),
        t('eco_data_content_1_2'),
        t('eco_data_content_1_3'),
      ],
    },
    {
      img: "/images/img/eco-2.png",
      title: t('eco_data_title_2'),
      content: [
        t('eco_data_content_2_1'),
        t('eco_data_content_2_2'),
        t('eco_data_content_2_3'),
      ],
    },
    {
      img: "/images/img/eco-3.png",
      title: t('eco_data_title_3'),
      content: [
        t('eco_data_content_3_1'),
        t('eco_data_content_3_2'),
        t('eco_data_content_3_3'),
      ],
    },
    {
      img: "/images/img/eco-4.png",
      title: t('eco_data_title_4'),
      content: [
        t('eco_data_content_4_1'),
        t('eco_data_content_4_2'),
        t('eco_data_content_4_3'),
      ],
    },
  ]

  const selectedEcoData = ecoData;

  return (
    <div className="flex flex-col">
      {isDesktop &&
        <div className="w-full h-[260px] relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          <Image src="/images/img/product_base.jpg" alt="Product Banner" width={735} height={260} className="w-full h-[260px] object-cover" />

        </div>
      }
      <div
        className={`w-full flex-grow flex flex-col items-center justify-start bg-background ${isDesktop ? ' mb-[505px]' : isTablet ? 'mb-[505px] pt-20' : 'pt-20'
          } relative z-30`}
      >
        <HeaderDesktopFull changeAt={300} />
        <div
          className={`max-w-[1200px] flex flex-col ${isDesktop ? 'p-10 gap-20' : isTablet ? 'p-10 gap-30' : 'pt-12 px-5 gap-10'
            }`}
        >
          <div className={`flex flex-col gap-6`}>
            <h1
              className={` ${isDesktop ? 'px-[108px] text-[49px]' : isTablet ? 'text-[44px] pt-2' : 'text-[34px]'
                } font-semibold w-full text-center`}
            >
              <AnimatedText
                text={[t('eco_title')]}
                delayBetween={0.05}
                duration={0.3}
              />
            </h1>
            <p
              className={` ${isDesktop ? 'text-xl px-[199px]' : isTablet ? 'px-[110px] text-xl' : 'text-lg mb-5'
                } font-medium w-full text-center text-[var(--text-medium)]`}
            >
              {t('eco_description')}
            </p>
          </div>
          <div
            className={`${isDesktop
              ? 'grid-cols-2 gap-[40px_60px] mb-20'
              : isTablet
                ? 'grid-cols-2 gap-[40px_60px] mb-20'
                : 'grid-cols-1 gap-10'
              } grid flex-wrap justify-center w-full`}
          >
            {selectedEcoData.map((section, index) => (
              <EcoCard key={index} section={section} />
            ))}
          </div>
        </div>
      </div>
      <FooterFull active={"product"} />
    </div>
  );
}