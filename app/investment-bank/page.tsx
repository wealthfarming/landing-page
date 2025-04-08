'use client';
export default function InvestmentBank() {
  return (
    <div>
      <div className="flex w-full h-[140px] gap-[10px] py-[40px] md:px-[40px] px-[20px] items-center bg-[#F6F8FD]">
        <p className="text-4xl">
          Ngân hàng đầu tư
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:gap-[10px] gap-[40px] md:p-[40px] p-[20px] pb-[40px] xl:w-[1200px] w-full">
        <div className="gap-[40px] md:w-[336px] md:min-w-[336px] min-w-full w-[100%]">

          <div className="h-[51px] bg-[#E8B561] py-[12px] px-[16px]">
            <p>Báo cáo thường niên</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[#F6F8FD]">
            <p>Báo cáo phân bổ tài sản NFT</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[#F6F8FD]">
            <p>Công bố thông tin Wealth Farming</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[#F6F8FD]">
            <p>Báo cáo tình hình quản trị quỹ</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[#F6F8FD]">
            <p>Danh mục sản phẩm đầu tư NFT</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[#F6F8FD]">
            <p>Dành cho nhà đầu tư mới</p>
          </div>
          <div className="h-[51px] py-[12px] px-[16px] bg-[#F6F8FD]">
            <p>Điều lệ & Quy chế Wealth Farming</p>
          </div>

        </div>
        <div className="w-full">
          <div className="h-[34px] border-b border-[#EBEBEB] ">
            <div className="h-[22px] text-[#FA0505] font-bold">
              <p>Các bài viết mới</p>
            </div>
          </div>
          <div className="h-[97px] py-[20px] border-b border-[#EBEBEB]">
            <div className="flex-col gap-[10px] items-center">
              <p>Bài viết</p>
              <p className="text-[#808080]">March 28, 2025</p>
            </div>
          </div>
          <div className="h-[97px] py-[20px] border-b border-[#EBEBEB]">
            <div className="flex-col gap-[10px] items-center">
              <p>Importing Content</p>
              <p className="text-[#808080]">March 28, 2025</p>
            </div>
          </div>
        </div>
      </div>



    </div>

  );
}
