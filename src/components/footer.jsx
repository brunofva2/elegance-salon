import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const Footer = () => {
  return (
    // Mudamos 'bg-dark text-white' para um fundo cinza bem claro e texto escuro
    <footer
      className="pt-5 pb-4 mt-5"
      style={{
        backgroundColor: '#fdfbfb',
        color: '#333',
        borderTop: '1px solid #eee',
      }}
    >
      <Container>
        <Row className="text-center text-md-start">
          {/* COLUNA 1: SOBRE */}
          <Col md={4} lg={3} className="mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ letterSpacing: '1px', color: '#b08d57' }}
            >
              Salão Elegance
            </h5>
            <p className="small text-muted">
              Excelência em beleza e bem-estar. Nossa missão é transformar sua
              autoestima através de cuidados profissionais.
            </p>
          </Col>

          {/* COLUNA 2: HORÁRIOS */}
          <Col md={3} lg={2} className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold">Horários</h6>
            <p className="small mb-1 text-muted">Ter - Sex: 09h às 19h</p>
            <p className="small mb-1 text-muted">Sábados: 08h às 18h</p>
            <p className="small text-danger fw-bold">Dom - Seg: Fechado</p>
          </Col>

          {/* COLUNA 3: CONTATO */}
          <Col md={4} lg={3} className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold">Onde Estamos</h6>
            <p className="small text-muted">
              <FaMapMarkerAlt className="me-2" style={{ color: '#b08d57' }} />{' '}
              Rua das Flores, 123 - Centro
            </p>
            <p className="small text-muted">
              <FaWhatsapp className="me-2 text-success" /> (11) 99999-9999
            </p>
          </Col>

          {/* COLUNA 4: REDES SOCIAIS */}
          <Col md={2} lg={2} className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold">Siga-nos</h6>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="text-dark me-3 fs-4 hover-gold">
                <FaInstagram />
              </a>
              <a href="#" className="text-dark me-3 fs-4 hover-gold">
                <FaFacebook />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="mb-4 mt-5" />

        <Row className="align-items-center">
          <Col md={12} className="text-center">
            <p className="small text-muted mb-0">
              © 2026 Salão Elegance - Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>

      <style>{`
        .hover-gold:hover { color: #b08d57 !important; transition: 0.3s; }
      `}</style>
    </footer>
  )
}

export default Footer
