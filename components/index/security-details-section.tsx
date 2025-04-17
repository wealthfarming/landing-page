import React from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";
import FeatureCard from "./feature-card";

const SecurityDetailsSection: React.FC = () => {
  return (
    <SectionContainer bgColor="bg-slate-50">
      <SectionTitle
        title="Bảo Mật Tuyệt Đối - Minh Bạch Từng Giao Dịch"
        subtitle="Cơ Hội Đầu Tư Chỉ Số Thế Hệ Mới - Linh Hoạt, Minh Bạch, Hiệu Quả"
      />
      <div className="flex flex-wrap gap-10 items-start self-center mt-20 max-md:mt-10 max-md:max-w-full max-md:justify-center">
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/13b1771aef80789b9b80b640195fb8bce30dc98c?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
          title="Mua NFT quỹ bằng USDT/USDC trên Wealth Farming"
        />
        <div className="flex flex-col text-base font-medium leading-6 text-center text-black min-w-60 w-[263px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1a1bab667e2d69be2977f1c5ae77bc43c720ce0?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
            alt="Security illustration"
            className="object-contain self-center max-w-full aspect-[0.87] w-[200px] max-md:w-[60px]"
          />
          <p className="mt-5">
            Theo dõi hiệu suất real-time qua ví Web3 BeQ Wallet
          </p>
        </div>
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a51605a53446a8acdf9af6bd469b2c31c5993c88?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
          title="Bán NFT bất kỳ lúc nào hoặc stake để nhận lãi suất."
        />
      </div>
    </SectionContainer>
  );
};

export default SecurityDetailsSection;
