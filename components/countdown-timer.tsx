"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import ButtonPrimary from "./custom-button/button-primary";

export default function CountdownTimer({ targetDate }: { targetDate?: Date }) {
    const defaultTargetDate = new Date();
    const { t } = useTranslation();
    defaultTargetDate.setDate(defaultTargetDate.getDate() + 5);

    const finalTargetDate = targetDate || defaultTargetDate;

    const [timeRemaining, setTimeRemaining] = useState(() => {
        const now = new Date();
        return finalTargetDate.getTime() - now.getTime();
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining((prev) => prev - 1000);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-[124px] w-full">
            
            <div className="w-full relative overflow-hidden">
                <div
                    className="h-[10px] bg-white absolute z-20 animate-move-sideways-1"
                    style={{
                        width: "100%",
                        filter: "blur(8px)",
                        willChange: "transform",
                        opacity: "0.25",
                    }}
                ></div>
                <div
                    className="h-[10px] bg-white absolute z-20 animate-move-sideways-2"
                    style={{
                        width: "100%",
                        filter: "blur(8px)",
                        willChange: "transform",
                        opacity: "0.25",
                    }}
                ></div>

                <style jsx>{`
                    @keyframes move-sideways-1 {
                        0% {
                            transform: translateX(-100%);
                            rotate: 125deg;
                        }
                        100% {
                            transform: translateX(100%);
                            rotate: 125deg;
                        }
                    }
                    @keyframes move-sideways-2 {
                        0% {
                            transform: translateX(-120%);
                            rotate: 125deg;
                        }
                        100% {
                            transform: translateX(120%);
                            rotate: 125deg;
                        }
                    }
                    .animate-move-sideways-1 {
                        animation: move-sideways-1 3s infinite;
                    }
                    .animate-move-sideways-2 {
                        animation: move-sideways-2 5s infinite;
                    }
                `}</style>
                <Link href="https://wealthfarming.app/" passHref>
                    <ButtonPrimary
                        className="h-[60px] w-full button !text-[15px] rounded-none"
                    >
                        {t('countdown_timer_button')}
                    </ButtonPrimary>
                </Link>
            </div>
        </div >
    );
}