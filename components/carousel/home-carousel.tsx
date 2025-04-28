"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useTranslation } from 'react-i18next';
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import slide1 from "../../public/images/img/slide_1.jpg"
import slide2 from "../../public/images/img/slide_2.jpg"
import slide3 from "../../public/images/img/slide_3.jpg"
import slide4 from "../../public/images/img/slide_4.jpeg"
import slide5 from "../../public/images/img/slide_5.webp"
import slide6 from "../../public/images/img/slide_6.jpg"

const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
]


export const SliderDesktop = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const resizeObserver = useRef<() => void | null>(null);
    const { t } = useTranslation();
    const content = [
        t('home_section_3_slide_1'),
        t('home_section_3_slide_2'),
        t('home_section_3_slide_3'),
        t('home_section_3_slide_4'),
        t('home_section_3_slide_5'),
        t('home_section_3_slide_6'),

    ]

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1280);
        };

        handleResize(); // Check on mount
        window.addEventListener("resize", handleResize);
        resizeObserver.current = () => window.removeEventListener("resize", handleResize);

        return () => {
            if (resizeObserver.current) resizeObserver.current();
        };
    }, []);

    return (
        <div
            className={`w-full mx-auto mt-22 flex justify-center items-center max-w-screen  carousel_desktop`}
        >
            <Carousel
                plugins={[Autoplay({ delay: 8000 })]}
                opts={{ align: "center", loop: true }}
                className="w-full flex items-center justify-center h-[300px] relative group"
            >
                <CarouselContent visible={true} className="gap-8 w-[1200px] ">
                    {images.map((image, index) => (
                        <CarouselItem key={index} >
                            <div className="w-full flex justify-center items-center gap-8">
                                <Image
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className="object-cover w-[400px] h-[300px]"
                                />
                                <div className="w-2/3 flex flex-col justify-center items-start">
                                    <h1 className="text-lg h1">{content[index]}</h1>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}

                </CarouselContent>
                <div
                    className="absolute -bottom-10 flex-row items-center px-4 flex opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300"

                >
                    <CarouselPrevious className="bg-gray-800 text-white p-2 w-[40px] -left-2 h-[40px] rounded-full shadow-md">
                        Previous
                    </CarouselPrevious>
                    <CarouselNext className="bg-gray-800 text-white p-2 w-[40px] h-[40px] rounded-full shadow-md">
                        Next
                    </CarouselNext>
                </div>
            </Carousel>
        </div>
    );
};


export const SliderMobile = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const resizeObserver = useRef<() => void | null>(null);
    const { t } = useTranslation();
    const content = [
        t('home_section_3_slide_1'),
        t('home_section_3_slide_2'),
        t('home_section_3_slide_3'),
        t('home_section_3_slide_4'),
        t('home_section_3_slide_5'),
        t('home_section_3_slide_6'),

    ]

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        handleResize(); // Check on mount
        window.addEventListener("resize", handleResize);
        resizeObserver.current = () => window.removeEventListener("resize", handleResize);

        return () => {
            if (resizeObserver.current) resizeObserver.current();
        };
    }, []);

    return (
        <div className="w-full flex justify-center items-center h-full">
            <Carousel
                plugins={[Autoplay({ delay: 8000 })]}
                opts={{ align: "center", loop: true }}
                className="w-full h-full">
                <CarouselContent className="h-full w-full">
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative w-full h-full" >
                                <div className="custom-box-shadow z-[100]"></div>
                                <Image
                                    src={images[index]}
                                    alt={`Slide ${index + 1}`}
                                    width={335}
                                    height={408}
                                    className="h-full w-full object-cover object-center"
                                />
                                <div
                                    className="absolute bottom-0 left-0 font-bold p-4 w-full h-[50%] z-20 overflow-hidden flex items-end"
                                    style={{
                                        background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))"
                                    }}
                                >
                                    <p className="body-large !text-white">
                                        {content[index]}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}

                </CarouselContent>
                <div className="absolute inset-0 flex justify-between items-center px-4">
                    <CarouselPrevious className="bg-[#00000033] text-white p-2 w-[40px] h-[40px] absolute border-none left-2 rounded-full shadow-md z-10">
                        Previous
                    </CarouselPrevious>
                    <CarouselNext className="bg-[#00000033] text-white p-2 w-[40px] h-[40px] absolute border-none right-2 rounded-full shadow-md z-10">
                        Next
                    </CarouselNext>
                </div>
            </Carousel>
        </div>
    );
}

export const SlideTablet = () => {
    const { t } = useTranslation();
    const content = [
        t('home_section_3_slide_1'),
        t('home_section_3_slide_2'),
        t('home_section_3_slide_3'),
        t('home_section_3_slide_4'),
        t('home_section_3_slide_5'),
        t('home_section_3_slide_6'),

    ]
    return (
        <Carousel
            plugins={[Autoplay({ delay: 8000 })]}
            opts={{ align: "center", loop: true }}
            className="w-full flex items-center justify-center relative group">
            <CarouselContent visible={true} className="">
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 flex flex-row justify-center items-center" style={{ width: "calc(100% - 50px)" }}>
                            <div>
                                <Image
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    width={500}
                                    height={300}
                                    style={{ width: "calc(100% - 50px)" }} className="h-[290px] canvas-bg p-2"
                                />
                            </div>
                            <div style={{ width: "calc(60%)" }}>
                                <h1 className="h1 !font-[700] !text-[36px]">{content[index]}</h1>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div
                className="absolute -bottom-8 flex-row items-center px-4 flex opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <CarouselPrevious className="bg-gray-800 text-white p-2 w-[40px] h-[40px] rounded-full shadow-md">
                    Previous
                </CarouselPrevious>
                <CarouselNext className="bg-gray-800 text-white p-2 w-[40px] h-[40px] rounded-full shadow-md">
                    Next
                </CarouselNext>
            </div>
        </Carousel>
    )
}