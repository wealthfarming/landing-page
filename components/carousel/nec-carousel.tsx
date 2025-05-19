"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import step1 from "@/public/images/nec-section-7/step-1.avif";
import step2 from "@/public/images/nec-section-7/step-2.avif";
import step3 from "@/public/images/nec-section-7/step-3.avif";
import step4 from "@/public/images/nec-section-7/step-4.avif";
import step5 from "@/public/images/nec-section-7/step-5.avif";
import overlay from "@/public/images/nec-section-7/overlay.avif";
import { useInterface } from "../context/interface-context";
import { useTranslation } from "react-i18next";

interface Step {
  id: number;
  title: string;
  description: string;
  imageSrc: any;
  label: string;
  href: string;
}

export function NecCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const { isDesktop, isTablet, isMobile } = useInterface();
  const { t } = useTranslation();

  const steps: Step[] = [
    {
      id: 1,
      title: `${t('step')} 1`,
      description: t('nec_section_7_description_1'),
      imageSrc: step1,
      label: `${t('download')} METAMASK`,
      href: "https://metamask.io/"
    },
    {
      id: 2,
      title: `${t('step')} 2`,
      description: t('nec_section_7_description_2'),
      imageSrc: step2,
      label: "",
      href: ""
    },
    {
      id: 3,
      title: `${t('step')} 3`,
      description: t('nec_section_7_description_3'),
      imageSrc: step3,
      label: `${t('access')} NFT NEC`,
      href: "https://wealthfarming.app/"
    },
    {
      id: 4,
      title: `${t('step')} 4`,
      description: t('nec_section_7_description_4'),
      imageSrc: step4,
      label: "",
      href: ""
    },
    {
      id: 5,
      title: `${t('step')} 5`,
      description: t('nec_section_7_description_5'),
      imageSrc: step5,
      label: "",
      href: ""
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  return (
    <div className="relative w-full h-[740px] bg-inherit">
      {/* Blur fade effect on left side */}
      { canScrollPrev && !isMobile &&
        <div className="absolute left-0 top-0 bottom-0 w-40 max-lg:w-20 z-10 pointer-events-none bg-gradient-to-r from-[#f6f8fd] to-transparent"></div>
      }
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: false,
          slidesToScroll: 1,
        }}
      >
        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem
              key={step.id}
              className="basis-full md:basis-1/2 lg:basis-1/4"
            >
              <div
                className={cn(
                  "flex flex-col items-start justify-center max-md:items-center transition-all duration-300 relative gap-15 shrink",
                  index < current ? "opacity-50 blur-sm" : "opacity-100 blur-0"
                )}
              >
                <div className="w-[200px]">
                  {/* Phone frame overlay */}
                  <div className="relative aspect-[1126/2436] w-full rounded-lg overflow-hidden">
                    <Image
                      src={overlay}
                      alt="Phone frame"
                      fill
                      className="object-contain z-0"
                    />

                    {/* Screen content (positioned inside the phone frame) */}
                    <div className="absolute top-[3%] left-[3%] right-[3%] bottom-[3%] z-10 overflow-hidden rounded-[20px]">
                      <Image
                        src={step.imageSrc}
                        alt={`Step ${step.id}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-start gap-2 pb-5 pl-5 pt-15 pr-10 bg-white w-full h-[260px] relative">
                  {/* Number circle positioned to overlap with the top of the card */}
                  <div className="absolute left-10 -top-5 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#1a1a1a] rounded-full z-10">
                    <span className="text-white font-medium">{step.id}</span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start">
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-[15px] text-[#4d4d4d] font-normal">
                      {step.description}
                    </p>
                  </div>
                  
                  {step.label != "" &&
                  <div className="h-10">
                    <a href={step.href} target="_blank" className="h-10 px-6 flex justify-center items-center rounded-sm shadow-sm gap-2 bg-[var(--primary)] hover:bg-[var(--primary-gradient)] hover:cursor-pointer">
                      <div
                        className="font-geist-mono button font-medium"
                      >
                        {step.label}
                      </div>
                    </a>
                  </div>
                  }
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {canScrollPrev && isDesktop &&(
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#00000033] z-20 h-10 w-10 rounded-full flex items-center justify-center hover:cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={30} className="text-[var(--canvas-bg)]" />
          </button>
        )}

        {canScrollNext && isDesktop &&(
          <button
            onClick={() => api?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#00000033] z-20 h-10 w-10 rounded-full flex items-center justify-center hover:cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={30} className="text-[var(--canvas-bg)]" />
          </button>
        )}
      </Carousel>

      {/* Blur fade effect on right side */}
      {
        canScrollNext && !isMobile &&
      <div className="absolute right-0 top-0 bottom-0 w-40 max-lg:w-20 z-10 pointer-events-none bg-gradient-to-l from-[#f6f8fd] to-transparent"></div>
      }
    </div>
  );
}
