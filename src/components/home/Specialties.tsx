import { Section, SectionKicker, SectionTitle } from '@/components/ui/Section'
import { Reveal, RevealItem } from '@/components/ui/Reveal'
import { TiltCard } from '@/components/ui/TiltCard'
import { dishImage } from '@/lib/images'
import { content } from '@/data/content'

const featured = [
  { slug: 'shawarma-sandwich', title: 'Shawarma', ar: 'شاورما' },
  { slug: 'dish-13', title: 'Niños Envueltos', ar: 'ورق عنب' },
  { slug: 'dish-6', title: 'Mayamer', ar: 'مناقيش' },
  { slug: 'kepi-al-horno', title: 'Kepi al Horno', ar: 'كبة' },
]

export function Specialties() {
  return (
    <Section id="especialidades">
      <Reveal>
        <SectionKicker>{content.specialties.kicker}</SectionKicker>
        <SectionTitle>{content.specialties.title}</SectionTitle>
      </Reveal>

      <Reveal stagger className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {featured.map((item) => {
          const img = dishImage(item.slug)
          return (
            <RevealItem key={item.slug}>
              <TiltCard className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-gold/20">
                <img
                  src={img.src}
                  srcSet={img.srcSet}
                  sizes={img.sizes}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-base text-sand">{item.title}</p>
                  <p className="font-arabic text-sm text-gold">{item.ar}</p>
                </div>
              </TiltCard>
            </RevealItem>
          )
        })}
      </Reveal>
    </Section>
  )
}
