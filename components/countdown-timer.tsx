"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

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


    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return (
        <div className="flex flex-col items-center justify-center border border-gray-200 h-[124px] w-full">
            <div className="text-3xl w-full font-bold h-[64px] flex flex-col items-center justify-center canvas-bg">
                <p>{`${days} : ${hours} : ${minutes} : ${seconds}`}</p>
            </div>
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
                <Button className="h-[60px] w-full button  !text-[15px] !font-bold rounded-none">
                    {t('countdown_timer_button')}
                </Button>
            </div>


        </div >
    );
}