'use client';
import { t } from "i18next";
import { useState } from 'react';
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';

export function HomeSection5Tab({ tabs }: { tabs: any[] }) {
    const [selected, setSelected] = useState("ai_system");
    const { isDesktop, isTablet, isMobile } = useInterface();

    return (
        <div className={`${isDesktop ? 'flex h-[404px]' : 'flex flex-col'} gap-[8px]`}>
            {tabs.map(tab => (
                <div
                    key={tab.id}
                    className={`
        ${isDesktop ? `
            basis-[18%] transition-all duration-300 ease-in-out
            ${selected === tab.id ? 'basis-[28%]' : ''}
            p-[20px] flex flex-col justify-between border-[1px]
            ${selected === tab.id ? 'bg-[var(--primary-gradient)]' : 'bg-[var(--base-bg)]'}
            ` : ""}
             `}
                    onMouseEnter={() => setSelected(tab.id)}
                >
                    <div>
                        <Image src={`/images/home-section-5/${tab.icon}`} alt="" width={45} height={45} />

                        <p className="pt-[8px] no-anim">{t(tab.label)}</p>

                    </div>

                    <div
                        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${selected === tab.id ? '' : 'hidden'}
        `}
                    >
                        {t(tab.content)}
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
            label: 'Điểm nổi bật và khác biệt AI System',
            icon: 'start.png',
            content: 'Wealth Farming tiên phong kết hợp AI vào đánh giá tín dụng, định giá tài sản và tự động hóa giao dịch – Giúp nhà đầu tư tối ưu hóa lợi nhuận mà không gặp rủi ro!'
        },
        {
            id: 'nft_nec_beq_indexes',
            label: 'NFT NEC & BEQ Indexes - Lợi nhuận bền vững, thanh khoản tức thì',
            icon: 'coin.png',
            content: 'Chứng chỉ đầu tư NFT thế hệ mới – Dễ dàng giao dịch 24/7, tạo dòng tiền ổn định lên đến 75% mỗi năm.'
        },
        {
            id: 'review_indexes',
            label: 'Chiến lược Review Indexes độc quyền DeFi Marketplace',
            icon: 'goal.png',
            content: 'Chiến lược từng được các quỹ lớn BlackRock và Vanguard giữ bí mật – Nay trong tay bạn, giúp bạn kiếm lợi nhuận cả khi thị trường lên hay xuống.'
        },
        {
            id: 'highlight_difference',
            label: 'Điểm nổi bật và khác biệt',
            icon: 'hand.png',
            content: 'Vay vốn ngay lập tức bằng crypto hoặc NFT của bạn với AI tự động định giá – An toàn, minh bạch và linh hoạt!'
        },
        {
            id: 'ecosystem',
            label: 'Hệ sinh thái công nghệ tài chính phi tập trung toàn diện',
            icon: 'setting.png',
            content: 'Hệ sinh thái BeQ là một hạ tầng tài chính phi tập trung toàn diện – kết hợp smart contract minh bạch, AI đánh giá tài sản, stablecoin bảo chứng thật, và NFT có dòng tiền – vận hành như một ngân hàng số nhưng không cần trung gian.'
        },
    ];
    const { isDesktop, isTablet, isMobile } = useInterface();
    return (
        <div className="p-[40px] pt-[80px]">
            <div className={`flex flex-col ${isDesktop ? 'gap-[80px]' : 'gap-[40px]'} `}>
                <div className="gap-[16px] max-w-[716px]">
                    <p className="h1">
                        {t('Điểm nổi bật và khác biệt')}
                    </p>
                    <p className="max-w-[555px]">
                        {t('Review Indexes không còn là bí mật của phố Wall. NFT BEQ Indexes đang thay đổi luật chơi!” – John Doe, chuyên gia NYSE')}
                    </p>
                </div>
                <HomeSection5Tab tabs={tabs} />
            </div>

        </div >
    );
}