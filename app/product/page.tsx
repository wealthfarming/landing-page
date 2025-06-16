"use client";
import { useInterface } from "@/components/context/interface-context";
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import ProductInfoCard from "@/components/product/product-info-card";
import { AnimatedText } from "@/components/animation/introduction/Animations"
import Image from "next/image";
import productBase from "../../public/images/img/product_base.jpg"
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { X } from "@phosphor-icons/react";

export default function ProductPage() {
    const { t } = useTranslation();
    const { isDesktop, isTablet } = useInterface();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={`${isDesktop ? 'pb-[605px]' : isTablet ? '' : ''}`}>
            <HeaderDesktopFull changeAt={300} />
            {
                modalActive &&
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                    onClick={() => setModalActive(false)}
                >
                    <div
                        className="bg-white p-5 rounded-lg shadow-lg"
                        onClick={e => e.stopPropagation()}
                    >
                        <span className="flex flex-row items-center justify-between mb-4 relative w-full">
                            <h2 className="text-xl font-bold">{t('guild_video')}</h2>
                            <X
                                size={20}
                                onClick={() => setModalActive(false)}
                                className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                style={{ zIndex: 1000 }}
                            />
                        </span>
                        <div className="aspect-video w-full mb-4">
                            <iframe
                                width="760"
                                height="500"
                                src={t('guild_video_src')}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            }
            {isDesktop &&
                <div className="w-full h-[260px] relative" >
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <Image src={productBase} alt="Product Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
                </div>
            }
            <div className={`w-full flex-grow flex flex-col items-center justify-start bg-background ${isDesktop ? ' mt-0 pb-[40px]' : ' mt-18 '} relative z-30`}>

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-normal mb-4 w-full md:w-9/12 max-w-[1200px] mt-[40px] px-[20px] flex flex-col gap-6 text-center justify-center items-center py-2 ">
                    <div className="max-w-[904px] w-full bigTitle" ref={ref}>
                        <AnimatedText
                            customClass={[`${isDesktop ? 'text-[49px] leading-[58.8px] flex flex-wrap' : isTablet ? 'text-[44px] leading-[52.8px] flex flex-wrap' : 'text-[34px] leading-[40.8px] flex flex-wrap'}`]}
                            text={[t('page_product_title')]}
                            delayBetween={0.05}
                            duration={0.3}
                            inView={inView}
                        />
                    </div>
                    <p className=" w-full max-w-[721px] text-center body !font-geist-display">{t('page_product_description')}</p>
                </h1>
                <div className={`grid grid-cols-1 p-[20px] md:grid-cols-2 md:p-[40px] lg:grid-cols-3 flex-wrap gap-5 md:gap-2  justify-center max-w-[1200px] ${isDesktop ? 'px-[20px]' : ''} `}>
                    <ProductInfoCard
                        title={t('page_product_box1_title')}
                        description={t('page_product_box1_description')}
                        buttonText={t('page_product_box1_button')}
                        button_color="bg-[var(--color-primary)] hover:!bg-[var(--primary-gradient)]"
                        link="/nec-landing"
                    />
                    <ProductInfoCard
                        title={t('page_product_box2_title')}
                        description={t('page_product_box2_description')}
                        buttonText={t('page_product_box2_button')}
                        button_color="bg-[var(--color-primary)] hover:!bg-[var(--primary-gradient)]"
                        link="/index-landing"
                    />
                    <ProductInfoCard
                        title={t('page_product_box3_title')}
                        description={t('page_product_box3_description')}
                        buttonText={t('page_product_box3_button')}
                    />
                </div>
                <div className={`w-full  ${isDesktop ? 'hidden' : 'block'}`}>
                    <FooterFull active={'product'} fixed={false} setModalActive={setModalActive} modalActive={modalActive} />
                </div>
            </div>
            <div className={`w-full  ${isDesktop ? 'fixed' : 'hidden'}`}>
                <FooterFull active={'product'} setModalActive={setModalActive} modalActive={modalActive} />
            </div>
        </div>
    );
}