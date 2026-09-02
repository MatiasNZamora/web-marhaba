import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { useMotionPreset } from '@/hooks/useMotionPreset'

interface RevealProps {
  children: ReactNode
  className?: string
  /** envuelve a los hijos con stagger (usar junto a <Reveal.Item>) */
  stagger?: boolean
}

export function Reveal({ children, className, stagger }: RevealProps) {
  const { fadeUp, stagger: staggerVariants, viewport } = useMotionPreset()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger ? staggerVariants : fadeUp}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const { fadeUp } = useMotionPreset()
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
