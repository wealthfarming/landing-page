'use client'
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
import { useInterface } from "@/components/context/interface-context";

export default function HomePage() {
    const { isDesktop, isTablet } = useInterface();
    return (
        <>
        {(isDesktop || isTablet) && (
            <div className="grid grid-rows-[80px_1fr] md:grid-rows-[260px_1fr] lg:grid-rows-[260px_1fr] items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
            <HeaderDesktopFull changeAt={300} />
            <main className={`flex flex-col body row-start-2 justify-center items-center sm:items-start w-full ${isDesktop ? 'mb-[505px]' : isTablet ? 'mb-[505px]': ''}  relative bg-[var(--base-bg)] z-30`}>
                <Image src="/images/img/product_base.jpg" alt="Product Banner" width={735} height={80} className="absolute w-full -z-10 top-[-400px] object-cover hidden lg:block" />
                <HomeSection1 />
                <HomeSection2 />
                <HomeSection3 />
                <HomeSection4 />
                <HomeSection5 />
                <Section5 />
                <Section6 />
                <HomeSection6 />
                <HomeSection7 />
            </main>
            <FooterFull active={'introduction'} />
        </div>
        )}
        {(!isDesktop && !isTablet) && (
            <div className="grid grid-rows-[80px_1fr] md:grid-rows-[260px_1fr] lg:grid-rows-[260px_1fr] items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
            <HeaderDesktopFull changeAt={300} />
            <main className={`flex flex-col body row-start-2 justify-center items-center sm:items-start w-full ${isDesktop ? 'mb-[505px]' : isTablet ? 'mb-[505px]': ''}  relative bg-[var(--base-bg)] z-30`}>
                <Image src="/images/img/product_base.jpg" alt="Product Banner" width={735} height={80} className="absolute w-full -z-10 top-[-400px] object-cover hidden lg:block" />
                <HomeSection1 />
                <HomeSection2 />
                <HomeSection3 />
                <HomeSection4 />
                <HomeSection5 />
                <Section5 />
                <Section6 />
                <HomeSection6 />
                <HomeSection7 />
                <FooterFull active={'introduction'} />
            </main>
        </div>
        )}
        </>
    );
}
