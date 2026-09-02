// Carta completa, relevada del Google Sites (menu-carta-marhaba), que tiene
// los precios más recientes. TODO(confirmar con el local): validar que los
// precios siguen vigentes antes de publicar.

export interface MenuItem {
  id: string
  name: string
  nameAr?: string
  description?: string
  /** precio para llevar/delivery */
  priceTakeaway?: number
  /** precio en salón (a veces distinto, p.ej. incluye papas) */
  priceDineIn?: number
  /** para ítems con precio único */
  price?: number
  note?: string
}

export interface MenuCategory {
  id: string
  title: string
  subtitle?: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: 'shawarma',
    title: 'Shawarma',
    subtitle: 'Precio para llevar sin papas · en salón con papas',
    items: [
      { id: 'shawarma-carne', name: 'Shawarma de carne', priceTakeaway: 12000, priceDineIn: 12500 },
      { id: 'shawarma-pollo', name: 'Shawarma de pollo', priceTakeaway: 12000, priceDineIn: 12500 },
      { id: 'shawarma-mixto', name: 'Shawarma mixto', priceTakeaway: 12000, priceDineIn: 12500 },
      { id: 'shawarma-plato', name: 'Shawarma al plato (carne, pollo o mixto)', price: 12500 },
    ],
  },
  {
    id: 'empanadas',
    title: 'Empanadas árabes',
    items: [
      { id: 'empanadas-docena', name: 'Docena', priceTakeaway: 25000 },
      { id: 'empanadas-media-docena', name: 'Media docena', priceTakeaway: 13000 },
      { id: 'empanadas-unidad', name: 'Unidad', priceTakeaway: 2200, priceDineIn: 2300 },
    ],
  },
  {
    id: 'calientes',
    title: 'Platos calientes',
    items: [
      { id: 'kepi-horno', name: 'Kepi al horno', priceTakeaway: 7500, priceDineIn: 7800 },
      { id: 'kepi-frito', name: 'Kepi frito', priceTakeaway: 8000, priceDineIn: 8300 },
      { id: 'ninos-envueltos', name: 'Niños envueltos', description: 'Hojas de parra rellenas', priceTakeaway: 8000, priceDineIn: 8300 },
      { id: 'mayamer', name: 'Mayamer', description: 'De hongos, carne o verdura', priceTakeaway: 2200, priceDineIn: 2300 },
      { id: 'sfiha', name: 'Sfiha', priceTakeaway: 2200, priceDineIn: 2300 },
      { id: 'papas-marhaba', name: 'Papas Marhaba', priceTakeaway: 13000, priceDineIn: 13300 },
      { id: 'chicken-marhaba', name: 'Chicken Marhaba', priceTakeaway: 13000, priceDineIn: 13300 },
      { id: 'papas-fritas', name: 'Papas fritas', price: 6000 },
      { id: 'falafel-sandwich', name: 'Sandwich de falafel', priceTakeaway: 9500 },
      { id: 'falafel', name: 'Falafel', priceTakeaway: 11000, priceDineIn: 11500 },
    ],
  },
  {
    id: 'frios',
    title: 'Platos fríos',
    items: [
      { id: 'plato-arabe', name: 'Plato árabe', description: 'Selección de especialidades frías', priceTakeaway: 30000, priceDineIn: 25000 },
      { id: 'tabule', name: 'Tabule', priceTakeaway: 7000, priceDineIn: 7300 },
      { id: 'garbanzo', name: 'Puré de garbanzo', priceTakeaway: 7000, priceDineIn: 7300 },
      { id: 'berenjena', name: 'Puré de berenjena', priceTakeaway: 7000, priceDineIn: 7300 },
      { id: 'labne', name: 'Labne sólido', priceTakeaway: 7000, priceDineIn: 7300 },
      { id: 'kepi-crudo', name: 'Kepi crudo', priceTakeaway: 8000, priceDineIn: 8200 },
    ],
  },
  {
    id: 'extras',
    title: 'Extras',
    items: [
      { id: 'salsa-grande', name: 'Salsa grande', priceTakeaway: 6000, note: 'Gratis en salón' },
      { id: 'salsa-chica', name: 'Salsa chica', priceTakeaway: 3000, note: 'Gratis en salón' },
    ],
  },
  {
    id: 'postres',
    title: 'Postres',
    items: [{ id: 'baklawa', name: 'Baklawa', description: '3 unidades', price: 6000 }],
  },
  {
    id: 'bebidas',
    title: 'Bebidas sin alcohol',
    subtitle: 'Solo en salón',
    items: [
      { id: 'gaseosa-1-5', name: 'Gaseosa 1.5L', description: 'Coca-Cola, Fanta, Sprite, Pepsi, Paso de los Toros Pomelo, 7up', price: 5000 },
      { id: 'gaseosa-1', name: 'Gaseosa 1L', price: 4200 },
      { id: 'gaseosa-lata', name: 'Gaseosa en lata', price: 2500 },
      { id: 'agua-saborizada', name: 'Agua saborizada 1.5L', description: 'Naranja, pomelo, pera', price: 3800 },
    ],
  },
]
