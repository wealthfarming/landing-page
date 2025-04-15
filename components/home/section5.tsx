"use client";

import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
import { useInterface } from "../context/interface-context";
export default function Section5() {
    const { isDesktop, isTablet, isMobile } = useInterface()
    return (
        <>
            <div className={`w-full flex bg-[var(--canvas-bg)] ${isDesktop ? 'py-20 px-10 justify-center' : isTablet ? 'flex-col p-[80px_40px]' : 'p-[40px_20px]'}`}>
                <div className={`max-w-[1200px] flex ${isDesktop ? 'gap-10' : ''}`}>
                    <div className={`flex flex-col ${isDesktop ? 'w-[50%] pt-[33px] gap-8 h-auto' : isTablet ? '' : ''}`}>
                        <div className={`flex flex-col justify-center gap-4 ${isDesktop ? '' : isTablet ? '' : ''}`}>
                            <div className={`${isDesktop ? 'text-3xl mr-[68px] text-left' : isTablet ? 'text-3xl text-center' : 'text-2xl text-center'} font-semibold font-geist-raleway`}>Và dành những điều tuyệt vời nhất cho nhà đầu tư</div>
                            <div className={`${isDesktop ? 'text-lg mr-[52px] text-left' : isTablet ? 'text-xl text-center px-[190px]' : 'text-center'} text-[var(--text-medium)] font-medium`}>Tham gia hệ sinh thái Wealth Farming, nhà đầu tư được hưởng lợi nhuận vượt trội và thanh khoản linh hoạt 24/7 với chính sách Zero Limit – Tự do giao dịch các chứng chỉ NFT, vay vốn DeFi, và quản lý tài sản số hoàn toàn không giới hạn.</div>
                        </div>
                        <div className={`flex gap-2 ${isDesktop ? 'justify-start pb-8' : 'justify-center'}`}>
                            <div className="flex gap-2 bg-[var(--base-bg)] shadow-sm border border-[var(--primary-other)] button items-center hover:bg-[var(--canvas-bg)] hover:cursor-pointer">
                                <div className="py-[10px] pl-6">
                                    <ChatCenteredDots size={20} />
                                </div>
                                <div className="py-[13px] pr-6 font-geist-mono">
                                    TƯ VẤN MIỄN PHÍ
                                </div>
                            </div>
                            <div className="flex gap-2 bg-[var(--primary)] shadow-sm button items-center hover:bg-[var(--primary-gradient)] hover:cursor-pointer">
                                <div className="py-[10px] pl-6">
                                    <CursorClick size={20} />
                                </div>
                                <div className="py-[13px] pr-6 font-geist-mono">
                                    ĐẦU TƯ NGAY
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${isDesktop ? 'w-[50%] justify-start h-[386px]' : isTablet ? 'w-full justify-center' : 'w-full'} flex`}>
                        <img src="/images/img/eco-1.png" alt="" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
}