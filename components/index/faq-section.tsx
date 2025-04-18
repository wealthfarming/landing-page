"use client";
import React, { useState } from "react";
import SectionContainer from "./section-container";
import FAQItem from "./faq-item";

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      number: "01",
      question: "Làm sao BEQ dự đoán chính xác thay đổi chỉ số?",
      answer:
        "BEQ sử dụng công nghệ AI tiên tiến phân tích dữ liệu lịch sử và các yếu tố thị trường để dự đoán thay đổi chỉ số với độ chính xác cao.",
    },
    {
      number: "02",
      question: "Rủi ro nếu Ủy ban chỉ số từ chối khuyến nghị?",
      answer:
        "Chúng tôi có cơ chế hedging và cắt lỗ tự động ở mức -13.33% để bảo vệ vốn đầu tư của bạn trong trường hợp này.",
    },
    {
      number: "03",
      question: "Cách mua NFT quỹ trên Wealth Farming?",
      answer:
        "Bạn có thể mua NFT quỹ bằng USDT/USDC trên nền tảng Wealth Farming với quy trình đơn giản và thanh khoản 24/7.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <SectionContainer>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-md w-[768px] max-md:max-w-full">
          <h2 className="self-center text-4xl font-medium text-center text-zinc-800 max-md:max-w-full max-md:text-[28px]">
            Những câu hỏi thường gặp
          </h2>
          <div className="mt-10 w-full max-md:max-w-full">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                number={item.number}
                question={item.question}
                answer={item.answer}
                isOpen={openItem === index}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FAQSection;
