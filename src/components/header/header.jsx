import React, { useState } from 'react'
import './header.css'
import logo from './logosalao1.png' 


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="main-header">
        <div className="custom-container">
       
          <div className="logo-section">
            <img
              src={logo}
             
              className="logo-img-main"
              alt="Logo Elegance"
            />
            </div>
            <span className="logo-text"></span>

          {/* NAVEGAÇÃO - A classe 'active' controla a visibilidade no mobile */}
          <nav className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={closeMenu}>
              Home
            </a>
            <a href="#services" className="nav-link" onClick={closeMenu}>
              Serviços
            </a>
            <a href="#gallery" className="nav-link" onClick={closeMenu}>
              Galeria
            </a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contato
            </a>
          </nav>

          {/* CONTROLS */}
          <div className="header-controls">
            <button className="btn-agendar">Quero agendar agora</button>

            {/* Menu Hambúrguer - A classe 'open' anima as barras para formar um X */}
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
            >
              <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* BANNER PRINCIPAL - ID 'home' para o scroll suave funcionar */}
      <section className="banner" id="home">
        <div className="banner-blur-bg"></div>
        <div className="banner-content">
          <h1 className="banner-title">Transforme seu visual</h1>
          <div className="divider"></div>
          <p className="banner-subtitle">Cortes, coloração e tratamentos com resultado profissional</p>
        </div>
      </section>
    </>
  )
}

export default Header
