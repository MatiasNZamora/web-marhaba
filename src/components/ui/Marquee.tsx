import type { ReactNode } from 'react'
import { useReducedMotion } from 'motion/react'
import clsx from 'clsx'

interface MarqueeProps {
  children: ReactNode
  className?: string
}

/** Tira infinita: duplica el contenido y lo desplaza con la animación CSS `animate-marquee`. */
export function Marquee({ children, className }: MarqueeProps) {
  const reduce = useReducedMotion()

  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <div className={clsx('flex w-max gap-12', !reduce && 'animate-marquee')}>
        <div className="flex shrink-0 gap-12">{children}</div>
        {!reduce && (
          <div className="flex shrink-0 gap-12" aria-hidden>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
