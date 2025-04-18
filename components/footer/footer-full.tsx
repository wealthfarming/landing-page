"use client"
import React from "react";
import { useInterface } from "../context/interface-context";
import { DiscordLogo, FacebookLogo, TelegramLogo, XLogo } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
type FooterProps = {
  active?: "introduction" | "product" | "ecosystem" | "investment-bank";
};

const FooterFull: React.FC<FooterProps> = ({ active }) => {
  const activeClassName = "text-[var(--primary)] font-semibold";
  const { isDesktop, isTablet, isMobile } = useInterface();
  const {t} = useTranslation();
  return (
    <footer className="text-white bg-[#003048] bottom-0 w-full" style={{ zIndex: -1000 }}>
      <div className={`flex flex-col justify-center items-center ${isDesktop ? 'px-10 py-20 ' : isTablet ? 'px-10 py-20 ' : 'px-5 py-10'} w-full border-b border-cyan-900`}>
        <div className={`flex flex-wrap justify-center items-start w-full ${isDesktop ? 'max-w-[1200px] gap-10' : isTablet ? 'gap-10' : 'flex-col gap-10'}`}>
          <div className={`flex-1 shrink leading-6 basis-0 ${isDesktop ? 'gap-10 flex flex-col' : isTablet ? 'gap-10 flex flex-col maw-w-[299px]' : 'flex flex-col gap-5'}`}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8761044c6235d40f86b91092167385a3bbd3ae21?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              alt="BEQ Logo"
              className={`object-contain  ${isMobile ? 'w-[118px] h-[28px]' : 'w-[149px]'}`}
            />
            <p className={`text-[var(--other-border)] opacity-80 text-[15px] ${isDesktop ? 'w-[405px]' : isTablet ? 'w-[259px]' : 'w-full'}`}>
              {t('footer_description')}
            </p>
          </div>
          <div className={`flex flex-wrap flex-1 shrink ${isDesktop ? 'gap-20' : isTablet ? 'gap-10' : 'flex-col gap-7'} items-start basis-0`}>
            <nav className={`flex flex-col text-[var(--other-border)] ${isDesktop ? 'w-[103px] gap-6' : isTablet ? '' : ''}`}>
              <div className="text-[20px] font-medium">{t('footer_page')}</div>
              <ul className={`w-full text-[12px] font-normal flex flex-col opacity-80 ${isMobile ? 'mt-3 gap-2' : ''}`}>
                <li className={(active == "introduction") ? activeClassName : ""}>{t('footer_introduct')}</li>
                <li className={(active == "product") ? activeClassName + "" : ""}>{t('footer_product')}</li>
                <li className={(active == "ecosystem") ? activeClassName + "" : ""}>{t('footer_eco')}</li>
                <li className={(active == "investment-bank") ? activeClassName + "" : ""}>{t('footer_invest')}</li>
              </ul>
            </nav>
            <div className={`${isDesktop ? 'w-[213px]' : isTablet ? '' : ''}`}>
              <div className={`text-[var(--other-border)] opacity-80`}>
                <h3 className="text-[20px] font-semibold">Liên hệ</h3>
                <div className={`${isMobile ? 'mt-4 gap-2' : 'mt-5 gap-3'} w-full text-xs font-medium flex flex-col `}>
                  <div className="flex gap-2 items-start mt-2 w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/182e2072ceebd04e24ebe46d7c023314de6942e5?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                      alt="Phone icon"
                      className="object-contain shrink-0 w-4 aspect-square"
                    />
                    <p className="flex-1 shrink basis-0">+84 912 345 678</p>
                  </div>
                  <div className="flex gap-2 items-start w-full whitespace-nowrap">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/267db18b07327e7c2de43ca1549adc0184cd6b75?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                      alt="Email icon"
                      className="object-contain shrink-0 w-4 aspect-square"
                    />
                    <p className="flex-1 shrink basis-0">
                      private-client@beqholdings.com
                    </p>
                  </div>

                  <div className="flex gap-2 items-start mt-2 w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9146726f4a56bf97cdef6fcce5f7d515336b0ffc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                      alt="Location icon"
                      className="object-contain shrink-0 w-4 aspect-square"
                    />
                    <p className="flex-1 shrink basis-0">
                      {t('footer_contact_address')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mt-5 gap-4 opacity-80">
                <FacebookLogo size={24} weight="fill"/>
                <DiscordLogo size={24} weight="fill"/>
                <TelegramLogo size={24} weight="fill"/>
                <XLogo size={24} weight="fill"/>
              </div>
              <div className="mt-10 w-[163px]">
                <h3 className="text-[20px] font-medium text-[var(--other-border)]">
                {t('footer_social_proof')}
                </h3>
                <div className={`flex gap-3 items-center ${isMobile ? 'mt-4' : 'mt-5'} w-full`}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bd17d07fd0de627fa8a774dcc83b432ec9b4992?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                    alt="Social proof 1"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[5.13] w-[118px]"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c10f57039c350410bcf6bfb3dcbfb5b24306b98?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                    alt="Social proof 2"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[33px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-10 py-4 w-full text-sm font-medium border-b border-gray-200">
        <div className="flex gap-10 justify-center w-full max-w-[1200px] max-md:max-w-full">
          <p className="flex-1 shrink opacity-50 basis-0 max-md:max-w-full">
          {t('footer_copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFull;
