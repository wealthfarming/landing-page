import React from "react";
import SectionContainer from "./section-container";
import SectionTitle from "./section-title";
import ChartIndex from "@/components/ui/chart-index";
import { useTranslation } from "react-i18next";

const ProblemSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer borderBottom={false} className={`pt-[20px]`} >
      <SectionTitle
        title={t('index_problem_section_title')}
        subtitle={`"${t('index_problem_section_subtitle')}"`}
      />
      <div className="flex relative flex-col mt-10 w-full min-h-[272px] max-md:max-w-full">
        <div className="flex relative flex-wrap gap-2 w-full min-h-[272px] max-md:max-w-full">
          <div className="flex pb-5 min-h-[272px] max-md:hidden" />
          <div className="flex flex-1 shrink basis-0 h-[272px] min-w-60 w-[1094px]">
            <ChartIndex />
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center self-center mt-10 text-sm font-medium text-gray-700">
        <div className="flex gap-2 items-center self-stretch my-auto">
          <div className="flex shrink-0 self-stretch my-auto w-5 h-5 bg-green-500 border border-emerald-200 border-solid rounded-[200px]" />
          <p className="self-stretch my-auto">BEQ Review Indexes</p>
        </div>
        <div className="flex gap-2 items-center self-stretch my-auto">
          <div className="flex shrink-0 self-stretch my-auto w-5 h-5 bg-rose-600 border border-red-300 border-solid rounded-[200px]" />
          <p className="self-stretch my-auto">S&P 500</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProblemSection;
