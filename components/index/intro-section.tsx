import React from "react";
import Button from "./button";
import SectionContainer from "./section-container";
import { Separator } from "../ui/separator";

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
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex gap-2 md:flex-row flex-col my-10 md:mt-10 text-sm md:w-full w-[209px] font-medium tracking-wide justify-center items-center text-zinc-800 max-md:max-w-full">
          <Button variant="white">ĐẶT LỊCH TƯ VẤN RIÊNG</Button>
          <Button variant="orange">TRUY CẬP TÀI LIỆU MẬT</Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10 max-w-full text-sm font-medium text-gray-700 md:min-h-[555px] w-[956px] ">
          <div className="flex flex-wrap flex-row gap-2 items-center w-full max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1baeb458dd1369807c053be7ac1de2b04be1b451?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              alt="Icon"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <p className="self-stretch my-auto md:w-[768px] max-md:max-w-full">
              Chiến Lược Đánh Giá Chỉ Số Toàn Cầu
            </p>
          </div>
          <div className="w-full h-[218px] md:h-[522px] relative">
            <div className="w-full h-full m-[1px] bg-black rounded-[20px]" style={{ "border": "4px solid", "borderImageSource": "conic-gradient(from 180deg at 50% 50%, #CDFEE4 0deg, #FDF0BA 130.41deg, #CDFEE4 360deg)" }}>

            </div>

            <div className="absolute top-[25px] md:top-[56px] md:left-[-59px] w-[101px] md:w-[202px] h-[80px] m-[1px] bg-white rounded-[6px] border-[var(--primary-border)] border">
              <div className="flex flex-col justify-center items-center h-full w-full">
                <div className="flex flex-row items-center justify-center h-1/3 md:h-1/2 w-full border-b-[1px] border-b-gray-300 text-[13px] md:text-[16px] font-[var(--font-geist-display)]">
                  Loi nhuan
                </div>
                <div className="flex flex-col md:flex-row items-center text-center h-2/3 md:h-1/2 w-full">
                  <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full bg-[#23CB70] text-[18px] md:text-[24px] text-white font-[var(--font-geist-mono)] font-[500]">
                    <p>82.55%</p>
                  </div>
                  <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full text-[#23CB70] text-[16px] md:text-[18px] font-[var(--font-geist-display)]">
                    <p>Nam</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="absolute bottom-[27.5px] md:bottom-[57.22px] right-[-3px] md:right-[-83px] w-[101px] md:w-[202px] h-[80px] m-[1px] bg-white rounded-[6px] border-[var(--primary-border)] border ">
              <div className="flex flex-col justify-center items-center h-full w-full">
                <div className="flex flex-row items-center justify-center h-1/3 md:h-1/2 w-full border-b-[1px] border-b-gray-300 text-[13px] md:text-[16px] font-[var(--font-geist-display)]">
                  Thanh khoan
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center text-center h-2/3 md:h-1/2 w-full">
                  <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full bg-[#E8B561] text-[18px] md:text-[24px] text-white font-[var(--font-geist-mono)] font-[500]">
                    <p>24/7</p>
                  </div>
                  <div className="flex justify-center items-center w-full md:w-1/2 h-1/2 md:h-full text-[#E8B561] text-[16px] md:text-[18px] font-[var(--font-geist-display)]">
                    <p>Lien tuc</p>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>

    </SectionContainer>
  );
};

export default IntroSection;
