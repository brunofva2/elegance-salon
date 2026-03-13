import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Hours = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <img
            src="https://via.placeholder.com/800?text=Profissionais+Trabalhando"
            alt="Profissionais Trabalhando"
            className="img-fluid mb-3"
          />
          <table className="table">
            <thead>
              <tr>
                <th>Dia</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Segunda a Sexta</td>
                <td>9:00 - 18:00</td>
              </tr>
              <tr>
                <td>Sábado</td>
                <td>9:00 - 14:00</td>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>Fechado</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  )
}

export default Hours
