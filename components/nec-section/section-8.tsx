'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import section9 from "../../public/images/home-section-7/section-7.png"

const Section8: React.FC = () => {
    const { isDesktop, isTablet, isMobile } = useInterface();
    const { t } = useTranslation();

    return (
        <section className={`w-full ${isDesktop ? 'h-[264px]' : isTablet ? 'h-[214px]' : 'h-[176px]'} relative`}>
            <Image
                src={section9}
                alt=""
                className={`w-full ${isDesktop ? 'h-[264px]' : isTablet ? 'h-[214px]' : 'h-[176px]'} object-cover`}
            />

            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className={`absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] py-15 px-10 max-md:py-10 max-md:px-5`}>
                <p className={`${isMobile ? 'h2' : 'h1'} !text-white text-center`}>
                    {t("nec_section_8_title_1")}
                </p>
            </div>
        </section>
    );
};

export default Section8;