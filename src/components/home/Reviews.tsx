import { content } from '@/data/content'
import { Section, SectionKicker, SectionTitle } from '@/components/ui/Section'
import { Reveal, RevealItem } from '@/components/ui/Reveal'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-gold" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i < rating ? 'currentColor' : 'none'} stroke="currentColor">
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8Z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <Section id="resenas" tone="charcoal-soft">
      <Reveal>
        <SectionKicker>{content.reviews.kicker}</SectionKicker>
        <SectionTitle>{content.reviews.title}</SectionTitle>
      </Reveal>

      <Reveal stagger className="grid gap-6 sm:grid-cols-3">
        {content.reviews.items.map((review, i) => (
          <RevealItem key={i} className="rounded-2xl border border-gold/15 bg-charcoal p-6">
            <Stars rating={review.rating} />
            <p className="mt-4 text-sm text-sand-dim">“{review.text}”</p>
            <p className="mt-4 font-display text-sm text-sand">{review.author}</p>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  )
}
