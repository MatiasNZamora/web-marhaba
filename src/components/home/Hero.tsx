import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { content } from '@/data/content'
import { useOpenStatus } from '@/hooks/useOpenStatus'
import { useMotionPreset } from '@/hooks/useMotionPreset'
import { Button, RouterButtonLink } from '@/components/ui/Button'
import { buildWhatsAppLink, whatsappOrderMessage } from '@/lib/whatsapp'
import { dishImage } from '@/lib/images'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { isOpen, nextOpeningLabel } = useOpenStatus()
  const { fadeUp, stagger, viewport, reduce } = useMotionPreset()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  const bg = dishImage('shawarma-sandwich')

  return (
    <section id="inicio" ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-charcoal">
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <img
          src={bg.src}
          srcSet={bg.srcSet}
          alt=""
          aria-hidden
          className="h-full w-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />
      </motion.div>

      <motion.div
        className="relative mx-auto max-w-4xl px-6 text-center"
        initial="hidden"
        animate="show"
        viewport={viewport}
        variants={stagger}
      >
        <motion.p variants={fadeUp} className="font-arabic text-2xl text-gold">
          {content.hero.kicker}
        </motion.p>

        <motion.h1 variants={fadeUp} className="mt-4 font-display text-4xl leading-tight text-sand sm:text-5xl md:text-6xl">
          {content.hero.title}
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-sand-dim">
          {content.hero.subtitle}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${isOpen ? 'bg-olive' : 'bg-brick'}`} />
          <span className="text-sm font-medium text-sand">
            {isOpen ? 'Abierto ahora' : 'Cerrado'}
            {!isOpen && nextOpeningLabel && ` · ${nextOpeningLabel}`}
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterButtonLink to="/carta" variant="primary">
            {content.hero.ctaPrimary}
          </RouterButtonLink>
          <Button
            variant="outline"
            onClick={() => window.open(buildWhatsAppLink(whatsappOrderMessage()), '_blank')}
          >
            {content.hero.ctaSecondary}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
