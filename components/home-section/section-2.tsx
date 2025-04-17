"use client"
import Images from 'next/image'
import RiseFade from '../animation/section2/index_grow'
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

const CountdownTimer = dynamic(() => import('../countdown-timer'), { ssr: false });
export default function HomeSection2() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center border-gray-200 p-5 w-full mb-10 relative">

            <div className="flex flex-col lg:flex-row max-w-[1100px] justify-center items-center" style={{ zIndex: 101 }}>
                <Images src="/images/img/section1s_home.webp" alt="Section 2" width={631} height={450} className="mr-8" />
                <Images src={"/images/img/chartline_section2.png"} alt="Section base 2" width={1200} height={80} className="absolute w-full -z-10" />
                <div className='-z-10'>
                    <RiseFade num={30} />
                    <RiseFade num={20} />
                    <RiseFade num={18} />
                    <RiseFade num={35} />
                    <RiseFade num={8} />
                    <RiseFade num={12} />
                </div>
                <div className='flex flex-col items-start justify-between  h-fit lg:h-[350px] w-full lg:w-[368px] p-5 canvas-bg-1 shadow-[-0px_-10px_30px_4px_rgba(0,0,0,0.1),_0px_10px_30px_4px_rgba(0,0,0,0.1)]'>
                    <span className='body'>
                        <h1 className='mb-[10px] h3 text-[var(--text-medium)]'>
                            {t('home_section_2_title')}
                        </h1>
                        <p
                            className=' text-[16px] leading-snug mb-4 small !text-[var(--text-medium)] !font-bold'
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