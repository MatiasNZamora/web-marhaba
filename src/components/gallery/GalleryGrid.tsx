import { AnimatePresence, motion } from 'motion/react'
import type { GalleryPhoto } from '@/data/gallery'
import { dishImage } from '@/lib/images'

interface GalleryGridProps {
  photos: GalleryPhoto[]
  onSelect: (photo: GalleryPhoto) => void
}

export function GalleryGrid({ photos, onSelect }: GalleryGridProps) {
  if (photos.length === 0) {
    return <p className="py-16 text-center text-sand-dim">Todavía no hay fotos en esta categoría.</p>
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <AnimatePresence>
        {photos.map((photo) => {
          const img = dishImage(photo.slug)
          return (
            <motion.button
              key={photo.id}
              type="button"
              layout
              layoutId={`gallery-${photo.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => onSelect(photo)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-gold/15 focus-visible:outline-2 focus-visible:outline-gold"
            >
              <motion.img
                layoutId={`gallery-img-${photo.id}`}
                src={img.src}
                srcSet={img.srcSet}
                sizes={img.sizes}
                alt={photo.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="font-display text-sm text-sand">{photo.title}</p>
              </div>
            </motion.button>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
