"use client";

import React, { useState } from "react";
import SectionContainer from "./section-container";
import FAQItem from "./faq-item";
import { useTranslation } from "react-i18next";


const FAQSection: React.FC = () => {
  const {t} = useTranslation()
  const [openItem, setOpenItem] = useState<number | null>(null);

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
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <SectionContainer>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-md w-[768px] max-md:max-w-full">
          <h2 className="self-center text-4xl font-medium text-center text-zinc-800 max-md:max-w-full max-md:text-[28px]">
            {t('faq_section_title')}
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
