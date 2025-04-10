"use client";
import { DiscordLogo, FacebookLogo, MessengerLogo, TelegramLogo, XLogo } from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Separator } from "../ui/separator";
export default function FooterFull({ active }: { active?: string }) {
    const { t } = useTranslation();
    return (
        <footer className="bottom-0 flex-col w-full bg-gray-800 text-white pt-8 z-10 ">
            <div className="flex flex-row w-full justify-between px-16 py-12 gap-[100px]">
                <div className="flex flex-col items-start justify-start w-7/12 max-w-screen-xl ">
                    <div >
                        <Image src='images/img/logo-full.svg' alt="Logo" width={200} height={100} className="mr-2" />
                        <div className="flex flex-row gap-4 mt-4">
                            <FacebookLogo size={26} weight="fill" />
                            <DiscordLogo size={26} weight="fill" />
                            <TelegramLogo size={26} weight="fill" />
                            <XLogo size={26} weight="fill" />
                        </div>
                    </div>
                    <p className="text-gray-400 mt-4 break-all">
                        {t('footer_description')}
                    </p>
                </div>
                <div className="flex flex-row items-start justify-start gap-4 max-w-screen-xl ">
                    <div className="flex flex-col items-start justify-start w-full">
                        <h2 className="text-lg font-semibold mb-2">{t('footer_page')}</h2>
                        <ul>
                            <li className={"text-gray-400 text-sm mb-2" + (active == 'introduct' ? ' !text-yellow-400' : '')}>{t('footer_introduct')}</li>
                            <li className={"text-gray-400 text-sm mb-2" + (active == 'product' ? ' !text-yellow-400' : '')}>{t('footer_product')}</li>
                            <li className={"text-gray-400 text-sm mb-2" + (active == 'eco' ? ' !text-yellow-400' : '')}>{t('footer_eco')}</li>
                            <li className={"text-gray-400 text-sm mb-2" + (active == 'invest' ? ' !text-yellow-400' : '')}>{t('footer_invest')}</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">{t('footer_contact')}</h2>
                        <span className="text-gray-400 text-sm mb-2 flex flex-row items-center gap-2">
                            {t('footer_contact_decsription')}
                            <MessengerLogo size={32} />
                        </span>
                    </div>
                </div>
            </div>
            <Separator orientation="horizontal" className="bg-gray-600 " />
            <div className="flex items-center justify-between w-full max-w-screen-xl px-16 py-2">
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} BEQ WeathFarming All rights reserved.
                </div>

            </div>
        </footer>
    );
}

//footer_description

//footer_page
//footer_introduct
//footer_product
//footer_eco
//footer_invest