import type { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  /** aplica el patrón geométrico de fondo al 4-6% de opacidad */
  textured?: boolean
  tone?: 'charcoal' | 'charcoal-soft'
}

export function Section({ id, children, className, textured, tone = 'charcoal' }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'relative scroll-mt-20 overflow-hidden py-20 sm:py-28',
        tone === 'charcoal' ? 'bg-charcoal' : 'bg-charcoal-soft',
        className,
      )}
    >
      {textured && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'url(/patterns/geometric.svg)',
            backgroundSize: '120px 120px',
          }}
        />
      )}
      <div className="relative mx-auto max-w-6xl px-6">{children}</div>
    </section>
  )
}

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-display text-sm uppercase tracking-[0.25em] text-gold">{children}</p>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 font-display text-3xl text-sand sm:text-4xl md:text-5xl">{children}</h2>
  )
}
