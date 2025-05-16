"use client"
import React from "react";
import { useInterface } from "../context/interface-context";
import { FacebookLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
type FooterProps = {
  active?: "introduction" | "product" | "ecosystem" | "investment-bank" | "index-landing";
  fixed?: boolean;
  classname?: string;
};

const FooterFull: React.FC<FooterProps> = ({ active, fixed = true , classname}) => {
  const activeClassName = "text-[var(--primary)] font-semibold";
  const { isDesktop, isTablet, isMobile } = useInterface();
  const {t} = useTranslation();
  return (
    <footer className={`text-white bg-[#003048] bottom-0 w-full ${classname} ${isMobile || !fixed? '' : 'fixed'} `}>
      <div className={`flex flex-col justify-center items-center ${isDesktop ? 'px-10 py-20 ' : isTablet ? 'px-10 py-20 ' : 'px-5 py-10'} w-full border-b border-cyan-900`}>
        <div className={`flex flex-wrap justify-center items-start w-full ${isDesktop ? 'max-w-[1200px] gap-10' : isTablet ? 'gap-10' : 'flex-col gap-10'}`}>
          <div className={`flex-1 shrink leading-6 basis-0 ${isDesktop ? 'gap-10 flex flex-col' : isTablet ? 'gap-10 flex flex-col maw-w-[299px]' : 'flex flex-col gap-5'}`}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8761044c6235d40f86b91092167385a3bbd3ae21?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              alt="BEQ Logo"
              className="object-contain w-[149px]"
            />
            <p className={`text-[var(--other-border)] opacity-80 text-[15px] ${isDesktop ? 'w-[405px]' : isTablet ? 'w-[259px]' : 'w-full'}`}>
              {t('footer_description')}
            </p>
          </div>
          <div className={` flex flex-wrap flex-1 shrink ${isDesktop ? 'gap-20' : 'gap-10'} items-start ${isDesktop ? 'justify-end' : 'justify-start'} basis-0`}>
            <nav className={`flex flex-col text-[var(--other-border)] ${isDesktop ? 'w-[103px] gap-6' : isTablet ? '' : ''}`}>
              <div className="text-[20px] font-medium">{t('footer_page')}</div>
              <ul className="w-full text-[12px] font-normal flex flex-col opacity-80">
                <li className={(active == "introduction") ? activeClassName : ""}>
                  <a href="/" className="hover:text-[var(--primary)]">
                    {t('footer_introduct')}
                  </a>
                </li>
                <li className={(active == "product") ? activeClassName + " mt-2" : "mt-2"}>
                  <a href="/product" className="hover:text-[var(--primary)]">
                    {t('footer_product')}
                  </a>
                </li>
                <li className={(active == "ecosystem") ? activeClassName + " mt-2" : "mt-2"}>
                  <a href="/ecosystem" className="hover:text-[var(--primary)]">
                    {t('footer_eco')}
                  </a>
                </li>
                <li className={(active == "investment-bank") ? activeClassName + " mt-2" : "mt-2"}>
                  <a href="/investment-bank" className="hover:text-[var(--primary)]">
                    {t('footer_invest')}
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/14478063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--primary)]"
                  >
                    {t('header_license')}
                  </a>
                </li>
              </ul>
            </nav>
            <div className={`${isDesktop ? 'w-[213px]' : isTablet ? '' : ''}`}>
              <div className="text-[var(--other-border)] opacity-80">
                <h3 className="text-[20px] font-semibold">{t('footer_contact')}</h3>
                <div className="mt-5 w-full text-xs font-medium flex flex-col gap-3">
                  <div className="flex gap-2 items-start mt-2 w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/267db18b07327e7c2de43ca1549adc0184cd6b75?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                      alt="Email icon"
                      className="object-contain shrink-0 w-4 aspect-square"
                    />
                    <p className="flex-1 shrink basis-0">contact@wealthfarming.org</p>
                  </div>
                  <address className="not-italic">
                    <div className="flex gap-2 items-start mt-2 w-full">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9146726f4a56bf97cdef6fcce5f7d515336b0ffc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                        alt="Location icon"
                        className="object-contain shrink-0 w-4 aspect-square"
                      />
                      <div className="flex-1 shrink basis-0">
                        <p className="font-semibold mb-1">USA:</p>
                        <p>BeQ Holdings INC (US),</p>
                        <p>200 Continental Drive, Newark, DE 19713, USA</p>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start mt-2 w-full">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9146726f4a56bf97cdef6fcce5f7d515336b0ffc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                        alt="Location icon"
                        className="object-contain shrink-0 w-4 aspect-square"
                      />
                      <div className="flex-1 shrink basis-0">
                        <p className="font-semibold mb-1">Singapore:</p>
                        <p>14 Robinson Road #08-01A,</p>
                        <p>Far East Finance Building,</p>
                        <p>Singapore (048545)</p>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start mt-2 w-full">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9146726f4a56bf97cdef6fcce5f7d515336b0ffc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                        alt="Location icon"
                        className="object-contain shrink-0 w-4 aspect-square"
                      />
                      <div className="flex-1 shrink basis-0">
                        <p className="font-semibold mb-1">Vietnam:</p>
                        <p>67 Dinh Thi Thi Street, Van Phuc City,</p>
                        <p>Thu Duc District, Ho Chi Minh City</p>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start mt-2 w-full">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9146726f4a56bf97cdef6fcce5f7d515336b0ffc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                        alt="Location icon"
                        className="object-contain shrink-0 w-4 aspect-square"
                      />
                      <div className="flex-1 shrink basis-0">
                        <p className="font-semibold mb-1">UK:</p>
                        <p>128 City Road, London,</p>
                        <p>United Kingdom, EC1V 2NX</p>
                      </div>
                    </div>
                  </address>
                </div>
              </div>
              <div className="flex mt-5 gap-4 opacity-80">
                <a href="https://www.facebook.com/profile.php?id=61574682066111" target="_blank" rel="noopener noreferrer">
                  <FacebookLogo size={24} weight="fill"/>
                </a>
                <a href="https://www.linkedin.com/company/106157693/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                  <LinkedinLogo size={24} weight="fill"/>
                </a>
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
