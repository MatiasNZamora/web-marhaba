const WIDTHS = [400, 800, 1600] as const

/** Construye src + srcSet para una foto procesada en public/images/{slug}-{w}.webp */
export function dishImage(slug: string) {
  return {
    src: `/images/${slug}-800.webp`,
    srcSet: WIDTHS.map((w) => `/images/${slug}-${w}.webp ${w}w`).join(', '),
    sizes: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  }
}
