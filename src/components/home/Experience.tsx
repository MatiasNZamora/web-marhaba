import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { content } from '@/data/content'
import { useMotionPreset } from '@/hooks/useMotionPreset'
import { SectionKicker, SectionTitle } from '@/components/ui/Section'
import { Reveal, RevealItem } from '@/components/ui/Reveal'
import { dishImage } from '@/lib/images'

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { reduce } = useMotionPreset()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-40, 40])

  const bg = dishImage('dish-3')

  return (
    <section id="experiencia" ref={ref} className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={bg.src} srcSet={bg.srcSet} alt="" aria-hidden className="h-[120%] w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/85" />
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <SectionKicker>{content.experience.kicker}</SectionKicker>
          <SectionTitle>{content.experience.title}</SectionTitle>
          <p className="mx-auto max-w-2xl text-sand-dim">{content.experience.text}</p>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-8 sm:grid-cols-3">
          {content.experience.highlights.map((h) => (
            <RevealItem key={h.title} className="rounded-2xl border border-gold/20 bg-charcoal/60 p-6 backdrop-blur-sm">
              <h3 className="font-display text-gold">{h.title}</h3>
              <p className="mt-2 text-sm text-sand-dim">{h.text}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
