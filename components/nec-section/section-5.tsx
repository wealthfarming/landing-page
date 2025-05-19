'use client';
import React from 'react';
import Image, { StaticImageData } from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { useTranslation } from 'react-i18next';
import Base from "../../public/images/nec-section/section-5/base.avif"
import Coin1 from "../../public/images/nec-section/section-5/coin1.svg"
import Coin2 from "../../public/images/nec-section/section-5/coin2.svg"
import Coin3 from "../../public/images/nec-section/section-5/coin3.svg"
import { AnimatedText } from "@/components/animation/introduction/Animations"
import { useInView } from 'react-intersection-observer';

const Section5: React.FC = () => {
    const { t } = useTranslation();
    const { isDesktop, isTablet, isMobile } = useInterface();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <section className="nec-section nec-section-5 bg-[var(--canvas-bg)]">
            <div className={`${!isMobile ? 'py-[80px] px-[40px]' : 'py-[40px] px-[20px]'} flex items-center justify-center`}>
                <div className="flex justify-center items-center flex-col gap-[80px] max-w-[1200px] w-full">
                    <div className='max-w-[600px]'>
                        <div className="h1-index text-center" ref={ref}>
                            <AnimatedText text={[t('nec_section_5_title')]} inView={inView} />
                        </div>
                    </div>

                    <div className={`${!isMobile ? 'gap-[8px]' : 'flex-col gap-[60px]'} flex flex-[0_0_auto]`}
                    >

                        <div className='h-[154px] relative w-full p-[32px] border border-[var(--primary-other)]'
                            style={{
                                filter: 'drop-shadow(rgba(0, 0, 0, 0.08) 0px 4px 6px)',
                            }}>
                            <Image src={Base} alt='Base' width={552} height={232} className='absolute top-0 left-0 h-full object-cover object-center w-full z-0' />

                            <p className='!text-[var(--text-light)] h4 font-geist-raleway-place-holder z-10 relative text-center whitespace-pre-wrap w-full break-words'>{t('nec_section_5_content_1')}</p>

                            <Image src={Coin1} alt='Coin1' width={60} height={60} className='-translate-x-1/2 absolute left-1/2 w-[60px] h-[60px] -top-[40px] z-10' />
                        </div>

                        <div className='h-[154px] relative w-full p-[32px] border border-[var(--primary-other)]'
                            style={{
                                filter: 'drop-shadow(rgba(0, 0, 0, 0.08) 0px 4px 6px)',
                            }}>
                            <Image src={Base} alt='Base' width={552} height={232} className='absolute top-0 left-0 h-full object-cover object-center w-full z-0' />

                            <p className='!text-[var(--text-light)] h4 font-geist-raleway-place-holder z-10 relative text-center whitespace-pre-wrap w-full break-words'>
                                <span>{t('nec_section_5_content_2_1')}</span>
                                <span className='!font-[700] text-[var(--text-bold)]'>{t('nec_section_5_content_2_2')}</span>
                                <span>{t('nec_section_5_content_2_3')}</span>
                            </p>

                            <Image src={Coin2} alt='Coin1' width={60} height={60} className='-translate-x-1/2 absolute left-1/2 w-[60px] h-[60px] -top-[40px] z-10' />
                        </div>

                        <div className='h-[154px] relative w-full p-[32px] border border-[var(--primary-other)]'
                            style={{
                                filter: 'drop-shadow(rgba(0, 0, 0, 0.08) 0px 4px 6px)',
                            }}>
                            <Image src={Base} alt='Base' width={552} height={232} className='absolute top-0 left-0 h-full object-cover object-center w-full z-0' />

                            <p className='!text-[var(--text-light)] h4 font-geist-raleway-place-holder z-10 relative text-center whitespace-pre-wrap w-full break-words'>
                                <span>{t('nec_section_5_content_3_1')}</span>
                                <span className='!font-[700] text-[var(--text-bold)]'>{t('nec_section_5_content_3_2')}</span>
                                <span>{t('nec_section_5_content_3_3')}</span>
                            </p>

                            <Image src={Coin3} alt='Coin1' width={60} height={60} className='-translate-x-1/2 absolute left-1/2 w-[60px] h-[60px] -top-[40px] z-10' />
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;