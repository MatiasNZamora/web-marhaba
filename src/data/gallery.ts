// Índice único de la galería. El día que lleguen fotos nuevas (sin watermark)
// se reemplaza acá el campo `slug` — ningún componente hardcodea un path.

export type GalleryCategory = 'platos' | 'salon' | 'postres'

export interface GalleryPhoto {
  id: string
  /** nombre base del archivo en public/images/, sin sufijo de ancho ni extensión */
  slug: string
  title: string
  category: GalleryCategory
  /** referencia opcional a un item de menu.ts para mostrar precio en el lightbox */
  menuItemId?: string
}

export const galleryPhotos: GalleryPhoto[] = [
  { id: 'shawarma-sandwich', slug: 'shawarma-sandwich', title: 'Shawarma Sandwich', category: 'platos', menuItemId: 'shawarma-carne' },
  { id: 'shawarma-plato', slug: 'dish-2', title: 'Shawarma al Plato', category: 'platos', menuItemId: 'shawarma-plato' },
  { id: 'shawarma-super', slug: 'dish-3', title: 'Shawarma Super', category: 'platos', menuItemId: 'shawarma-mixto' },
  { id: 'shawarma-americano', slug: 'dish-4', title: 'Shawarma Americano', category: 'platos', menuItemId: 'shawarma-carne' },
  { id: 'pollo-zatar', slug: 'dish-5', title: 'Pollo al Zatar', category: 'platos' },
  { id: 'mayamer-carne', slug: 'dish-6', title: 'Mayamer de Carne', category: 'platos', menuItemId: 'mayamer' },
  { id: 'mayamer-verdura', slug: 'dish-7', title: 'Mayamer de Verdura', category: 'platos', menuItemId: 'mayamer' },
  { id: 'mayamer-champignones', slug: 'dish-8', title: 'Mayamer con Champignones', category: 'platos', menuItemId: 'mayamer' },
  { id: 'ninos-envueltos', slug: 'dish-13', title: 'Niños Envueltos', category: 'platos', menuItemId: 'ninos-envueltos' },
  { id: 'berenjena', slug: 'berenjena', title: 'Puré de Berenjena', category: 'platos', menuItemId: 'berenjena' },
  { id: 'kepi-al-horno', slug: 'kepi-al-horno', title: 'Kepi al Horno', category: 'platos', menuItemId: 'kepi-horno' },
  { id: 'mayamer', slug: 'mayamer', title: 'Mayamer', category: 'platos', menuItemId: 'mayamer' },
  { id: 'ninos-envuelto', slug: 'ninos-envuelto', title: 'Niños Envuelto', category: 'platos', menuItemId: 'ninos-envueltos' },
  { id: 'tabule', slug: 'tabule', title: 'Tabule', category: 'platos', menuItemId: 'tabule' },
]

export const galleryCategories: Array<{ id: GalleryCategory | 'todos'; label: string }> = [
  { id: 'todos', label: 'Todos' },
  { id: 'platos', label: 'Platos' },
  { id: 'salon', label: 'Salón' },
  { id: 'postres', label: 'Postres' },
]
