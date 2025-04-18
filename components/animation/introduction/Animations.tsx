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
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        ease: 'easeOut',
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
};


export const AnimatedText: React.FC<{ text: string[]; customClass?: string[] }> = ({ text, customClass = '' }) => {
  const [nodes, setNodes] = useState<React.ReactNode[]>([]);
  const { i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const allText = text.join(' ');
  let charIndex = 0;

  useEffect(() => {
    setIsClient(true);
  }, []);




  useEffect(() => {

    const renderedText = text.map((phrase, phraseIndex) => {

      const classForPhrase = customClass[phraseIndex] || '';

      const words = phrase.split(' ');

      const renderedWords = words.map((word, wordIndex) => (
        <span key={`word-${phraseIndex}-${wordIndex}`} className="">
          {word.split('').map((char) => {
            const delay = (charIndex / allText.length) * 0.8;
            charIndex++;
            return (
              <motion.span
                key={`char-${phraseIndex}-${wordIndex}-${charIndex}`}
                className="inline"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: delay,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            );
          })}
          {' '}
        </span>
      ));

      return (
        <span key={`phrase-${phraseIndex}`} className={classForPhrase}>
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
          <span key={`plain-${i}`} className={customClass[i] || ''}>
            {phrase}{' '}
          </span>
        ))}
      </>
    );
  }

  return <span key={i18n.language}>{nodes}</span>;
};


