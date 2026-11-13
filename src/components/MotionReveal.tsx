import type { ReactNode } from 'react';
import { motion } from 'motion/react';

export const FADE_UP_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function FadeInUp({
  children,
  delay = 0,
  y = 20,
  className = '',
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay,
        ease: FADE_UP_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
