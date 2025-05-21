'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { useTranslation } from 'react-i18next';
import Base from "../../public/images/nec-section/section-4/base-nec-section-4.webp"
import Slide_Dung from "../../public/images/nec-section/section-4/Slide_Dung.avif"
import Slide_Huong_Lucky from "../../public/images/nec-section/section-4/Slide_Huong_Lucky.avif"
import Slide_Ven from "../../public/images/nec-section/section-4/Slide_Ven.webp"
import Quote from "../../public/images/nec-section/section-4/quote.svg"
import ArrowLeft from "../../public/images/nec-section/section-4/arrow-left.svg"
import ArrowRight from "../../public/images/nec-section/section-4/arrow-right.svg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel-nec"
import { useRef } from "react"

const Section4: React.FC = () => {
    const { t } = useTranslation();
    const { isDesktop, isTablet, isMobile } = useInterface();
    const slides = [
        {
            name: 'nec_section_4_slide_1_name',
            role: 'nec_section_4_slide_1_role',
            content1: !isMobile ? t('nec_section_4_slide_1_content_1') : t('nec_section_4_slide_1_content_1_mobile'),
            content2: !isMobile ? t('nec_section_4_slide_1_content_2') : t('nec_section_4_slide_1_content_2_mobile'),
            content3: !isMobile ? t('nec_section_4_slide_1_content_3') : t('nec_section_4_slide_1_content_3_mobile'),
            image: Slide_Dung,
        },
        {
            name: 'nec_section_4_slide_2_name',
            role: 'nec_section_4_slide_2_role',
            content1: !isMobile ? t('nec_section_4_slide_2_content_1') : t('nec_section_4_slide_2_content_1_mobile'),
            content2: !isMobile ? t('nec_section_4_slide_2_content_2') : t('nec_section_4_slide_2_content_2_mobile'),
            content3: !isMobile ? t('nec_section_4_slide_2_content_3') : t('nec_section_4_slide_2_content_3_mobile'),
            image: Slide_Huong_Lucky,
        },
        {
            name: 'nec_section_4_slide_3_name',
            role: 'nec_section_4_slide_3_role',
            content1: !isMobile ? t('nec_section_4_slide_3_content_1') : t('nec_section_4_slide_3_content_1_mobile'),
            content2: !isMobile ? t('nec_section_4_slide_3_content_2') : t('nec_section_4_slide_3_content_2_mobile'),
            content3: !isMobile ? t('nec_section_4_slide_3_content_3') : t('nec_section_4_slide_3_content_3_mobile'),
            image: Slide_Ven,
        },
    ];

    const carouselApiRef = useRef<CarouselApi | null>(null)
    const handlePrev = () => {
        carouselApiRef.current?.scrollPrev()
    }

    const handleNext = () => {
        carouselApiRef.current?.scrollNext()
    }


    return (
        <section className="nec-section flex items-center justify-center nec-section-4 relative py-[80px] px-[40px] overflow-x-hidden">
            <Image
                src={Base}
                alt='Base Section 4'
                width={1200}
                height={673}
                className='absolute w-full filter brightness-[0.8] left-0 z-0 top-0 h-full object-cover object-center'
            />
            <div
                className={`${isTablet ? 'w-[80%] h-[407px]' : isMobile ? 'w-[360px] h-[577px]' : 'h-[407px]'} relative max-w-[768px] flex flex-col justify-between flex-shrink-0 z-10`}
            >
                <Carousel className='w-full h-full' setApi={(api) => (carouselApiRef.current = api)} opts={{ loop: true }}>
                    <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={index} className={`h-full flex flex-col gap-[10px] justify-between bg-[var(--base-bg)] ${isMobile ? 'py-[40px] px-[20px]' : 'p-[40px]'} mr-2`}>
                                <div className="flex gap-[10px] justify-between items-center">
                                    <div className="flex gap-[16px] items-center">
                                        <div className='w-[60px] rounded-full h-[60px]'>
                                            <Image
                                                src={slide.image}
                                                alt={slide.name}
                                                width={403}
                                                height={555}
                                                className='w-full h-full object-cover object-[46.2%_33.5%] rounded-[inherit]'
                                            />
                                        </div>
                                        <div>
                                            <p className='h4 font-geist-raleway-place-holder'>{t(slide.name)}</p>
                                            <p className='text-[var(--text-light)] text-[12px] font-geist-display'>{t(slide.role)}</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <Image src={Quote} alt='Quote' width={isMobile ? 24 : 33} height={isMobile ? 40 : 56} className={isMobile ? 'w-6 h-10' : 'w-[33px] h-[56px]'}/>
                                        <Image src={Quote} alt='Quote' width={isMobile ? 24 : 33} height={isMobile ? 40 : 56} className={isMobile ? 'w-6 h-10' : 'w-[33px] h-[56px]'}/>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[20px]'>
                                    <p className='h3 !font-[600] flex text-center font-geist-raleway-place-holder'>{t(slide.content1)}</p>
                                    <div>
                                        <p className='!text-[12px] flex text-center font-geist-display whitespace-pre-wrap break-words'
                                        style={{ letterSpacing: '0.01em' }}>{t(slide.content2)}</p>
                                        <p className='!text-[12px] flex text-center mt-[8px] font-geist-display whitespace-pre-wrap break-words'
                                        style={{ letterSpacing: '0.01em' }}>{t(slide.content3)}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div onClick={handlePrev} className={`${isMobile ? '-left-[20px]' : '-left-[60px]'} absolute bg-[#00000033] top-1/2 rounded-[40px] cursor-pointer`}>
                        <Image src={ArrowLeft} alt='ArrowLeft' width={40} height={40} />
                    </div>
                    <div onClick={handleNext} className={`${isMobile ? '-right-[20px]' : '-right-[60px]'} absolute bg-[#00000033] top-1/2 rounded-[40px] cursor-pointer`}>
                        <Image src={ArrowRight} alt='ArrowRight' width={40} height={40} />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Section4;