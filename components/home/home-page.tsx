'use client'
import HeaderDesktopFull from "@/components/header/header-desktop";
import HomeSection1 from "@/components/home-section/section-1";
import HomeSection2 from "@/components/home-section/section-2";
import HomeSection3 from "@/components/home-section/section-3";
import HomeSection4 from "@/components/home-section/section-4";
import Image from "next/image";
import HomeSection5 from "@/components/home-section/section-5"
import HomeSection8 from "@/components/home-section/section-8"
import HomeSection9 from "@/components/home-section/section-9"
import HomeSection6 from "@/components/home-section/section-6"
import HomeSection7 from "@/components/home-section/section-7"
import FooterFull from "@/components/footer/footer-full";
import { useInterface } from "@/components/context/interface-context";
import productBase from "../../public/images/img/product_base.jpg"
import React from "react";
import VideoBox from "../footer/video_box";
export default function HomePage() {
    const { isDesktop, isTablet } = useInterface();
    const [modalActive, setModalActive] = React.useState(false);
    return (
        <>
            <VideoBox modalActive={modalActive} setModalActive={setModalActive} />
            <div className="flex flex-col items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
                <HeaderDesktopFull changeAt={300} />
                <main className={`flex flex-col body row-start-2 justify-center items-center sm:items-start w-full ${isDesktop ? 'mb-[505px]' : isTablet ? 'pt-30' : 'pt-30'} top-[-260px] bg-[var(--base-bg)] z-30`}>
                    {isDesktop &&
                        <div className="w-full h-[260px] relative z-[1]" >
                            <div className="absolute inset-0 bg-black/50 z-10"></div>
                            <Image src={productBase} alt="Product Banner" width={735} height={260} className="w-full h-[260px] object-cover" priority/>
                        </div>
                    }
                    <HomeSection1 />
                    <HomeSection2 />
                    <HomeSection3 />
                    <HomeSection4 />
                    <HomeSection6 />
                    <HomeSection7 />
                    <HomeSection5 />
                    <HomeSection8 />
                    <HomeSection9 />
                </main>
                <FooterFull active={'introduction'} fixed={isDesktop ? true : false}
                    setModalActive={setModalActive}
                    modalActive={modalActive}
                />
            </div>
        </>
    );
}
