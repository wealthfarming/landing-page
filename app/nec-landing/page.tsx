'use client';
import React from 'react';
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

const NecLandingPage: React.FC = () => {
    const { isDesktop } = useInterface();
    return (
        <div>
            <HeadderDesktopFull changeAt={190} />
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
            {/* <FooterFull/> */}
        </div>
    );
};

export default NecLandingPage;