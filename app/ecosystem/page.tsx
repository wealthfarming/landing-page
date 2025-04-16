"use client";
import { useInterface } from "@/components/context/interface-context";
import EcoCard from "@/components/ecosystem/eco-card";
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import Image from "next/image";

type ContentItem = string;

interface Section {
  img: string;
  title: string;
  content: ContentItem[];
}

const ecoData: Section[] = [
  {
    img: "/images/img/eco-1.png",
    title: "Quản lý tài sản số toàn diện với BeQ Web3 Wallet",
    content: [
      "Một ví dụ duy nhất, tích hợp đầy đủ giao dịch NFT, crypto và quản lý tài sản số.",
      "Kết nối và giao dịch để đăng vì các nền tảng DeFi, DEX uy tín.",
      "Bán mạt tuyển đối bằng cộng nghệ blockchain và AI.",
    ],
  },
  {
    img: "/images/img/eco-2.png",
    title: "Đầu tư thông minh, tạo thu nhập thụ động ổn định:",
    content: [
      "NFT NEC – chuyển chi tiêu hằng ngày thành dòng tiền thu nhập thụ động lâu dài.",
      "NFT BEQ INDEXES – lợi nhuận vượt trội (27-30%/năm) giao dịch để đăng, thanh khoản linh hoạt.",
      "Lợi nhuận rõ ràng, minh bạch thông qua hợp đồng thông minh (Smart Contract).",
    ],
  },
  {
    img: "/images/img/eco-3.png",
    title: "Ứng dụng công nghệ Blockchain và AI tiên tiến",
    content: [
      "AI Credit Scoring – định giá tài sản số chính xác, giảm thiểu rủi ro đầu tư.",
      "Hệ thống DEFI LENDING – vay vốn tức thì, không cần bán tài sản.",
      "Bảo mật và minh bạch tuyển đối, mọi giao dịch được ghi nhận công khai trên blockchain.",
    ],
  },
  {
    img: "/images/img/eco-4.png",
    title: "Bảo cáo đầu tư và phân tích chuyên nghiệp, minh bạch",
    content: [
      "Báo cáo tự động hóa thông qua Smart Contract, rõ ràng từng khoản đầu tư.",
      "Phân tích tài sản và danh mục đầu tư thông minh, hỗ trợ ra quyết định nhanh chóng.",
      "Cập nhật liên tục về biến động thị trường để nhà đầu tư luôn chủ động.",
    ],
  },
];

export default function EcoPage() {

  const { isDesktop, isTablet, isMobile } = useInterface();
  return (
    <div className="">
      <HeaderDesktopFull changeAt={300} />
      {isDesktop && (
        <Image
          src="/images/img/product_base.jpg"
          alt="Product Banner"
          width={735}
          height={80}
          className="absolute w-full -z-10 top-[-400px] object-cover"
        />
      )}

      <div className={`w-full flex-grow flex flex-col items-center justify-start bg-background ${isDesktop ? 'mt-56' : isTablet ? 'mt-12' : 'mt-18'} relative z-30`}>
        <div className={`max-w-[1200px] flex flex-col ${isDesktop? 'p-10 gap-20' : isTablet ? 'p-10 gap-30' : 'pt-12 px-5 gap-10'}`}>
          <div className={`flex flex-col gap-6`}>
            <h1 className={` ${isDesktop ? 'px-[108px] text-[49px]' : isTablet ? 'text-[44px] pt-2' : 'text-[34px]'} font-semibold w-full text-center`}>
              Wealth Farming – Hệ sinh thái đầu tư và quản lý tài sản số toàn diện
            </h1>
            <p className={` ${isDesktop ? 'text-xl px-[199px]' : isTablet ? 'px-[110px] text-xl' : 'text-lg mb-5'} font-medium w-full text-center text-[var(--text-medium)]`}>
              Hệ sinh thái đầu tư và quản lý tài sản số phi tập trung tiên phong ứng dụng công nghệ Blockchain, Web3 và AI, được BeQ Holdings phát triển đặc biệt để giúp nhà đầu tư trên toàn thế giới dễ dàng tạo dựng nguồn thu nhập thụ động bền vững, gia tăng giá trị tài sản minh bạch và an toàn, cùng khả năng thanh khoản 24/7 vượt trội với lợi nhuận tối ưu.
            </p>
          </div>
          <div className={`${isDesktop ? 'grid-cols-2 gap-[40px_60px] mb-20' : isTablet ? 'grid-cols-2 gap-[40px_60px] mb-20' : 'grid-cols-1 gap-10 mb-10'} grid flex-wrap justify-center w-full`}>
            {ecoData.map((section, index) => (
              <EcoCard key={index} section={section} />
            ))}
          </div>
        </div>
      </div>
      <FooterFull active={"product"} />
    </div>
  );
}