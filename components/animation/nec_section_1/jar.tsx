'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

const getRandomPosition = () => ({
    top: Math.random() * 80, // percent, adjust as needed
    left: Math.random() * 80, // percent, adjust as needed
});
interface JarProps {
    src?: string | StaticImageData;
    text: string;
    delay?: number;
    x?: number;
    y?: number;
}
const DEFAULT_JAR_IMAGE_SRC = "/images/nec_nft/nec_section_1_1.avif";
export default function Jar({ src, text, delay, x, y }: JarProps & { x?: number; y?: number }) {
    const [rotateKey, setRotateKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotateKey((k) => k + 1);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="absolute z-[15] overflow-visible"
            style={{
                top: `50%`,
                left: `50%`,
                transform: 'translate(-50%, -50%)', // Start at center
            }}
            initial={{ opacity: 0 }}
            animate={{
                top: `${y || 50}%`,
                left: `${x || 50}%`,
                opacity: 1,
            }}
            transition={{
                top: { type: 'spring', stiffness: 100, damping: 20, delay: delay || 0.5 },
                left: { type: 'spring', stiffness: 100, damping: 20, delay: delay || 0.5 },
                opacity: { duration: 0.6, delay: delay || 0.5 },
            }}
        >
            <motion.div
                key={rotateKey}
                animate={{ rotate: [0, 15, 0] }}
                transition={{ rotate: { duration: 1, ease: "easeOut" } }}
            >
                <div style={{ width: 80, height: 80, minWidth: 80, minHeight: 80, maxWidth: 80, maxHeight: 80 }}>
                    <Image
                        alt="nec-section-1"
                        width={80}
                        height={80}
                        className="object-contain z-[5] overflow-visible"
                        src={src || DEFAULT_JAR_IMAGE_SRC}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </motion.div>
            <p className="text-[12px] text-medium font-geist-raleway font-[500] mt-[8px] overflow-visible">{text}</p>
        </motion.div>
    );
}
