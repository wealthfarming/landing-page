'use client'
import HeaderDesktopFull from "@/components/header/header-desktop";
import HomeSection1 from "@/components/home-section/section-1";
import HomeSection2 from "@/components/home-section/section-2";
import HomeSection3 from "@/components/home-section/section-3";
import HomeSection4 from "@/components/home-section/section-4";
import Image from "next/image";
import HomeSection5 from "@/components/home-section/section-5";
import HomeSection8 from "@/components/home-section/section-8";
import HomeSection9 from "@/components/home-section/section-9";
import HomeSection6 from "@/components/home-section/section-6";
import HomeSection7 from "@/components/home-section/section-7";
import FooterFull from "@/components/footer/footer-full";
import { useInterface } from "@/components/context/interface-context";
import React from "react";
import VideoBox from "../footer/video_box";

export default function HomePage() {
    const { isDesktop, isTablet } = useInterface();
    const [modalActive, setModalActive] = React.useState(false);
    const [isChatboxOpen, setIsChatboxOpen] = React.useState(false);

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
    };

    return (
        <>
            <VideoBox modalActive={modalActive} setModalActive={setModalActive} />
            <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
                <HeaderDesktopFull changeAt={300} />
                <main className={`flex flex-col body row-start-2 justify-center items-center sm:items-start w-full ${isDesktop ? 'mb-[505px]' : isTablet ? 'pt-30' : 'pt-30'} top-[-260px] bg-[var(--base-bg)] z-30`}>
                    {isDesktop && (
                        <div className="w-full h-[260px] relative z-[1]">
                            <div className="absolute inset-0 bg-black/50 z-10"></div>
                            <Image
                                src="https://res.cloudinary.com/dvtuy0whs/image/upload/v1751790549/product_base_crcdbv.jpg"
                                alt="Product Banner"
                                width={735}
                                height={260}
                                className="w-full h-[260px] object-cover"
                                priority
                            />
                        </div>
                    )}
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
                <div
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgb(233, 180, 96)',
                        borderRadius: '50%',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={toggleChatbox}
                    aria-label="Toggle chatbox"
                >
                    <span style={{ fontSize: '24px', color: 'white' }}>💬</span>
                </div>
                <iframe
                    src="https://flutter-interflow-wf.vercel.app/"
                    width="400"
                    height="600"
                    style={{
                        position: 'fixed',
                        bottom: '100px',
                        right: '24px',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000,
                        display: isChatboxOpen ? 'block' : 'none',
                    }}
                    allow="microphone; clipboard-write"
                ></iframe>
                <FooterFull
                    active={'introduction'}
                    fixed={isDesktop ? true : false}
                    setModalActive={setModalActive}
                    modalActive={modalActive}
                />
            </div>
        </>
    );
}