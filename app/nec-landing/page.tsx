'use client';
import React, { useState } from 'react';
import HeadderDesktopFull from "@/components/header/header-desktop";
import FooterFull from '@/components/footer/footer-full';
import indexBanner from "../../public/images/nec_nft/nec_bg.jpg";
import { useInterface } from '@/components/context/interface-context';
import Image from "next/image";
import Section1 from "@/components/nec-section/section-1";
import Section2 from "@/components/nec-section/section-2";
import Section3 from "@/components/nec-section/section-3";
import Section4 from "@/components/nec-section/section-4";
import Section5 from "@/components/nec-section/section-5";
import Section6 from "@/components/nec-section/section-6";
import Section7 from "@/components/nec-section/section-7";
import Section8 from "@/components/nec-section/section-8";
import Section9 from "@/components/nec-section/section-9";
import { X } from '@phosphor-icons/react';
import { useTranslation } from "react-i18next";

const NecLandingPage: React.FC = () => {
    const { t } = useTranslation();
    const [modalActive, setModalActive] = useState(false);
    const { isDesktop } = useInterface();
    return (
        <div>
            <HeadderDesktopFull changeAt={190} />
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
                <div className="w-full h-[260px] relative">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <Image src={indexBanner} alt="Index Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
                </div>
            }
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <FooterFull fixed={false} setModalActive={setModalActive} modalActive={modalActive} />
        </div>
    );
};

export default NecLandingPage;