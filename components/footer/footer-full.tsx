import React from "react";

interface FooterFullProps {
  active?: string;
}

const FooterFull: React.FC<FooterFullProps> = ({ active }) => {
  return (
    <footer className="text-white bg-sky-950 w-full">
      <div className="flex flex-col justify-center items-center px-10 pt-20 pb-10 w-full border-b border-cyan-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-start w-full max-w-[1200px] max-md:max-w-full">
          <div className="flex-1 shrink text-base leading-6 basis-0 min-h-[173px] min-w-60 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8761044c6235d40f86b91092167385a3bbd3ae21?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
              alt="BEQ Logo"
              className="object-contain max-w-full aspect-[4.22] w-[118px]"
            />
            <p className="flex-1 mt-4 max-md:max-w-full">
              Wealth Farming – Hệ sinh thái tài chính thuộc BeQ Group Foundation
              (UK), được cấp phép hợp pháp bởi chính phủ Vương quốc Anh (Số đăng
              ký 14478063, cấp ngày 11/11/2022). Hoạt động theo các mã ngành
              58190, 64205, 64301, 66300, với mức bảo lãnh tài chính được phê
              duyệt lên đến 30 triệu GBP
            </p>
          </div>
          <div className="flex flex-wrap flex-1 shrink gap-7 items-start basis-0 min-w-60 max-md:max-w-full">
            <nav className="text-white w-[130px]">
              <h3 className="text-lg font-semibold">Trang</h3>
              <ul className="mt-4 w-full text-xs font-medium">
                <li>GIỚI THIỆU</li>
                <li className="mt-2">SẢN PHẨM</li>
                <li className="mt-2">HỆ SINH THÁI</li>
                <li className="mt-2">NGÂN HÀNG ĐẦU TƯ</li>
              </ul>
            </nav>
            <div className="min-w-60 w-[253px]">
              <div className="max-w-full text-white w-[253px]">
                <h3 className="text-lg font-semibold">Liên hệ</h3>
                <div className="mt-4 w-full text-xs font-medium">
                  <div className="flex gap-2 items-start w-full whitespace-nowrap">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/267db18b07327e7c2de43ca1549adc0184cd6b75?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                      alt="Email icon"
                      className="object-contain shrink-0 w-4 aspect-square"
                    />
                    <p className="flex-1 shrink basis-0">
                      private-client@beqholdings.com
                    </p>
                  </div>
                  <div className="flex gap-2 items-start mt-2 w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/182e2072ceebd04e24ebe46d7c023314de6942e5?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                      alt="Phone icon"
                      className="object-contain shrink-0 w-4 aspect-square"
                    />
                    <p className="flex-1 shrink basis-0">+84 912 345 678</p>
                  </div>
                  <div className="flex gap-2 items-start mt-2 w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9146726f4a56bf97cdef6fcce5f7d515336b0ffc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                      alt="Location icon"
                      className="object-contain shrink-0 w-4 aspect-square"
                    />
                    <p className="flex-1 shrink basis-0">
                      Tòa nhà BEQ, Quận 1, TP.HCM
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 max-w-full w-[159px]">
                <h3 className="text-lg font-semibold text-white">
                  Social Proof
                </h3>
                <div className="flex gap-2 items-center mt-4 w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bd17d07fd0de627fa8a774dcc83b432ec9b4992?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                    alt="Social proof 1"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[5.13] w-[118px]"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c10f57039c350410bcf6bfb3dcbfb5b24306b98?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"
                    alt="Social proof 2"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[33px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-10 py-4 w-full text-sm font-medium border-b border-gray-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 justify-center w-full max-w-[1200px] max-md:max-w-full">
          <p className="flex-1 shrink opacity-50 basis-0 max-md:max-w-full">
            Trang web được bảo vệ bởi AES-256. Mọi hành vi sao chép trái phép sẽ
            bị truy tố.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFull;
