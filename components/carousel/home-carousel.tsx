"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { t } from "i18next"
import Image from "next/image"

const images = [
    "/images/img/slide_1.jpg",
    "/images/img/slide_2.jpg",
    "/images/img/slide_3.jpg",
    "/images/img/slide_4.jpeg",
    "/images/img/slide_5.webp",
    "/images/img/slide_6.jpg",
]

const content = [
    t('home_section_3_slide_1'),
    t('home_section_3_slide_2'),
    t('home_section_3_slide_3'),
    t('home_section_3_slide_4'),
    t('home_section_3_slide_5'),
    t('home_section_3_slide_6'),

]

export const Slider = () => {
    return (
        <div className="w-full mx-auto mt-8 flex justify-center items-center max-w-[1200px] "
            style={{ "transform": "perspective(1200px) scale(0.8) rotateY(15deg) !important" }} >
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full flex flex-col items-center justify-center  h-[400px] relative group"
            >
                <CarouselContent className="overflow-visible gap-12">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="w-2/3"
                        >
                            <div className="w-full h-full flex flex-row justify-center items-center gap-16">
                                <Image
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-[400px] "
                                />
                                <div className="h-full flex flex-col justify-center items-start">
                                    <h1 className="h1">
                                        {content[index]}
                                    </h1>
                                </div>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute -bottom-10 flex-row items-center px-4 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ "transform": "perspective(1200px) rotateY(-15deg) !important" }}>
                    <CarouselPrevious className="bg-gray-800 text-white p-2 w-[40px] h-[40px] rounded-full shadow-md">
                        Previous
                    </CarouselPrevious>
                    <CarouselNext className="bg-gray-800 text-white p-2 w-[40px] h-[40px] rounded-full shadow-md">
                        Next
                    </CarouselNext>
                </div>
            </Carousel>
        </div>
    )
}