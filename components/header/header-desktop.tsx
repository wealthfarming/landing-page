"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ChatCenteredDots, CursorClick, GlobeSimple } from "@phosphor-icons/react";
import { useEffect, useState } from "react";


export default function HeaderDesktopFull({ changeAt }: { changeAt: number }) {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > changeAt);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const currentLanguage = i18n.language;
    const changeLanguage = i18n.language === "en" ? "vi" : "en";
    const handleLanguageChange = (lang: string) => {
        if (lang !== "en" && lang !== "vi") return;
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    };
    const handleSelectChange = (lang: string) => {
        handleLanguageChange(lang);
    };
    return (
        <header
            className={`w-full ${isScrolled ? 'bg-white' : 'bg-transparent'} shadow-md z-50 transition-all duration-300 ease-in-out fixed h-[80px] top-0`}
        >
            <div className="px-16 py-4 flex justify-between items-center transition-all duration-300 ease-in-out">
                <Image src={isScrolled ? 'images/img/logo_full_dark.svg' : 'images/img/logo-full.svg'} alt="Logo" width={100} height={120} className="mr-2" />
                <div className={"flex space-x-4 h-[40px] w-10/12 items-center" + (isScrolled ? " justify-end" : " justify-between")}>
                    <nav className={" space-x-4 items-center transition duration-300 ease-in-out opacity-100 text-sm hidden md:flex" + (isScrolled ? "  " : " mr-4")}>
                        <a href="/intro" className={" hover:text-blue-500 " + (isScrolled ? "" : " text-white")}>{t('header_introduct')}</a>
                        <a href="/product" className={" hover:text-blue-500" + (isScrolled ? "" : " text-white")}>{t('header_product')}</a>
                        <a href="/eco" className={" hover:text-blue-500" + (isScrolled ? "" : " text-white")}>{t('header_eco')}</a>
                        <a href="/invest" className={" hover:text-blue-500" + (isScrolled ? "" : " text-white")}>{t('header_investBank')}</a>
                    </nav>
                    <div className="flex flex-row gap-4 items-center justify-items-start transition duration-300 ease-in-out opacity-100 text-sm">
                        <Button variant="outline" className="bg-background hover:bg-gray-100 border-none rounded-none w-[185px] h-[40px] transition-transform duration-300 ease-in-out ">
                            <ChatCenteredDots size={24} />
                            <p>
                                {t('header_contactUs')}
                            </p>
                        </Button>
                        <Button variant="outline" className="bg-[var(--color-primary)] border-none rounded-none w-[155px] h-[40px] transition-transform duration-300 ease-in-out ">
                            <CursorClick size={24} />
                            <p>
                                {t('header_investNow')}
                            </p>
                        </Button>

                        {/* Language Select */}
                        {!isScrolled && (
                            <Select onValueChange={handleSelectChange} defaultValue={currentLanguage}>
                                <SelectTrigger className="!h-[40px] flex flex-row items-center justify-between rounded-none bg-background">
                                    <GlobeSimple size={24} />
                                    <SelectValue placeholder={changeLanguage} />
                                </SelectTrigger>
                                <SelectContent className="rounded-none">
                                    <SelectItem value="en">{t('currentLanguage_en')}</SelectItem>
                                    <SelectItem value="vi">{t('currentLanguage_vi')}</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    </div>


                </div>
            </div>
        </header>
    );
}