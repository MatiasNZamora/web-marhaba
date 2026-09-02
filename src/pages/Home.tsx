import { useEffect } from 'react'
import { Hero } from '@/components/home/Hero'
import { SpecialtiesMarquee } from '@/components/home/SpecialtiesMarquee'
import { About } from '@/components/home/About'
import { Specialties } from '@/components/home/Specialties'
import { MenuPreview } from '@/components/home/MenuPreview'
import { Gallery } from '@/components/gallery/Gallery'
import { Experience } from '@/components/home/Experience'
import { Reviews } from '@/components/home/Reviews'
import { Location } from '@/components/home/Location'
import { Franchise } from '@/components/home/Franchise'

export function Home() {
  useEffect(() => {
    document.title = 'Marhaba · Comida auténticamente árabe en La Rioja'
  }, [])

  return (
    <main>
      <Hero />
      <SpecialtiesMarquee />
      <About />
      <Specialties />
      <MenuPreview />
      <Gallery />
      <Experience />
      <Reviews />
      <Location />
      <Franchise />
    </main>
  )
}
