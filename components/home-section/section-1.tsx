"use client"
import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
import ButtonPrimary from "../custom-button/button-primary";
import ButtonOutLine from "../custom-button/button-outline";
import { useTranslation } from "react-i18next";
import { AnimatedText } from "@/components/animation/introduction/Animations"
import { useInterface } from "@/components/context/interface-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function HomeSection1() {
    const { t } = useTranslation();
    const { isDesktop, isMobile } = useInterface();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className={`w-full flex-grow flex flex-col items-center justify-start bg-background relative z-30 ${isDesktop ? 'pt-10' : ''}`} ref={ref}>

            <h1 className={`animate-fade-in w-full text-center ${!isMobile ? 'pb-8' : 'pb-5'} max-w-[820px] bigTitle`}>
                <AnimatedText
                    text={[t('home_section_1_title_1'), t('home_section_1_title_2'), t('home_section_1_title_3'), t('home_section_1_title_4')]}
                    customClass={['', 'font-bold', '', 'font-bold']}
                    delayBetween={0.05}
                    duration={0.3}
                    inView={inView}
                />
            </h1>
            {!isMobile ?
                <p className={`${!isMobile ? 'pb-8' : 'pb-5'} w-10/12 md:w-7/12 text-center max-w-[608px] body-large !text-[var(--text-medium)]`}>{t('home_section_1_description')}</p>
                :
                <p className={`${!isMobile ? 'pb-8' : 'pb-5'} w-10/12 md:w-7/12 text-center max-w-[608px] body-large !text-[var(--text-medium)]`}>{t('home_section_1_description_mobile')}</p>
            }
            <div className={`${!isMobile ? 'gap-4' : 'gap-2'} flex flex-row justify-center max-w-[1200px]`}>
                <a href="https://www.facebook.com/people/Wealth-Farming/61574682066111/" target="_blank">
                    <ButtonOutLine variant="outline" className={`border button rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.24)] py-0 `}>
                        <ChatCenteredDots size={32} className="size-5" />
                        <p className="!font-geist-mono">{t('free_support')}</p>
                    </ButtonOutLine>
                </a>
                <a href="https://wealthfarming.app/" target="_blank" >
                    <ButtonPrimary className="flex items-center gap-2 button rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.24)] py-0">
                        <CursorClick size={32} className="size-5 animate-diagonal-2" />
                        <p>{t('header_investNow')}</p>
                    </ButtonPrimary>
                </a>
            </div>
        </div>
    )
}