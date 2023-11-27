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
        <img src="img/logo.jpeg" style={{ width: '100px', height: '100px' }}></img>
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
      <div className="contratar">
          <p className="texto-contratar">Descargar Guia de Aprendizaje</p>
          <div className="botones-contratar">
        
            <a href="documentos/aprender.pdf" className="descargar-curriculum bg-primary" download="aprender.pdf">Descargar(.PDF)</a>
          </div>

        </div>
    </div>


    </div>

  );
}

export default Proyectos;
