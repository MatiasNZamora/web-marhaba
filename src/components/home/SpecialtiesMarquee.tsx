import { content } from '@/data/content'
import { Marquee } from '@/components/ui/Marquee'

export function SpecialtiesMarquee() {
  return (
    <div className="border-y border-gold/20 bg-charcoal-soft py-5">
      <Marquee>
        {content.specialties.items.map((item) => (
          <span key={item.es} className="flex items-baseline gap-3 whitespace-nowrap">
            <span className="font-display text-xl text-sand">{item.es}</span>
            <span className="font-arabic text-lg text-gold">{item.ar}</span>
            <span className="text-gold/40">•</span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
