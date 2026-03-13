import React from 'react'
// 1. CSS Externo primeiro
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// 2. CSS Global

// 3. Importação dos componentes
import Header from './components/header/header'
import WhatsAppButton from './components/whatsAppButton/WhatsAppButton'
import GalleryCarousel from './components/galleryCarousel/galleryCarousel'
import ServiceList from './components/serviceList/serviceList_fix.jsx'
import Testimonials from './components/testimonials/testimonials'
import Location from './components/location'
import Hours from './components/Hours'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />

      <WhatsAppButton />
      <main>
        {/* O ideal seria ter o Banner aqui antes do carrossel, como discutimos */}
        <GalleryCarousel />
        <ServiceList />
        <Testimonials />

        <Location />
      </main>

      <Footer />
    </div>
  )
}

export default App
