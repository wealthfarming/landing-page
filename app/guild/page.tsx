'use client';
import React, { useState } from 'react';
import HeadderDesktopFull from "@/components/header/header-desktop";
import FooterFull from '@/components/footer/footer-full';
import indexBanner from "../../public/images/nec_nft/nec_bg.jpg";
import { useInterface } from '@/components/context/interface-context';
import Image from "next/image";
import { useTranslation } from "react-i18next";
import VideoBox from '@/components/footer/video_box';
import VideoGuildPage from '@/components/footer/video_guild_page';

const NecLandingPage: React.FC = () => {
    const { t } = useTranslation();
    const [modalActive, setModalActive] = useState(false);
    const { isDesktop } = useInterface();
    return (
        <div>
            <HeadderDesktopFull changeAt={190} />
            <VideoBox modalActive={modalActive} setModalActive={setModalActive} />
            {isDesktop &&
                <div className="w-full h-[260px] relative z-[1]">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <Image src={indexBanner} alt="Index Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
                </div>
            }
            <VideoGuildPage 
                modalActive={modalActive}
                setModalActive={setModalActive}
            />

            <FooterFull fixed={false} setModalActive={setModalActive} modalActive={modalActive} />
        </div>
    );
};

export default NecLandingPage;