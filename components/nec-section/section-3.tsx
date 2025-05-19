'use client';
import React from 'react';
import { useInterface } from '../context/interface-context';
import { AnimatedText } from "@/components/animation/introduction/Animations"
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Diamond from "../../public/images/nec-section-3/Diamond.png"
import Coin from "../../public/images/nec-section-3/SUHhVJktnve0PpxWdSjp1Y7kzC8.svg"
import Image from 'next/image';
import ButtonPrimary from '../custom-button/button-primary';
import { CursorClick } from '@phosphor-icons/react';

const Section3: React.FC = () => {
    const { isDesktop, isTablet, isMobile } = useInterface();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: labelRef, inView: labelInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { t } = useTranslation();

    return (
        <div className={`w-full flex-grow flex flex-col items-center justify-start bg-background relative z-30 gap-10 ${isDesktop ? 'pt-10 ' : 'py-10 px-5'}`} ref={ref}>
            <div className='flex flex-col w-full justify-center items-center'>
                <h1 className={`animate-fade-in w-full text-center ${!isMobile ? 'pb-5 w-full' : 'pb-5 max-md:max-w-[390px]'}`}>
                    <AnimatedText
                        text={[t('nec_section3_title')]}
                        customClass={['text-[40px] font-semibold font-geist-raleway max-md:text-[29px] ']}
                        delayBetween={0.05}
                        duration={0.3}
                        inView={inView}
                    />
                </h1>

                {!isMobile ? (
                    <p className={`text-center max-w-[800px] body-large !font-medium !text-[var(--text-medium)]`}>
                        {t('nec_section3_description')}
                    </p>
                ) : (
                    <p className={`text-[17px] text-center max-w-[390px] font-geist-display font-medium !text-[var(--text-medium)]`}>
                        {t('nec_section3_description')}
                    </p>
                )}
            </div>

            <div className="relative">
                {isDesktop ? (
                    <Image
                    src={Diamond}
                    alt="NFT Diamond"
                    width={360}
                    height={254}
                />
                ) : (
<Image
                    src={Diamond}
                    alt="NFT Diamond"
                    width={312}
                    height={218}
                />
                )}
                <div className="absolute inset-0 flex justify-center top-8">
                    <span className="text-[var(--text-bold)] text-[30px] max-md:text-[26px] font-semibold font-geist-raleway">NFT NEC</span>
                </div>
            </div>

            <div className='flex gap-2 max-md:flex-col'>
                <div className='flex py-4 px-5 gap-4 bg-[var(--canvas-bg)] justify-center'>
                    <svg
                        viewBox="0 0 467.932 467.932"
                        style={{ width: '32px', height: '32px' }}
                        preserveAspectRatio="xMidYMid meet"
                        id="svg-644557904_1492"
                    >
                        <path
                            style={{ fill: '#2db357' }} // Chuyển thành object
                            d="m0 369.325 155.977 90.055 311.955-180.108-.001-180.667L311.953 8.552 0 189.219z"
                        />
                        <path
                            style={{ fill: '#0e834c' }}
                            d="m0 189.219 155.977 90.053L467.931 98.605l.001 180.667L155.977 459.38 0 369.325z"
                        />
                        <path
                            style={{ fill: '#1a4541' }}
                            d="M155.977 459.38V279.272L467.931 98.605l.001 180.667z"
                        />
                        <path
                            style={{ fill: '#fff' }}
                            d="M311.953 29.17 38.994 185.864l118.412 67.562L430.365 96.735 311.953 29.17zM157.385 238.144l-91.689-52.316L311.975 44.453l91.688 52.316-246.278 141.375z"
                        />
                        <ellipse
                            style={{ fill: '#fff' }}
                            cx="238.466"
                            cy="137.506"
                            rx="51.16"
                            ry="29.05"
                        />
                        <ellipse
                            style={{ fill: '#5ee1eb' }}
                            cx="317.636"
                            cy="94.486"
                            rx="22.11"
                            ry="12.553"
                        />
                        <ellipse
                            style={{ fill: '#5ee1eb' }}
                            cx="155.976"
                            cy="186.766"
                            rx="22.11"
                            ry="12.555"
                        />
                        <path
                            style={{ fill: '#2db357' }}
                            d="M0 212.366v4.404l155.966 92.366.011-4.4zm0 24.185v4.405l155.966 92.365.011-4.399zm0 24.186v4.405l155.966 92.367.011-4.4zm0 24.186v4.405l155.966 92.366.011-4.398zm0 24.187v4.405l155.966 92.366.011-4.4zm0 24.186v4.405l155.966 92.365.011-4.399z"
                        />
                        <path
                            style={{ fill: '#0e834c' }}
                            d="m467.931 123.763-311.944 180.98-.01 4.388 311.954-180.989zm0 24.185L155.987 328.929l-.01 4.387 311.954-180.989zm0 24.186L155.987 353.116l-.01 4.388 311.954-180.991zm.001 24.185L155.987 377.302l-.01 4.387 311.955-180.99zM155.987 401.488l-.01 4.387 311.955-180.988v-4.382zm0 24.186-.01 4.386 311.955-180.988v-4.382z"
                        />
                    </svg>
                    <div
                        ref={labelRef}
                        className={`text-lg max-md:text-[17px] font-medium font-geist-display whitespace-nowrap transition-opacity duration-1000 ${labelInView ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {t('nec_section3_label_1')}
                    </div>
                </div>
                <div className='flex py-4 px-5 gap-4 bg-[var(--canvas-bg)] justify-center'>
                    <Image src={Coin} alt="Coin" width={32} />
                    <div
                        ref={labelRef}
                        className={`text-lg max-md:text-[17px] font-medium font-geist-display whitespace-nowrap transition-opacity duration-1000 ${labelInView ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {t('nec_section3_label_2')}
                    </div>
                </div>
            </div>

            <a href="https://wealthfarming.app/" target="_blank" >
                <ButtonPrimary className="flex items-center gap-2 button rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.24)] py-0">
                    <CursorClick size={32} className="size-5 animate-diagonal-2" />
                    <p>{t('header_investNow')}</p>
                </ButtonPrimary>
            </a>
        </div>
    );
};

export default Section3;