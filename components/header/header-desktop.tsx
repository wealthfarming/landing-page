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
import { ChatCenteredDots, CursorClick, GlobeSimple, List } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useInterface } from '@/components/context/interface-context';


export default function HeaderDesktopFull({ changeAt }: { changeAt: number }) {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const { isDesktop } = useInterface();

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
            className={`w-full px-[40px] py-[16px] ${isScrolled ? 'canvas-bg-1 shadow' : 'bg-transparent shadow-none'} flex justify-center transition-all duration-300 ease-in-out fixed top-0`}
            style={{ zIndex: 1000 }}
        >
            <div className=" max-w-[1200px] flex flex-[1_0_0] justify-between items-center transition-all duration-300 ease-in-out">
                <Image src={isScrolled ? 'images/img/logo_full_dark.svg' : 'images/img/logo-full.svg'} alt="Logo" width={117} height={28} />
                {isDesktop && <nav className={"h-[24px] flex items-center flex-[0_0_auto]"}>
                    <a href="/" className={" hover:text-blue-500 px-[12px] " + (isScrolled ? "" : " text-white")}>{t('header_introduct')}</a>
                    <a href="/product" className={" hover:text-blue-500 px-[12px]" + (isScrolled ? "" : " text-white")}>{t('header_product')}</a>
                    <a href="/eco" className={" hover:text-blue-500 px-[12px]" + (isScrolled ? "" : " text-white")}>{t('header_eco')}</a>
                    <a href="/investment-bank" className={" hover:text-blue-500 px-[12px]" + (isScrolled ? "" : " text-white")}>{t('header_investBank')}</a>
                </nav>}
                <div className="flex flex-row gap-[8px] items-center justify-items-start transition duration-300 ease-in-out opacity-100 text-sm z-[1001]">
                    <Button variant="outline" className="bg-background hover:bg-gray-100 border-none rounded-none w-[185px] h-[40px] transition-transform duration-300 ease-in-out ">
                        <ChatCenteredDots size={24} />
                        <p>
                            {t('free_support')}
                        </p>
                    </Button>
                    <Button variant="outline" className="bg-[var(--color-primary)] border-none rounded-none w-[155px] h-[40px] transition-transform duration-300 ease-in-out ">
                        <CursorClick className="animate-diagonal" size={24} />
                        <p>
                            {t('header_investNow')}
                        </p>
                    </Button>

                    {/* Language Select */}
                    {!isScrolled && isDesktop && (
                        <Select onValueChange={handleSelectChange} defaultValue={currentLanguage}>
                            <SelectTrigger className="!h-[40px] flex flex-row items-center justify-between rounded-none bg-background w-[80px]">
                                <GlobeSimple size={24} />
                                <SelectValue placeholder={changeLanguage} />
                            </SelectTrigger>
                            <SelectContent className="rounded-none z-[1001]">
                                <SelectItem value="en">{t('currentLanguage_en')}</SelectItem>
                                <SelectItem value="vi">{t('currentLanguage_vi')}</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                    {!isDesktop &&
                        <div className=" flex p-0 m-0 items-center justify-center border rounded-[6px] w-[40px] h-[40px]">
                            <List width={35} height={35}/>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
}