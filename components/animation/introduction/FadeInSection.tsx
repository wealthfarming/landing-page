import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
};

export default function FadeInSection({ children }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}  
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
