"use client";
import { useEffect, useState } from "react";
import { FadeInSection } from "@/components/animation/introduction/Animations"
import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
import { useInterface } from "../context/interface-context";
import { useTranslation } from 'react-i18next';
import eco1 from "../../public/images/img/eco-1.png"
import Image from "next/image";
import { Route } from "lucide-react";
import ButtonPrimary from "../custom-button/button-primary";
export default function HomeSection6() {
    const { isDesktop, isTablet, isMobile } = useInterface()
    const [mounted, setMounted] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <>
            <div className={`w-full flex bg-[var(--canvas-bg)] ${isDesktop ? 'py-20 px-10 justify-center' : isMobile ? 'flex-col p-[40px_20px]' : 'flex-col p-[80px_40px]'}`}>
                <div className={` flex ${isDesktop ? 'max-w-[1200px] gap-10' : isTablet ? 'w-full flex-col gap-10' : 'w-full flex-col gap-12'}`}>
                    <div className={`flex flex-col ${isDesktop ? 'w-[50%] pt-[33px] gap-8 h-auto' : isTablet ? 'gap-8' : 'gap-4'}`}>
                        <div className={`flex flex-col justify-center gap-4 ${isDesktop ? '' : isTablet ? 'items-center' : ''}`}>

                            <div className={`${isDesktop ? 'text-3xl mr-[68px] text-left' : isTablet ? 'text-3xl text-center max-w-[657px]' : 'text-[29px] text-center'} font-semibold font-geist-raleway`}><FadeInSection >{t('home_section_5b_title')}</FadeInSection></div>


                            <div className={`${isDesktop ? 'text-lg mr-[52px] text-left' : isTablet ? 'text-xl text-center max-w-[605px]' : 'text-[17px] text-center'} text-[var(--text-medium)] font-medium`}><FadeInSection >{t('home_section_5b_description')}</FadeInSection></div>


                        </div>
                        <div className={`flex gap-2 ${isDesktop ? 'justify-start pb-8' : 'justify-center'}`}>
                            <a href="https://www.facebook.com/people/Wealth-Farming/61574682066111/" target="_blank">
                                <div className={`${(isDesktop || isTablet) ? 'gap-2' : 'gap-1'} flex bg-[var(--base-bg)] shadow-sm rounded-[4px] h-[48px] border border-[var(--primary-other)] button items-center hover:bg-[var(--canvas-bg)] hover:cursor-pointer`}>
                                    <div className={`${(isDesktop || isTablet) ? 'py-[10px] pl-6' : 'pl-4 py-2'}`}>
                                        <ChatCenteredDots size={20} />
                                    </div>
                                    <div className={`${(isDesktop || isTablet) ? 'py-[13px] pr-6' : 'pr-4 py-3'} font-geist-mono`}>
                                        {t('free_support')}
                                    </div>
                                </div>
                            </a>
                            <a href="https://wealthfarming.app/" target="_blank" >
                                <ButtonPrimary className={`flex ${(isDesktop || isTablet) ? 'gap-2' : 'gap-1'} bg-[var(--primary)] shadow-sm rounded-[4px] h-[48px] button items-center hover:bg-[var(--primary-gradient)] hover:cursor-pointer`}>
                                    <div className={`${(isDesktop || isTablet) ? 'py-[10px] pl-6' : 'pl-4 py-2'}`}>
                                        <CursorClick size={20} className="animate-diagonal-2" />
                                    </div>
                                    <div className={`${(isDesktop || isTablet) ? 'py-[13px] pr-6' : 'pr-4 py-3'} font-geist-mono`}>
                                        {t('header_investNowup')}
                                    </div>
                                </ButtonPrimary>
                            </a>
                        </div>
                    </div>
                    <div className={`flex ${isDesktop ? 'w-[50%] justify-start h-[386px]' : isTablet ? 'w-full justify-center' : 'w-full'} `}>
                        <Image src={eco1} alt="" className={`${isDesktop ? 'w-full' : isTablet ? 'w-[84%]' : ''} h-full`} />
                    </div>
                </div>
            </div>
        </>
    )
}