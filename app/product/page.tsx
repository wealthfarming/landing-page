"use client";
import { useInterface } from "@/components/context/interface-context";
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import ProductInfoCard from "@/components/product/product-info-card";

import { AnimatedText } from "@/components/animation/introduction/Animations"
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ProductPage() {
    const { t } = useTranslation();
    const { isDesktop, isTablet } = useInterface();
    return (
        <div className={`${isDesktop ? 'mb-[505px]' : isTablet ? 'mb-[505px]' : 'mb-[887px]'}`}>
            <HeaderDesktopFull changeAt={300} />
            {isDesktop &&
                <div className="w-full h-[260px] relative">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>

                    <Image src="/images/img/product_base.jpg" alt="Product Banner" width={735} height={260} className="w-full h-[260px] object-cover" />

                </div>
            }
            <div className="w-full flex-grow flex flex-col items-center justify-start bg-background mb-[375px] mt-18 pb-18 lg:mt-0 relative z-30">

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-normal mb-4 w-full md:w-9/12 max-w-[1200px] mt-[40px] flex flex-col gap-6 text-center justify-center items-center py-2 ">
                    <div className="max-w-[904px] w-full bigTitle">
                        <AnimatedText
                            text={[t('page_product_title')]}
                            delayBetween={0.05}
                            duration={0.3}
                        />
                    </div>
                    <p className=" w-full max-w-[721px] text-center body !font-geist-display">{t('page_product_description')}</p>

                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-2 justify-center max-w-[1200px]">
                    <ProductInfoCard
                        title={t('page_product_box1_title')}
                        description={t('page_product_box1_description')}
                        buttonText={t('page_product_box1_button')}
                        button_color="bg-[var(--color-primary)] hover:!bg-[var(--primary-gradient)]"
                        link="https://wealthfarming.app"
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
            </div>
            <FooterFull active={'product'} />
        </div>
    );
}