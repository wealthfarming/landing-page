import React from "react";

const PerformanceTable: React.FC = () => {
  const performanceData = [
    { year: "2023", profit: "+74.39% ", capital: "$174,387 " },
    { year: "2024", profit: "+72.30% ", capital: "$300,472 " },
    { year: "2025", profit: "+31.31% ", capital: "$394,563 " },
  ];

  return (
    <div className="p-2 mt-6 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
      <div className="flex flex-wrap items-start w-full text-lg font-semibold text-orange-300 border-b border-gray-200 max-md:max-w-full">
        <div className="flex-1 shrink gap-1 p-4 whitespace-nowrap basis-0 w-[145px]">
          Năm
        </div>
        <div className="flex-1 shrink gap-1 p-4 text-right basis-0 min-w-60">
          Lợi nhuận
        </div>
        <div className="flex-1 shrink gap-1 p-4 text-right basis-0 min-w-60">
          Vốn $100k →
        </div>
      </div>

      {performanceData.map((item, index) => (
        <div
          key={item.year}
          className={`flex flex-wrap items-start w-full ${index % 2 !== 0 ? "rounded-lg bg-slate-50" : ""} max-md:max-w-full`}
        >
          <div className="flex-1 shrink gap-1 p-4 font-semibold whitespace-nowrap basis-0 w-[145px]">
            {item.year}
          </div>
          <div className="flex-1 shrink gap-1 p-4 text-right text-green-500 basis-0 min-w-60">
            {item.profit}
          </div>
          <div className="flex-1 shrink gap-1 p-4 text-right basis-0 min-w-60">
            {item.capital}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceTable;
