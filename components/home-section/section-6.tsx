'use client';
import { t } from "i18next";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { Plus } from 'phosphor-react';

export function HomeSection6Tab({ tabs }: { tabs: any[] }) {
    const [selected, setSelected] = useState<string | null>(null);
    const { isDesktop, isTablet } = useInterface();

    return (
        <div className={`flex flex-col gap-[20px]`}>
            {isDesktop && tabs.map(tab => (

                <div
                    key={tab.id}
                    style={
                        selected === tab.id
                            ? {
                                backgroundImage: `url('/images/home-section-6/${tab.img}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }
                            : undefined
                    }
                    className={`
                        transition-all duration-300 ease-linear border-b-[1px] border-[var(--primary-other)] relative overflow-hidden py-[16px] ${selected == tab.id ? 'px-16' : 'px-0'} h-[100px]
                        `}
                    onMouseEnter={() => setSelected(tab.id)}
                    onMouseLeave={() => setSelected(null)}
                >
                    {selected === tab.id && (
                        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
                    )}

                    <div className={`relative z-[2] flex gap-[40px] w-full items-center`}>

                        <p className={`h4 ${selected == tab.id ? '!text-[var(--other-border)]' : ''}`}>{t(tab.id)}</p>
                        <p className={`h2 ${selected == tab.id ? '!text-[var(--other-border)]' : ''}`}>{t(tab.label)}</p>
                        <Plus width={24} height={24} className={`ml-auto text-[var(--text-bold)] ${selected == tab.id ? 'hidden' : ''}`} />
                        <p className={` text-[var(--other-border)] ${selected == tab.id ? '' : 'hidden'} ml-auto text-right text-[18px] max-w-[400px]`}>{t(tab.content)}</p>
                    </div>
                </div>
            ))}

            {!isDesktop && tabs.map(tab => (

                <div
                    key={tab.id}
                    className={`gap-[8px] pb-[16px] border-b-[1px] border-[var(--primary-other)]`}
                >
                    <div className={`flex gap-[20px] items-center`}>
                        <p className={`h4 ${selected ? '!text-[var(--other-border)]' : ''}`}>{t(tab.id)}</p>
                        <p className={`h3 ${selected ? '!text-[var(--other-border)]' : ''}`}>{t(tab.label)}</p>
                    </div>
                    <p className={`pl-[41px] ${isTablet ? 'text-[18px]' : 'text-[17px]'} text-[var(--text-medium)]`}>{t(tab.content)}</p>
                </div>
            ))}
        </div>

    );
}

export default function HomeSection6() {
    const tabs = [
        {
            id: '01',
            label: 'Minh bạch tuyệt đối nhờ công nghệ Blockchain',
            img: '01.png',
            content: 'Lợi nhuận, chỉ số và dòng tiền được ghi trên smart contract – không phí ẩn, không gian lận.'
        },
        {
            id: '02',
            label: 'Chiến lược giao dịch dựa trên dữ liệu Big Data và AI',
            img: '02.png',
            content: 'Vận hành bằng mô hình Index Review do AI hỗ trợ, đã kiểm chứng qua nhiều chu kỳ thị trường.'
        },
        {
            id: '03',
            label: 'Lợi nhuận thực, không dựa vào FOMO',
            img: '03.png',
            content: 'Sinh lời từ tài sản số có thanh khoản thật, mục tiêu >75%/năm, phân phối bằng USDC.'
        },
        {
            id: '04',
            label: 'Không cần kiến thức tài chính chuyên sâu',
            img: '04.png',
            content: 'Chỉ cần sở hữu NFT – hệ thống tự động đầu tư, tái đầu tư và tối ưu dòng tiền.'
        },
        {
            id: '05',
            label: 'Tài sản có thể thế chấp, chuyển nhượng, hoặc farming kép',
            img: '05.png',
            content: 'NFT tạo dòng tiền và có thể dùng để vay, staking hoặc giao dịch linh hoạt.'
        },
    ];

    const { isMobile } = useInterface();

    return (
        <div className={`${isMobile ? "px-[20px] py-[40px]" : 'p-[40px] pb-[80px]'} gap-[10px] w-full flex justify-center`}>
            <div className="gap-[40px] w-full flex flex-col max-w-[1200px]">
                <p className="max-w-[600px] h1">
                    {t('Tại sao hàng triệu nhà đầu tư chọn BeQ Holdings?')}
                </p>
                <HomeSection6Tab tabs={tabs} />
            </div>
        </div >
    );
}