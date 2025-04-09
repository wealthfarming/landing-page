"use client";
import { ArrowFatUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface RiseFadeProps {
    num: number;
}

export default function RiseFade({
    num,
}: RiseFadeProps) {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const getRandomPosition = () => {
        const top = Math.floor(Math.random() * 120);
        const left = Math.floor(Math.random() * (window.innerWidth - 80));
        return { top, left };
    };

    useEffect(() => {
        const randomDelay = Math.random() * 2000; // Random delay between 0 and 2000ms

        const startAnimation = () => {
            const interval = setInterval(() => {
                setPosition(getRandomPosition());
                setVisible(true);

                const timeout = setTimeout(() => {
                    setVisible(false);
                }, 1000);

                return () => clearTimeout(timeout);
            }, 2000);

            return () => clearInterval(interval);
        };

        const timeout = setTimeout(startAnimation, randomDelay);

        return () => clearTimeout(timeout);
    }, []);

    if (!visible) return null;

    return (
        <div
            className="flex flex-row gap-[5px] items-center justify-center font-bold text-[18px] text-[var(--primary-success)]"
            style={{
                zIndex: 100,
                position: 'absolute',
                top: position.top,
                left: position.left,
                animation: 'riseFade 2s ease-out forwards',
                pointerEvents: 'none',
            }}
        >
            <ArrowFatUp size={18} weight="fill" className="size-[18px]" />
            <p>{num}%</p>

            <style>
                {`
            @keyframes riseFade {
              0% {
                transform: translateY(0px);
                opacity: 1;
              }
              100% {
                transform: translateY(-100px);
                opacity: 0;
              }
            }
          `}
            </style>
        </div>
    );
}