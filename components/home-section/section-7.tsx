'use client';
import { t } from "i18next";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { CursorClick } from "@phosphor-icons/react";


export default function HomeSection7() {
    const { isDesktop, isTablet, isMobile } = useInterface();

    return (
        <div className={`w-full ${isDesktop ? 'h-[336px]' : isTablet ? 'h-[349px]' : 'h-[222px]'} flex gap-[10px] relative`}>
            <img
                src="/images/home-section-7/section-7.png"
                alt=""
                className={`w-full ${isDesktop ? 'h-[336px]' : isTablet ? 'h-[349px]' : 'h-[222px]'} object-cover`}
            />

            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-[40px] flex flex-col justify-center items-center gap-[10px]">
                <p className={`${isMobile ? 'h2' : 'h1'} !text-[var(--other-border)] flex text-center max-w-[720px]`}>
                    {t('Đừng chờ đợi! Tương lai tài chính đang nằm trong tay bạn')}
                </p>
                <a className="flex gap-[8px] shadow-md hover:bg-[var(--primary-gradient)] bg-[var(--primary)] px-[24px] w-max items-center justify-center h-[48px]" href="https://wealthfarming.app/" target="_blank">
                    <CursorClick className="animate-diagonal" width="20" height={20} />
                    <p className="text-[12px]">{t('ĐẦU TƯ NGAY HÔM NAY')}</p>
                </a>
            </div>
        </div>

    );
}