import React from "react";
import Button from "./button";
import SectionContainer from "./section-container";

const IntroSection: React.FC = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-center items-center self-stretch w-full text-center max-md:max-w-full">
        <h1 className="text-5xl font-medium text-zinc-800 max-md:max-w-full max-md:text-4xl">
          <span className="text-[rgba(232,181,97,1)]">BEQ INDEXES </span>
          PREWIEW INDEX NFT
        </h1>
        <p className="mt-5 max-w-screen-md text-base leading-6 text-gray-700 w-[768px] max-md:max-w-full">
          Đầu tư vào NFT quỹ đầu tiên tích hợp AI dự đoán biến động chỉ số S&P
          500, CAC 40, CSI 300. Minh bạch 100% trên blockchain, thanh khoản 24/7
        </p>
      </div>
      <div className="flex gap-2 items-center mt-10 text-sm font-medium tracking-wider text-zinc-800 max-md:max-w-full">
        <Button variant="white">ĐẶT LỊCH TƯ VẤN RIÊNG</Button>
        <Button variant="orange">TRUY CẬP TÀI LIỆU MẬT</Button>
      </div>
      <div className="mt-10 max-w-full text-sm font-medium text-gray-700 min-h-[555px] w-[956px]">
        <div className="flex flex-wrap gap-2 items-center w-full max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1baeb458dd1369807c053be7ac1de2b04be1b451?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
            alt="Icon"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <p className="self-stretch my-auto w-[768px] max-md:max-w-full">
            Chiến Lược Đánh Giá Chỉ Số Toàn Cầu
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default IntroSection;
