/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../css/sobre nosotros.css';

function SobreNosotros() {
  return (
    <div id="sobre-mi" className="container secciones">
      <div className="titulos">
        <div className="icono">
          <img src="img/logo.jpeg" style={{ width: '100px', height: '100px' }}></img>
        </div>
        <div className="">
          <p className="texto-titulo">
            -SOBRE
            <span className="mi">NOSOTROS</span>
            - 
          </p>
        </div>

      </div>

      <div className="row informacion">
        <div className="col-lg-4 foto">
          <img src="img/perfil.jpeg" alt="perfil" />
          <div className="sobre">
            <p className="nombre">Integrantes de ISYK</p>
            <p className="puesto">Programadores: Mariana David, Ronny, William</p>
          </div>
        </div>

        <div className="col-lg-4">
          <p className="sub">Pagina Web de Ciberseguridad</p>
          <p className="texto-largo">Brinda información, marcos y estrategias de ciberseguridad.</p>
          <p className="texto-largo">Proporcionará recursos, guías y listas de verificación de seguridad.</p>
          <p className="texto-largo">Asegurando una solución completa y efectiva para abordar la creciente amenaza de ciberataques y la falta de conciencia en ciberseguridad</p>
        </div>
        <div className="col-lg-4">
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
            </span>
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              <i className="fa-solid fa-phone" />
              {' '}
              telefono:
            </span>
            {' '}
            +502 30110780
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              <i className="fa-solid fa-envelope" />
              {' '}
              correo electronico:
            </span>
            {' '}
            natydaso3@hotmail.com
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              <i className="fa-brands fa-linkedin" />
              {' '}
              linkedin:
            </span>
            {' '}
            https://www.linkedin.com/feed/
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              <i className="fa-brands fa-github" />
              {' '}
              github:
            </span>
            {' '}
            https://github.com/
          </p>
        </div>

      </div>

    </div>

  );
}

export default SobreNosotros;
