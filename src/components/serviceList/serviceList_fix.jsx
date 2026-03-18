import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Button, Collapse, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom' // Importar o hook de navegação
import './services.css'
import { motion, AnimatePresence } from 'framer-motion'; // Adicione AnimatePresence




function Services() {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const navigate = useNavigate() // Instanciar o navegador

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

  // Adicionamos o campo 'id' para bater com as chaves do seu servicesData.js
  const servicosPrincipais = [
    {
      id: 'corte-feminino',
      titulo: 'Corte Feminino',
      desc: 'Visagismo aplicado para realçar os traços do seu rosto.',
      img: 'https://images.pexels.com/photos/6487890/pexels-photo-6487890.jpeg',
    },
    {
      id: 'coloracao-realista',
      titulo: 'Coloração Realista',
      desc: 'Cobertura total de fios brancos e técnicas de mechas.',
      img: 'https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg',
    },
    {
      id: 'penteados-eventos',
      titulo: 'Penteados & Eventos',
      desc: 'Estilos clássicos e modernos para momentos inesquecíveis.',
      img: 'https://images.pexels.com/photos/9941096/pexels-photo-9941096.jpeg',
    },
  ]

  const servicosExtra = [
    {
      id: 'terapia-capilar',
      titulo: 'Terapia Capilar Ozonioterapia',
      desc: 'Tratamento profundo que utiliza ozônio para combater queda...',
      img: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
      tag: 'Mais Procurado',
    },
    {
      id: 'maquiagem-hd',
      titulo: 'Maquiagem HD / Airbrush',
      desc: 'Maquiagem de alta definição com durabilidade de até 24h...',
      img: 'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg',
      tag: 'Premium',
    },
    {
      id: 'manicure-spa',
      titulo: 'Manicure & SPA dos Pés',
      desc: 'Cutilagem russa e hidratação profunda com parafina fria...',
      img: 'https://images.pexels.com/photos/7067964/pexels-photo-7067964.jpeg',
      tag: 'Relax',
    },
    {
      id: 'design-sobrancelhas',
      titulo: 'Design de Sobrancelhas',
      desc: 'Mapeamento facial completo com aplicação de henna...',
      img: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg',
      tag: 'Express',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`nossos-servicos ${isVisible ? 'animate-now' : ''}`}
    >
      <Container className="text-center">
        <div className="section-header">
          <span className="subtitle">Excelência & Cuidado</span>
          <h2 className="section-title">Nossos Serviços</h2>
        </div>

        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}> 
        <Row className="g-4">
    {servicosPrincipais.map((s, i) => (
      <Col xs={6} md={4} key={s.id}>
        <div 
          className="galeria-card cursor-pointer" 
          onClick={() => navigate(`/servico/${s.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className="img-wrapper">
            <img src={s.img} className="img-fluid" alt={s.titulo} />
          </div>
          <div className="card-body-custom">
            <h4 className="fw-bold fs-5">{s.titulo}</h4>
            <p className="text-muted small mb-0">{s.desc}</p>
          </div>
        </div>
      </Col>
    ))}
  </Row>
        </motion.div>

        <Collapse in={open}>
  <div id="servicos-extras">
    <AnimatePresence>
      {open && (
        <Row className="g-4 mt-2">
          {servicosExtra.map((s, i) => (
            <Col xs={6} md={6} lg={3} key={s.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.1 }} // Efeito cascata
              >
                <div 
                  className="galeria-card" 
                  onClick={() => navigate(`/servico/${s.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="img-wrapper position-relative">
                    <img src={s.img} className="img-fluid" alt={s.titulo} />
                    <Badge bg="dark" className="position-absolute top-0 start-0 m-2">
                      {s.tag}
                    </Badge>
                  </div>
                  <div className="card-body-custom">
                    <h5 className="fw-bold fs-6">{s.titulo}</h5>
                    <p className="extra-small text-muted mb-0">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      )}
    </AnimatePresence>
  </div>
</Collapse>

        <Button onClick={() => setOpen(!open)} className="galeria-button">
          {open ? 'Recolher Catálogo' : 'Explorar Todos os Serviços'}
        </Button>
      </Container>
    </section>
  )
}

export default Services