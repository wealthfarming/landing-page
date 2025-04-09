"use client"
import { useTranslation } from "react-i18next";
import { Slider } from "../carousel/home-carousel";


export default function HomeSection3() {
    const { t } = useTranslation();
    return (
        <div className="w-full body-large">
            <div>
                <p className="mt-4 text-[20px] text-lg text-center max-w-[800px] mx-auto">
                    {t('home_section_3_title')}
                </p>
            </div>
            <div className="overflow-hidden h-[450px] w-full">
                <Slider />
            </div>
            <div className="my-12">
                <p className="mt-4 text-[20px] text-lg text-center max-w-[1100px] mx-auto">
                    {t('home_section_3_description')}
                </p>
            </div>
        </div>
    )
}
