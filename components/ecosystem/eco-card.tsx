type ContentItem = string;

interface Section {
  img: string;
  title: string;
  content: ContentItem[];
}

interface EcoCardProps {
  section: Section;
}

export default function EcoCard({ section }: EcoCardProps) {
  return (
    <div className="flex flex-col gap-6 w-full pt-10 px-6 mb-10 lg:p-[40px_60px_30px_40px]">
      <div className="flex w-full lg:h-[320px] xl:h-full">
        <img
          src={section.img}
          alt={section.title}
          sizes="max((min(max(100vw - 80px, 1px), 1200px) - 60px) / 2, 1px)"
          className="object-contain w-full lg:h-[300px] h-full"
        />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="h2 xl:text-[31px] lg:text-[28px] text-[26px]">{section.title}</div>
        <div className="flex flex-col w-full">
          {section.content.map((item: ContentItem, contentIndex: number) => (
            <div
              key={contentIndex}
              className="flex items-start w-full lg:text-lg xl:text-lg text-base mb-2"
            >
              <span className="mr-2 text-[var(--text-medium)]">•</span>
              <span className="text-[var(--text-medium)]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}