'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  children: React.ReactNode;
};

export function FadeInSection({ children }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.1,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

type AnimatedTextProps = {
  text: string;
  customClass?: string;
  duration?: number;
  charHeight?: number;
  center?: boolean;
};


/**
 * AnimatedText is a React functional component that animates the rendering of text.
 * It splits the provided text into characters and animates their appearance using Framer Motion.
 *
 * @param {Object} props - The props object.
 * @param {string[]} props.text - An array of strings to be animated. Each string represents a phrase.
 * @param {string[]} [props.customClass] - An optional array of CSS class names to apply to each phrase.
 * @param {number} [props.duration] - The duration (in seconds) of the animation for each character. Defaults to 0.4 seconds.
 * @param {number} [props.delayBetween] - The delay (in seconds) between the animations of each character.
 * @param {number} [props.charHeight] - The height of the characters for animation purposes.
 * 
 * @returns {JSX.Element} A span element containing the animated text.
 *
 * @remarks
 * - The component uses Framer Motion for animation.
 * - If the component is rendered on the server, it falls back to a non-animated version of the text.
 * - The animation is triggered on the client side after the component mounts.
 *
 * @example
 * ```tsx
 * <AnimatedText
 *   text={['Hello', 'World']}
 *   customClass={['class1', 'class2']}
 *   duration={0.5}
 *   delayBetween={0.2}
 * />
 * ```
 */
export const AnimatedText: React.FC<{ text: string[]; customClass?: string[], duration?: number, delayBetween?: number, charHeight?: number, center?: boolean }> = ({ text, customClass = '', duration, delayBetween, center = true , charHeight }) => {
  const [nodes, setNodes] = useState<React.ReactNode[]>([]);
  const { i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const allText = text.join(' ');
  let charIndex = 0;

  useEffect(() => {
    setIsClient(true);
    charIndex = 0; // Reset charIndex when the component mounts
  }, []);

  useEffect(() => {

    const renderedText = text.map((phrase, phraseIndex) => {
      const classForPhrase = customClass[phraseIndex] || '';
      const words = phrase.split(' ');
      const renderedWords = words.map((word, wordIndex) => (
        <div key={`word-${phraseIndex}-${wordIndex}`} className="inline-flex mr-[8px]">
          {word.split('').map((char) => {
            const delay = (delayBetween ? ((delayBetween * charIndex)) : (charIndex / allText.length) * 0.8);
            charIndex++;
            return (
                <motion.span
                key={`char-${phraseIndex}-${wordIndex}-${charIndex}`}
                className={`flex flex-wrap ` + (charHeight ? ` !h-[${charHeight}px] !leading-[${charHeight}px]` : '')}
                initial={{ opacity: 0.1, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                style={charHeight ? { height: `${charHeight}px !importal`, lineHeight: `${charHeight}px` } : {}}
                transition={{
                  delay: delay,
                  type: 'tween',
                  stiffness: 100,
                  duration: duration || 0.4,
                }}
                >
                {char === ' ' ? '\u00A0' : char}
                </motion.span>
            );

          })}
          {' '}
        </div>
      ));

      return (
        <span key={`phrase-${phraseIndex}`} className={`${classForPhrase} ${center ? "justify-center" : ""} text-justify max-w-[1000px] items-center w-full`}>
          {renderedWords}
        </span>
      );
    });

    setTimeout(() => {
      setNodes(renderedText);
    }, 0);
  }, [text, i18n.language]);

  if (!isClient) {
    return (
      <>
        {text.map((phrase, i) => (
          <span key={`plain-${i}`} className={customClass[i] + ' opacity-10' || 'opacity-10'}>
            {phrase}{' '}
          </span>
        ))}
      </>
    );
  }

  return <span key={i18n.language}>{nodes}</span>;
};


