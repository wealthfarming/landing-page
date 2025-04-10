"use client"
import Images from 'next/image'
import CountdownTimer from '../countdown-timer'
import RiseFade from '../animation/section2/index_grow'
import { useTranslation } from 'react-i18next';
export default function HomeSection2() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center border-gray-200 p-5 h-[400px] w-full mb-10 relative">
            <Images src={"/images/img/chartline_section2.png"} alt="Section base 2" width={1200} height={80} className="absolute w-full -z-10" />
            <div>
                <RiseFade num={30} />
                <RiseFade num={20} />
                <RiseFade num={18} />
                <RiseFade num={35} />
                <RiseFade num={8} />
                <RiseFade num={12} />
            </div>
            <div className="flex flex-row max-w-[1100px]" style={{ zIndex: 101 }}>
                <Images src="/images/img/section1s_home.webp" alt="Section 2" width={631} height={450} className="mr-2" />
                <div className='flex flex-col items-start justify-between  h-[350px] p-4 canvas-bg-1 shadow-[-0px_-10px_30px_4px_rgba(0,0,0,0.1),_0px_10px_30px_4px_rgba(0,0,0,0.1)]'>
                    <span className='body'>
                        <h1 className='text-3xl mb-[10px] h2'>
                            {t('home_section_2_title')}
                        </h1>
                        <p
                            className='font-bold text-[16px] leading-snug mb-4 text-[var(--text-medium)]'
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