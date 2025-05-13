"use client";

import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { FadeInSection } from "@/components/animation/introduction/Animations"
import { useInterface } from "../context/interface-context";
import { useTranslation } from 'react-i18next';
import section6 from "../../public/images/img/section6.webp"
export default function HomeSection7() {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const { isDesktop, isTablet, isMobile } = useInterface();

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <div className={`flex w-full justify-center relative bg-[url(${section6})] bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${section6.src})` }}>
            <div
                className={`flex flex-col justify-center items-center w-full ${isDesktop
                    ? "py-20 px-10 h-[520px] max-w-[1200px]"
                    : isMobile
                        ? "p-[60px_20px]"
                        : "p-[80px_40px]"
                    }`}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className={`${isDesktop ? 'flex flex-col max-w-[572px]' : isTablet ? 'flex flex-col items-center max-w-[572px]' : ''}`}>
                    <div
                        className={`relative z-10 font-semibold text-center text-white mb-2 ${isDesktop
                            ? "text-[40px]"
                            : isTablet
                                ? "text-4xl"
                                : "text-[29px] "
                            }`}

                        style={{
                            lineHeight: isDesktop ? "52px" : isTablet ? "46.8px" : "40.6px",
                        }}
                    >
                        Wealth Farming
                    </div>
                    <div
                        className={`relative z-10 text-center font-medium text-white ${isDesktop
                            ? "text-lg"
                            : isTablet
                                ? "text-lg"
                                : "text-[17px]"
                            }`}
                        style={{
                            lineHeight: isDesktop ? "30.6px" : isTablet ? "30.6px" : "28.9px",
                        }}
                    >
                        {t('home_section_6b_description')}
                    </div>
                    <div className={`relative z-10 flex ${isDesktop ? 'mt-10' : isTablet ? 'mt-10' : 'mt-5'} gap-2 justify-center`}>
                        <div className={`flex gap-2 justify-center ${isDesktop ? '' : ''}`}>
                            <a href="https://www.facebook.com/people/Wealth-Farming/61574682066111/" target="_blank">
                                <div className={`${(isDesktop || isTablet) ? 'gap-2' : 'gap-1'} flex bg-[var(--base-bg)] shadow-sm rounded-[4px] border border-[var(--primary-other)] button items-center hover:bg-[var(--canvas-bg)] hover:cursor-pointer`}>
                                    <div className={`${(isDesktop || isTablet) ? 'py-[10px] pl-6' : 'pl-4 py-2'}`}>
                                        <ChatCenteredDots size={20} />
                                    </div>
                                    <div className={`${(isDesktop || isTablet) ? 'py-[13px] pr-6' : 'pr-4 py-3'} font-geist-mono`}>
                                        {t('free_support')}
                                    </div>
                                </div>
                            </a>
                            <a href="https://wealthfarming.app/" target="_blank" >
                                <div className={`flex ${(isDesktop || isTablet) ? 'gap-2' : 'gap-1'} bg-[var(--primary)] shadow-sm rounded-[4px] button items-center hover:bg-[var(--primary-gradient)] hover:cursor-pointer`}>
                                    <div className={`${(isDesktop || isTablet) ? 'py-[10px] pl-6' : 'pl-4 py-2'}`}>
                                        <CursorClick size={20} className="animate-diagonal-2" />
                                    </div>
                                    <div className={`${(isDesktop || isTablet) ? 'py-[13px] pr-6' : 'pr-4 py-3'} font-geist-mono`}>
                                        {t('header_investNowup')}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}