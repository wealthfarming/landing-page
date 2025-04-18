"use client";

import { ChatCenteredDots, CursorClick } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { FadeInSection } from "@/components/animation/introduction/Animations"
export default function Section6() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <>
            <div className="relative flex flex-col w-full xl:py-20 p-[60px_20px] xl:h-[520px] xl:px-10 xl:gap-2 bg-[url('/images/img/section6.webp')] bg-cover bg-center bg-no-repeat justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 xl:text-4xl font-medium text-center text-white text-[29px] lg:text-3xl">
                    <FadeInSection>Wealth Farming</FadeInSection>
                </div>
                <div className="relative z-10 xl:text-2xl text-center xl:w-2/5 text-white text-base lg:w-1/2 lg:text-lg">
                    <FadeInSection>Wealth Farming là nền tảng đầu tư và quản lý tài sản số phi tập trung hàng đầu thế giới, ứng dụng Fintech, AI & Blockchain, giúp nhà đầu tư tạo ra dòng tiền ổn định, tăng trưởng tài sản bền vững và đạt đến tự do tài chính thực sự.</FadeInSection>
                </div>
                <div className="relative z-10 flex mt-8 gap-2">
                    <div className="flex lg:px-6 px-4 py-[10px] gap-2 canvas-bg-1 shadow-sm border border-[var(--primary-other)] button items-center ">
                        <ChatCenteredDots size={20} />
                        TƯ VẤN MIỄN PHÍ
                    </div>
                    <div className="flex lg:px-6 px-4 py-[10px] gap-2 bg-[var(--primary)] shadow-sm button items-center hover:bg-[var(--primary-gradient)]">
                        <CursorClick size={20} />
                        ĐẦU TƯ NGAY
                    </div>
                </div>
            </div>
        </>
    );
}