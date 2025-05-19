"use client"
import { JSX, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SlideTablet, SliderMobile, SliderDesktop } from "../carousel/home-carousel";
import { FadeInSection } from "@/components/animation/introduction/Animations"
import { useInterface } from "@/components/context/interface-context";
export default function HomeSection3() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [width, setWidth] = useState(0);
    const titleRef = useRef<HTMLDivElement>(null);
    const { isDesktop, isMobile } = useInterface();


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );
        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        if (titleRef.current) {
            const handleResize = () => {
                setWidth(titleRef.current?.offsetWidth || 0);
                
            };
            handleResize(); // Check on mount
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
        // Cleanup observer on unmount

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <div className={`w-full flex flex-col gap-[40px] body-large ${isDesktop ? 'px-10 py-20' : 'px-5 py-10'}`}>
            <div ref={titleRef}>
                <FadeInSection>
                    <p
                        className={`${!isMobile ? 'text-center' : 'text-left'} mt-4 body-large !text-[var(--text-medium)] max-w-[800px] mx-auto ${isVisible ? "" : ""
                            }`}
                    >
                        {t('home_section_3_title')}
                    </p>
                </FadeInSection>
            </div>
            <style jsx>{`
            .slide-top {
                -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                        animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }
            @-webkit-keyframes slide-top {
                0% {
                    -webkit-transform: translateY(100px);
                            transform: translateY(100px);
                }
                100% {
                    -webkit-transform: translateY(0px);
                            transform: translateY(0px);
                }
            }
            @keyframes slide-top {
                0% {
                    -webkit-transform: translateY(100px);
                            transform: translateY(100px);
                }
                100% {
                    -webkit-transform: translateY(0px);
                            transform: translateY(0px);
                }
            }
            `}</style>
            <div
                className={`overflow-hidden ${isDesktop ? 'h-[450px] w-screen -ml-10 -mr-10' : 'h-[408px] w-full'}`}
            >
                {
                    width > 1130 ? (
                        <SliderDesktop />
                    ) : width > 767 ? (
                        <SlideTablet />
                    ) : (
                        <SliderMobile />
                    )
                }
            </div>
            <div className="">
                <FadeInSection>
                    <p className="body-large text-center max-w-[1100px] !text-[var(--text-medium)] mx-auto">

                        {t('home_section_3_description')}

                    </p>
                </FadeInSection>
            </div>
        </div>
    );
}
