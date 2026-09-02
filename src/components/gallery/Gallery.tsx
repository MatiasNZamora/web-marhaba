import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { galleryPhotos, type GalleryCategory } from '@/data/gallery'
import { Section, SectionKicker, SectionTitle } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { GalleryFilters } from './GalleryFilters'
import { GalleryGrid } from './GalleryGrid'
import { Lightbox } from './Lightbox'

export function Gallery() {
  const [category, setCategory] = useState<GalleryCategory | 'todos'>('todos')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filtered = category === 'todos' ? galleryPhotos : galleryPhotos.filter((p) => p.category === category)
  const selectedIndex = filtered.findIndex((p) => p.id === selectedId)

  return (
    <Section id="galeria" tone="charcoal-soft">
      <Reveal className="text-center">
        <SectionKicker>Galería</SectionKicker>
        <SectionTitle>Un vistazo a nuestros platos</SectionTitle>
      </Reveal>

      <div className="mb-10 flex justify-center">
        <GalleryFilters active={category} onChange={setCategory} />
      </div>

      <GalleryGrid photos={filtered} onSelect={(photo) => setSelectedId(photo.id)} />

      <AnimatePresence>
        {selectedIndex >= 0 && (
          <Lightbox
            photos={filtered}
            index={selectedIndex}
            onClose={() => setSelectedId(null)}
            onNavigate={(next) => setSelectedId(filtered[next].id)}
          />
        )}
      </AnimatePresence>
    </Section>
  )
}
