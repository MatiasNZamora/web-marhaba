export interface NavLink {
  id: string
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { id: 'inicio', label: 'Inicio', href: '/#inicio' },
  { id: 'nosotros', label: 'Nosotros', href: '/#nosotros' },
  { id: 'galeria', label: 'Galería', href: '/#galeria' },
  { id: 'carta', label: 'Carta', href: '/carta' },
  { id: 'ubicacion', label: 'Cómo llegar', href: '/#ubicacion' },
]

export const homeSectionIds = ['inicio', 'nosotros', 'especialidades', 'galeria', 'experiencia', 'resenas', 'ubicacion', 'franquicia']
