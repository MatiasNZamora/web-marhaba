// Monta una sola vez (en App.tsx) las definiciones SVG compartidas de clip-path.
// Referenciar clip-paths de un archivo .svg externo por CSS no es confiable en
// Safari, así que el <clipPath> vive en el propio documento y se referencia
// como url(#marhaba-arch).
export function ClipPathDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <clipPath id="marhaba-arch" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.42 C0,0.16 0.22,0 0.5,0 C0.78,0 1,0.16 1,0.42 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  )
}
