import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import type { GalleryPhoto } from '@/data/gallery'
import { menu } from '@/data/menu'
import { formatPrice } from '@/lib/format'
import { dishImage } from '@/lib/images'
import { useLockScroll } from '@/hooks/useLockScroll'

interface LightboxProps {
  photos: GalleryPhoto[]
  index: number
  onClose: () => void
  onNavigate: (nextIndex: number) => void
}

const SWIPE_THRESHOLD = 50

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  useLockScroll(true)
  const touchStartX = useRef<number | null>(null)
  const photo = photos[index]
  const img = dishImage(photo.slug)
  const menuItem = photo.menuItemId
    ? menu.flatMap((c) => c.items).find((i) => i.id === photo.menuItemId)
    : undefined
  const price = menuItem?.price ?? menuItem?.priceTakeaway

  const goTo = (delta: number) => {
    const next = (index + delta + photos.length) % photos.length
    onNavigate(next)
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goTo(1)
      if (e.key === 'ArrowLeft') goTo(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, photos.length])

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > SWIPE_THRESHOLD) goTo(-1)
    else if (delta < -SWIPE_THRESHOLD) goTo(1)
    touchStartX.current = null
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal
      aria-label={photo.title}
    >
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/70 text-sand hover:text-gold"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Foto anterior"
        onClick={(e) => {
          e.stopPropagation()
          goTo(-1)
        }}
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal/70 text-sand hover:text-gold sm:left-6"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Foto siguiente"
        onClick={(e) => {
          e.stopPropagation()
          goTo(1)
        }}
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal/70 text-sand hover:text-gold sm:right-6"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <motion.figure
        className="mx-4 flex max-h-[85vh] max-w-3xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          key={photo.id}
          layoutId={`gallery-img-${photo.id}`}
          src={img.src}
          srcSet={img.srcSet}
          alt={photo.title}
          className="max-h-[70vh] w-auto rounded-2xl object-contain"
        />
        <figcaption className="mt-4 flex items-center gap-3 text-center">
          <span className="font-display text-lg text-sand">{photo.title}</span>
          {price && <span className="text-gold">{formatPrice(price)}</span>}
        </figcaption>
        <p className="mt-1 text-sm text-sand-dim">
          {index + 1} / {photos.length}
        </p>
      </motion.figure>
    </motion.div>
  )
}
