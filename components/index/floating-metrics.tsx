import React from "react";

const FloatingMetrics: React.FC = () => {
  return (
    <div className="flex z-10 flex-col px-16 mt-0 w-full max-md:px-5 max-md:mt-0 max-md:max-w-full">
      <div className="overflow-hidden max-w-full bg-white rounded-md w-[203px]">
        <div className="gap-1 self-stretch px-1 py-2 w-full text-base font-semibold border-b border-gray-200 min-h-[39px] text-zinc-800">
          Lợi nhuận
        </div>
        <div className="flex w-full whitespace-nowrap">
          <div className="flex-1 shrink gap-1 self-stretch p-1 my-auto text-2xl font-medium text-white bg-green-500 basis-0">
            82.55%
          </div>
          <div className="flex-1 shrink gap-1 self-stretch p-1 h-full text-lg font-semibold text-green-500 basis-0">
            Năm
          </div>
        </div>
      </div>
      <div className="overflow-hidden self-end mt-64 max-w-full bg-white rounded-md w-[203px] max-md:mt-10">
        <div className="gap-1 self-stretch px-1 py-2 w-full text-base font-semibold border-b border-gray-200 min-h-[39px] text-zinc-800">
          Thanh khoản
        </div>
        <div className="flex w-full">
          <div className="flex-1 shrink gap-1 self-stretch p-1 h-full text-lg font-semibold text-orange-300 basis-0">
            Liên tục
          </div>
          <div className="flex-1 shrink gap-1 self-stretch p-1 my-auto text-2xl font-medium text-white whitespace-nowrap bg-orange-300 basis-0">
            24/7
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingMetrics;
