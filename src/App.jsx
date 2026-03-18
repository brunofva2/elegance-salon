import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// 1. CSS Externo primeiro
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// 2. CSS Global

// 3. Importação dos componentes

import Header from './components/header/header'
import WhatsAppButton from './components/whatsAppButton/WhatsAppButton.jsx'
import GalleryCarousel from './components/galleryCarousel/galleryCarousel.jsx'
import ServiceList from './components/serviceList/serviceList_fix.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import Location from './components/location.jsx'
import Hours from './components/Hours'
import Footer from './components/footer.jsx'
import Features from './components/features/Features.jsx'
import ServiceDetail from './components/serviceDetail/serviceDetail'


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}





function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <WhatsAppButton />
        
        <Routes>
          {/* ROTA DA HOME: Agrupa todas as suas seções atuais */}
          <Route path="/" element={
            <main>
              <GalleryCarousel />
              <ServiceList />
              <Features />
              <Testimonials />
              <Location />
            </main>
          } />

          {/* ROTA DE DETALHES: Abre a consultoria baseada no ID do serviço */}
          <Route path="/servico/:id" element={<ServiceDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;