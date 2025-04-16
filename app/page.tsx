'use client';
import HeaderDesktopFull from "@/components/header/header-desktop";
import HomeSection1 from "@/components/home-section/section-1";
import HomeSection2 from "@/components/home-section/section-2";
import HomeSection3 from "@/components/home-section/section-3";
import HomeSection4 from "@/components/home-section/section-4";
import Image from "next/image";
import HomeSection5 from "@/components/home-section/section-5"
import HomeSection6 from "@/components/home-section/section-6"
import HomeSection7 from "@/components/home-section/section-7"
import Section5 from "@/components/home/section5";
import Section6 from "@/components/home/section6";
import FooterFull from "@/components/footer/footer-full";
import FadeInSection from '@/components/animation/introduction/FadeInSection';

export default function Home() {
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">

      {/* <HeaderDesktopFull changeAt={300} /> */}
      <main className="flex flex-col body row-start-2 justify-center items-center sm:items-start w-full relative">
        <Image src="/images/img/product_base.jpg" alt="Product Banner" width={735} height={260} className="absolute w-full h-[260px] -z-10 top-[-20px] object-cover hidden lg:block" />
        <FadeInSection>
          <HomeSection1 />
        </FadeInSection>

        <FadeInSection>
          <HomeSection2 />
        </FadeInSection>

        <FadeInSection>
          <HomeSection3 />
        </FadeInSection>

        <FadeInSection>
          <HomeSection4 />
        </FadeInSection>

        <FadeInSection>
          <HomeSection5 />
        </FadeInSection>

        <FadeInSection>
          <Section5 />
        </FadeInSection>

        <FadeInSection>
          <Section6 />
        </FadeInSection>

        <FadeInSection>
          <HomeSection6 />
        </FadeInSection>

        <FadeInSection>
          <HomeSection7 />
        </FadeInSection>
        <FooterFull active={'product'} />
      </main>
    </div>
  );
}
