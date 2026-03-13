import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

const Location = () => {
  // Endereço de exemplo: Praça do Pacificador no centro de Duque de Caxias
  const destinationAddress =
    'Praça do Pacificador, Centro, Duque de Caxias - RJ'

  // Link para abrir o Google Maps externo na função de navegação
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destinationAddress)}`

  return (
    <Container className="my-5">
      <Row>
        <Col md={12}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <div className="ratio ratio-21x9 mb-3">
                {/* Iframe configurado para mostrar o Centro de Duque de Caxias */}
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.544747069502!2d-43.30870382469399!3d-22.745167679369345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9970929532822d%3A0xc6ed7693d259c258!2sPra%C3%A7a%20do%20Pacificador!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="mb-3 mb-md-0 text-start">
                  <h5 className="fw-bold mb-1">Localização</h5>
                  <p className="text-muted mb-0">{destinationAddress}</p>
                </div>
                <Button
                  variant="primary"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 fw-bold shadow-sm"
                  style={{ backgroundColor: '#0d6efd', border: 'none' }}
                >
                  Planejar Rota (Ver Tempo)
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Location
