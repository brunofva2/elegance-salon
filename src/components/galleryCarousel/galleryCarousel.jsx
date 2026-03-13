import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap'
import './galleryCarousel.css'

const ImageCard = ({ src, alt }) => {
  return (
    <Col md={4} xs={6}>
      <div className="galeria-card shadow-sm">
        <img src={src} className="img-fluid" alt={alt} />
      </div>
    </Col>
  )
}

const GaleriaSalao = () => {
  const [open, setOpen] = useState(false)

  // Lógica para detecção do scroll
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }, // Dispara quando 20% da seção aparece
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const visibleImages = [
    {
      src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
      alt: 'Serviço 1',
    },
    {
      src: 'https://images.pexels.com/photos/6546374/pexels-photo-6546374.jpeg',
      alt: 'Serviço 2',
    },
    {
      src: 'https://images.pexels.com/photos/7755226/pexels-photo-7755226.jpeg',
      alt: 'Serviço 3',
    },
  ]

  const hiddenImages = [
    {
      src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
      alt: 'Serviço 4',
    },
    {
      src: 'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg',
      alt: 'Serviço 5',
    },
    {
      src: 'https://images.pexels.com/photos/7755210/pexels-photo-7755210.jpeg',
      alt: 'Serviço 6',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`nossa-galeria ${isVisible ? 'animate-now' : ''}`}
    >
      <Container className="text-center">
        {/* Novo Cabeçalho da Seção */}
        <div className="section-header">
          <span className="subtitle">Portfólio & Estilo</span>
          <h2 className="section-title">Nossa Galeria</h2>
        </div>

        <Row className="g-4">
          {visibleImages.map((image, index) => (
            <ImageCard key={index} src={image.src} alt={image.alt} />
          ))}
        </Row>

        <Collapse in={open}>
          <div id="galeria-extra">
            <Row className="g-4 mt-1">
              {hiddenImages.map((image, index) => (
                <ImageCard key={index} src={image.src} alt={image.alt} />
              ))}
            </Row>
          </div>
        </Collapse>

        <Button
          onClick={() => setOpen(!open)}
          aria-controls="galeria-extra"
          aria-expanded={open}
          className="galeria-button mt-5"
        >
          {open ? 'Ver Menos' : 'Veja Mais'}
        </Button>
      </Container>
    </section>
  )
}

export default GaleriaSalao
