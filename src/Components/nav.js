/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import { left } from '@popperjs/core';
import React, { useState, useEffect } from 'react';
import '../css/nav.css';

function Nav() {
  const [ubicacion, enviarPosicion] = useState('navbar navbar-expand-lg fixed-top custom-nav navbar-dark');
  const [showSubMenu, setShowSubMenu] = useState(false);


  const handleSubMenuItemClick = (e) => {
    e.stopPropagation();
    setShowSubMenu(false);
  };

  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };


  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 50) {
        enviarPosicion('navbar navbar-expand-lg fixed-top custom-nav navbar-dark movido');
      } else {
        enviarPosicion('navbar navbar-expand-lg fixed-top custom-nav navbar-dark');
      }

    });

    const secciones = document.querySelectorAll('.secciones');

    const verificador = (entries) => {
      entries.forEach((entri) => {
        if (entri.isIntersecting) {
          document.querySelector('.navbar-nav a.active').classList.remove('active');

          const id = entri.target.getAttribute('id');

          const link = document.querySelector(`.navbar-nav a[href="#${id}"]`);

          link.classList.add('active');
        }
      });
    };

    // const observer = new IntersectionObserver(verificador, { rootMargin: '-50% 0px -50% 0px' });

    // secciones.forEach((seccion) => {
    // observer.observe(seccion);
    // });
  }, []);

  return (
    <nav className={ubicacion}>
      <div className="container">
        <a className="navbar-brand" href="/" style={{ fontSize: '40px', fontWeight: '700' }}></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={handleSubMenuToggle}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" data-testid="test-nav" id="navbarNavDropdown">
          <ul className="navbar-nav" style={{ margin: '0 0 0 auto' }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#contenedor-carousel">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre-Nosotros">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Aprendizaje</a>
            </li>
            <li className="nav-item nav-item-incidentes">
              <div className="nav-link" onClick={handleSubMenuToggle}>Incidentes</div>
              {showSubMenu && (
                <ul className="submenu">
                  <li className="nav-item">
                    <a className="nav-link" href="#ransomware" onClick={handleSubMenuItemClick}>Ransomware</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#phishing" onClick={handleSubMenuItemClick}>Phishing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#errorhumano" onClick={handleSubMenuItemClick}>Error Humano</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#ingenieriaSocial" onClick={handleSubMenuItemClick}>Ingenieria Social</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;