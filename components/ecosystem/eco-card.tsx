import { StaticImageData } from "next/image";
import Image from "next/image";
import { useInterface } from "../context/interface-context";

type ContentItem = string;

interface Section {
  img: StaticImageData;
  title: string;
  content: ContentItem[];
}

interface EcoCardProps {
  section: Section;
}

export default function EcoCard({ section }: EcoCardProps) {
  const { isDesktop, isTablet } = useInterface();
  return (
    <div className={`flex flex-col ${isDesktop ? 'gap-6' : isTablet ? 'gap-4' : 'gap-6'} w-full`}>
      <div className={`flex w-full ${isDesktop ? 'h-[400px]' : isTablet ? 'h-[256px]' : 'h-[320px]'}`}>
        <Image
          src={section.img}
          alt={section.title}
          className={`object-contain object-center w-full h-full`}
        />
      </div>
      <div className={`flex flex-col w-full ${isDesktop ? 'gap-4' : isTablet ? 'gap-2' : 'gap-4'}`}>
        <div className={`${isDesktop ? 'text-[31px]' : isTablet ? 'text-[30px]' : 'text-[28px]'} font-[500]`}>{section.title}</div>
        <div className="flex flex-col w-full gap-2">
          {section.content.map((item: ContentItem, contentIndex: number) => (
            <div
              key={contentIndex}
              className={`flex items-start w-full font-medium ${isDesktop ? 'text-lg' : isTablet ? 'text-lg' : 'text-base'}`}
            >
              <span className="mr-6 text-[var(--text-medium)]">•</span>
              <span className="text-[var(--text-medium)]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}