import { site } from '@/data/site'
import { menu } from '@/data/menu'

const dayNames: Record<number, string> = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
}

export function buildRestaurantJsonLd() {
  const openingHoursSpecification = site.hours.flatMap((block) =>
    block.ranges.map((range) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: block.days.map((d) => dayNames[d]),
      opens: range.open,
      closes: range.close,
    })),
  )

  const allPrices = menu.flatMap((cat) =>
    cat.items.flatMap((item) => [item.price, item.priceTakeaway, item.priceDineIn].filter((p): p is number => typeof p === 'number')),
  )
  const minPrice = Math.min(...allPrices)
  const maxPrice = Math.max(...allPrices)

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: site.name,
    description: site.description,
    servesCuisine: 'Arab',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: 'AR',
    },
    telephone: site.contact.whatsappDisplay,
    priceRange: `$${minPrice}-$${maxPrice}`,
    openingHoursSpecification,
    sameAs: [site.contact.instagram, site.contact.facebook],
  }
}
