"use client"
import Images from 'next/image'
import RiseFade from '../animation/section2/index_grow'
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import section1s_home from "../../public/images/img/section1s_home.webp"
import chartline_section2 from "../../public/images/img/chartline_section2.png"
import { useInterface } from "@/components/context/interface-context";

const CountdownTimer = dynamic(() => import('../countdown-timer'), { ssr: false });
export default function HomeSection2() {
    const { t } = useTranslation();
    const { isDesktop} = useInterface();
    return (
        <div className="flex flex-col items-center justify-center border-gray-200 p-5 w-full pb-10 relative bg-[var(--base-bg)]">

            <div className={`flex ${isDesktop ? 'flex-row' : 'flex-col'} max-w-[1100px] justify-center ${isDesktop ? 'items-start': 'items-center'} gap-[16px]  bg-[var(--base-bg)]`} style={{ zIndex: 101 }}>
                <Images src={section1s_home} alt="Section 2" width={631} height={451} className={`h-full`}
                    style={{ width: 'min(calc(min(max(100vw - 40px, 1px), 1200px) * 0.88), 631px)' }}
                />
                <Images src={chartline_section2} alt="Section base 2" width={1200} height={80} className={`absolute w-full -z-10 ${isDesktop ? 'top-0' : 'top-[22%]'}`} />
                <div className='-z-10'>
                    <RiseFade num={30} />
                    <RiseFade num={20} />
                    <RiseFade num={18} />
                    <RiseFade num={35} />
                    <RiseFade num={8} />
                    <RiseFade num={12} />
                </div>
                <div className='border rounded-[6px] flex flex-col items-start gap-[24px]  h-fit w-full lg:w-[368px] p-5 canvas-bg-1 shadow-[-0px_-10px_30px_4px_rgba(0,0,0,0.1),_0px_10px_30px_4px_rgba(0,0,0,0.1)]'>
                    <span className='body'>
                        <h1 className='mb-[10px] h3 text-[var(--text-medium)]'>
                            {t('home_section_2_title')}
                        </h1>
                        <p
                            className=' text-[16px] leading-snug small !text-[var(--text-medium)] !font-bold'
                        >
                            {t('home_section_2_description')}
                        </p>

                    </span>
                    <CountdownTimer />
                </div>
            </div>
        </div>
    )
}