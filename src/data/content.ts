// Copy de las secciones del home, reescrito a partir de la misión/visión/
// descripción actuales de marhabaargentina.com.

export const content = {
  hero: {
    kicker: 'مرحبا · Bienvenidos',
    title: 'El sabor auténtico de Medio Oriente en La Rioja',
    subtitle:
      'A los clásicos de siempre se suman los deliciosos y especiados platos árabes, en un ambiente ideal para ir en pareja o en grupo.',
    ctaPrimary: 'Ver la carta',
    ctaSecondary: 'Pedir por WhatsApp',
  },

  about: {
    kicker: 'Sobre nosotros',
    title: 'Tradición árabe, hecha en casa',
    mission: {
      title: 'Misión',
      text: 'Brindar a las personas la oportunidad de disfrutar sabores que conquistan hasta los paladares más exigentes, con productos de alta calidad nutritiva y una experiencia que supera las expectativas.',
    },
    vision: {
      title: 'Visión',
      text: 'Ser la empresa líder en gastronomía y comida rápida del país, distinguiéndonos por nuestros sabores únicos y la excelencia en el servicio.',
    },
  },

  specialties: {
    kicker: 'Nuestras especialidades',
    title: 'Descubrí lo que nos hace Marhaba',
    items: [
      { es: 'Shawarma', ar: 'شاورما' },
      { es: 'Kepi', ar: 'كبة' },
      { es: 'Tabule', ar: 'تبولة' },
      { es: 'Falafel', ar: 'فلافل' },
      { es: 'Baklawa', ar: 'بقلاوة' },
      { es: 'Hummus', ar: 'حمص' },
    ],
  },

  experience: {
    kicker: 'La experiencia Marhaba',
    title: 'Más que comida, un viaje al Oriente',
    text: 'El auténtico sabor de las comidas, postres y encanto de las maravillas del oriente, regado a los sonidos del derbake, decoración típica y mucha alegría. Un lugar pensado para disfrutar en pareja, con amigos o en familia.',
    highlights: [
      { title: 'Ambiente típico', text: 'Decoración árabe y música en vivo de derbake en fechas especiales.' },
      { title: 'Delivery propio', text: 'Pedí desde casa y recibí el sabor de Marhaba en la puerta de tu casa.' },
      { title: 'Calidad e higiene', text: 'Instalaciones cuidadas y un equipo dedicado a que la visita sea inolvidable.' },
    ],
  },

  franchise: {
    kicker: 'Franquicias',
    title: '¿Querés abrir un Marhaba en tu ciudad?',
    text: 'Sumate a la familia Marhaba y llevá el sabor de Medio Oriente a tu comunidad, con el respaldo y la identidad de una marca ya reconocida en La Rioja.',
    cta: 'Quiero ser franquiciado',
  },

  location: {
    kicker: 'Cómo llegar',
    title: 'Te esperamos',
  },

  reviews: {
    kicker: 'Lo que dicen de nosotros',
    title: 'Reseñas de nuestros clientes',
    // TODO(cargar con el local): reemplazar por 3 reseñas reales de Google.
    items: [
      { author: 'Cliente Marhaba', rating: 5, text: 'Reseña de ejemplo — reemplazar por una reseña real de Google.' },
      { author: 'Cliente Marhaba', rating: 5, text: 'Reseña de ejemplo — reemplazar por una reseña real de Google.' },
      { author: 'Cliente Marhaba', rating: 5, text: 'Reseña de ejemplo — reemplazar por una reseña real de Google.' },
    ],
  },
}
