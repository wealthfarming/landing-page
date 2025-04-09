'use client';
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { useTranslation } from "react-i18next";

export default function InvestmentBank() {
  const { isDesktop, isTablet, isMobile } = useInterface();
  const { t } = useTranslation();
  return (
    <div>
      <HeaderDesktopFull changeAt={1} />
      <Image src="/images/img/product_base.jpg" alt="Product Banner" width={260} height={260} className={`w-full h-[260px] -z-10 ${!isDesktop ? "pt-[80px]" : ""}`}/>
      <div className="flex w-full h-[140px] gap-[10px] py-[40px] md:px-[40px] px-[20px] items-center bg-[var(--canvas-bg)]">
        <p className="h1">
          {t('investment_bank')}
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:gap-[10px] gap-[40px] md:p-[40px] p-[20px] pb-[40px] xl:w-[1200px] w-full">
        <div className="gap-[40px] md:w-[336px] md:min-w-[336px] min-w-full w-[100%]">

          <div className="h-[51px] bg-[var(--primary)] py-[12px] px-[16px]">
            <p>{t('annual_report')}</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[var(--canvas-bg)]">
            <p>{t('nft_report')}</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[var(--canvas-bg)]">
            <p>{t('wealth_farming_information_disclosure')}</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[var(--canvas-bg)]">
            <p>{t('beq_noification')}</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[var(--canvas-bg)]">
            <p>{t('fund_management_report')}</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[var(--canvas-bg)]">
            <p>{t('investment_nft_catalog')}</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[var(--canvas-bg)]">
            <p>{t('for_new_investors')}</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[var(--canvas-bg)]">
            <p>{t('regulations_rules_wf')}</p>
          </div>

        </div>
        <div className="w-full">
          <div className="h-[34px] border-b border-[var(--primary-other)] ">
            <div className="h-[22px] text-error font-bold">
              <p>{t('new_articles')}</p>
            </div>
          </div>
          <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
            <div className="flex-col gap-[10px] items-center">
              <p>{t('articles')}</p>
              <p className="text-light">March 28, 2025</p>
            </div>
          </div>
          <div className="h-[97px] py-[20px] border-b border-[var(--primary-other)]">
            <div className="flex-col gap-[10px] items-center">
              <p>{t('importing_content')}</p>
              <p className="text-light">March 28, 2025</p>
            </div>
          </div>
        </div>
      </div>
      <FooterFull active={'invest'} />



    </div>

  );
}
