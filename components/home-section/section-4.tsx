"use client"
import Image from 'next/image'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next';
import { ChatCenteredDots } from '@phosphor-icons/react';
import { useInterface } from '../context/interface-context';
export default function HomeSection4() {
    const { t } = useTranslation();
    const {isDesktop, isTablet, isMobile} = useInterface();
    return (
        <div className="w-full body-large">
            <div className='w-full h-[300px] relative overflow-hidden flex items-center justify-center'>
                <Image
                    src="/images/img/section_4.jpg"
                    alt="section4"
                    width={1200}
                    height={625}
                    className="object-cover top-1/2 h-[300px] w-full"
                    style={{ "filter": "brightness(0.5)" }}
                />
                <div
                    className="h-[100px] bg-[var(--primary)] absolute z-20 animate-move-sideways-3"
                    style={{
                        width: "100%",
                        filter: "blur(8px)",
                        willChange: "transform",
                        opacity: "0.15",
                    }}
                ></div>

                <style jsx>{`
                    @keyframes move-sideways-3 {
                        0% {
                            transform: translateX(-100%);
                            rotate: 90deg;
                        }
                        100% {
                            transform: translateX(100%);
                            rotate: 90deg;
                        }
                    }
                    .animate-move-sideways-3 {
                        animation: move-sideways-3 10s infinite;
                    }
                `}</style>
                <div className='absolute top-1/2 transform -translate-y-1/2 w-full lg:w-1/3 h-full flex flex-col h3 items-center justify-center text-center !text-white '>
                    {t('home_section_4_title')}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full p-5 h-full lg:h-[412px] relative'>
                <Image
                    src={"/images/img/section_4_2.png"}
                    alt="Section 4"
                    width={1200}
                    height={412}
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                    style={{ opacity: 0.1 }}
                />
                <div className={`${isDesktop ? 'w-[1180px] text-[30px] font-semibold' : 'w-1/2'}  text-center`} style={{
                    lineHeight: isDesktop ? '33.6px' : isTablet ? "" : "",
                }}>
                    {t('home_section_4_description')}
                </div>
                <div className='flex flex-col items-center justify-center w-full p-5 mt-12 relative'>
                    <Button className="h-[50px] w-[180px] button !text-[12px] rounded-[4px]">
                        <ChatCenteredDots size={32} className="size-5" />
                        <p>{t('free_support')}</p>
                    </Button>
                </div>
            </div>

        </div>

    )
}