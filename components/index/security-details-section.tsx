import React from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";
import FeatureCard from "./feature-card";
import { useTranslation } from "react-i18next";


const SecurityDetailsSection: React.FC = () => {
  const {t} = useTranslation()
  return (
    <SectionContainer>
      <SectionTitle
        title={t('security_details_section_title')}
      />
      <div className="flex flex-wrap gap-10 items-start self-center mt-20 max-md:mt-10 max-md:max-w-full max-md:justify-center">
        <div className="flex flex-col text-base font-medium leading-6 text-center text-black min-w-60 w-[263px] max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13b1771aef80789b9b80b640195fb8bce30dc98c?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
            alt="Security illustration"
            className="object-contain self-center max-w-full aspect-[0.87] w-[200px] max-md:w-[100px]"
          />
          <p className="mt-5">{t('security_details_section_feature_1')}</p>
        </div>
        <div className="flex flex-col text-base font-medium leading-6 text-center text-black min-w-60 w-[263px] max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1a1bab667e2d69be2977f1c5ae77bc43c720ce0?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
            alt="Security illustration"
            className="object-contain self-center max-w-full aspect-[0.87] w-[200px] max-md:w-[100px]"
          />
          <p className="mt-5">{t('security_details_section_feature_2')}</p>
        </div>
        <div className="flex flex-col text-base font-medium leading-6 text-center text-black min-w-60 w-[263px] max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a51605a53446a8acdf9af6bd469b2c31c5993c88?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
            alt="Security illustration"
            className="object-contain self-center max-w-full aspect-[0.87] w-[200px] max-md:w-[100px]"
          />
          <p className="mt-5">{t('security_details_section_feature_3')}</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SecurityDetailsSection;