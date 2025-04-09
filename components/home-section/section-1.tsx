"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
import ButtonPrimary from "../custom-button/button-primary";
import ButtonOutLine from "../custom-button/button-outline";
import { useTranslation } from "react-i18next";
export default function HomeSection1() {
    const { t } = useTranslation();
    return (
        <div className="w-full flex-grow flex flex-col items-center justify-start bg-background lg:mt-80 lg:pt-14 mt-18 sm:mt-18 md:mt-0 sm:py-18 md:py-18 relative z-30">

            <h1 className="lg:text-7xl md:text-5xl text-4xl font-normal mb-4 w-full md:w-9/12 text-center py-2 max-w-[1100px]">{t('home_section_1_title')}</h1>
            <p className="text-lg text-gray-600 mb-8 w-9/12 md:w-6/12 text-center max-w-[600px]">{t('home_section_1_description')}</p>
            <div className="flex flex-row gap-4 justify-center px-16 max-w-[1200px]">
                <ButtonOutLine variant="outline" className="h-[48px] border button">
                    <ChatCenteredDots size={32} className="size-5" />
                    <p>{t('free_support')}</p>
                </ButtonOutLine>
                <ButtonPrimary className="h-[48px] flex items-center gap-2">
                    <CursorClick size={32} className="size-5" />
                    <p>{t('header_investNow')}</p>
                </ButtonPrimary>
            </div>
        </div>
    )
}