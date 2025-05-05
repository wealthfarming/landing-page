import React from "react";
import SectionContainer from "./section-container";
import { useTranslation } from "react-i18next";

const SecuritySection: React.FC = () => {
  const {t} = useTranslation()
  return (
    <SectionContainer bgColor="bg-sky-950" borderBottom={false}>
      <h2 className="text-2xl text-center text-white max-md:max-w-full">
        {t('index_security_section_title')}
      </h2>
      <div className="mt-10 w-full text-sm text-white max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aad8785fe65297d49ec5a730dbfeb71a2052098f?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
          alt="Security dashboard"
          className="object-contain w-full rounded-2xl aspect-[1.83] max-md:max-w-full"
        />
        <div className="flex gap-2 items-start mt-5 w-full max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44eff99861890953ab60196c8696acda3da481cf?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
            alt="Info icon"
            className="object-contain shrink-0 w-5"
          />
          <p className="self-stretch my-auto w-[768px] max-md:max-w-full">
            Tài khoản demo real-time hiển thị lợi nhuận 20% từ ALSTOM (CAC40
            Q1/2025).
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SecuritySection;
