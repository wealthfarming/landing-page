import React from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";

const SolutionSection: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle
        title={
          <>
            Giải Pháp BEQ INDEXES <br />
            REVIEW INDEX NFT
          </>
        }
        subtitle="Cơ Hội Đầu Tư Chỉ Số Thế Hệ Mới - Linh Hoạt, Minh Bạch, Hiệu Quả"
      />
      <div className="flex flex-wrap gap-10 justify-center items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex-1 shrink p-2 text-base bg-white rounded-xl border border-gray-200 border-solid basis-0 min-w-60 text-zinc-800 max-md:max-w-full">
          {/* Header: Tính năng và Lợi ích */}
          <div className="flex w-full text-lg font-semibold text-orange-300 border-b border-gray-200">
            <div className="flex-1 p-4">
              Tính năng
            </div>
            <div className="flex-1 p-4">
              Lợi ích
            </div>
          </div>

          {/* Row 1: Dự Đoán Chỉ Số AI */}
          <div className="flex w-full">
            <div className="flex-1 p-4 font-semibold">
              Dự Đoán Chỉ Số AI
            </div>
            <div className="flex-1 p-4 leading-6">
              Độ chính xác 89.2% từ 74 sự kiện bổ sung cổ phiếu (2022-2025).
            </div>
          </div>

          {/* Row 2: NFT Quỹ */}
          <div className="flex w-full rounded-lg bg-slate-50">
            <div className="flex-1 p-4 font-semibold">
              NFT Quỹ
            </div>
            <div className="flex-1 p-4 leading-6">
              Giao dịch 24/7 trên Wealth Farming, volume $12.5M/ngày.
            </div>
          </div>

          {/* Row 3: DeFi Integration */}
          <div className="flex w-full">
            <div className="flex-1 p-4 font-semibold">
              DeFi Integration
            </div>
            <div className="flex-1 p-4 leading-6">
              Staking NFT nhận lãi 8%/năm + vay thế chấp 70% giá trị.
            </div>
          </div>

          {/* Row 4: Cơ Chế Rủi Ro */}
          <div className="flex w-full rounded-lg bg-slate-50">
            <div className="flex-1 p-4 font-semibold">
              Cơ Chế Rủi Ro
            </div>
            <div className="flex-1 p-4 leading-6">
              Hedging bằng hợp đồng tương lai, cắt lỗ tự động -13.33%.
            </div>
          </div>
        </div>
        <div className="flex-1 shrink basis-4 min-w-60 max-md:max-w-full">
          <div className="relative flex flex-col justify-center items-center px-16 py-28 w-full rounded-2xl min-h-[295px] max-md:px-5 max-md:py-24 max-md:max-w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDF0BA] to-[#CDFEE4] p-[1px] rounded-2xl">
              <div className="relative h-full rounded-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d28027d9e53dcd440a176b28ea40b46c936b388?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Solution background"
                  className="object-cover absolute inset-0 size-full rounded-2xl"
                />
                <div className="flex relative gap-1 justify-center items-center px-1 -mb-6 bg-white bg-opacity-60 h-[60px] min-h-[60px] rounded-[100px] w-[60px] max-md:mb-2.5 top-[42%] left-[45%] max-md:top-[40%] max-md:left-[42%]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/14b4fbf2d0067aec7cdec97a722d437fa2046f99?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                    alt="Play icon"
                    className="object-contain self-stretch my-auto w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-2 w-full text-sm font-medium text-gray-700 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/057ca6d14da423d30721f79b58699eecfd47b2e6?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              alt="Info icon"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <p className="self-stretch my-auto w-[768px] max-md:max-w-full">
              Chiến Lược Đánh Giá Chỉ Số Toàn Cầu
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SolutionSection;
