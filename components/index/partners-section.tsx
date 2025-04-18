import React from "react";
import SectionContainer from "./section-container";

const PartnersSection: React.FC = () => {
  const partnerLogos = ["https://cdn.builder.io/api/v1/image/assets/TEMP/d6b4db3b0ecf247795e785a30ae05f08d13f5ff4?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540", "https://cdn.builder.io/api/v1/image/assets/TEMP/f33e6ce14b37804aea739ce2b9de0a0f679594f7?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540", "https://cdn.builder.io/api/v1/image/assets/TEMP/0031d03b3be52853099d898b6c20a4f4c17739e1?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540", "https://cdn.builder.io/api/v1/image/assets/TEMP/c0886503eecec4e8594f60564cdd315681e63e7f?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540", "https://cdn.builder.io/api/v1/image/assets/TEMP/c5bbe9a72dd3f25c336b0604690ae868aa8a11dc?placeholderIfAbsent=true&apiKey=29da101503f047abb81734f632fb9540"];

  return (
    <SectionContainer>
      <p className="max-w-screen-md text-base text-center text-gray-700 max-md:max-w-full">
        Được tin cậy và sử dụng bởi các đối tác
      </p>
      <div className="flex flex-wrap gap-10 items-center justify-center mt-6 max-md:max-w-full">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner logo ${index + 1}`}
            className="object-contain shrink-0 self-stretch my-auto aspect-[2.27] w-[109px]"
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default PartnersSection;
