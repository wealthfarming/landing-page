"use client";
import React, { useState } from "react";
import SectionContainer from "./section-container";
import FAQItem from "./faq-item";

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const faqItems = [
    {
      number: "1",
      question: "Làm sao BEQ dự đoán chính xác thay đổi chỉ số?",
      answer:
        "Video giải thích từ TS. Mai",
    },
    {
      number: "2",
      question: "Rủi ro nếu Ủy ban chỉ số từ chối khuyến nghị?",
      answer:
        "Infographic cơ chế hedging bằng hợp đồng tương lai",
    },
    {
      number: "3",
      question: "Cách mua NFT quỹ trên Wealth Farming?",
      answer:
        "Video hướng dẫn",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((i) => i !== index) 
        : [...prevOpenItems, index]              
    );
  };

  return (
    <SectionContainer>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-md w-[768px] max-md:max-w-full gap-[40px]">
          <h2 className="self-center h1-index text-center max-md:max-w-full">
            Những câu hỏi thường gặp
          </h2>
          <div className="w-full max-md:max-w-full bg-[var(--canvas-bg)] p-5 border border-[var(--primary-other)] flex flex-col gap-[16px]">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                number={item.number}
                question={item.question}
                answer={item.answer}
                isOpen={openItems.includes(index)}
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
