import { useTranslation } from "react-i18next";
import React from "react";

const PerformanceTable: React.FC = () => {
  const performanceData = [
    { year: "2023", profit: "+74.39%", capital: "$174,387" },
    { year: "2024", profit: "+72.30%", capital: "$300,472" },
    { year: "2025", profit: "+31.31%", capital: "$394,563" },
  ];
  const {t} = useTranslation()
  return (
    <div className="p-2 mt-6 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
      <div className="flex items-start w-full text-lg font-semibold text-orange-300 border-b border-gray-200 max-md:max-w-full">
        <div className="flex-1 p-4 whitespace-nowrap">
        {t('year')}
        </div>
        <div className="flex-1 p-4 text-right whitespace-nowrap">
        {t('profit')}
        </div>
        <div className="flex-1 p-4 text-right">
        {t('capital')} $100k →
        </div>
      </div>

      {performanceData.map((item, index) => (
        <div
          key={item.year}
          className={`flex items-start w-full text-[15px] ${index % 2 !== 0 ? "rounded-lg bg-slate-50" : ""} max-md:max-w-full `}
        >
          <div className="w-1/5 p-4 font-semibold whitespace-nowrap h-[40px] text-center items-center flex">
            {item.year}
          </div>
          <div className="w-2/5 p-4 text-right text-[var(--primary-green)] h-[40px] items-center flex justify-end">
            {item.profit}
          </div>
          <div className="w-2/5 p-4 text-right h-[40px] items-center flex justify-end">
            {item.capital}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceTable;