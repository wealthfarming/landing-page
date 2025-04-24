"use client";
import React from "react";
import { CaretDown } from "@phosphor-icons/react";

interface FAQItemProps {
  number: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  number,
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className={` w-full max-md:max-w-full`}>
      <div
        className={`flex flex-col justify-between items-center w-full shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)] max-md:max-w-full cursor-pointer canvas-bg-1 border border-[var(--primary-other) ${!isOpen ? 'hover:border-[var(--primary-bold)]' : ''} border-[1.5px]] `}
        onClick={onClick}
      >
        <div className="p-4 flex flex-wrap w-full canvas-bg-1 border-b border-[var(--primary-other)">
          <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
            <div className="flex items-center justify-center  flex items-center justify-center gap-1 self-stretch px-1 my-auto w-10 h-10 whitespace-nowrap border border-[var(--other-border)] border-solid min-h-10 rounded-[100px]">
              <p className="flex items-center justify-center h-[23px] w-[22px] body-large-index">{number}</p>
            </div>
            <h3 className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full body-large-index">
              {question}
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <CaretDown width={24} height={24} className="text-[var(--text-light)]" />
          </div>

        </div>
        {isOpen && (
          <div className="p-4 w-full">
            <p className="text-[15px]">{answer}</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default FAQItem;
