/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../css/proyectos.css';

function Proyectos() {
  return (
    <div data-testid="test-proyects" id="proyectos" className="secciones">
      <div className="titulos">
        <div className="icono">
          <i className="fa-solid fa-briefcase fa-2x" />
        </div>
        <div className="">
          <p className="texto-titulo">
            -SECCIÓN
            <span className="mi"> APRENDIZAJE</span>
            -
          </p>
        </div>

      </div>

      <div className="cursos-ciberseguridad">
      <h2>Cursos Gratuitos de Ciberseguridad</h2>
      <ul>
        <li><a href="enlace_al_curso_1" target="_blank" rel="noopener noreferrer">Curso 1: Introducción a la Ciberseguridad</a></li>
        <li><a href="enlace_al_curso_2" target="_blank" rel="noopener noreferrer">Curso 2: Fundamentos de Ransomware</a></li>
        <li><a href="enlace_al_curso_3" target="_blank" rel="noopener noreferrer">Curso 3: Prevención de Phishing</a></li>
        {/* Agrega más cursos según sea necesario */}
      </ul>
    </div>


    </div>

  );
}

export default Proyectos;
