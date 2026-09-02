import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFab } from '@/components/layout/WhatsAppFab'
import { Loader } from '@/components/layout/Loader'
import { ClipPathDefs } from '@/components/ui/ClipPathDefs'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { Home } from '@/pages/Home'
import { Carta } from '@/pages/Carta'
import { NotFound } from '@/pages/NotFound'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // Doble rAF: espera a que la ruta destino termine de montar/pintar
    // (relevante al navegar desde otra página hacia un ancla del home).
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
      })
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <ClipPathDefs />
      <SeoJsonLd />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppFab />
    </BrowserRouter>
  )
}

export default App
