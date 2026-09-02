import { content } from '@/data/content'
import { Section, SectionKicker, SectionTitle } from '@/components/ui/Section'
import { Reveal, RevealItem } from '@/components/ui/Reveal'
import { ArchImage } from '@/components/ui/ArchImage'

export function About() {
  return (
    <Section id="nosotros" textured>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <SectionKicker>{content.about.kicker}</SectionKicker>
          <SectionTitle>{content.about.title}</SectionTitle>

          <Reveal stagger className="space-y-8">
            <RevealItem>
              <h3 className="font-display text-lg text-gold">{content.about.mission.title}</h3>
              <p className="mt-2 text-sand-dim">{content.about.mission.text}</p>
            </RevealItem>
            <RevealItem>
              <h3 className="font-display text-lg text-gold">{content.about.vision.title}</h3>
              <p className="mt-2 text-sand-dim">{content.about.vision.text}</p>
            </RevealItem>
          </Reveal>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-sm">
          <ArchImage slug="tabule" alt="Tabule fresco preparado en Marhaba" />
        </Reveal>
      </div>
    </Section>
  )
}
