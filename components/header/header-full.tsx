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

export default function HeaderFull() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [changeLanguage, setChangeLanguage] = i18n.language === "en" ? "vi" : "en";
    const handleLanguageChange = (lang: string) => {
        if (lang !== "en" && lang !== "vi") return;
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    };
    const handleSelectChange = (lang: string) => {
        handleLanguageChange(lang);
    };
    return (
        <header className="w-full bg-background shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-around items-center">
                <div className="flex items-center">
                    <Image src='images/img/logo-full.svg' alt="Logo" width={200} height={120} className="mr-2" />
                </div>
                <nav className="flex space-x-4">
                    <a href="/intro" className="text-gray-700 hover:text-blue-500">INTRODUCTION</a>
                    <a href="/product" className="text-gray-700 hover:text-blue-500">PRODUCT</a>
                    <a href="/eco" className="text-gray-700 hover:text-blue-500">ECOSYSTEM</a>
                    <a href="/invest" className="text-gray-700 hover:text-blue-500">INVESTMENT BANK</a>
                </nav>
                <div className="flex space-x-4 h-[40px]">
                    <Button variant="outline" className="bg-background hover:bg-gray-100 rounded-none w-[185px] h-[40px]">
                        <ChatCenteredDots size={24} />
                        <p>Tu van mien phi</p>
                    </Button>
                    <Button variant="outline" className=" hover:bg-gray-100 rounded-none w-[155px] h-[40px]">
                        <CursorClick size={24} />
                        <p>Dau tu ngay</p>
                    </Button>
                    <Select onValueChange={handleSelectChange} defaultValue={currentLanguage}>
                        <SelectTrigger className="w-[150px] !h-[40px] flex flex-row items-center justify-between rounded-none ">
                            <GlobeSimple size={24} />
                            <SelectValue defaultValue={changeLanguage} />
                        </SelectTrigger>
                        <SelectContent className="w-[150px] rounded-none">
                            <SelectItem value="en">{t('currentLanguage_en')}</SelectItem>
                            <SelectItem value="vi">{t('currentLanguage_vi')}</SelectItem>

                        </SelectContent>
                    </Select>

                </div>
            </div>
        </header>
    );
}