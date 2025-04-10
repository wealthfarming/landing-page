import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import Section5 from "@/components/home/section5";
import Section6 from "@/components/home/section6";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeaderDesktopFull changeAt={300} />
      <div className="w-full flex-grow flex flex-col items-center justify-start bg-background lg:mt-20 lg:pt-14 mt-20 mb-[375px] sm:mt-20 md:mt-0 sm:py-18 md:py-18 relative z-30">
        <Section5 />
        <Section6 />
      </div>
      <FooterFull active={'product'} />

    </div>
  );
}
