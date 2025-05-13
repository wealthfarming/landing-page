'use client';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { CursorClick } from "@phosphor-icons/react";
import section9 from "../../public/images/home-section-7/section-7.png"
import ButtonPrimary from "../custom-button/button-primary";
export default function HomeSection9() {
    const { isDesktop, isTablet, isMobile } = useInterface();
    const { t } = useTranslation();

    return (
        <div className={`w-full ${isDesktop ? 'h-[336px]' : isTablet ? 'h-[349px]' : 'h-[222px]'} flex gap-[10px] relative`}>
            <Image
                src={section9}
                alt=""
                className={`w-full ${isDesktop ? 'h-[336px]' : isTablet ? 'h-[349px]' : 'h-[222px]'} object-cover`}
            />

            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className={`absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] ${!isMobile ? 'px-[40px]' : 'px-[20px]'} flex flex-col justify-center items-center gap-[10px]`}>
                <p className={`${isMobile ? 'h2' : 'h1'} !text-white flex text-center max-w-[720px]`}>
                    {t('home_section_7_title')}
                </p>
                <a href="https://wealthfarming.app/" target="_blank" >
                    <ButtonPrimary
                        className="flex items-center gap-2 py-0 rounded-[4px] !border-t-[4px] !border-l-[4px] !border-[#ECC079] !border-l-[#ECC079] !border-b-0 !border-r-0 box-border"
                        style={{
                            backgroundImage: "linear-gradient(to bottom left, #ECC079, #E8B561)"
                        }}
                    >
                        <CursorClick size={32} className="size-5 animate-diagonal-2" />
                        <p>{t('header_invest_today_up')}</p>
                    </ButtonPrimary>
                </a>
            </div>
        </div>

    );
}