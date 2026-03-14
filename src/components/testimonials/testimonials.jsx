import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './testimonials.css' // Certifique-se de criar este arquivo ou usar o services.css

const Testimonials = () => {
  const depoimentos = [
    {
      nome: 'Ana Silva',
      texto:
        'O corte ficou impecável! O atendimento é personalizado e o ambiente muito acolhedor.',
      img: 'https://images.pexels.com/photos/4783260/pexels-photo-4783260.jpeg',
    },
    {
      nome: 'Julia Costa',
      texto:
        'Melhor coloração que já fiz. Meus fios continuam saudáveis e com um brilho incrível.',
      img: 'https://images.pexels.com/photos/7755449/pexels-photo-7755449.jpeg',
    },
    {
      nome: 'Beatriz Oliveira',
      texto:
        'Fiz meu penteado de noiva aqui e foi um sonho. Recomendo para todas as minhas amigas!',
      img: 'https://images.pexels.com/photos/7755483/pexels-photo-7755483.jpeg',
    },
  ]

  return (
    <Container className="my-5 py-5">
      <h2 className="text-center mb-5 fw-bold section-title">
        O que nossas clientes dizem
      </h2>
      <Row className="g-4">
        {depoimentos.map((d, i) => (
          <Col xs={6} md={4} key={i}>
            <div className="depoimento-card">
              <div className="card-body-custom text-center">
                <img src={d.img} alt={d.nome} className="avatar-cliente" />
                <div className="stars-rating">★★★★★</div>
                <p className="texto-depoimento fst-italic">"{d.texto}"</p>
                <h5 className="nome-cliente">{d.nome}</h5>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Testimonials
