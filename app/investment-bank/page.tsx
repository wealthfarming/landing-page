'use client';
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { AnimatedText } from "@/components/animation/introduction/Animations";
import { Apiget } from "@/lib/api/get"
import { API_URL } from "@/lib/config";
import { useEffect } from 'react';

import productBase from "../../public/images/img/product_base.jpg"
export default function InvestmentBank() {
  const { isDesktop, isMobile, isTablet } = useInterface();
  const { t, i18n } = useTranslation();

  const [selected, setSelected] = useState('');
  const [tabs, setTabs] = useState<any[]>([]);
  const [contents, setContents] = useState<Record<string, any>>({});


  useEffect(() => {
    const getPostCategories = async () => {
      const data = await Apiget(
        API_URL + '/api/posts-categories',
        {
          sort: 'createdAt',
          limit: 0,
          locale: i18n.language,
        }
      );
      const postcategories = data.map((item: any) => ({
        name: item.name,
        title: item.title,
      }));
      setTabs(postcategories);
      setSelected(postcategories[0]['name']);
    };

    const getPosts = async () => {
      const data = await Apiget(
        API_URL + '/api/posts',
        {
          sort: 'createdAt',
          limit: 0,
          locale: i18n.language,
        }
      );

      const posts_with_key: Record<string, any> = {};

      data.forEach((item: any) => {

        if (!posts_with_key[item.category.name]) {
          posts_with_key[item.category.name] = [];
        }

        posts_with_key[item.category.name].push({
          name: item.name,
          title: item.title,
          date: item.createdAt,
        });
      });
      setContents(posts_with_key);
    };

    getPostCategories();
    getPosts();
  }, [i18n.language]);
  // const tabs = [
  //   { id: 'annual_report', label: 'annual_report' },
  //   { id: 'nft_report', label: 'nft_report' },
  //   { id: 'wealth_farming_information_disclosure', label: 'wealth_farming_information_disclosure' },
  //   { id: 'beq_noification', label: 'beq_noification' },
  //   { id: 'fund_management_report', label: 'fund_management_report' },
  //   { id: 'investment_nft_catalog', label: 'investment_nft_catalog' },
  //   { id: 'for_new_investors', label: 'for_new_investors' },
  //   { id: 'regulations_rules_wf', label: 'regulations_rules_wf' },
  // ];

  return (
    <div>
      <HeaderDesktopFull changeAt={190} />

      <div className="w-full h-[260px] relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <Image src={productBase} alt="Product Banner" width={735} height={260} className="w-full h-[260px] object-cover" />

      </div>

      <div className="flex justify-center w-full h-[140px] gap-[10px] py-[40px] md:px-[40px] px-[20px] items-center bg-[var(--canvas-bg)]">
        <div className="w-[1200px] max-w-[1200px]">
          <div className={`h1 ${isDesktop ? '!text-[50px]' : isMobile ? '!text-[34px]' : '!text-[44px]'}`}>
            <AnimatedText
              text={[t('investment_bank')]}
              delayBetween={0.05}
              duration={0.3}
            />
          </div>
        </div>
      </div>

      <div className={`flex w-full justify-center p-[40px] pb-[100px] bg-[var(--canvas-bg)] ${isDesktop ? 'mb-[505px]' : isTablet ? 'mb-[505px]' : ''} `}>
        <div className={`flex ${!isMobile ? 'flex-row' : 'flex-col'} gap-[40px] w-[1200px] `}>
          <div className="gap-[40px] flex-col items-center w-[336px] min-w-[336px] ">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={`h-[51px] py-[12px] px-[16px] cursor-pointer transition-colors ${selected === tab.name
                  ? 'bg-[var(--primary)]'
                  : 'bg-[var(--canvas-bg)] hover:bg-[#C5C6CA]'
                  }`}
                onClick={() => setSelected(tab.name)}
              >
                <p className="text-[15px]">{tab.title}</p>
              </div>
            ))}
          </div>
          <div className="w-full">
            <div className="h-[34px] border-b border-[var(--primary-other)] ">
              <div className="h-[22px] text-error font-bold">
                <p>{t('new_articles')}</p>
              </div>
            </div>

            {contents[selected]?.map((content: any, index: number) => (
              <div key={index}>
                <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
                  <div className="flex flex-col gap-[10px] justify-center">
                    <p className="text-[15px] hover:text-[#f1c204] cursor-pointer transition-colors">{content.title}</p>
                    <p className="text-light text-[13px]">
                      {i18n.language === 'en'
                        ? new Intl.DateTimeFormat('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }).format(new Date(content.date))
                        : new Intl.DateTimeFormat('vi-VN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }).format(new Date(content.date))
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <FooterFull active={'investment-bank'} />
    </div >
  );
}
