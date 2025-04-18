"use client"
import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
import ButtonPrimary from "../custom-button/button-primary";
import ButtonOutLine from "../custom-button/button-outline";
import { useTranslation } from "react-i18next";
import { AnimatedText } from "@/components/animation/introduction/Animations"
import { useEffect, useState } from "react";
export default function HomeSection1() {
    const { t } = useTranslation();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);


    return (
        <div className="w-full flex-grow flex flex-col items-center justify-start bg-background pt-0 lg:pt-14 relative z-30">

            <h1 className="animate-fade-in font-normal mb-4 w-full text-center pb-2 max-w-[820px] bigTitle">
                <AnimatedText text={[t('home_section_1_title_1'), t('home_section_1_title_2'), t('home_section_1_title_3'), t('home_section_1_title_4')]} customClass={['', 'font-bold', '', 'font-bold']} />
            </h1>
            <p className="  mb-8 w-9/12 md:w-7/12 text-center max-w-[600px] body-large !text-[var(--text-medium)]">{t('home_section_1_description')}</p>
            <div className="flex flex-row gap-4 justify-center px-16 max-w-[1200px]">
                <ButtonOutLine variant="outline" className="h-[48px] border button ">
                    <ChatCenteredDots size={32} className="size-5" />
                    <p className="!font-geist-mono">{t('free_support')}</p>
                </ButtonOutLine>
                <ButtonPrimary className="h-[48px] flex items-center gap-2 button ">
                    <CursorClick size={32} className="size-5" />
                    <p>{t('header_investNow')}</p>
                </ButtonPrimary>
            </div>
        </div>
    )
}