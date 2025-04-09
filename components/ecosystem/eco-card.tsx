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
    <div className="lg:p-[40px_60px_30px_40px] flex flex-col gap-6 w-full pt-10 px-6 mb-10">
      <div className="flex w-full lg:h-[700px]">
        <img src={section.img} alt={section.title} />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="h2 xl:!text-[55px]">{section.title}</div>
        <div className="flex flex-col w-full">
          {section.content.map((item: ContentItem, contentIndex: number) => (
            <div key={contentIndex} className="flex items-start w-full xl:text-2xl mb-2">
              <span className="mr-2 text-[var(--text-medium)]">•</span>
              <span className="text-[var(--text-medium)]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}