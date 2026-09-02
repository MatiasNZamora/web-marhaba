import { useReducedMotion, type Variants } from 'motion/react'

/**
 * Único lugar donde se definen las variantes de animación reutilizables.
 * Devuelve variantes vacías cuando el usuario pide "reducir movimiento",
 * en vez de repetir el chequeo en cada componente.
 */
export function useMotionPreset() {
  const reduce = useReducedMotion()

  const fadeUp: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }

  const stagger: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
      }

  const scaleIn: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, scale: 0.92 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }

  const viewport = { once: true, margin: '-80px' }

  return { reduce, fadeUp, stagger, scaleIn, viewport }
}
