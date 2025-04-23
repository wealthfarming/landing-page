"use client";
import React from "react";
import SectionContainer from "./section-container";
import ContactForm from "./contact-form";

const ContactSection: React.FC = () => {
  return (
    <SectionContainer bgColor="bg-[var(--base-bg)]">
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-10 justify-center items-start max-w-screen-md w-[768px] max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center text-base basis-8 min-w-60 text-zinc-800 max-md:max-w-full gap-[20px]">
            <h2 className="self-start big-title-desk-index text-center">
              Liên hệ
            </h2>
            <p className="se-normal-desk-index max-md:max-w-full">
              Có câu hỏi nào không?
            </p>
            <p className="leading-6 re-normal-desk-index !text-[var(--text-medium-index)] max-md:max-w-full">
              Chúng tôi ở đây để giúp đỡ và trả lời bất kỳ câu hỏi nào bạn có thể
              có. Chúng tôi rất mong nhận được phản hồi từ bạn. Vui lòng điền vào
              mẫu này hoặc gửi email cho chúng tôi tại
            </p>
            <div className=" flex flex-col gap-[12px] w-full max-md:max-w-full re-normal-desk-index">
              <div className="flex gap-3 items-start w-full whitespace-nowrap max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4293226d4abd9346624d06bab90f668fdc3b523?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Email icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <p>private-client@beqholdings.com</p>
              </div>
              <div className="flex gap-3 items-start w-full max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e53c413123edf69fd58cabded2ef876caad3e9d6?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Phone icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <p>+84 912 345 678</p>
              </div>
              <div className="flex gap-3 items-start w-full max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/059d4e7af6a977786bd2e1b24396920d36417c63?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                  alt="Location icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <p>Tòa nhà BEQ, Quận 1, TP.HCM</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
