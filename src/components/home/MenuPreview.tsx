import { menu } from '@/data/menu'
import { formatPrice } from '@/lib/format'
import { Section, SectionKicker, SectionTitle } from '@/components/ui/Section'
import { Reveal, RevealItem } from '@/components/ui/Reveal'
import { RouterButtonLink } from '@/components/ui/Button'

const previewCategoryIds = ['shawarma', 'calientes', 'frios']

export function MenuPreview() {
  const categories = menu.filter((cat) => previewCategoryIds.includes(cat.id))

  return (
    <Section tone="charcoal-soft" textured>
      <Reveal>
        <SectionKicker>Nuestra carta</SectionKicker>
        <SectionTitle>Un vistazo a lo que podés pedir</SectionTitle>
      </Reveal>

      <Reveal stagger className="grid gap-8 md:grid-cols-3">
        {categories.map((cat) => (
          <RevealItem key={cat.id} className="rounded-2xl border border-gold/15 bg-charcoal p-6">
            <h3 className="font-display text-lg text-gold">{cat.title}</h3>
            <ul className="mt-4 space-y-3">
              {cat.items.slice(0, 4).map((item) => {
                const price = item.price ?? item.priceTakeaway
                return (
                  <li key={item.id} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-sand">{item.name}</span>
                    {price && <span className="whitespace-nowrap text-sand-dim">{formatPrice(price)}</span>}
                  </li>
                )
              })}
            </ul>
          </RevealItem>
        ))}
      </Reveal>

      <Reveal className="mt-10 text-center">
        <RouterButtonLink to="/carta" variant="primary">
          Ver carta completa
        </RouterButtonLink>
      </Reveal>
    </Section>
  )
}
