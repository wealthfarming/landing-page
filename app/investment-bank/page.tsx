'use client';
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';
import { AnimatedText } from "@/components/animation/introduction/Animations";
import { Apiget } from "@/lib/api/get";
import { API_URL } from "@/lib/config";
import productBase from "../../public/images/img/product_base.jpg";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import { ArrowsClockwise, X } from "@phosphor-icons/react";
import VideoBox from "@/components/footer/video_box";

export default function InvestmentBank() {
  const { isDesktop, isMobile, isTablet } = useInterface();
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState('');
  const [tabs, setTabs] = useState<any[]>([]);
  const [contents, setContents] = useState<any[]>([]);
  const [modalActive, setModalActive] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const router = useRouter()

  useEffect(() => {
    const getPostCategories = async () => {
      setLoadingPage(false);
      setLoadingContent(false);
      const data_en = await Apiget(API_URL + '/api/posts-categories', {
        sort: 'createdAt',
        limit: 0,
        locale: 'en',
      });
      const data_vi = await Apiget(API_URL + '/api/posts-categories', {
        sort: 'createdAt',
        limit: 0,
        locale: 'vi',
      });
      const data_fr = await Apiget(API_URL + '/api/posts-categories', {
        sort: 'createdAt',
        limit: 0,
        locale: 'fr',
      });
      const postscategories = data_en.map((itemEn: any) => {
        const itemVi = data_vi.find((itemVi: any) => itemVi.id === itemEn.id);
        const itemFr = data_fr.find((itemFr: any) => itemFr.id === itemEn.id);
        return {
          id: itemEn.id,
          title_vi: itemVi.title,
          title_en: itemEn.title,
          title_fr: itemFr.title,
        };
      });
      setTabs(postscategories);
      setSelected(postscategories[0]['id']);
      setLoadingPage(true);
    };
    getPostCategories();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      setLoadingContent(false);
      const data_en = await Apiget(API_URL + '/api/posts', {
        'where[category][equals]': selected,
        sort: 'createdAt',
        limit: 0,
        locale: 'en',
      });
      const data_vi = await Apiget(API_URL + '/api/posts', {
        'where[category][equals]': selected,
        sort: 'createdAt',
        limit: 0,
        locale: 'vi',
      });
      const data_fr = await Apiget(API_URL + '/api/posts', {
        'where[category][equals]': selected,
        sort: 'createdAt',
        limit: 0,
        locale: 'fr',
      });
      const posts = data_en.map((itemEn: any) => {
        const itemVi = data_vi.find((itemVi: any) => itemVi.id === itemEn.id);
        const itemFr = data_fr.find((itemFr: any) => itemFr.id === itemEn.id);
        return {
          id: itemEn.id,
          slug_en: itemEn?.slug ?? '',
          slug_vi: itemVi?.slug ?? '',
          slug_fr: itemFr?.slug ?? '',
          title_vi: itemVi.title,
          title_en: itemEn.title,
          title_fr: itemFr.title,
          date: itemEn.createdAt,
        };
      });
      setContents(posts);
      setLoadingContent(true);
    };
    getPosts();
  }, [selected]);

  return (
    <div className={`${isDesktop ? 'pb-[100px]' : isTablet ? '' : ''}`}>
      <HeaderDesktopFull changeAt={190} />
      <VideoBox modalActive={modalActive} setModalActive={setModalActive} />
      <div className="w-full h-[260px] relative z-[1]" >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image src={productBase} alt="Product Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
      </div>

      <div className="flex justify-center w-full h-[120px] md:h-[135px] gap-[10px] py-[40px] md:px-[40px] px-[20px] items-center bg-[var(--canvas-bg)] relative" style={{ zIndex: 30 }}>
        <div className="w-[1200px] max-w-[1200px]">
          <div className={`h1 ${isDesktop ? '!text-[50px]' : isMobile ? '!text-[34px]' : '!text-[44px]'}`} ref={ref}>
            <AnimatedText
              text={[t('investment_bank')]}
              delayBetween={0.05}
              duration={0.3}
              center={false}
              inView={inView}
            />
          </div>
        </div>
      </div>

      <div className={`flex w-full relative justify-center p-[40px] bg-[var(--base-bg)] ${isDesktop ? 'mb-[505px]' : isTablet ? 'mb-[505px]' : ''} `} style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-black/50 z-0" style={{ "filter": "brightness(1.31)", "WebkitFilter": "brightness(1.31)", "opacity": "0.05" }}>
          <Image src="/images/img/section_4_2.png" alt="Background Image" layout="fill" objectFit="cover" />
        </div>
        {
          loadingPage ? (
            <div className={`flex ${!isMobile ? 'flex-row' : 'flex-col'} gap-[40px] w-[1200px] z-10`}>
              <div className="gap-[40px] flex-col items-center lg:w-[336px] w-full min-w-[336px] ">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`min-h-[51px] py-[12px] px-[16px] cursor-pointer transition-colors ${selected === tab.id
                      ? 'bg-[var(--primary)]'
                      : 'bg-[var(--canvas-bg)] hover:bg-[#C5C6CA]'
                      }`}
                    onClick={() => setSelected(tab.id)}
                  >
                    <p className="text-[15px]">{tab[`title_${i18n.language}`]}</p>
                  </div>
                ))}
              </div>
              <div className="w-full">
                <div className="h-[34px] border-b border-[var(--primary-other)] ">
                  <div className="h-[22px] text-error font-bold">
                    <p>{t('new_articles')}</p>
                  </div>
                </div>

                {
                  loadingContent ? (
                    contents.map((content: any) => (
                      <div key={content.id}>
                        <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
                          <div className="flex flex-col gap-[10px] justify-center">
                            <p className="text-[15px] hover:text-[#f1c204] cursor-pointer transition-colors" onClick={() => router.push(`/investment-bank/${i18n.language}/${content.slug_en}`)} >
                              {content[`title_${i18n.language}`] || content[`title_en`] || content[`title_fr`] || 'No title'}
                            </p>
                            <p className="text-light text-[13px]">
                              {i18n.language === 'vi'
                                ? new Intl.DateTimeFormat('vi-VN', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                }).format(new Date(content.date))
                                : i18n.language === 'fr'
                                  ? new Intl.DateTimeFormat('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  }).format(new Date(content.date))
                                  : new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  }).format(new Date(content.date))
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ):
                    (
                      <LoadingComponent className="w-full h-[100px] flex justify-center items-center" />
                    )
                }

              </div>
            </div>
          ) :
            (
              <LoadingComponent className="h-[400px]" />
            )
        }

      </div>
      <FooterFull active={'investment-bank'} setModalActive={setModalActive}
        modalActive={modalActive} />
    </div>
  );
}

interface LoadingComponentProps {
  className?: string;
}
const LoadingComponent: React.FC<LoadingComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={"flex flex-col justify-center items-center w-full " + className} >
      <ArrowsClockwise size={32} className="animate-spin text-[var(--primary)] mb-4" />
      <p className="text-[var(--primary)] text-lg">{t('Loading')}</p>
    </div>
  )
}