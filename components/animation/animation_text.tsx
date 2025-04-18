import React from "react";


interface AnimatedTextProps {
    text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
    return (
        <div className="flex flex-wrap justify-center max-w-[908px] mx-auto overflow-hidden">
            <style jsx>{`
        .fadeIn {
            opacity: 0;
            animation: fadeIn 0.5s forwards;
            display: inline-block;
        }
            @keyframes fadeIn {
            0% {
            opacity: 0;
            transform: translateY(20px);
            }
            100% {
            opacity: 1;
            transform: translateY(0);
            }
            }
            `}</style>

            {text.split(" ").map((word: string, wordIndex: number) => (
            <span key={wordIndex} style={{ display: "inline-block", marginRight: "8px" }}>
                {word.split("").map((char: string, charIndex: number) => (
                <span
                    key={charIndex}
                    className={'fadeIn'}
                    style={{ animationDelay: `${(wordIndex * 0.5) + (charIndex * 0.1)}s` }}
                >
                    {char}
                </span>
                ))}
            </span>
            ))}
        </div>
    );
};

export default AnimatedText;