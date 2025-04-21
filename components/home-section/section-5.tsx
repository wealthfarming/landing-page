'use client';
import { t } from "i18next";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { AnimatedText } from "@/components/animation/introduction/Animations"
type Tab = {
    id: string;
    label: string;
    icon: string;
    icon_selected: string;
    content: string;
};

export function HomeSection5Tab({ tabs }: { tabs: Tab[] }) {
    const [selected, setSelected] = useState("ai_system");
    const { isDesktop, isTablet, isMobile } = useInterface();

    useEffect(() => {
        if (isTablet) {
            setSelected("ai_system");
        }
    }, [isTablet]);
    useEffect(() => {
        if (isMobile) {
            setSelected("");
        }
    }, [isMobile]);

    return (
        <div className={`${isDesktop ? 'w-[1200px] flex flex-[0_0_auto] h-[404px]' : 'flex flex-col'} ${isMobile ? 'gap-[20px]' : 'gap-[8px]'}`}>
            {tabs.map(tab => (
                <div key={tab.id} className={`${selected === tab.id ? 'flex-[1.5_0_0px]' : 'flex-[1_0_0px]'}`}>
                    <div
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)' }}
                        className={`
                            ${isDesktop ? `
                                p-[20px] h-full  transition-all duration-300 ease-in-out
                                flex flex-col justify-between border-[1px] rounded-[5px]
                                ${selected === tab.id ? 'bg-[var(--primary)]' : 'bg-[var(--base-bg)]'}
                                ` : `
                                p-[20px] transition-all duration-500 ease-in-out w-full gap-[8px]
                                flex flex-col justify-between border-[1px]
                                ${selected === tab.id && isTablet ? 'bg-[var(--primary)] h-[255px]' : 'bg-[var(--base-bg)]'}
                                `}
                            `}
                        onMouseEnter={isDesktop ? () => setSelected(tab.id) : undefined}
                    >
                        <div>
                            <Image src={`/images/home-section-5/${selected === tab.id ? tab.icon_selected : tab.icon}`} alt="" width={45} height={45} />
                            <p className="pt-[8px] no-anim h4">{t(tab.label)}</p>
                        </div>
                        <div
                            className={`
                                transition-all duration-300 ease-in-out overflow-hidden text-[15px] flex gap-[8px] w-full
                                ${selected === tab.id || !isDesktop ? '' : 'hidden'}
                            `}
                        >
                            <p>
                                {t(tab.content)}
                            </p>
                            <div className={`border-[1px] rounded-[100px] border-[var(--primary-gradient)] w-[20px] min-w-[20px] h-[20px] mt-auto flex items-center justify-center animate-pulse ${selected === tab.id ? '' : 'hidden'}`}>
                                <div className="rounded-[100px] bg-[var(--primary-border)]  w-[12px] h-[12px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default function HomeSection5() {
    const tabs = [
        {
            id: 'ai_system',
            label: t('home_section_5_tab_label_1'),
            icon: 'start.png',
            icon_selected: 'start_selected.png',
            content: t('home_section_5_tab_content_1')
        },
        {
            id: 'nft_nec_beq_indexes',
            label: t('home_section_5_tab_label_2'),
            icon: 'coin.png',
            icon_selected: 'coin_selected.png',
            content: t('home_section_5_tab_content_2')
        },
        {
            id: 'review_indexes',
            label: t('home_section_5_tab_label_3'),
            icon: 'goal.png',
            icon_selected: 'goal_selected.png',
            content: t('home_section_5_tab_content_3')
        },
        {
            id: 'highlight_difference',
            label: t('home_section_5_tab_label_4'),
            icon: 'hand.png',
            icon_selected: 'hand_selected.png',
            content: t('home_section_5_tab_content_4')
        },
        {
            id: 'ecosystem',
            label: t('home_section_5_tab_label_5'),
            icon: 'setting.png',
            icon_selected: 'setting_selected.png',
            content: t('home_section_5_tab_content_5')
        },
    ];
    const { isDesktop, isMobile } = useInterface();

    return (
        <div className="flex justify-center gap-[10px] w-full p-[40px] pt-[80px]">
            <div className=" max-w-[1200px] w-full">
                <div className={`flex flex-col ${isDesktop ? 'gap-[80px]' : 'gap-[40px]'} `}>
                    <div className="gap-[16px] max-w-[716px]">
                        <p className="h1">
                            <AnimatedText text={[t('home_section_5_title')]} />
                        </p>
                        <p className={`max-w-[555px] ${!isMobile ? 'text-[18px]' : 'text-[17px]'} text-[var(--text-medium)]`}>
                            {t('home_section_5_description')}
                        </p>
                    </div>
                    <HomeSection5Tab tabs={tabs} />
                </div>

            </div >
        </div>
    );
}