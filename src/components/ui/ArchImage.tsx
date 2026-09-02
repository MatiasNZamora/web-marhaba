import clsx from 'clsx'
import { dishImage } from '@/lib/images'

interface ArchImageProps {
  slug: string
  alt: string
  className?: string
}

/** Foto recortada con la máscara de arco del logo — el gesto visual de marca. */
export function ArchImage({ slug, alt, className }: ArchImageProps) {
  const img = dishImage(slug)
  return (
    <div
      className={clsx('relative aspect-[4/5] overflow-hidden', className)}
      style={{ clipPath: 'url(#marhaba-arch)' }}
    >
      <img
        src={img.src}
        srcSet={img.srcSet}
        sizes={img.sizes}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/40" />
    </div>
  )
}
