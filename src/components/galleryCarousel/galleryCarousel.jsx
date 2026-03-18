import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import './galleryCarousel.css'

const GaleriaSalao = () => {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // 4 FOTOS INICIAIS: Mantém 2 pares perfeitos no mobile (xs={6})
  const visibleImages = [
    { src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg', alt: 'Loiro Platinado' },
    { src: 'https://images.pexels.com/photos/6546374/pexels-photo-6546374.jpeg', alt: 'Corte Moderno' },
    { src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg', alt: 'Terapia Capilar' },
  ]
  
  // 6 FOTOS EXTRAS: Mantém 3 pares no mobile (xs={6})
  const hiddenImages = [
    { src: 'https://images.pexels.com/photos/15046690/pexels-photo-15046690.jpeg', alt: 'Penteado Noiva' },
    { src: 'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg', alt: 'Maquiagem HD' },
    { src: 'https://images.pexels.com/photos/7067964/pexels-photo-7067964.jpeg', alt: 'Manicure SPA' },
    { src: 'https://images.pexels.com/photos/7755210/pexels-photo-7755210.jpeg', alt: 'Morena Iluminada' },
    { src: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg', alt: 'Sobrancelhas' },
    { src: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg', alt: 'Tratamento' },
    { src: 'https://images.pexels.com/photos/2802805/pexels-photo-2802805.jpeg', alt: 'Corte Curto' },
  ]

  return (
    <section ref={sectionRef} className={`nossa-galeria ${isVisible ? 'animate-now' : ''}`}>
      <Container className="text-center">
        <div className="section-header">
          <span className="subtitle">Portfólio & Estilo</span>
          <h2 className="section-title">Nossa Galeria</h2>
        </div>

        {/* Grade Inicial: 4 Fotos (2 pares no mobile / 1 linha no desktop) */}
        <Row className="g-4">
          {visibleImages.map((img, index) => (
            <Col key={index} md={4} xs={6}> 
              <motion.div 
                className="galeria-card shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={img.src} className="img-fluid" alt={img.alt} />
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Grade Extra: 6 Fotos (3 pares no mobile) */}
        <Collapse in={open}>
          <div id="galeria-extra">
            <AnimatePresence>
              {open && (
                <Row className="g-4 mt-2">
                  {hiddenImages.map((img, index) => (
                    <Col key={index + 4} md={4} xs={6}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="galeria-card shadow-sm"
                      >
                        <img src={img.src} className="img-fluid" alt={img.alt} />
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              )}
            </AnimatePresence>
          </div>
        </Collapse>

        <Button
          onClick={() => setOpen(!open)}
          className="galeria-button mt-5"
        >
          {open ? 'Ver Menos' : `Veja Mais (+${hiddenImages.length})`}
        </Button>
      </Container>
    </section>
  )
}

export default GaleriaSalao