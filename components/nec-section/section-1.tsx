'use client';
import React from 'react';
import { useLanguage } from '../context/i18n';
import { useTranslation } from 'react-i18next';
import { AnimatedText } from '../animation/introduction/Animations';
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import Jar from '../animation/nec_section_1/jar';
import ButtonPrimary from '../custom-button/button-primary';
import { CursorClick } from '@phosphor-icons/react';
import necSection1 from '../../public/images/nec_nft/nec-section-1-main.webp';
import necSectinChartUp from '../../public/images/nec_nft/nec_section_1_charUp.avif';
import necSectinChartDown from '../../public/images/nec_nft/nec_section_1_charDown.avif';
import necSection1_1 from '../../public/images/nec_nft/nec_section_1_1.avif';
import necSection1_2 from '../../public/images/nec_nft/nec_section_1_2.avif';
import necSection1_3 from '../../public/images/nec_nft/nec_section_1_3.avif';
import necSection1_4 from '../../public/images/nec_nft/nec_section_1_4.avif';

const Section1: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { language } = useLanguage();
    const { t } = useTranslation();
    return (
        <section className="nec-section nec-section-1 w-full py-[80px] px-[40px] relative" ref={ref}>
            <div className='absolute bg-[#fffbf7] h-1/3 w-full left-0 top-0 z-0'></div>
            <div className='flex flex-col justify-center items-center self-stretch w-full text-center gap-5'>

                <div
                    className='title-nec-section-1 w-full text-center flex justify-center md:max-w-[1000px] z-[5]'
                    style={{ lineHeight: '2.75em' }}
                >
                    {language == "vi" ? (
                        <AnimatedText
                            text={[
                                "NFT NEC",
                                " - Không cần giàu mới đầu tư hãy để dòng tiền giúp bạn tự do mỗi tháng",
                            ]}
                            customClass={["font-[600] text-[var(--primary)] font-geist-raleway text-[49px] max-md:text-[34px]", "font-[600] font-geist-raleway text-[49px] max-md:text-[34px]"]}
                            delayBetween={0.1}
                            inView={inView}

                        />
                    ) : (
                        <AnimatedText
                            text={[
                                t("nec_section_1_title_1"),
                                t("nec_section_1_title_2"),
                                t("nec_section_1_title_3"),
                                t("nec_section_1_title_4"),
                            ]}
                            customClass={["font-[900] font-geist-raleway text-[49px] max-md:text-[34px] ", " font-[500] font-geist-raleway text-[49px] max-md:text-[34px]", "font-[900] font-geist-raleway text-[49px] max-md:text-[34px]", "font-[600] font-geist-raleway text-[49px] max-md:text-[34px]"]}
                            delayBetween={0.05}
                            duration={0.3}
                            inView={inView}
                        />
                    )}
                </div>
                <div className='w-full flex flex-col justify-center items-center md:max-w-[800px]  z-[5]'>
                    <h1 className='text-[30px] font-geist-raleway font-[600]'>
                        {t("nec_section_1_title_5")}
                    </h1>
                    <p className='text-[18px] text-medium font-geist-raleway font-[500]'>
                        {t("nec_section_1_description_1")}
                    </p>
                    <span className='text-[18px] text-medium font-geist-raleway font-[500]'>
                        <span>
                            {t("nec_section_1_description_2_1")}
                        </span>
                        <span className='font-[700]'>
                            {t("nec_section_1_description_2_2")}
                        </span>
                        <span>
                            {t("nec_section_1_description_2_3")}
                        </span>
                        <span className='font-[700]'>
                            {t("nec_section_1_description_2_4")}
                        </span>
                        <span>
                            {t("nec_section_1_description_2_5")}
                        </span>
                        <span className='font-[700]'>
                            {t("nec_section_1_description_2_6")}
                        </span>
                        <span>
                            {t("nec_section_1_description_2_7")}
                        </span>
                        <span className='font-[700]'>
                            {t("nec_section_1_description_2_8")}
                        </span>
                        <span>
                            {t("nec_section_1_description_2_9")}
                        </span>
                        <span className='font-[700]'>
                            {t("nec_section_1_description_2_10")}
                        </span>
                        <span>
                            {t("nec_section_1_description_2_11")}
                        </span>
                    </span>
                </div>
                <div className='w-full flex justify-center items-center z-[5] relative overflow-visible'>
                    <div className='w-fit flex justify-center relative overflow-visible'>
                        <Image
                            alt='nec-section-1'
                            width={448}
                            height={448}
                            className='object-cover z-10'
                            src={necSection1}
                        />
                        <p className='absolute text-[30px] font-geist-raleway font-[600] z-20' style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            NEC
                        </p>
                        <Jar text={t('tuition_fees')} x={10} y={15} src={necSection1_1} />
                        <Jar text={t('eating')} x={85} y={20} src={necSection1_2} />
                        <Jar text={t('health')} x={5} y={70} src={necSection1_3} />
                        <Jar text={t('invoice')} x={95} y={75} src={necSection1_4} />
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full max-w-[1200px] h-[483px] flex justify-center items-center z-[5] flex-row gap-[10px]'>
                        <div className='w-1/2 h-full flex justify-between items-center flex-col p-10'>
                            <AnimatedText
                                text={[
                                    t("nec_section_1_char_title_1"),
                                ]}
                                customClass={["font-[600] font-geist-raleway text-[24px] max-md:text-[24px] "]}
                                delayBetween={0.05}
                                duration={0.3}
                                inView={inView}
                            />
                            <div className='w-full flex flex-col justify-center items-center gap-[16px]'>
                                <Image
                                    alt='nec-section-1_chart_up'
                                    width={279}
                                    height={232.5}
                                    className='object-cover'
                                    src={necSectinChartUp}
                                />
                                <p className='font-geist-raleway text-[18px] font-[600]'>
                                    {t("nec_section_1_char_decs_1")}
                                </p>
                            </div>
                        </div>
                        <div className='w-1/2 h-full flex justify-between items-center flex-col p-10'>
                            <AnimatedText
                                text={[
                                    t("nec_section_1_char_title_2"),
                                ]}
                                customClass={["font-[600] font-geist-raleway text-[24px] max-md:text-[24px] "]}
                                delayBetween={0.05}
                                duration={0.3}
                                inView={inView}
                            />
                            <div className='w-full flex flex-col justify-center items-center gap-[16px]'>
                                <Image
                                    alt='nec-section-1_chart_down'
                                    width={279}
                                    height={232.5}
                                    className='object-cover'
                                    src={necSectinChartDown}
                                />
                                <p className='font-geist-raleway text-[18px] font-[600]'>
                                    {t("nec_section_1_char_decs_2")}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='w-full flex flex-col justify-center items-center z-[5]'>
                    <div className='w-full max-w-[1200px] flex justify-center items-center z-[5] flex-col gap-[10px]'>
                        <p>
                            {t("nec_section_1_button_title")}
                        </p>
                        <a href="https://wealthfarming.app/" target="_blank" >
                            <ButtonPrimary className="flex items-center gap-2 button rounded-[4px] py-0">
                                <CursorClick size={32} className="size-5 animate-diagonal-2" />
                                <p>{t('header_investNow')}</p>
                            </ButtonPrimary>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Section1;