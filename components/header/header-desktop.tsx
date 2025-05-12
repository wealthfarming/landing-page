"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChatCenteredDots, CursorClick, GlobeSimple, List, Phone, Envelope } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useInterface } from '@/components/context/interface-context';
import logoFullDark from "../../public/images/img/logo_full_dark.svg";
import logoFull from "../../public/images/img/logo-full.svg";
import { useLanguage } from "../context/i18n";

export default function HeaderDesktopFull({ changeAt }: { changeAt: number }) {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDesktop, isMobile } = useInterface();
  const {setLanguage} = useLanguage()

  // State to control menu visibility on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > changeAt);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentLanguage = i18n.language;
  const changeLanguage = i18n.language === "en" ? "vi" : "en";
  const handleLanguageChange = (lang: string) => {
    if (lang !== "en" && lang !== "vi" && lang !== "fr") return;
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };
  const handleSelectChange = (lang: string) => {
    handleLanguageChange(lang);
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <header
      className={`w-full ${isScrolled || !isDesktop ? 'canvas-bg-1 shadow-md ' : 'bg-transparent'} transition-all duration-300 ease-in-out fixed h-[72px] top-0 flex items-center justify-center ${!isMobile ? 'px-10' : 'px-5'} py-4`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-between flex-[1_0_0] transition-all duration-300 ease-in-out max-w-[1200px]">
        <Image src={isScrolled || !isDesktop ? logoFullDark : logoFull} alt="Logo" width={117} height={28} className="w-[117px] h-[28px]" />
        {isDesktop && (
          <nav className={"items-center transition duration-300 ease-in-out opacity-100 nav"}>
            <Link href="/" className={"hover:text-[var(--primary)] px-3" + (isScrolled ? "" : " text-white")}>
              {t('header_introduct')}
            </Link>
            <Link href="/product" className={"hover:text-[var(--primary)] px-3" + (isScrolled ? "" : " text-white")}>
              {t('header_product')}
            </Link>
            <Link href="/ecosystem" className={"hover:text-[var(--primary)] px-3" + (isScrolled ? "" : " text-white")}>
              {t('header_eco')}
            </Link>
            <Link href="/investment-bank" className={"hover:text-[var(--primary)] px-3" + (isScrolled ? "" : " text-white")}>
              {t('header_investBank')}
            </Link>
            <a 
              href="https://find-and-update.company-information.service.gov.uk/company/14478063" 
              target="_blank" 
              rel="noopener noreferrer"
              className={"hover:text-[var(--primary)] px-3" + (isScrolled ? "" : " text-white")}
            >
              {t('header_license')}
            </a>
          </nav>
        )}

        <div className="flex flex-row gap-2 items-center justify-items-start transition duration-300 ease-in-out opacity-100 text-sm z-[1001]">
          {!isMobile && (
            <>
              <a href="https://www.facebook.com/people/Wealth-Farming/61574682066111/" target="_blank" >
                <Button variant="outline" className="!bg-background hover:brightness-[0.95] button border-none rounded-none h-[40px] transition-transform duration-300 ease-in-out ">
                  <ChatCenteredDots size={24} className="min-w-[20px] min-h-[20px]" />
                  <p>{t('free_support')}</p>
                </Button>
              </a>
              <a href="https://wealthfarming.app/" target="_blank" >
                <Button variant="outline" className={`!bg-[var(--color-primary)] hover:brightness-[1.1] border-none button rounded-none ${i18n.language === 'fr' ? 'w-[180px]' : 'w-[148px]'} h-[40px] transition-transform duration-300 ease-in-out`}>
                  <CursorClick size={24} className="min-w-[20px] min-h-[20px] animate-diagonal-2" />
                  <p>{t('header_investNowup')}</p>
                </Button>
              </a>
            </>
          )}

          {/* Language Select */}
          {!isScrolled && isDesktop && (
            <Select onValueChange={handleSelectChange} defaultValue={currentLanguage}>
              <SelectTrigger className="!h-[43px] flex flex-row items-center justify-between rounded-none bg-background !rounded-[4px] w-[200px]">
                <GlobeSimple size={18} className="min-w-[18px] min-h-[18px]" />
                <SelectValue placeholder={changeLanguage} />
              </SelectTrigger>
              <SelectContent className="rounded-none z-[1001] !w-[200px] !max-w-[200px] !min-w-[200px]">
                <SelectItem value="en">{t('currentLanguage_en')}</SelectItem>
                <SelectItem value="vi">{t('currentLanguage_vi')}</SelectItem>
                <SelectItem value="fr">{t('currentLanguage_fr')}</SelectItem>
              </SelectContent>
            </Select>
          )}

          {/* Mobile Menu Toggle */}
          {!isDesktop && (
            <div className="flex p-0 m-0 items-center justify-center border rounded-[6px] w-[40px] h-[40px]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <List width={35} height={35} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
    {isMobile && isMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white p-4 flex flex-col items-center border-t-2 border-b-2 border-gray-200">
            <Link href="/" className="py-2 text-[11px]">{t('header_introduct')}</Link>
            <Link href="/product" className="py-2 text-[11px]">{t('header_product')}</Link>
            <Link href="/ecosystem" className="py-2 text-[11px]">{t('header_eco')}</Link>
            <Link href="/investment-bank" className="py-2 text-[11px]">{t('header_investBank')}</Link>
            <a 
              href="https://find-and-update.company-information.service.gov.uk/company/14478063" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-2 text-[11px]"
            >
              {t('header_license')}
            </a>

            {/* Language Selector */}
            <Select onValueChange={handleSelectChange} defaultValue={currentLanguage}>
            <SelectTrigger className="!h-[43px] flex flex-row items-center justify-between rounded-none bg-background !rounded-[4px] w-full mb-4 mt-4 text-[11px]">
                <GlobeSimple size={18} className="min-w-[18px] min-h-[18px]" />
                <SelectValue placeholder={changeLanguage} />
            </SelectTrigger>
            <SelectContent className="rounded-none z-[1001] !w-full !max-w-full !min-w-full text-[11px]">
                <SelectItem value="en">{t('currentLanguage_en')}</SelectItem>
                <SelectItem value="vi">{t('currentLanguage_vi')}</SelectItem>
                <SelectItem value="fr">{t('currentLanguage_fr')}</SelectItem>
            </SelectContent>
            </Select>

            {/* Buttons below menu */}
            <div className="flex w-full justify-between gap-4 mb-2">
            {/* Free Support Button */}
            <a href="https://www.facebook.com/people/Wealth-Farming/61574682066111/" target="_blank" className="w-[48%]">
                <Button
                variant="outline"
                className="w-full !bg-background hover:brightness-[0.95] button border-none rounded-none h-[40px] flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out text-[11px]"
                >
                <ChatCenteredDots size={24} className="min-w-[20px] min-h-[20px]" />
                <p>{t('free_support')}</p>
                </Button>
            </a>

            {/* Invest Now Button */}
            <a href="https://wealthfarming.app/" target="_blank" className="w-[48%]">
                <Button
                variant="outline"
                className="w-full !bg-[var(--color-primary)] hover:brightness-[1.1] border-none button rounded-none h-[40px] flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out text-[11px]"
                >
                <CursorClick size={24} className="min-w-[20px] min-h-[20px] animate-diagonal-2" />
                <p>{t('header_investNowup')}</p>
                </Button>
            </a>
            </div>
        </div>
        )}

    </header>
  );
}
