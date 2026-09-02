import { content } from '@/data/content'
import { site } from '@/data/site'
import { Section, SectionKicker, SectionTitle } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'

const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
const mapsDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address.mapsQuery)}`

export function Location() {
  return (
    <Section id="ubicacion">
      <Reveal>
        <SectionKicker>{content.location.kicker}</SectionKicker>
        <SectionTitle>{content.location.title}</SectionTitle>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        <Reveal className="overflow-hidden rounded-2xl border border-gold/20">
          <iframe
            title="Ubicación de Marhaba"
            src={mapsEmbedSrc}
            className="h-80 w-full grayscale-[40%] sm:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <Reveal className="space-y-6">
          <div>
            <h3 className="font-display text-lg text-gold">Dirección</h3>
            <p className="mt-1 text-sand-dim">
              {site.address.street}, {site.address.city}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold">Horarios</h3>
            <ul className="mt-1 space-y-1 text-sand-dim">
              {site.hours.map((block) => (
                <li key={block.label}>
                  <span className="text-sand">{block.label}:</span>{' '}
                  {block.ranges.map((r) => `${r.open}–${r.close}`).join(' y ')}
                </li>
              ))}
              <li className="text-sand-dim/70">Martes cerrado</li>
            </ul>
          </div>

          <ButtonLink href={mapsDirectionsHref} target="_blank" rel="noreferrer" variant="primary">
            Cómo llegar
          </ButtonLink>
        </Reveal>
      </div>
    </Section>
  )
}
