"use client";

import React from "react";
import SectionContainer from "./section-container";
import ContactForm from "./contact-form";
import { useTranslation } from "react-i18next";
import { FacebookLogo, LinkedinLogo } from "@phosphor-icons/react";


const ContactSection: React.FC = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer bgColor="bg-[var(--base-bg)]">
      <div className="flex flex-[1_0_0] justify-center h-auto max-md:h-auto">
        <div className="flex flex-wrap gap-10 justify-center items-start max-w-[805px] max-md:max-w-full ">
          <div className="flex flex-col flex-1 shrink justify-center text-base basis-8 w-[600px] text-zinc-800 max-md:max-w-full gap-[10px]">
            <div className="self-start text-[40px] text-center max-md:text-[29px] font-semibold">
              {t('contact_section_title')}
            </div>
            <p className="body-large-index max-md:max-w-full">
              {t('contact_section_question')}
            </p>
            <p className="leading-6 body !text-[var(--text-medium)] max-md:max-w-full">
              {t('contact_section_description')}
            </p>
            <div className="flex flex-col gap-[12px] w-full max-md:max-w-full body !text-[var(--text-medium)]">
              {/* Email */}
              <div className="flex gap-2 items-start w-full max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/267db18b07327e7c2de43ca1549adc0184cd6b75?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Email icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <p className="!text-[var(--primary)]">contact@wealthfarming.org</p>
              </div>

              {/* Addresses */}
              <div className="flex gap-2 items-start w-full max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9146726f4a56bf97cdef6fcce5f7d515336b0ffc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Location icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <div className="flex-1 shrink basis-0">
                  <p className="font-semibold mb-1">USA:</p>
                  <p>BeQ Holdings INC (US),</p>
                  <p className="">200 Continental Drive, Newark, DE 19713, USA</p>
                </div>
              </div>

              <div className="flex gap-2 items-start w-full max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9146726f4a56bf97cdef6fcce5f7d515336b0ffc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Location icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <div className="flex-1 shrink basis-0">
                  <p className="font-semibold mb-1">Singapore:</p>
                  <p>14 Robinson Road #08-01A,</p>
                  <p>Far East Finance Building,</p>
                  <p>Singapore (048545)</p>
                </div>
              </div>

              <div className="flex gap-2 items-start w-full max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9146726f4a56bf97cdef6fcce5f7d515336b0ffc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Location icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <div className="flex-1 shrink basis-0">
                  <p className="font-semibold mb-1">Vietnam:</p>
                  <p>67 Dinh Thi Thi Street, Van Phuc City,</p>
                  <p>Thu Duc District, Ho Chi Minh City</p>
                </div>
              </div>

              <div className="flex gap-2 items-start w-full max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9146726f4a56bf97cdef6fcce5f7d515336b0ffc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Location icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <div className="flex-1 shrink basis-0">
                  <p className="font-semibold mb-1">UK:</p>
                  <p>128 City Road, London,</p>
                  <p>United Kingdom, EC1V 2NX</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex mt-5 gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61574682066111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookLogo size={24} weight="fill" />
                </a>
                <a
                  href="https://www.linkedin.com/company/106157693/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogo size={24} weight="fill" />
                </a>
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