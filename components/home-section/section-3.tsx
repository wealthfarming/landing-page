"use client"
import { JSX, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SlideTablet, SliderMobile, SliderDesktop } from "../carousel/home-carousel";

export default function HomeSection3() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [width, setWidth] = useState(0);
    const [currentSlider, setCurrentSlider] = useState<JSX.Element | null>(null);
    const titleRef = useRef<HTMLDivElement>(null);

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

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full body-large">
            <div ref={titleRef}>
                <p
                    className={`mt-4 text-[20px] text-lg text-center !text-[var(--text-medium)] max-w-[800px] mx-auto ${isVisible ? "slide-top" : ""
                        }`}
                >
                    {t('home_section_3_title')}
                </p>
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
            <div className="overflow-hidden h-[450px] w-full">
                <div className="lg:block md:hidden sm:hidden hidden">
                    <SliderDesktop />
                </div>
                <div className="lg:hidden md:hidden sm:block block">
                    <SliderMobile />
                </div>
                <div className="lg:hidden md:block sm:hidden hidden">
                    <SlideTablet />

                </div>
            </div>
            <div className="mb-12">
                <p className="mt-4 text-[20px] text-lg text-center max-w-[1100px] !text-[var(--text-medium)] mx-auto">
                    {t('home_section_3_description')}
                </p>
            </div>
        </div>
    );
}
