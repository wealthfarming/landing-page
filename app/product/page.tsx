"use client";
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import ProductInfoCard from "@/components/product/product-info-card";
import Image from "next/image";

export default function ProductPage() {
    return (
        <div className="">
            <HeaderDesktopFull changeAt={300} />
            <div className="w-full h-[260px] hidden lg:block relative">
                <Image src="/images/img/product_base.jpg" alt="Product Banner" width={735} height={80} className="absolute w-full -z-10 top-[-400px] object-cover" />
            </div>
            <div className="w-full flex-grow flex flex-col items-center justify-start bg-background mb-[375px] mt-18 lg:mt-0 relative z-30">

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-normal mb-4 w-full md:w-9/12 text-center py-2 line-clamp-2">Sản phẩm & Dịch vụ tài chính phi tập trung Wealth Farming</h1>
                <p className="text-lg text-gray-600 mb-8 w-9/12 md:w-6/12 text-center">Từ chứng chỉ quỹ NFT mang lại thu nhập thụ động suốt đời, chiến lược đầu tư Review Indexes đỉnh cao, cho đến dịch vụ vay vốn phi tập trung (DeFi Lending) ứng dụng công nghệ AI tự động định giá và quản lý rủi ro, hệ sinh thái Wealth Farming của BeQ Holdings đáp ứng trọn vẹn từng mục tiêu đầu tư cá nhân – an toàn, minh bạch và hiệu quả tối ưu.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-4 justify-center px-16 max-w-[1200px]">
                    <ProductInfoCard title={"NFT NEC"} description={"Tạo dòng tiền ổn định, lợi nhuận ổn định trên 5%/tháng, biến chi tiêu hàng ngày thành thu nhập thụ động vĩnh viễn"} buttonText={"XEM CHI TIẾT"} button_color="bg-[var(--color-primary)]" />
                    <ProductInfoCard title={"NFT BEQ Indexes Review Index"} description={"Tận dụng sức mạnh giao dịch Review Indexes, lợi nhuận vượt trội tới 6.8% mỗi quý, thanh khoản cao 24/7!"} buttonText={"ĐANG CẬP NHẬT"} />
                    <ProductInfoCard title={"BEQ Web3 Wallet"} description={"Quản lý tài sản số toàn diện, tích hợp giao dịch, staking, lending chỉ trong một ví duy nhất!"} buttonText={"ĐANG CẬP NHẬT"} />
                </div>
            </div>
            <FooterFull active={'product'} />

        </div>
    );
}