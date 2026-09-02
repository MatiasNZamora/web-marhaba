import clsx from 'clsx'
import { galleryCategories, type GalleryCategory } from '@/data/gallery'

interface GalleryFiltersProps {
  active: GalleryCategory | 'todos'
  onChange: (category: GalleryCategory | 'todos') => void
}

export function GalleryFilters({ active, onChange }: GalleryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {galleryCategories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onChange(cat.id)}
          className={clsx(
            'rounded-full border px-5 py-2 text-sm font-medium transition-colors',
            active === cat.id
              ? 'border-gold bg-gold/10 text-gold'
              : 'border-gold/20 text-sand-dim hover:border-gold/50 hover:text-sand',
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
