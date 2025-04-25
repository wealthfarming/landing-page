import React from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";
import FeatureCard from "./feature-card";
import { useTranslation } from "react-i18next";


const NFTFutureSection: React.FC = () => {
  const {t} = useTranslation()
  return (
    <SectionContainer>
      <SectionTitle
        title={
          <>
            {t('nft_future_section_title')}
          </>
        }
        subtitle={t('nft_future_section_subtitle')}
      />
      <div className="flex flex-wrap gap-10 items-start mt-20 max-md:mt-10 max-md:max-w-full justify-center">
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/21016215fa0e725f120015cd3a7e97c2ad8f90dc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
          title={t('nft_future_section_feature_1')}
        />
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/da2dfee13da1af2e42d09f1c8ed97390ab444db7?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
          title={t('nft_future_section_feature_2')}
        />
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dd00494a5aa445970e5ee9440ade9a8f178ea311?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
          title={t('nft_future_section_feature_3')}
        />
      </div>
      <div className="flex flex-col items-center mt-20 max-w-full max-md:mt-10 max-md:justify-center w-full">
        <div className="relative overflow-hidden w-full bg-white rounded-md max-w-[234px] h-[78px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF0BA] to-[#CDFEE4] p-[1px] rounded-md">
            <div className="bg-white h-full rounded-md">
              <div className="gap-1 self-stretch px-1 py-2 w-full text-base font-semibold border-b border-gray-200 min-h-[39px] text-zinc-800 text-center">
                {t('profit')}
              </div>
              <div className="flex items-center w-full text-2xl font-medium text-white text-center">
                <div className="flex-1 shrink gap-1 self-stretch p-1 my-auto w-full bg-green-500 basis-0">
                  $100k → $394k
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-slate-500">{t('nft_future_section_profit_duration')}</p>
      </div>
    </SectionContainer>
  );
};

export default NFTFutureSection;