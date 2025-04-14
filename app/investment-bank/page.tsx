'use client';
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

export default function InvestmentBank() {
  const { isDesktop, isMobile } = useInterface();
  const { t } = useTranslation();
  const [selected, setSelected] = useState("nft_report");

  const tabs = [
    { id: 'annual_report', label: 'annual_report' },
    { id: 'nft_report', label: 'nft_report' },
    { id: 'wealth_farming_information_disclosure', label: 'wealth_farming_information_disclosure' },
    { id: 'beq_noification', label: 'beq_noification' },
    { id: 'fund_management_report', label: 'fund_management_report' },
    { id: 'investment_nft_catalog', label: 'investment_nft_catalog' },
    { id: 'for_new_investors', label: 'for_new_investors' },
    { id: 'regulations_rules_wf', label: 'regulations_rules_wf' },
  ];

  return (
    <div>
      <HeaderDesktopFull changeAt={190} />
      <Image src="/images/img/product_base.jpg" alt="Product Banner" width={260} height={260} className={`w-full h-[260px] -z-10 ${!isDesktop ? "pt-[80px]" : ""} brightness-40`} />
      <div className="flex justify-center w-full h-[140px] gap-[10px] py-[40px] md:px-[40px] px-[20px] items-center bg-[var(--canvas-bg)]">
        <div className="w-[1200px] max-w-[1200px]">
          <p className={`h1 ${isDesktop ? '!text-[50px]' : isMobile ? '!text-[34px]' : '!text-[44px]'}`}>
            {t('investment_bank')}
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center p-[40px] pb-[40px]">
        <div className={`flex ${!isMobile ? 'flex-row' : 'flex-col'} gap-[40px] w-[1200px] `}>
          <div className="gap-[40px] flex-col items-center w-[336px] min-w-[336px] ">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`h-[51px] py-[12px] px-[16px] cursor-pointer transition-colors ${selected === tab.id
                  ? 'bg-[var(--primary)]'
                  : 'bg-[var(--canvas-bg)] hover:bg-[#C5C6CA]'
                  }`}
                onClick={() => setSelected(tab.id)}
              >
                <p className="text-[15px]">{t(tab.label)}</p>
              </div>
            ))}

          </div>
          <div className="w-full">
            <div className="h-[34px] border-b border-[var(--primary-other)] ">
              <div className="h-[22px] text-error font-bold">
                <p>{t('new_articles')}</p>
              </div>
            </div>

            {selected == 'annual_report' &&
              <div>
                <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
                  <div className="flex flex-col gap-[10px] justify-center">
                    <p className="text-[15px] hover:text-[#f1c204] cursor-pointer transition-colors">{t('articles')}</p>
                    <p className="text-light ">March 28, 2025</p>
                  </div>
                </div>
                <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
                  <div className="flex flex-col gap-[10px] justify-center">
                    <p className="text-[15px] hover:text-[#f1c204] cursor-pointer transition-colors">{t('importing_content')}</p>
                    <p className="text-light text-[13px]">March 28, 2025</p>
                  </div>
                </div>
              </div>
            }

            {selected == 'nft_report' &&
              <div>
                <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
                  <div className="flex flex-col gap-[10px] justify-center">
                    <p className="text-[15px] hover:text-[#f1c204] cursor-pointer transition-colors">{t('articles')}</p>
                    <p className="text-light text-[13px]">March 28, 2025</p>
                  </div>
                </div>
              </div>
            }

            {selected == 'wealth_farming_information_disclosure' &&
              <div>
                <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
                  <div className="flex flex-col gap-[10px] justify-center">
                    <p className="text-[15px] hover:text-[#f1c204] cursor-pointer transition-colors">Styling Elements</p>
                    <p className="text-light text-[13px]">March 28, 2025</p>
                  </div>
                </div>
                <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
                  <div className="flex flex-col gap-[10px] justify-center">
                    <p className="text-[15px] flex hover:text-[#f1c204] cursor-pointer transition-colors">{t('importing_content')}</p>
                    <p className="text-light text-[13px]">March 28, 2025</p>
                  </div>
                </div>
                <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
                  <div className="flex flex-col gap-[10px] justify-center">
                    <p className="text-[15px] hover:text-[#f1c204] cursor-pointer transition-colors">Best Practices</p>
                    <p className="text-light text-[13px]">March 28, 2025</p>
                  </div>
                </div>
              </div>
            }

            {selected == 'beq_noification' &&
              <div>
                <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
                  <div className="flex-col gap-[10px] justify-center">
                    <p className="text-[15px] hover:text-[#f1c204] cursor-pointer transition-colors">What's New</p>
                    <p className="text-light text-[13px]">March 28, 2025</p>
                  </div>
                </div>
              </div>
            }

          </div>
        </div>
      </div>
      <FooterFull active={'invest'} />
    </div >
  );
}
