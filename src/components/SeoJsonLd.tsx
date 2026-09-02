import { useEffect } from 'react'
import { buildRestaurantJsonLd } from '@/lib/seo'

/** Inyecta el JSON-LD de tipo Restaurant una sola vez, para el rich snippet de Google. */
export function SeoJsonLd() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(buildRestaurantJsonLd())
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
