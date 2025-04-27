"use client";
import { AnimatedText } from "@/components/animation/introduction/Animations";
import { useLanguage } from "@/components/context/i18n";
import { useInterface } from "@/components/context/interface-context";
import EcoCard from "@/components/ecosystem/eco-card";
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import productBase from "../../public/images/img/product_base.jpg"

type ContentItem = string;

interface Section {
  img: string;
  title: string;
  content: ContentItem[];
}

interface EcoData {
  [key: string]: Section[];
}

const ecoData: EcoData = {
  vi: [
    {
      img: "/images/img/eco-1.png",
      title: "Quản lý tài sản số toàn diện với BeQ Web3 Wallet",
      content: [
        "Một ví dụ duy nhất, tích hợp đầy đủ giao dịch NFT, crypto và quản lý tài sản số.",
        "Kết nối và giao dịch để đăng vì các nền tảng DeFi, DEX uy tín.",
        "Bảo mật tuyệt đối bằng công nghệ blockchain và AI.",
      ],
    },
    {
      img: "/images/img/eco-2.png",
      title: "Đầu tư thông minh, tạo thu nhập thụ động ổn định",
      content: [
        "NFT NEC – chuyển chi tiêu hằng ngày thành dòng tiền thu nhập thụ động lâu dài.",
        "NFT BEQ INDEXES – lợi nhuận vượt trội (27-30%/năm), giao dịch linh hoạt.",
        "Lợi nhuận rõ ràng, minh bạch thông qua hợp đồng thông minh (Smart Contract).",
      ],
    },
    {
      img: "/images/img/eco-3.png",
      title: "Ứng dụng công nghệ Blockchain và AI tiên tiến",
      content: [
        "AI Credit Scoring – định giá tài sản số chính xác, giảm thiểu rủi ro đầu tư.",
        "Hệ thống DEFI LENDING – vay vốn tức thì, không cần bán tài sản.",
        "Bảo mật và minh bạch tuyệt đối, mọi giao dịch được ghi nhận công khai trên blockchain.",
      ],
    },
    {
      img: "/images/img/eco-4.png",
      title: "Báo cáo đầu tư và phân tích chuyên nghiệp, minh bạch",
      content: [
        "Báo cáo tự động hóa thông qua Smart Contract, rõ ràng từng khoản đầu tư.",
        "Phân tích tài sản và danh mục đầu tư thông minh, hỗ trợ ra quyết định nhanh chóng.",
        "Cập nhật liên tục về biến động thị trường để nhà đầu tư luôn chủ động.",
      ],
    },
  ],
  en: [
    {
      img: "/images/img/eco-1.png",
      title: "Comprehensive digital asset management with BeQ Web3 Wallet",
      content: [
        "A unique wallet that fully integrates NFT transactions, crypto, and digital asset management.",
        "Easily connect and transact with reputable DeFi platforms and DEX.",
        "Absolute security through blockchain and AI technology.",
      ],
    },
    {
      img: "/images/img/eco-2.png",
      title: "Smart investment, creating stable passive income",
      content: [
        "NFT NEC – converting daily spending into a long-term source of passive income.",
        "NFT BEQ INDEXES – superior profits (27-30%/year), easy trading, flexible liquidity.",
        "Profits are clear and transparent through smart contracts.",
      ],
    },
    {
      img: "/images/img/eco-3.png",
      title: "The advanced application of Blockchain and AI technology",
      content: [
        "AI Credit Scoring – accurate digital asset valuation, minimizing investment risk.",
        "The DeFi Lending system – instant loans without the need to sell assets.",
        "Absolute security and transparency, all transactions are publicly recorded on the blockchain.",
      ],
    },
    {
      img: "/images/img/eco-4.png",
      title: "Professional, transparent investment reporting and analysis",
      content: [
        "Automated reporting through Smart Contracts clearly outlines each investment.",
        "Analyzing assets and investment portfolios intelligently, supporting quick decision-making.",
        "Continuous updates on market fluctuations to keep investors proactive.",
      ],
    },
  ],
};

export default function EcoPage() {
  const { isDesktop, isTablet } = useInterface();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const selectedEcoData = ecoData[language] || ecoData['en'];

  return (
    <div className="flex flex-col">
      {isDesktop &&
        <div className="w-full h-[260px] relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          <Image  src={productBase} alt="Product Banner" width={735} height={260} className="w-full h-[260px] object-cover" />

        </div>
      }
      <div
        className={`w-full flex-grow flex flex-col items-center justify-start bg-background ${isDesktop ? ' mb-[505px]' : isTablet ? 'mb-[505px] pt-20' : 'pt-20'
          } relative z-30`}
      >
        <HeaderDesktopFull changeAt={300} />
        <div
          className={`max-w-[1200px] flex flex-col ${isDesktop ? 'p-10 gap-20' : isTablet ? 'p-10 gap-30' : 'pt-12 px-5 gap-10'
            }`}
        >
          <div className={`flex flex-col gap-6`}>
            <h1
              className={` ${isDesktop ? 'px-[108px] text-[49px]' : isTablet ? 'text-[44px] pt-2' : 'text-[34px]'
                } font-semibold w-full text-center`}
            >
              <AnimatedText
                text={[t('eco_title')]}
                delayBetween={0.05}
                duration={0.3}
              />
            </h1>
            <p
              className={` ${isDesktop ? 'text-xl px-[199px]' : isTablet ? 'px-[110px] text-xl' : 'text-lg mb-5'
                } font-medium w-full text-center text-[var(--text-medium)]`}
            >
              {t('eco_description')}
            </p>
          </div>
          <div
            className={`${isDesktop
              ? 'grid-cols-2 gap-[40px_60px] mb-20'
              : isTablet
                ? 'grid-cols-2 gap-[40px_60px] mb-20'
                : 'grid-cols-1 gap-10'
              } grid flex-wrap justify-center w-full`}
          >
            {selectedEcoData.map((section, index) => (
              <EcoCard key={index} section={section} />
            ))}
          </div>
        </div>
      </div>
      <FooterFull active={"product"} />
    </div>
  );
}