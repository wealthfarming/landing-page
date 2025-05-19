'use client';
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { AnimatedText } from "@/components/animation/introduction/Animations"
import { useTranslation } from 'react-i18next';
import handcoin from "../../public/images/nec-section-2/handcoin.png"
import handcoin_selected from "../../public/images/nec-section-2/handcoin_selected.png"
import aim from "../../public/images/nec-section-2/aim.png"
import aim_selected from "../../public/images/nec-section-2/aim_selected.png"
import brain from "../../public/images/nec-section-2/brain.png"
import brain_selected from "../../public/images/nec-section-2/brain_selected.png"
import lightcorner from "../../public/images/nec-section-2/lightcorner.png"
import lightcorner_selected from "../../public/images/nec-section-2/lightcorner_selected.png"
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/button';
import { ChatCenteredDots } from '@phosphor-icons/react';

type Tab = {
    id: string;
    label: string;
    icon: StaticImageData;
    icon_selected: StaticImageData;
};

export function HomeSection5Tab({ tabs }: { tabs: Tab[] }) {
    const [selected, setSelected] = useState("ai_system");
    const { isDesktop, isTablet, isMobile } = useInterface();
    const { t } = useTranslation();


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
        <div className={`${isDesktop ? 'w-[1200px] flex flex-[0_0_auto] h-[258px]' : 'flex flex-col'} ${isMobile ? 'gap-[20px]' : 'gap-[8px]'}`}>
            {tabs.map(tab => (
                <div key={tab.id} className={`${selected === tab.id ? 'w-[470px]' : 'flex-[1_0_0px]'}`}>
                    <div
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)' }}
                        className={`
                            ${isDesktop ? `
                                p-[20px] h-full  transition-all duration-300 ease-in-out
                                flex flex-col justify-between border-[1px] rounded-[5px]
                                ${selected === tab.id ? 'bg-gradient-to-r from-[rgb(236,192,121)] to-[rgb(232,181,97)]' : 'bg-[var(--base-bg)]'}
                                ` : `
                                p-[20px] transition-all duration-500 ease-in-out w-full gap-[8px]
                                flex flex-col justify-between border-[1px]
                                ${selected === tab.id && isTablet ? 'bg-gradient-to-r from-[rgb(236,192,121)] to-[rgb(232,181,97)] h-[255px]' : 'bg-[var(--base-bg)]'}
                                `}
                            `}
                        onMouseEnter={isDesktop ? () => setSelected(tab.id) : undefined}
                    >
                        <div>
                            <Image src={selected === tab.id ? tab.icon_selected : tab.icon} alt="" width={45} height={45} />
                            <p className="pt-[8px] text-xl font-geist-raleway font-medium text-bold" >{t(tab.label)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default function HomeSection5() {
    const { t } = useTranslation();
    const tabs = [
        {
            id: 'ai_system',
            label: t('nec_section2_label_1'),
            icon: handcoin,
            icon_selected: handcoin_selected,
        },
        {
            id: 'nft_nec_beq_indexes',
            label: t('nec_section2_label_2'),
            icon: aim,
            icon_selected: aim_selected,
        },
        {
            id: 'review_indexes',
            label: t('nec_section2_label_3'),
            icon: brain,
            icon_selected: brain_selected,
        },
        {
            id: 'highlight_difference',
            label: t('nec_section2_label_4'),
            icon: lightcorner,
            icon_selected: lightcorner_selected,
        },
    ];
    const { isDesktop, isMobile } = useInterface();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className={`flex justify-center gap-[10px] w-full bg-[var(--canvas-bg)] ${!isMobile ? 'p-[40px] pt-[80px]' : 'px-[20px] py-[40px]'}`}>
            <div className=" max-w-[1200px] w-full">
                <div className={`flex flex-col ${isDesktop ? 'gap-[40px]' : 'gap-[40px]'} `}>
                    <div className="flex flex-col gap-[16px] w-full justify-center items-center" ref={ref}>
                        <div className='text-[40px] max-md:text-[29px] max-md:text-center font-geist-raleway font-semibold text-bold'>
                            <AnimatedText text={[t('nec_section2_title')]} inView={inView} />
                        </div>
                    </div>
                    <HomeSection5Tab tabs={tabs} />
                    <div className={`flex flex-col items-center justify-center w-full relative`}>
                        <a href="https://www.facebook.com/people/Wealth-Farming/61574682066111/" target="_blank">
                            <Button className="button rounded-[4px] !h-[48px]">
                                <ChatCenteredDots size={32} className="size-5" />
                                <p>{t('free_support')}</p>
                            </Button>
                        </a>
                    </div>
                </div>

            </div >
        </div>
    );
}