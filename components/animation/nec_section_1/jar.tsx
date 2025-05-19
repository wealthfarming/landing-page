// jar.tsx
'use client'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

interface JarProps {
  src: string | StaticImageData
  text: string
  x?: number
  y?: number
}

export default function Jar({ src, text, x = 50, y = 50 }: JarProps) {
  return (
    <motion.div
      className="absolute z-15"
      style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      animate={{ top: `${y}%`, left: `${x}%` }}
      transition={{
        top:   { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 },
        left:  { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 },
      }}
    >
      {/* rotate forever without unmounting */}
      <motion.div
        animate={{ rotate: [0, 15, 0] }}
        transition={{
          rotate: {
            duration: 1,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0.5,
          },
        }}
      >
        <div style={{ width: 80, height: 80 }}>
          <Image
            src={src}
            alt={text}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </motion.div>
      <p className="text-[12px] font-geist-raleway mt-2">{text}</p>
    </motion.div>
  )
}
