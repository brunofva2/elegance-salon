// src/components/serviceDetail/servicesData.js

export const servicesData = {
  'corte-feminino': {
    titulo: 'Corte & Visagismo',
    descricao: 'Transformação personalizada para realçar sua beleza natural.',
    perguntas: [
      { id: 'biotipo', label: 'Formato do Rosto', options: ['Redondo', 'Oval', 'Quadrado', 'Coração'] },
      { id: 'textura', label: 'Textura do Fio', options: ['Liso', 'Ondulado', 'Cacheado', 'Crespo'] },
      { id: 'objetivo', label: 'Desejo Principal', options: ['Mudar o Visual', 'Apenas Pontas', 'Ganhar Volume'] }
    ]
  },
  'coloracao-realista': {
    titulo: 'Coloração Realista',
    descricao: 'Técnicas avançadas para cobertura e iluminação sofisticada.',
    perguntas: [
      { id: 'historico', label: 'Histórico Químico', options: ['Natural', 'Já Colorido', 'Com Progressiva'] },
      { id: 'brancos', label: 'Fios Brancos', options: ['Poucos', 'Moderados', 'Mais de 50%'] },
      { id: 'tom', label: 'Tom Desejado', options: ['Morena Iluminada', 'Loiro Global', 'Ruivo/Acobreado'] }
    ]
  },
  'terapia-capilar': {
    titulo: 'Terapia Capilar & Ozonioterapia',
    descricao: 'Saúde avançada do couro cabeludo aos fios.',
    perguntas: [
      { id: 'problema', label: 'Principal Incômodo', options: ['Queda', 'Oleosidade', 'Ressecamento', 'Caspa/Sensibilidade'] },
      { id: 'frequencia', label: 'Lavagens por semana', options: ['Diária', '2 a 3 vezes', '1 vez'] }
    ]
  },
  'penteados-eventos': {
    titulo: 'Penteados & Eventos',
    descricao: 'Produção completa para momentos inesquecíveis.',
    perguntas: [
      { id: 'evento', label: 'Tipo de Evento', options: ['Casamento', 'Madrinha', 'Formatura', 'Social'] },
      { id: 'estilo', label: 'Estilo', options: ['Preso', 'Semi-preso', 'Solto'] }
    ]
  },
  // NOVOS SERVIÇOS EXTRAS ABAIXO:
  'maquiagem-hd': {
    titulo: 'Maquiagem HD / Airbrush',
    descricao: 'Alta definição e durabilidade para eventos especiais.',
    perguntas: [
      { id: 'pele', label: 'Tipo de Pele', options: ['Seca', 'Oleosa', 'Mista'] },
      { id: 'estilo-make', label: 'Estilo de Make', options: ['Natural', 'Glamour', 'Clássica'] },
      { id: 'airbrush', label: 'Deseja Airbrush?', options: ['Sim (Mais durabilidade)', 'Não (Tradicional)'] }
    ]
  },
  'manicure-spa': {
    titulo: 'Manicure & SPA dos Pés',
    descricao: 'Cuidado profundo e estética impecável para suas mãos e pés.',
    perguntas: [
      { id: 'procedimento', label: 'Escolha o Serviço', options: ['Mão e Pé', 'Apenas Mão', 'Apenas Pé', 'SPA Completo'] },
      { id: 'esmalte', label: 'Tipo de Esmaltação', options: ['Comum', 'Gel/Semi-permanente', 'Francesinha'] }
    ]
  },
  'design-sobrancelhas': {
    titulo: 'Design de Sobrancelhas',
    descricao: 'Mapeamento facial para um olhar marcante.',
    perguntas: [
      { id: 'tecnica', label: 'Técnica Desejada', options: ['Apenas Design', 'Design com Henna', 'Brown Lamination'] },
      { id: 'pinça', label: 'Preferência', options: ['Pinça', 'Linha (Egípcia)'] }
    ]
  }
};