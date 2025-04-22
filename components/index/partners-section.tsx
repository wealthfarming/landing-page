import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import SectionContainer from "./section-container";

const PartnersSection: React.FC = () => {
  const partnerLogos = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d6b4db3b0ecf247795e785a30ae05f08d13f5ff4",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f33e6ce14b37804aea739ce2b9de0a0f679594f7",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0031d03b3be52853099d898b6c20a4f4c17739e1",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c0886503eecec4e8594f60564cdd315681e63e7f",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c5bbe9a72dd3f25c336b0604690ae868aa8a11dc",
  ];

  const logos = [...partnerLogos, ...partnerLogos, ...partnerLogos]; // Tăng số lượng để không thấy khoảng trống

  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      x.set(x.get() - 1); // tốc độ di chuyển, tăng số sẽ nhanh hơn
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth / 3; // vì nhân 3 lần
        if (Math.abs(x.get()) >= totalWidth) {
          x.set(0); // quay về đầu mà không gây giật
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [x]);

  const transformX = useTransform(x, (value) => `${value}px`);

  return (
    <SectionContainer>
      <p className="max-w-screen-md text-base text-center text-gray-700 max-md:max-w-full">
        Được tin cậy và sử dụng bởi các đối tác
      </p>

      <div className="overflow-hidden mt-6 max-w-screen-md w-full max-md:max-w-full mx-auto">
        <motion.div
          ref={trackRef}
          style={{
            display: "flex",
            x: transformX,
          }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="w-[109px] object-contain aspect-[2.27]"
            />
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default PartnersSection;
