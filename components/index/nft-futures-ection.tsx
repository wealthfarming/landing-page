import React from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";
import FeatureCard from "./feature-card";

const NFTFutureSection: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle
        title={
          <>
            Vì Sao NFT Là Tương Lai Của
            <br />
            Chứng Chỉ Quỹ?
          </>
        }
        subtitle="Cơ Hội Đầu Tư Chỉ Số Thế Hệ Mới - Linh Hoạt, Minh Bạch, Hiệu Quả"
      />
      <div className="flex flex-wrap gap-10 items-start mt-20 max-md:mt-10 max-md:max-w-full">
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/21016215fa0e725f120015cd3a7e97c2ad8f90dc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
          title="Mua NFT quỹ bằng USDT/USDC trên Wealth Farming"
        />
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/da2dfee13da1af2e42d09f1c8ed97390ab444db7?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
          title="Theo dõi hiệu suất real-time qua ví Web3 BeQ Wallet"
        />
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dd00494a5aa445970e5ee9440ade9a8f178ea311?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
          title="Bán NFT bất kỳ lúc nào hoặc stake để nhận lãi suất."
        />
      </div>
      <div className="flex flex-col items-center mt-20 max-w-full w-[234px] max-md:mt-10">
        <div className="overflow-hidden w-full bg-white rounded-md max-w-[234px]">
          <div className="gap-1 self-stretch px-1 py-2 w-full text-base font-semibold border-b border-gray-200 min-h-[39px] text-zinc-800">
            Lợi nhuận
          </div>
          <div className="flex items-center w-full text-2xl font-medium text-white">
            <div className="flex-1 shrink gap-1 self-stretch p-1 my-auto w-full bg-green-500 basis-0">
              $100k → $394k
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-slate-500">Sau 2 năm</p>
      </div>
    </SectionContainer>
  );
};

export default NFTFutureSection;
