import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css' // Certifique-se de que o arquivo CSS tem este nome

const WhatsAppButton = () => {
  // As variáveis devem estar DENTRO da função do componente
  const phoneNumber = '5511999999999' // Coloque seu número real aqui
  const message = encodeURIComponent(
    'Olá! Gostaria de agendar um horário no salão.',
  )

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      title="Agende pelo WhatsApp"
    >
      <FaWhatsapp size={35} />
    </a>
  )
}

export default WhatsAppButton
