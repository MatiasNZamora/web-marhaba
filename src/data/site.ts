// Fuente única de datos de contacto/negocio. Ningún componente debería
// hardcodear un teléfono, dirección u horario: todo se lee de acá.

export interface DayHours {
  label: string
  /** días ISO (1=lunes ... 7=domingo) a los que aplica este bloque */
  days: number[]
  ranges: Array<{ open: string; close: string }>
}

export const site = {
  name: 'Marhaba',
  tagline: 'Comida auténticamente árabe',
  description:
    'El auténtico sabor de las comidas, postres y encanto de las maravillas del oriente, regado a los sonidos del derbake, decoración típica y mucha alegría.',

  address: {
    street: 'Benjamín de la Vega 24',
    city: 'La Rioja Capital',
    country: 'Argentina',
    // TODO(confirmar con el local): la dirección solo aparece en marhabaargentina.com,
    // no en el Google Sites. Verificar que sigue vigente.
    mapsQuery: 'Benjamín de la Vega 24, La Rioja Capital, Argentina',
  },

  contact: {
    // TODO(confirmar con el local): dos números distintos entre las fuentes.
    // marhabaargentina.com: 4434695 (fijo) · Google Sites: WhatsApp +54 9 3804 55-7799.
    // Se usa el del Google Sites por ser la fuente con datos más recientes.
    whatsapp: '5493804557799',
    whatsappDisplay: '+54 9 3804 55-7799',
    instagram: 'https://instagram.com/marhabalr/',
    instagramHandle: '@marhabalr',
    facebook: 'https://facebook.com/profile.php?id=100063850050986',
  },

  // TODO(confirmar con el local): los horarios difieren entre las dos webs.
  // marhabaargentina.com dice abierto todos los días 10–15h y 19–01h.
  // El Google Sites (más reciente) dice cerrado los martes y otro rango horario.
  // Se usa el del Google Sites hasta nueva confirmación.
  hours: [
    {
      label: 'Lunes, miércoles y jueves',
      days: [1, 3, 4],
      ranges: [
        { open: '11:00', close: '15:00' },
        { open: '20:00', close: '01:30' },
      ],
    },
    {
      label: 'Viernes a domingo',
      days: [5, 6, 7],
      ranges: [
        { open: '11:00', close: '15:00' },
        { open: '20:00', close: '02:00' },
      ],
    },
  ] satisfies DayHours[],

  // TODO(confirmar): Google Sites indica cerrado los martes.
  closedDays: [2] as number[],

  timezone: 'America/Argentina/Buenos_Aires',
} as const

export type Site = typeof site
