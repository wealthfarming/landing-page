"use client"
import { ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18next/i18next";
import { createContext, useContext, useState } from "react";

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState("en"); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en";
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language); 
    localStorage.setItem("language", language); 
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "vi" : "en";
    setLanguageState(newLang);
  };

  const setLanguage = (lang: string) => {
    if (lang !== "en" && lang !== "vi" && lang !== "fr") return;
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>{children}</LanguageProvider>
    </I18nextProvider>
  );
}
