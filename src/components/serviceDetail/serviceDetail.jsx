import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Dropdown } from 'react-bootstrap';
import { motion } from 'framer-motion'; 
import { servicesData } from './servicesData';
import './serviceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData[id];
  const [respostas, setRespostas] = useState({});

  const enviarWhatsApp = () => {
    const numeroTelefone = "5521972924761";

    let mensagem = `*Novo Diagnóstico de Consultoria - Elegance Salon*\n\n`;
    mensagem += `*Serviço:* ${service.titulo}\n`;
    mensagem += `-----------------------------------\n`;

    Object.entries(respostas).forEach(([pergunta, resposta]) => {
      mensagem += `*${pergunta}:* ${resposta}\n`;
    });

    mensagem += `-----------------------------------\n`;
    mensagem += `Olá! Acabei de fazer meu diagnóstico no site e gostaria de agendar uma avaliação.`;

    const url = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  if (!service) return <Container className="py-5"><h2>Serviço não encontrado</h2></Container>;

  const handleSelection = (pergunta, opcao) => {
    setRespostas(prev => ({ ...prev, [pergunta]: opcao }));
  };

  // Função para trocar de serviço e resetar o formulário
  const mudarServico = (novoId) => {
    setRespostas({}); // Limpa as respostas do serviço anterior
    navigate(`/servico/${novoId}`);
  };

  return (
    <motion.section 
      className="service-detail-section py-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container>
        {/* CABEÇALHO SUPERIOR: SELETOR E VOLTAR */}
        <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-3">
          <div className="service-selector-container">
            <span className="text-muted small d-block mb-1" style={{ letterSpacing: '1px', fontWeight: '500' }}>
              SERVIÇO SELECIONADO:
            </span>
            <Dropdown onSelect={mudarServico}>
              <Dropdown.Toggle id="dropdown-custom-components" className="custom-selector-btn">
                {service.titulo}
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-selector-menu">
                {Object.entries(servicesData).map(([key, item]) => (
                  <Dropdown.Item 
                    key={key} 
                    eventKey={key} 
                    active={key === id}
                  >
                    {item.titulo}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Button variant="link" onClick={() => navigate('/')} className="text-dark back-btn p-0 mb-1">
            ← Voltar para Galeria de Serviços
          </Button>
        </div>

        <div className="golden-glass-panel p-4 p-md-5">
          <header className="text-center mb-5">
            <motion.h1 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 0.3 }}
               className="service-title-detail"
            >
              {service.titulo}
            </motion.h1>
            <p className="service-desc-detail">{service.descricao}</p>
          </header>

          <div className="consultancy-form">
            {service.perguntas.map((p, index) => (
              <motion.div 
                key={p.id} 
                className="question-group mb-5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                <h4 className="question-label">{p.label}</h4>
                <div className="options-grid">
                  {p.options.map((opt) => (
                    <button
                      key={opt}
                      className={`option-btn ${respostas[p.label] === opt ? 'selected' : ''}`}
                      onClick={() => handleSelection(p.label, opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Button 
              className="galeria-button w-100 py-3" 
              disabled={Object.keys(respostas).length < service.perguntas.length}
              onClick={enviarWhatsApp}
            >
              Enviar Diagnóstico e Agendar
            </Button>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default ServiceDetail;