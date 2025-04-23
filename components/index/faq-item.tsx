"use client";
import React from "react";

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
    <div className={`${isOpen ? "mb-6" : "mb-2"} w-full max-md:max-w-full`}>
      <div
        className="flex flex-wrap justify-between items-center p-4 w-full bg-[var(--canvas-bg-1)] rounded-[8px] shadow-[0px_4px_32px_rgba(0,0,0,0.06)] max-md:max-w-full cursor-pointer"
        onClick={onClick}
      >
        <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
          <div className="flex items-center justify-center  bg-[var(--canvas-bg-1)] flex items-center justify-center gap-1 self-stretch px-1 my-auto w-10 h-10 whitespace-nowrap border border-[var(--other-border)] border-solid min-h-10 rounded-[100px]">
            <p className="flex items-center justify-center h-[23px] w-[22px] text-[var(--text-bold-index)] text-[18px] font-geist-mono font-[500] tracking-[0] leading-[100%]">{number}</p>
          </div>
          <h3 className="flex-1 shrink self-stretch my-auto me-normal-desk-index basis-0 max-md:max-w-full">
            {question}
          </h3>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a1ef802db1bbf360b0c47d7915d0e00b9bf12fe?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
          alt={isOpen ? "Collapse" : "Expand"}
          className={`object-contain shrink-0 self-stretch my-auto w-6 aspect-square transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="p-4 mt-1 bg-white rounded-lg shadow-[0px_4px_32px_rgba(0,0,0,0.06)]">
          <p className="text-base text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
