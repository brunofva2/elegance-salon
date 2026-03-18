import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaSnowflake, FaWifi, FaCoffee, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';
import './features.css';

const features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const itens = [
    { icon: <FaSnowflake />, title: 'Ambiente Geladinho', desc: 'Ar-condicionado sempre ligado.' },
    { icon: <FaCoffee />, title: 'Mimos & Café', desc: 'Cortesia para nossas clientes.' },
    { icon: <FaWifi />, title: 'Wi-Fi VIP', desc: 'Conectividade em todo o salão.' },
    { icon: <FaShieldAlt />, title: 'Espaço Seguro', desc: 'Tranquilidade no coração de Caxias.' }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`features-section py-5 ${isVisible ? 'animate-fade' : 'hidden-fade'}`}
    >
      <Container>
        {/* PARTE 1: Checklist de Qualidade (Agora no topo) */}
        <div className="quality-checklist mb-5">
          <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-4">
            <div className="check-item">
              <span className="check-icon">✔</span>
              <span className="check-text">Atendimento com hora marcada</span>
            </div>
            <div className="check-item">
              <span className="check-icon">✔</span>
              <span className="check-text">Profissionais experientes</span>
            </div>
            <div className="check-item">
              <span className="check-icon">✔</span>
              <span className="check-text">Resultados duradouros</span>
            </div>
          </div>
        </div>

        {/* PARTE 2: Botão de Chamada para Ação (CTA) */}
        <div className="text-center mb-5">
          <Button 
            href="https://wa.me/seunumeroaqui" 
            target="_blank" 
            className="btn-whatsapp-cta"
          >
            <FaWhatsapp className="me-2" /> 
            Agendar minha transformação agora
          </Button>
          <p className="text-muted small mt-2">Clique e fale direto com nossa recepção</p>
        </div>

        {/* PARTE 3: Mini Cards de Benefícios (Agora na base) */}
        <Row className="g-3 text-center justify-content-center">
          {itens.map((item, index) => (
            <Col xs={6} md={3} key={index}>
              <div className="feature-mini-card p-3">
                <div className="feature-icon mb-2">
                  {item.icon}
                </div>
                <h6 className="fw-bold mb-1">{item.title}</h6>
                <p className="text-muted mb-0">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default features;