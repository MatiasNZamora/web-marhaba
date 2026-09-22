# 🕌 Marhaba — Comida auténticamente árabe

Sitio web oficial de **Marhaba**, restaurante de comida árabe en La Rioja Capital, Argentina. Una landing moderna, rápida y con identidad visual propia: patrones geométricos árabes, tipografías cálidas y animaciones sutiles que invitan a conocer la carta y reservar por WhatsApp.

🔗 **Demo:** [marhabaargentina.com](https://marhabaargentina.com)

## ✨ Características

- **Home con storytelling completo** — hero, especialidades destacadas (con marquee animado), experiencia del local, reseñas, ubicación y datos de franquicia.
- **Carta interactiva** — menú completo navegable por categorías.
- **Galería filtrable** — grilla de fotos con lightbox y filtros por categoría.
- **Reserva/consulta directa por WhatsApp** — botón flotante y CTAs con mensaje prellenado.
- **SEO listo para producción** — JSON-LD estructurado (`LocalBusiness`/`Restaurant`), sitemap y `robots.txt`.
- **Imágenes optimizadas** — pipeline propio que convierte y genera variantes responsive en `.webp` (400/800/1600px).
- **Horarios y contacto centralizados** — una sola fuente de verdad (`src/data/site.ts`) que evita datos hardcodeados repartidos en el código.
- **Diseño responsive y animado** — transiciones con [Motion](https://motion.dev), tarjetas con efecto tilt, reveal on scroll y componentes UI reutilizables.

## 🛠️ Stack tecnológico

| Categoría | Tecnología |
|---|---|
| Framework | [React 19](https://react.dev) + [Vite 8](https://vitejs.dev) |
| Lenguaje | TypeScript |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com) |
| Ruteo | React Router 7 |
| Animaciones | [Motion](https://motion.dev) |
| Fuentes | Fontsource (Inter, Marcellus, Amiri) |
| Linter | [Oxlint](https://oxc.rs) |
| Optimización de imágenes | [Sharp](https://sharp.pixelplumbing.com) |
| Deploy | Vercel |

## 📂 Estructura del proyecto

```
src/
├── components/
│   ├── gallery/     # Galería con filtros y lightbox
│   ├── home/        # Secciones de la landing (Hero, About, Specialties, Reviews...)
│   ├── layout/      # Header, Footer, navegación móvil, WhatsApp FAB
│   └── ui/          # Componentes reutilizables (Button, Section, TiltCard, Marquee...)
├── data/            # Fuente única de datos: sitio, menú, galería, navegación
├── hooks/           # Hooks propios (scroll lock, sección activa, motion presets...)
├── lib/             # Utilidades (formato, imágenes, SEO, WhatsApp)
├── pages/           # Home, Carta, NotFound
└── styles/          # Estilos globales

scripts/
└── fetch-images.mjs # Pipeline de optimización de imágenes (raw → webp responsive)
```

## 🚀 Cómo correrlo localmente

Requisitos: **Node.js 20+** y `npm`.

```bash
# 1. Clonar el repositorio
git clone https://github.com/MatiasNZamora/web-marhaba.git
cd web-marhaba

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

La app queda disponible en `http://localhost:5173`.

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo con HMR |
| `npm run build` | Type-check (`tsc -b`) + build de producción con Vite |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run lint` | Corre Oxlint sobre el proyecto |

## 🖼️ Pipeline de imágenes

Las imágenes originales viven en `scripts/raw/` y se procesan con `scripts/fetch-images.mjs`, que genera automáticamente variantes optimizadas en `.webp` a distintos tamaños (400px, 800px, 1600px) dentro de `public/images/`.

## 📦 Deploy

El sitio está configurado para desplegarse en **Vercel** (`vercel.json` con rewrites para SPA). Cualquier push a `main` puede conectarse a un deploy automático.

## 📄 Licencia

Proyecto privado desarrollado para Marhaba Restaurante.
