'use client';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { Plus } from 'phosphor-react';
import { AnimatedText, FadeInSection } from "@/components/animation/introduction/Animations"
import section8_1 from "@/public/images/home-section-6/01.png"
import section8_2 from "@/public/images/home-section-6/02.png"
import section8_3 from "@/public/images/home-section-6/03.png"
import section8_4 from "@/public/images/home-section-6/04.png"
import section8_5 from "@/public/images/home-section-6/05.png"
import { useInView } from 'react-intersection-observer';

type Tab = {
    id: string;
    label: string;
    img: StaticImageData;
    content: string;
};

export function HomeSection8Tab({ tabs }: { tabs: Tab[] }) {
    const [selected, setSelected] = useState<string | null>(null);
    const { isDesktop, isTablet } = useInterface();
    const { t } = useTranslation();

    return (
        <div className={`flex flex-col gap-[20px]`}>
            {isDesktop && tabs.map(tab => (
                <div key={tab.id} className={`
                    transition-all duration-500 ease-in-out
                    ${selected === tab.id ? 'scale-100' : 'scale-99'}
                    `}>
                    <FadeInSection>
                        <div
                            style={
                                selected === tab.id
                                    ? {
                                        backgroundImage: `url(${tab.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }
                                    : undefined
                            }
                            className={`flex items-center
                                border-b-[1px] border-[var(--primary-other)] relative overflow-hidden py-[0px] 
                                ${selected == tab.id ? 'px-[32px]' : 'px-0'} h-[100px]
                            `}
                            onMouseEnter={() => setSelected(tab.id)}
                            onMouseLeave={() => setSelected(null)}
                        >
                            {selected === tab.id && (
                                <>
                                    <Image
                                        src={tab.img}
                                        alt={tab.label}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/40 z-[1]"></div>
                                </>
                            )}

                            <div className={`relative z-[2] flex gap-[40px] w-full items-center`}>

                                <p className={`h4 transition-all duration-200 ease-in-out ${selected == tab.id ? '!text-[var(--other-border)] animate-[moveIn_0.2s_ease-in-out]' : 'animate-[moveOut_0.2s_ease-in-out]'}`}>{t(tab.id)}</p>
                                <p className={`h2 ${selected == tab.id ? '!text-[var(--other-border)] animate-[moveInUp_0.2s_ease-in-out]' : 'animate-[moveOutUp_0.2s_ease-in-out]'}`}>{t(tab.label)}</p>
                                <Plus width={24} height={24} className={`ml-auto text-[var(--text-bold)] ${selected == tab.id ? 'hidden' : ''}`} />
                                <p className={` text-[var(--other-border)] ${selected == tab.id ? '' : 'hidden'} ml-auto text-right text-[18px] max-w-[400px] font-[500]`}>{t(tab.content)}</p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            ))}

            {!isDesktop && !isTablet && tabs.map(tab => (
                <div
                    key={tab.id}
                    className={`gap-[8px] pb-[16px] border-b-[1px] border-[var(--primary-other)]`}
                >
                    <div className={`flex gap-[20px] items-start`}>
                        <p className={`h4-raleway !font-[700] ${selected ? '!text-[var(--other-border)]' : ''}`}>{t(tab.id)}</p>
                        <p className={`h3 font-geist-raleway-place-holder ${selected ? '!text-[var(--other-border)]' : ''}`}>{t(tab.label)}</p>
                    </div>
                    <p className={`pl-[41px] text-[17px] text-[var(--text-medium)] font-[500]`}>{t(tab.content)}</p>
                </div>
            ))}
            {isTablet && tabs.map(tab => (
                <FadeInSection >
                    <div
                        key={tab.id}
                        className={`gap-[8px] pb-[16px] border-b-[1px] border-[var(--primary-other)]`}
                    >
                        <div className={`flex gap-[20px] items-start`}>
                            <p className={`h4-raleway !font-[700] ${selected ? '!text-[var(--other-border)]' : ''}`}>{t(tab.id)}</p>
                            <p className={`h3 font-geist-raleway-place-holder ${selected ? '!text-[var(--other-border)]' : ''}`}>{t(tab.label)}</p>
                        </div>
                        <p className={`pl-[41px] text-[18px] text-[var(--text-medium)] font-[500]`}>{t(tab.content)}</p>
                    </div>
                </FadeInSection>
            ))}
        </div>
    );
}

export default function HomeSection8() {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const tabs = [
        {
            id: '01',
            label: t('home_section_6_tab_label_1'),
            img: section8_1,
            content: t('home_section_6_tab_content_1')
        },
        {
            id: '02',
            label: t('home_section_6_tab_label_2'),
            img: section8_2,
            content: t('home_section_6_tab_content_2')
        },
        {
            id: '03',
            label: t('home_section_6_tab_label_3'),
            img: section8_3,
            content: t('home_section_6_tab_content_3')
        },
        {
            id: '04',
            label: t('home_section_6_tab_label_4'),
            img: section8_4,
            content: t('home_section_6_tab_content_4')
        },
        {
            id: '05',
            label: t('home_section_6_tab_label_5'),
            img: section8_5,
            content: t('home_section_6_tab_content_5')
        },
    ];

    const { isMobile } = useInterface();

    return (
        <div className={`${isMobile ? "px-[20px] py-[40px]" : 'p-[40px] pb-[80px]'} gap-[10px] w-full flex justify-center`}>
            <div className="gap-[40px] w-full flex flex-col max-w-[1200px]" ref={ref}>
                <div className="max-w-[600px] h1">
                    <AnimatedText
                        text={[t('home_section_6_title')]}
                        customClass={['', 'font-bold', '', 'font-bold']}
                        delayBetween={0.05}
                        duration={0.5}
                        inView={inView}
                    />

                </div>
                <HomeSection8Tab tabs={tabs} />
            </div>
        </div >
    );
}