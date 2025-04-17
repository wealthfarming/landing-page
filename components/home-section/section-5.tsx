'use client';
import { t } from "i18next";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { AnimatedText } from "@/components/animation/introduction/Animations"
type Tab = {
    id: string;
    label: string;
    icon: string;
    icon_selected: string;
    content: string;
};

export function HomeSection5Tab({ tabs }: { tabs: Tab[] }) {
    const [selected, setSelected] = useState("ai_system");
    const { isDesktop, isTablet, isMobile } = useInterface();

    useEffect(() => {
        if (isTablet) {
            setSelected("ai_system");
        }
    }, [isTablet]);
    useEffect(() => {
        if (isMobile) {
            setSelected("");
        }
    }, [isMobile]);

    return (
        <div className={`${isDesktop ? 'w-[1200px] flex flex-[0_0_auto] h-[404px]' : 'flex flex-col'} ${isMobile ? 'gap-[20px]' : 'gap-[8px]'}`}>
            {tabs.map(tab => (
                <div key={tab.id} className={`${selected === tab.id ? 'flex-[1.5_0_0px]' : 'flex-[1_0_0px]'}`}>
                    <div
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)' }}
                        className={`
                            ${isDesktop ? `
                                p-[20px] h-full  transition-all duration-300 ease-in-out
                                flex flex-col justify-between border-[1px] rounded-[5px]
                                ${selected === tab.id ? 'bg-[var(--primary)]' : 'bg-[var(--base-bg)]'}
                                ` : `
                                p-[20px] transition-all duration-500 ease-in-out w-full gap-[8px]
                                flex flex-col justify-between border-[1px]
                                ${selected === tab.id && isTablet ? 'bg-[var(--primary)] h-[255px]' : 'bg-[var(--base-bg)]'}
                                `}
                            `}
                        onMouseEnter={isDesktop ? () => setSelected(tab.id) : undefined}
                    >
                        <div>
                            <Image src={`/images/home-section-5/${selected === tab.id ? tab.icon_selected : tab.icon}`} alt="" width={45} height={45} />
                            <p className="pt-[8px] no-anim h4">{t(tab.label)}</p>
                        </div>
                        <div
                            className={`
                                transition-all duration-300 ease-in-out overflow-hidden text-[15px] flex gap-[8px] w-full
                                ${selected === tab.id || !isDesktop ? '' : 'hidden'}
                            `}
                        >
                            <p>
                                {t(tab.content)}
                            </p>
                            <div className={`border-[1px] rounded-[100px] border-[var(--primary-gradient)] w-[20px] min-w-[20px] h-[20px] mt-auto flex items-center justify-center animate-pulse ${selected === tab.id ? '' : 'hidden'}`}>
                                <div className="rounded-[100px] bg-[var(--primary-border)]  w-[12px] h-[12px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default function HomeSection5() {
    const tabs = [
        {
            id: 'ai_system',
            label: 'NFT tài chính hợp pháp, minh bạch dòng tiền',
            icon: 'start.png',
            icon_selected: 'start_selected.png',
            content: 'NEC và Review Index là NFT đầu tư minh bạch, không cam kết lãi cố định, không chia cổ tức – tuân thủ tiêu chuẩn không bị phân loại là chứng khoán, dễ kiểm toán và công bố công khai.'
        },
        {
            id: 'nft_nec_beq_indexes',
            label: 'Pháp lý song hành – hướng tới IPO toàn cầu',
            icon: 'coin.png',
            icon_selected: 'coin_selected.png',
            content: 'Được vận hành bởi hai pháp nhân độc lập tại Mỹ & Anh, hệ sinh thái BeQ đã sẵn sàng cho IPO qua SPAC – mở đường hợp pháp cho nhà đầu tư tổ chức toàn cầu.'
        },
        {
            id: 'review_indexes',
            label: 'Tích hợp RWA – tài sản thật bước vào DeFi',
            icon: 'goal.png',
            icon_selected: 'goal_selected.png',
            content: 'Wealth Farming mở rộng sang bất động sản, tài sản vật lý và hàng hóa qua mô hình NFT hóa – giúp dòng tiền thực tiếp cận DeFi một cách an toàn và minh bạch.'
        },
        {
            id: 'highlight_difference',
            label: 'Hiệu suất Index Review tăng trưởng vượt bậc',
            icon: 'hand.png',
            icon_selected: 'hand_selected.png',
            content: 'Các chỉ số chiến lược của BeQ đã tăng hơn 200% trong 24 tháng, được backtest đầy đủ và công khai trên hệ thống – không quảng bá cảm tính, chỉ dựa vào kết quả thực tế.'
        },
        {
            id: 'ecosystem',
            label: 'Hệ sinh thái công nghệ tài chính phi tập trung toàn diện',
            icon: 'setting.png',
            icon_selected: 'setting_selected.png',
            content: 'Hệ sinh thái BeQ là một hạ tầng tài chính phi tập trung toàn diện – kết hợp smart contract minh bạch, AI đánh giá tài sản, stablecoin bảo chứng thật, và NFT có dòng tiền – vận hành như một ngân hàng số nhưng không cần trung gian.'
        },
    ];
    const { isDesktop, isMobile } = useInterface();

    return (
        <div className="flex justify-center gap-[10px] w-full p-[40px] pt-[80px]">
            <div className=" max-w-[1200px] w-full">
                <div className={`flex flex-col ${isDesktop ? 'gap-[80px]' : 'gap-[40px]'} `}>
                    <div className="gap-[16px] max-w-[716px]">
                        <p className="h1">
                            <AnimatedText text={[t('Điểm nổi bật và khác biệt')]} />
                        </p>
                        <p className={`max-w-[555px] ${!isMobile ? 'text-[18px]' : 'text-[17px]'} text-[var(--text-medium)]`}>
                            {t('"Review Indexes không còn là bí mật của phố Wall. NFT BEQ Indexes đang thay đổi luật chơi!” – John Doe, chuyên gia NYSE')}
                        </p>
                    </div>
                    <HomeSection5Tab tabs={tabs} />
                </div>

            </div >
        </div>
    );
}