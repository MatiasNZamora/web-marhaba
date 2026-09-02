import { useEffect, useState } from 'react'
import { site, type DayHours } from '@/data/site'

interface Clock {
  dayISO: number // 1 = lunes ... 7 = domingo
  minutes: number // minutos desde medianoche
}

function nowInTimezone(timezone: string): Clock {
  // Trick estándar: parsear la hora de pared de la zona horaria como si fuera local.
  const wallClock = new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))
  const jsDay = wallClock.getDay() // 0 = domingo
  const dayISO = jsDay === 0 ? 7 : jsDay
  const minutes = wallClock.getHours() * 60 + wallClock.getMinutes()
  return { dayISO, minutes }
}

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

function prevDay(dayISO: number): number {
  return dayISO === 1 ? 7 : dayISO - 1
}

function blocksForDay(dayISO: number): DayHours[] {
  return site.hours.filter((block) => block.days.includes(dayISO))
}

function isOpenAt({ dayISO, minutes }: Clock): boolean {
  if (site.closedDays.includes(dayISO)) {
    // Igual puede seguir abierto por un turno nocturno que empezó el día anterior.
    return isOvernightContinuationOpen(dayISO, minutes)
  }

  for (const block of blocksForDay(dayISO)) {
    for (const range of block.ranges) {
      const open = toMinutes(range.open)
      const close = toMinutes(range.close)
      if (close > open) {
        if (minutes >= open && minutes < close) return true
      } else {
        // rango nocturno (cruza medianoche)
        if (minutes >= open) return true
      }
    }
  }

  return isOvernightContinuationOpen(dayISO, minutes)
}

function isOvernightContinuationOpen(dayISO: number, minutes: number): boolean {
  const yesterday = prevDay(dayISO)
  if (site.closedDays.includes(yesterday)) return false

  for (const block of blocksForDay(yesterday)) {
    for (const range of block.ranges) {
      const open = toMinutes(range.open)
      const close = toMinutes(range.close)
      if (close <= open && minutes < close) return true
    }
  }
  return false
}

function nextOpeningLabel(from: Clock): string {
  const dayLabels = ['', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']

  for (let offset = 0; offset <= 7; offset++) {
    const dayISO = ((from.dayISO - 1 + offset) % 7) + 1
    if (site.closedDays.includes(dayISO)) continue

    const candidates = blocksForDay(dayISO)
      .flatMap((block) => block.ranges.map((r) => toMinutes(r.open)))
      .sort((a, b) => a - b)

    for (const openMinutes of candidates) {
      if (offset === 0 && openMinutes <= from.minutes) continue
      const hh = String(Math.floor(openMinutes / 60)).padStart(2, '0')
      const mm = String(openMinutes % 60).padStart(2, '0')
      const when = offset === 0 ? 'hoy' : offset === 1 ? 'mañana' : dayLabels[dayISO]
      return `Abre ${when} a las ${hh}:${mm}`
    }
  }
  return ''
}

export interface OpenStatus {
  isOpen: boolean
  nextOpeningLabel: string
}

export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(() => {
    const clock = nowInTimezone(site.timezone)
    return { isOpen: isOpenAt(clock), nextOpeningLabel: nextOpeningLabel(clock) }
  })

  useEffect(() => {
    const tick = () => {
      const clock = nowInTimezone(site.timezone)
      setStatus({ isOpen: isOpenAt(clock), nextOpeningLabel: nextOpeningLabel(clock) })
    }
    tick()
    const id = setInterval(tick, 60_000)
    return () => clearInterval(id)
  }, [])

  return status
}
