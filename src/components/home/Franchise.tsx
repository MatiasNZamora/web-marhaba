import { content } from '@/data/content'
import { Section, SectionKicker, SectionTitle } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function Franchise() {
  return (
    <Section id="franquicia" tone="charcoal-soft" textured>
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionKicker>{content.franchise.kicker}</SectionKicker>
        <SectionTitle>{content.franchise.title}</SectionTitle>
        <p className="text-sand-dim">{content.franchise.text}</p>
        <div className="mt-8">
          <ButtonLink
            href={buildWhatsAppLink('Hola Marhaba! Quiero información sobre franquicias.')}
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            {content.franchise.cta}
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  )
}
