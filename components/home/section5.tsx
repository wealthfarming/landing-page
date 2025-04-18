"use client";
import { useEffect, useState } from "react";
import { FadeInSection } from "@/components/animation/introduction/Animations"
import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
import { useInterface } from "../context/interface-context";
export default function Section5() {
    const { isDesktop, isTablet, isMobile } = useInterface()
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <>
            <div className={`w-full flex bg-[var(--canvas-bg)] ${isDesktop ? 'py-20 px-10 justify-center' : isMobile ? 'flex-col p-[40px_20px]' : 'flex-col p-[80px_40px]'}`}>
                <div className={` flex ${isDesktop ? 'max-w-[1200px] gap-10' : isTablet ? 'w-full flex-col gap-10' : 'w-full flex-col gap-12'}`}>
                    <div className={`flex flex-col ${isDesktop ? 'w-[50%] pt-[33px] gap-8 h-auto' : isTablet ? 'gap-8' : 'gap-4'}`}>
                        <div className={`flex flex-col justify-center gap-4 ${isDesktop ? '' : isTablet ? 'items-center' : ''}`}>
                            <div className={`${isDesktop ? 'text-3xl mr-[68px] text-left' : isTablet ? 'text-3xl text-center max-w-[657px]' : 'text-[29px] text-center'} font-semibold font-geist-raleway`}>Và dành những điều tuyệt vời nhất cho nhà đầu tư</div>
                            <div className={`${isDesktop ? 'text-lg mr-[52px] text-left' : isTablet ? 'text-xl text-center max-w-[605px]' : 'text-[17px] text-center'} text-[var(--text-medium)] font-medium`}>Tham gia hệ sinh thái Wealth Farming, nhà đầu tư được hưởng lợi nhuận vượt trội và thanh khoản linh hoạt 24/7 với chính sách Zero Limit – Tự do giao dịch các chứng chỉ NFT, vay vốn DeFi, và quản lý tài sản số hoàn toàn không giới hạn.</div>
                        </div>
                        <div className={`flex gap-2 ${isDesktop ? 'justify-start pb-8' : 'justify-center'}`}>
                            <div className={`${(isDesktop || isTablet) ? 'gap-2': 'gap-1'} flex bg-[var(--base-bg)] shadow-sm rounded-[4px] border border-[var(--primary-other)] button items-center hover:bg-[var(--canvas-bg)] hover:cursor-pointer`}>
                                <div className={`${(isDesktop || isTablet) ? 'py-[10px] pl-6' : 'pl-4 py-2'}`}>
                                    <ChatCenteredDots size={20} />
                                </div>
                                <div className={`${(isDesktop || isTablet) ? 'py-[13px] pr-6' : 'pr-4 py-3'} font-geist-mono`}>
                                    TƯ VẤN MIỄN PHÍ
                                </div>
                            </div>
                            <div className={`flex ${(isDesktop || isTablet) ? 'gap-2': 'gap-1'} bg-[var(--primary)] shadow-sm rounded-[4px] button items-center hover:bg-[var(--primary-gradient)] hover:cursor-pointer`}>
                                <div className={`${(isDesktop || isTablet) ? 'py-[10px] pl-6' : 'pl-4 py-2'}`}>
                                    <CursorClick size={20} />
                                </div>
                                <div className={`${(isDesktop || isTablet) ? 'py-[13px] pr-6' : 'pr-4 py-3'} font-geist-mono`}>
                                    ĐẦU TƯ NGAY
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex ${isDesktop ? 'w-[50%] justify-start h-[386px]' : isTablet ? 'w-full justify-center' : 'w-full'} `}>
                        <img src="/images/img/eco-1.png" alt="" className={`${isDesktop ? 'w-full' : isTablet ? 'w-[84%]' : ''} h-full`} />
                    </div>
                </div>
            </div>
        </>
    )
}