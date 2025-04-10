"use client";

import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
export default function Section5() {
    return (
        <>
            <div className="flex flex-col xl:flex-row w-full xl:py-20 xl:px-10 gap-10 bg-[var(--canvas-bg)] lg:p-[80px_40px] p-[40px_20px]">
                <div className="flex flex-col justify-center gap-4 xl:w-[85%]">
                    <div className="xl:text-4xl font-medium xl:mr-[350px] lg:text-3xl lg:text-center xl:text-left text-2xl text-center">Và dành những điều tuyệt vời nhất cho nhà đầu tư</div>
                    <div className="text-[var(--text-medium)] lg:text-xl lg:text-center lg:px-[190px] xl:text-2xl xl:mr-[290px] xl:px-0 xl:text-left text-center">Tham gia hệ sinh thái Wealth Farming, nhà đầu tư được hưởng lợi nhuận vượt trội và thanh khoản linh hoạt 24/7 với chính sách Zero Limit – Tự do giao dịch các chứng chỉ NFT, vay vốn DeFi, và quản lý tài sản số hoàn toàn không giới hạn.</div>
                    <div className="flex mt-4 gap-2 lg:justify-center xl:justify-start justify-center">
                        <div className="flex lg:px-6 px-4 py-[10px] gap-2 canvas-bg-1 shadow-sm border border-[var(--primary-other)] button items-center ">
                            <ChatCenteredDots size={20}/>
                            TƯ VẤN MIỄN PHÍ
                        </div>
                        <div className="flex lg:px-6 px-4 py-[10px] gap-2 bg-[var(--primary)] shadow-sm button items-center hover:bg-[var(--primary-gradient)]">
                            <CursorClick size={20}/>
                            ĐẦU TƯ NGAY
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%] lg:w-full flex lg:justify-center xl:justify-start">
                    <img src="/images/img/eco-1.png" alt="" className="lg:w-[65%]"/>
                </div>
            </div>
        </>
    )
}