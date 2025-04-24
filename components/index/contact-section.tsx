"use client";

import React from "react";
import SectionContainer from "./section-container";
import ContactForm from "./contact-form";
import { useTranslation } from "react-i18next";


const ContactSection: React.FC = () => {
  const {t} = useTranslation()
  return (
    <SectionContainer bgColor="bg-[var(--base-bg)]">
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-10 justify-center items-start max-w-screen-md w-[768px] max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center text-base basis-8 min-w-60 text-zinc-800 max-md:max-w-full gap-[20px]">
            <h2 className="self-start big-title-desk-index text-center">
              {t('contact_section_title')}
            </h2>
            <p className="se-normal-desk-index max-md:max-w-full">
              {t('contact_section_question')}
            </p>
            <p className="leading-6 re-normal-desk-index !text-[var(--text-medium-index)] max-md:max-w-full">
              {t('contact_section_description')}
            </p>
            <div className="flex flex-col gap-[12px] w-full max-md:max-w-full re-normal-desk-index">
              <div className="flex gap-3 items-start w-full whitespace-nowrap max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4293226d4abd9346624d06bab90f668fdc3b523?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Email icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <p>{t('contact_section_email')}</p>
              </div>
              <div className="flex gap-3 items-start w-full max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e53c413123edf69fd58cabded2ef876caad3e9d6?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Phone icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <p>{t('contact_section_phone')}</p>
              </div>
              <div className="flex gap-3 items-start w-full max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/059d4e7af6a977786bd2e1b24396920d36417c63?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Location icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <p>{t('contact_section_address')}</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;