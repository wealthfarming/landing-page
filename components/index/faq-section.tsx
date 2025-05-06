"use client";

import React, { useState } from "react";
import SectionContainer from "./section-container";
import FAQItem from "./faq-item";
import { useTranslation } from "react-i18next";


const FAQSection: React.FC = () => {
  const {t} = useTranslation()
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const faqItems = [
    {
      number: "01",
      question: t('faq_section_question_1'),
      answer: t('faq_section_answer_1'),
    },
    {
      number: "02",
      question: t('faq_section_question_2'),
      answer: t('faq_section_answer_2'),
    },
    {
      number: "03",
      question: t('faq_section_question_3'),
      answer: t('faq_section_answer_3'),
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
          <div className="self-center text-[40px] text-center max-md:max-w-full max-md:text-[29px] font-semibold">
          {t('faq_section_title')}
          </div>
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
